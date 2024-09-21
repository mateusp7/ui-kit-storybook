import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview, ReactRenderer } from "@storybook/react";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    layout: "centered",
  },
  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "dark",
    }),
  ],
};

export default preview;
