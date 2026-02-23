const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfe",

  exposes: {
    "./Component":
      "./projects/mfe/src/app/test-component/test-component.component.ts",
    "./Routes": "./projects/mfe/src/app/domains/routes.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
