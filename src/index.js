module.exports = function check(str, bracketsConfig) {
  var newConfig = [];
  bracketsConfig.forEach(function(elem) {
    newConfig.push(elem.join(''));
  });

  var search= 1, len;

  while(search ) {
    search = 0;
    newConfig.forEach(function(elem) {
      len = str.length;
      str = str.replace(elem, '' );
       if( len > str.length) search++;
    });
  }

  return str.length == 0;
}