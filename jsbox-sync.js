
const path = require('path');
const fs = require('fs');
const request = require('request');
const webpack = require("webpack");
const config = require('./jsbox.config.json');

// const arg = process.argv.splice(2)[0]||0;

console.log();


webpack(require("./webpack.config.js"),function(err,stats){
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }

  console.log(stats.toString({
    chunks: false,  // 使构建过程更静默无输出
    colors: true    // 在控制台展示颜色
  }));

  if(config.autoUpload && config.host){
    console.log("Upload");
    const scriptPath = path.resolve(__dirname, 'dist/'+config.script[0].name+".js");
    request.post({
      url: `http://${config.host}/upload`,
      formData: {'files[]': fs.createReadStream(scriptPath)}
    }, (error) => {
      if (error) {
        console.error(error);
      }
    });

  }

})
