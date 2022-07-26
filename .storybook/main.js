const path = require("path")

const toPath = (_path) => path.join(process.cwd(), _path)

module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@chakra-ui/storybook-addon'],
  framework: '@storybook/react',
  features: {
    emotionAlias: false,
  },
  core: {
    builder: 'webpack5',
  },
  webpackFinal: (config) => {
    // config.resolve.alias["@emotion/core"] = toPath("node_modules/@emotion/react")
    // config.resolve.alias["emotion-theming"] = toPath("node_modules/@emotion/react")
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    })
    config.resolve.modules.push(`${process.cwd()}/src`);

    return config;
  },
};
