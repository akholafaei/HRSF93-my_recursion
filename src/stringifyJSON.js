// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
 var result = '';
 if (typeof obj === 'boolean' || typeof obj === 'number' ) {
  result += obj.toString();
 
}

else if (obj === null) {
  result += 'null'
}

else if(typeof obj === 'function' || obj === undefined ) {
 return "";
}

else if(typeof obj === 'string') {
  result += '"' + obj + '"';

}

else if(Array.isArray(obj)) {
  result += '[';
  obj.forEach((item,idx) => { 
    result += stringifyJSON(item);
    if (idx !== obj.length-1){
      result += ',';
    }
  }); 
    result += ']';
} else {
    result += '{';
    for(var key in obj) {
      if (typeof obj[key] === 'function' || key === 'undefined'){
        continue;
      }
      result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
      if (Object.keys(obj)[Object.keys(obj).length -1] !== key){
        result += ','
      }
    }
    result += '}'
  }

  return result;
};
