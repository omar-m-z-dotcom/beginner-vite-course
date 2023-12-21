// export default {}; // similar to launching `vite` without user defined configs

// export default {
//     base: "/vite/",
// }// typing configs in this way will not give you any intellisense

import {
    defineConfig,
    // loadEnv
} from 'vite';

export default defineConfig(
    // ({ command, mode, isSsrBuild, isPreview }) => {
    //     console.log(command, mode, isSsrBuild, isPreview);
    //     if (mode === "development") {
    //         return {
    //             base: "/vite-dev"
    //         }
    //     } else if (mode === "production") {
    //         return {
    //             base: "/vite-prod"
    //         }

    //     }
    //     return {}
    // },
    // { base: "/vite" },// this is the default config object that is returned if no other config object is returned from the other config objects
    // async ({ command, mode }) => {
    //     const data = await someAsyncFunction();// get some config data from a remote server
    //     return {
    //         base: data.base // for example, the base url for the app
    //     }
    // },
    // ({ command, mode }) => {
    //     const env = loadEnv(mode, process.cwd(), "VITE_");
    //     console.log(env);
    //     return {};
    // },
    {
        // clearScreen: false,
        // envPrefix: ["APP_", "VITE_"],
        // css: {
        //     devSourcemap: true,// default is true and it helps in knowing the source of the applied styles in the browser that was generated from the original source code ie. the scss file
        // },
        // logLevel: "info",// default is info and it can be set to silent, error, warn, info or debug used to control the amount of information that is logged to the console
        server: {// used to configure the vite dev server
            port: 3000,// default is 3000 and it can be set to any port number
            host: "localhost",// default is localhost and it can be set to any host name
            strictPort: true,// default is false and it can be set to true or false if set to true, vite will fail to start if the port is already in use by another process else it will start on the next port
            open: true,// default is true and it can be set to true or false if set to true, vite will open the browser when the dev server starts and it will open the fil
        },
        // build: {
        //     target: "esnext",// default is esnext and it can be set to esnext or es2015
        //     polyfillDynamicImport: false,// default is false and it can be set to true or false if set to true, vite will automatically polyfill dynamic imports for browsers that do not support it
        //     cssCodeSplit: true,// default is true and it can be set to true or false if set to true, vite will automatically split css into small chunks and lazy load them as needed
        //     minify: "terser",// default is terser and it can be set to terser or esbuild
        //     rollupOptions: {// used to configure rollup
        //         output: {// used to configure rollup output
        //             manualChunks: {// used to configure rollup manual chunks
        //                 vendor: ["lodash", "moment"],// used to manually split lodash and moment into a separate chunk
        //             }
        //         }
        //     },
        //     sourcemap: true,// default is true and it can be set to true or false if set to true, vite will generate sourcemaps for production builds
        //     manifest: true,// default is true and it can be set to true or false if set to true, vite will generate a manifest.json file for production builds
        //     outDir: "dist",// default is dist and it can be set to any directory name
        //     assetsDir: "assets",// default is assets and it can be set to any directory name
        //     cssCodeSplit: true,// default is true and it can be set to true or false if set to true, vite will automatically split css into small chunks and lazy load them as needed
        //     emptyOutDir: true,// default is true and it can be set to true or false if set to true, vite will empty the outDir directory before building
        //     chunkSizeWarningLimit: 500,// default is 500 units in kb and it can be set to any number of units in kb
        //     brotliSize: true,// default is true and it can be set to true or false if set to true, vite will generate brotli compressed files for production builds
        // },
        // preview: {// used to configure the vite preview server
        // port: 3000,// default is 3000 and it can be set to any port number
        // host: "localhost",// default is localhost and it can be set to any host name
        // strictPort: true,// default is false and it can be set to true or false if set to true, vite will fail to start if the port is already in use by another process else it will start on the next port
        // },
        // envDir: "./env",// used to specify the directory where the environment variables are stored
    },
)