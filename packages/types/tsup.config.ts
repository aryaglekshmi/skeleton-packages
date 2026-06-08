// tsup is a bundler that compiles TypeScript into JavaScript for publishing
import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],  // the starting file to bundle
    format: ['esm'],          // output as ES module (modern JS format)
    dts: true,                // generate .d.ts type definition files
    clean: true,              // delete the dist folder before each build
    outDir: 'dist'            // folder where the built files go
});
