var path = require("path");

module.exports = {
  mode:"production",
  module:{
    rules:[
      {
        test:/\.ts$/,
        loader:"ts-loader",
        options: {
          transpileOnly: true,
          configFile: path.join(__dirname, "tsconfig.json")
        }
      }
    ]
  },
  resolve:{
    extensions:[".ts", ".js"],
    modules:["node_modules"],
  },
  entry:{
    "tag":"./src/use-tag.ts"
  },
  output:{
    path:path.join(__dirname,"dist"),
    filename:"[name].js"
  }
};
