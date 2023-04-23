fs = require('fs');
http = require('http');
url = require('url');
util = require('util');
const path = require("path");

function getFiles (dir, files_){
    files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files){
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()){
            getFiles(name, files_);
        } else {
          if(name.search(".png") != -1 || name.search(".jpeg") != -1) {
            files_.push(name);
          }

        }
    }
    return files_;
}

http.createServer(function(req, res){
  var request = url.parse(req.url, true);
  var action = request.pathname;
  var dir = path.join(__dirname,"../../" ,"resources/static/assets/uploads/");
  var files = getFiles(dir);
  res.writeHead(200, {'Content-Type': 'text/html' });
  
  files.forEach(function(file){
    var img = util.format("<img style='max-width:60vw; padding-bottom: 7%; margin:0 auto; height:auto; display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); grid-gap: 10px;' src='http://localhost:8080/%s'/></br>", path.basename(file));
  res.write(img);
  });
  res.end("</div>");

}).listen(8090, '127.0.0.1');