const {addLessLoader, addWebpackAlias, fixBabelImports, override} = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addWebpackAlias({
    "css-animation/es/Event": "css-animation/dist-src/Event",
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#52c51a",
    },
  })
);