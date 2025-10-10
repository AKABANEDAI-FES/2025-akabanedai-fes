import type { StorybookConfig } from "@storybook/nextjs-vite";
import svgr from "vite-plugin-svgr";

const svgRE = /^virtual:next-image\?imagePath=/;

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
  ],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  staticDirs: ["../public"],
  viteFinal: async (config) => {
    config.plugins = config.plugins || [];
    // see: https://github.com/storybookjs/storybook/issues/32354#issuecomment-3259939763
    config.plugins.push({
      name: "svgr-fix",
      async transform(_, id) {
        if (id.endsWith(".svg") && svgRE.test(id)) {
          const plugin = svgr({ include: "**/*.svg" });
          return await plugin.load(id.replace(svgRE, ""));
        }
      },
    });

    return config;
  },
};
export default config;
