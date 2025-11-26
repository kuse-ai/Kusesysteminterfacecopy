

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  "viteFinal": async (config) => {
    const path = await import('path');
    const { fileURLToPath } = await import('url');
    const currentDir = path.dirname(fileURLToPath(import.meta.url));

    config.define = {
      ...config.define,
      global: 'globalThis',
      'process.env': JSON.stringify(process.env),
      'process.browser': JSON.stringify(true),
      'process.version': JSON.stringify(process.version)
    };

    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '@': path.resolve(currentDir, '../src'),
      },
    };

    return config;
  }
};
export default config;