const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");
const helpers = require("./webpack.helpers.js");
const WBMetaJsonGenerator = require("meta-json-generator");

const fileSystem = helpers.generateFS(`${__dirname}/src/actions`, "workerB");

const entryFiles = helpers.generateEntryPaths(fileSystem.children);

const mode = process.argv.filter(val => val.includes("--mode"));
let environment = "production";
if(mode.length > 0 && mode[0].includes("dev")) {
  environment = "development";
}

const entryPaths = helpers
  .getFiles(entryFiles, ".ts")
  .map((file) => file.replace(".ts", ""))
  .filter((f) => f.split(".")[1] !== "json");

const metaFiles = helpers.getFiles(entryFiles, ".json");

const folderDescriptionList = [
  {path: "/groups", description: "List of Groups / user"},
  {path: "/groups/option/projects", description: "List of projects"},
  {path: "/groups/option/projects/option/branches", description: "List of branches"},
  {path: "/groups/option/projects/option/issues", description: "List of issues"},
  {path: "/groups/option/projects/option/merge_requests", description: "List of merge requests"},
  {path: "/groups/option/projects/option/pipelines", description: "List of pipelines"}
];

module.exports = {
  entry: entryPaths.reduce((result, entryPath) => {
    result[entryPath] = `./src/actions/${entryPath}.ts`;
    return result;
  }, {}),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    globalObject: "this",
    libraryTarget: "umd",
    library: "main",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: { presets: ["@babel/preset-env"] },
      },
    ],
  },
  plugins: [
    new WBMetaJsonGenerator({
      environment,
      package: "gitlab",
      packageDescription: "workerB package for gitlab.com",
      folderDescriptionList
    }),
    new webpack.DefinePlugin(helpers.envKeys),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: /(@description|@name|@ignore)/i,
          },
        }
      }),
    ],
  }
};
