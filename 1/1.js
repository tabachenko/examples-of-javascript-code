function compile_csv_search(text, key_name) {
  text = text.split("\n")
  var titel = text.shift().split(",");
  var res = [];

  for (var i = 0; i < text.length; i++) {
    var obj = {};
    for (var j = 0; j < titel.length; j++) {
      obj[titel[j]] = text[i].split(",")[j];
    }
    res.push(obj);
  }

  return function(id) {
    for (var i = 0; i < res.length; i++) {
      if (res[i][key_name] === id) {
        return res[i]; 
      }
    }
  };
};


var csv_by_name = compile_csv_search(
    "ip,name,desc\n"+
    "10.49.1.4,server1,Main Server\n"+
    "10.52.5.1,server2,Backup Server\n"+
    "1111,server2,Backup Server\n",
    "name");




console.log(csv_by_name("server2"))
