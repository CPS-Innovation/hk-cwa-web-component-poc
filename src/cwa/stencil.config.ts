import type { Config } from '@stencil/core';
import image from '@rollup/plugin-image';
import { sass } from '@stencil/sass';
export const config: Config = {
  namespace: 'cwa',
  plugins: [
    image(),
    sass({
      quietDeps: true,
      silenceDeprecations: ['mixed-decls', 'slash-div', 'import'],
    }),
  ],
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
