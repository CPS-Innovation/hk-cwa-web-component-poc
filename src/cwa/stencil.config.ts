import type { Config } from '@stencil/core'; 
import  image  from '@rollup/plugin-image'
export const config: Config = {
  
  namespace: 'cwa',
  plugins: [
    image()
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
