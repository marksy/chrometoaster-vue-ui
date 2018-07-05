
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
  const contents = `import Vue from 'vue';
import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import ${componentName} from './';

Vue.config.productionTip = false

describe('<${componentFolderName} />', () => {
  const Component = Vue.extend(${componentName})
  it('does not crash', () => {
    const vm = new Component().$mount()
    expect(vm.$el.textContent).toMatch(/${componentName}/)
  });
  it('allows props to be passed in', () => {
    const vm = new Component({ propsData: {
      className: '${componentFolderName}--alt'
    }}).$mount();
    expect(vm.$el.classList).toContain('${componentFolderName}--alt');
  });
  it('matches wrapper snapshot', () => {
    const renderer = createRenderer();
    const wrapper = shallow(Component);
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
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

// write index.vue file
const indexScript = () => {
  const filename = 'index.vue';
  const contents = `// TODO INSERT A COMMENT REFERENCE TO EXTERNAL URL IF POSSIBLE

<template>
  <p class="${componentFolderName}" :class="className"><slot>${componentName}</slot></p>
</template>

<script>
  export default {
    name: '${componentName}',
    props: {
      className: {
        type: String,
        default: '',
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
  .${componentFolderName}--alt {
    border: 1px solid rgba(255,0,0,1);
    background-color: rgba(255,0,0,0.1);
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
    testScript();
    storiesScript();
    indexScript();
    console.log(`✅  The component '${componentName}' was created successfully`);
  });
  return false;
};

init();
