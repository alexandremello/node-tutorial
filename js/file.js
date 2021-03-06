var fs = require('fs');

function File() {
  function open(path, document) {
    fs.readFile(path, 'utf-8', function(error, contents) {
      document.getElementById('editor').value = contents;
    });
  }

  function save(path, document) {
    var text = document.getElementById('editor').value;
    fs.writeFile(path, text);
  }

  this.open = open;
  this.save = save;
}

module.exports = new File();
