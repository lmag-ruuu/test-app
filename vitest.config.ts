/// <reference types="vitest"/>
/// <reference types="vite/client"/>
import {
  defineConfig,
  UserConfig as VitestUserConfigInterface,
} from "vitest/config";

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTest.ts"],
  },
};

export default defineConfig({
  test: vitestConfig.test,
});
