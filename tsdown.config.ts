import { defineConfig } from "tsdown";

export default defineConfig({
    entry: [
        "./src/extension.ts",
    ],
    outDir: "./out",
    clean: true,
    minify: true,
    format: ["cjs"],
    shims: false,
    dts: false,
    external: ["vscode"],
    outExtensions: () => {
        return {
            js: ".js",
        };
    },
});