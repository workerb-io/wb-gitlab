const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");
const helpers = require("./webpack.helpers.js");
const WBMetaJsonGenerator = require("./plugins/index");

const fileSystem = helpers.generateFS(`${__dirname}/src/actions`, "workerB");

const entryFiles = helpers.generateEntryPaths(fileSystem.children);

const entryPaths = helpers
  .getFiles(entryFiles, ".ts")
  .map((file) => file.replace(".ts", ""))
  .filter((f) => f.split(".")[1] !== "json");

const metaFiles = helpers.getFiles(entryFiles, ".json");

const folderDescriptionList = [
  {path: "/projects", description: "List of projects"},
  {path: "/projects/option/branches", description: "List of branches"},
  {path: "/projects/option/issues", description: "List of issues"},
  {path: "/projects/option/merge_requests", description: "List of merge requests"},
  {path: "/projects/option/pipelines", description: "List of pipelines"}
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
