const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],

  /**
   * Webpack customization is not done by overriding but appending extra
   * configuration to default configuration
   */
  webpackFinal: async (config, { configType }) => {
    // To support SCSS
    config.module.rules.push({
      test: /\.scss$/,
      use: ["vue-style-loader", "style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });

    // Add "@" path alias resolution
    // https://github.com/storybookjs/storybook/issues/11989#issuecomment-674098096
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        "@": path.resolve(__dirname, "../src"),
      },
    };

    // Return the altered config
    return config;
  },
};
