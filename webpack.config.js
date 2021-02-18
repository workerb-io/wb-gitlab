const path = require("path");
const WBMetaJsonGenerator = require("wb-packager-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");
const helpers = require("./webpack.helpers.js");

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
  {
    path: "/groups",
    description: "List of Groups / user",
    iconPath: "src/actions/groups/group_icons/group-icon.png"
  },
  {
    path: "/groups/option/projects",
    description: "List of projects",
    iconPath: "src/actions/groups/option/projects/project_icons/project-icon.png"
  },
  {
    path: "/groups/option/projects/option/branches",
    description: "List of branches",
    iconPath: "src/actions/groups/option/projects/option/branches/branch_icons/branch-icon.png"
  },
  {
    path: "/groups/option/projects/option/issues", 
    description: "List of issues",
    iconPath: "src/actions/groups/option/projects/option/issues/issue_icons/issue-icon.png"
  },
  {
    path: "/groups/option/projects/option/merge_requests",
    description: "List of merge requests",
    iconPath: "src/actions/groups/option/projects/option/merge_requests/mr_icons/mr-icon.png"
  },
  {
    path: "/groups/option/projects/option/pipelines",
    description: "List of pipelines",
    iconPath: "src/actions/groups/option/projects/option/pipelines/pipeline_icons/pipeline-icon.png"
  }
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
      package: "Gitlab",
      packageDescription: "workerB package for gitlab.com",
      packageIcon: "https://about.gitlab.com/images/press/logo/png/gitlab-icon-rgb.png",      
      sites: ["https://gitlab.com"],
      readmeFile: "README.md",
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
