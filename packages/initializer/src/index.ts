import fs from 'fs-extra';
import path from 'path';
import semver from 'semver';
import * as recast from 'recast';
import { version as cliVersion } from '@codeshift/cli/package.json';
import { version as utilVersion } from '@codeshift/utils/package.json';
import { version as testUtilVersion } from '@codeshift/test-utils/package.json';

const TEMPLATE_PATH = path.join(__dirname, '..', 'template');

export function getPackageJson(packageName: string, version = '0.0.0') {
  return JSON.stringify(
    {
      name: packageName,
      version: version,
      license: 'MIT',
      main: 'dist/codeshift.config.js',
      scripts: {
        dev: 'codeshift',
        build: 'tsc --build',
        test: 'jest --watch',
        validate: 'codeshift validate .',
      },
      dependencies: {
        '@codeshift/utils': `^${utilVersion}`,
      },
      devDependencies: {
        '@codeshift/cli': `^${cliVersion}`,
        '@codeshift/test-utils': `^${testUtilVersion}`,
        '@types/node': '^16.11.0',
        '@types/jest': '^26.0.15',
        jest: '^26.6.0',
        jscodeshift: '^0.13.1',
        prettier: '^1.16.4',
        'ts-jest': '^26.4.4',
        typescript: '^4.3.5',
      },
    },
    null,
    2,
  );
}

function getNpmIgnore() {
  return `src/
codemods/
**/__test__
**/*.spec.(ts|js)
.vscode
jest.config.js
`;
}

function getConfig(packageName: string, transform?: string, preset?: string) {
  return `module.exports = {
  maintainers: [],
  targets: [],
  description: 'Codemods for ${packageName}',
  transforms: {${
    transform
      ? `'${transform}': require.resolve('./${transform}/transform'),`
      : ''
  }},
  presets: {${
    preset ? `'${preset}': require.resolve('./${preset}/transform'),` : ''
  }},
};
`;
}

function updateConfig(
  targetPath: string,
  packageName: string,
  transformName: string,
  type: 'version' | 'preset',
  isReduced = false,
) {
  const configPath = path.join(targetPath, 'codeshift.config.js');
  const source = fs.readFileSync(configPath, 'utf8');
  const ast = recast.parse(source);
  const b = recast.types.builders;
  const key = type === 'version' ? 'transforms' : 'presets';

  recast.visit(ast, {
    visitProperty(propertyPath) {
      // @ts-ignore
      if (propertyPath.node.key.name !== key) return false;
      // @ts-ignore
      const properties = propertyPath.node.value.properties;
      // @ts-ignore
      properties.forEach(property => {
        if (property.key.value === transformName) {
          throw new Error(
            `Transform for ${packageName} ${transformName} already exists`,
          );
        }
      });

      const transformPath = `./${
        !isReduced ? 'codemods/' : ''
      }${transformName}/transform`;

      properties.push(
        b.property(
          'init',
          b.stringLiteral(transformName),
          b.callExpression(
            b.memberExpression(
              b.identifier('require'),
              b.identifier('resolve'),
            ),
            [b.stringLiteral(transformPath)],
          ),
        ),
      );

      return false;
    },
  });

  fs.writeFileSync(
    configPath,
    recast.prettyPrint(ast, {
      quote: 'single',
      trailingComma: true,
      tabWidth: 2,
    }).code,
  );
}

export function initConfig(packageName: string, targetPath = './') {
  const configPath = path.join(targetPath, 'codeshift.config.js');

  if (!fs.existsSync(configPath)) {
    fs.writeFileSync(configPath, getConfig(packageName));
  }
}

export function initDirectory(
  packageName: string,
  targetPath = './',
  isReduced = false,
) {
  fs.copySync(
    path.join(TEMPLATE_PATH, isReduced ? 'codemods' : ''),
    targetPath,
    {
      filter: src => !src.includes('codemods/codemod'),
    },
  );

  if (!isReduced) {
    fs.writeFileSync(
      path.join(targetPath, 'package.json'),
      getPackageJson(packageName),
    );

    fs.writeFileSync(path.join(targetPath, '.npmignore'), getNpmIgnore());

    const readmeFilePath = path.join(targetPath, 'README.md');
    const readmeFile = fs
      .readFileSync(readmeFilePath, 'utf8')
      .replace('<% packageName %>', packageName);

    fs.writeFileSync(readmeFilePath, readmeFile);
  }

  initConfig(packageName, targetPath);
}

export function initTransform(
  packageName: string,
  id: string,
  type: 'version' | 'preset',
  targetPath = './',
  isReduced = false,
) {
  if (type === 'version' && !semver.valid(id)) {
    throw new Error(`Provided version ${id} is not a valid semver version`);
  }

  const transformPath = path.join(targetPath, !isReduced ? 'codemods' : '', id);

  if (fs.existsSync(transformPath)) {
    throw new Error(`Codemod for ${type} "${id}" already exists`);
  }

  const codemodTemplateDestinationPath = path.join(
    targetPath,
    !isReduced ? 'codemods' : '',
    'codemod',
  );

  fs.copySync(
    path.join(TEMPLATE_PATH, 'codemods', 'codemod'),
    codemodTemplateDestinationPath,
  );
  fs.renameSync(codemodTemplateDestinationPath, transformPath);

  const testFilePath = path.join(transformPath, 'transform.spec.ts');
  const testFile = fs
    .readFileSync(testFilePath, 'utf8')
    .replace(new RegExp('<% packageName %>', 'g'), packageName)
    .replace(new RegExp('<% seperator %>', 'g'), type === 'version' ? '@' : '#')
    .replace(new RegExp('<% transform %>', 'g'), id || '');

  fs.writeFileSync(testFilePath, testFile);

  const readmeFilePath = path.join(transformPath, 'README.md');
  const readmeFile = fs
    .readFileSync(readmeFilePath, 'utf8')
    .replace(new RegExp('<% packageName %>', 'g'), packageName)
    .replace(new RegExp('<% seperator %>', 'g'), type === 'version' ? '@' : '#')
    .replace(new RegExp('<% transform %>', 'g'), id || '');

  fs.writeFileSync(readmeFilePath, readmeFile);

  updateConfig(targetPath, packageName, id || '', type, isReduced);
}
