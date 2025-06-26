const typescript = require("rollup-plugin-typescript2");
const pkg = require("./package.json");

module.exports = {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main, // dist/index.js
      format: "cjs", // CommonJS (Node.js)
      sourcemap: true,
      exports: "named",
    },
    {
      file: pkg.module, // dist/index.esm.js
      format: "esm", // ES Modules (moderne)
      sourcemap: true,
      exports: "named",
    },
  ],
  plugins: [
    typescript({
      typescript: require("typescript"),
      tsconfig: "./tsconfig.json",
    }),
  ],
  external: [],
};
