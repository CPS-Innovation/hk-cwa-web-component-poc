import type { Config } from '@stencil/core';
import image from '@rollup/plugin-image';
import { sass } from '@stencil/sass';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { createFilter } from '@rollup/pluginutils';

const faviconFilter = createFilter(null, ['node_modules/govuk-frontend/govuk/assets/images/favicon.ico']);

export const config: Config = {
  namespace: 'cwa',
  rollupPlugins: {
    before: [
      commonjs({
        include: 'node_modules/**',
        exclude: [`/${faviconFilter}/`]
      }),
      image(),
    ],
    after: []
  },
  plugins: [
    
    
    // resolve({
    //   rootDir: '/',
    // }),
    sass({
      quietDeps: true,
      silenceDeprecations: ['import'],
    }),
  ],

  // exclude: ',
  // dynamicRequireTargets: [
  //   // exclude files that are known to not be required dynamically, this allows for better optimizations
  //   '!node_modules/govuk-frontend/govuk/assets/images/favicon.ico',
  // ],

  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: 'shell',
  },
};
