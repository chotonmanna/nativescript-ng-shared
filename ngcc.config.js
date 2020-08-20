module.exports = {
  packages: {
    "@nativescript/angular": {
      entryPoints: {
        ".": {
          override: {
            main: "./index.js",
            typings: "./index.d.ts",
          },
          ignoreMissingDependencies: true,
        }
      },
      ignorableDeepImportMatchers: [
        /tns-core-modules\//,
        /@nativescript\/core\//,
      ]
    },
    "nativescript-ui-dataform": {
      entryPoints: {
        "angular": {
          override: {
            main: "./dataform-directives.js",
            typings: "./dataform-directives.d.ts",
          },
          ignoreMissingDependencies: true,
        }
      }
    },
    "nativescript-ui-sidedrawer": {
      entryPoints: {
        "angular": {
          override: {
            main: "./side-drawer-directives.js",
            typings: "./side-drawer-directives.d.ts",
          },
          ignoreMissingDependencies: true,
        }
      },
      ignorableDeepImportMatchers: [
        /tns-core-modules\//,
        /@nativescript\/core\//,
        /@nativescript\/angular\//
      ]
    },
  }
};
