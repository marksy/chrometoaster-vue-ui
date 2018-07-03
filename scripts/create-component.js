
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp-promise');
// const { version } = require('../lerna.json');
const version = '0.0.1';

const componentFolderName = process.argv[2];
const componentName = `${componentFolderName.charAt(0).toUpperCase()}${componentFolderName.slice(1).replace(/-([a-z])/g, g => g[1].toUpperCase())}`;

const folderName = `./src/components/${componentFolderName}`;

const writeFile = (filename, contents) => {
  const pathName = path.join(filename === 'package.json' ? folderName : `${folderName}/`, filename);
  fs.writeFile(pathName, `${contents}`, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log(`Created file: ${pathName}`);
    return false;
  });
  return false;
};

// write test.js file
const testScript = () => {
  const filename = 'test.js';
  const contents = `import Vue from 'vue'
import ${componentName} from './';

Vue.config.productionTip = false

describe('<${componentFolderName} />', () => {
  const Component = Vue.extend(${componentName})
  it('does not crash', () => {
    const vm = new Component().$mount()
    expect(vm.$el.textContent).toMatch(/${componentName}/)
  });
  it('matches wrapper snapshot', () => {
    expect(Component).toMatchSnapshot('Component mount');
  });
});
`;
  writeFile(filename, contents);
};

// write stories.js file
const storiesScript = () => {
  const filename = 'stories.js';
  const contents = `import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import ${componentName} from '.';

 storiesOf('${componentName}', module)
  .add('default', () => ({
    components: { ${componentName} },
    template: '<${componentFolderName.toLocaleLowerCase()} />',
  }));
`;
  writeFile(filename, contents);
};

// write example.js file
const exampleScript = () => {
  const filename = 'example.js';
  const contents = `import Vue from 'vue';
import ${componentName} from '.';

export default () => (<${componentFolderName.toLocaleLowerCase()}>${componentName} example</${componentFolderName.toLocaleLowerCase()}>);
`;
  writeFile(filename, contents);
};

// write index.vue file
const indexScript = () => {
  const filename = 'index.vue';
  const contents = `// TODO INSERT A COMMENT REFERENCE TO EXTERNAL URL IF POSSIBLE

<template>
  <p :class="className"><slot>${componentName}</slot></p>
</template>

<script>
  export default {
    props: {
      className: {
        type: String,
        default: '${componentFolderName}',
      },
    },
  }
</script>

<style scoped>
  .${componentFolderName} {
    font-size: 12px;
    font-family: Arial, sans-serif;
    border: 1px solid rgba(0,0,0,1);
    background-color: rgba(0,0,0,0.1);
    padding: 12px;
    display: inline-block;
  }
</style>
`;
  writeFile(filename, contents);
};

const init = () => {
  if (fs.existsSync(path.join(folderName))) {
    console.log(`❗️❗️ The component '${componentName}' already exists ❗️❗️
Please use a different name or delete the existing folder 🆗`);
    return false;
  }
  mkdirp(`${folderName}/`).then(() => {
    // packageJson();
    testScript();
    storiesScript();
    exampleScript();
    indexScript();
    console.log(`✅  The component '${componentName}' was created successfully`);
  });
  return false;
};

init();
