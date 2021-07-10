import {nodeResolve} from '@rollup/plugin-node-resolve';
import includePaths from 'rollup-plugin-includepaths';

export default {
  input: './esm/index.js',
  plugins: [
    includePaths({
      include: {
        '@ungap/create-content': 'node_modules/@ungap/degap/create-content.js'
      },
    }),
    nodeResolve()
  ],
  
  output: {
    esModule: false,
    exports: 'named',
    file: './index.js',
    format: 'iife',
    name: 'uhtml'
  }
};
