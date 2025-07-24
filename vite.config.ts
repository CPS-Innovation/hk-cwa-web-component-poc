/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
const componentDir = path.resolve(__dirname, "src", "components");
const entries: Record<string, string> = {};
fs.readdirSync(componentDir).forEach(folder => {
  const entryPath = path.join(componentDir, folder, `${folder}.tsx`);
  if (fs.existsSync(entryPath)) {
    // Preserve relative paths like: BannerComponent/BannerComponent.tsx
    const relativePath = path.relative(path.resolve(__dirname, "src"), entryPath);
    entries[relativePath] = entryPath;
  }
});
export default defineConfig({
  plugins: [react()],
  css: {
    modules: false,
    preprocessorOptions: {
      scss: {
        quietDeps: true
      }
    }
  },
  build: {
    target: "esnext",
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: entries,
      output: {
        preserveModules: true,
        preserveModulesRoot: path.resolve(__dirname, "src"),
        format: "es",
        entryFileNames: "[name].js".replace(/\.tsx$/, ""),
        chunkFileNames: "shared/[name]-[hash].js",
        assetFileNames: "[name][extname]"
      },
      preserveEntrySignatures: "strict"
    }
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: 'playwright',
          instances: [{
            browser: 'chromium'
          }]
        },
        setupFiles: ['.storybook/vitest.setup.ts']
      }
    }]
  }
});