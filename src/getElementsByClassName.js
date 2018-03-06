// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node
) {
  var resultArr = [];
  var node = node || document.body;
  
  if(node.classList !== undefined){  
    if(node.classList.contains(className)) {
     resultArr.push(node); 
    }
  }
 if(node.childNodes.length !== 0) {
  node.childNodes.forEach(childNode => {
  //console.log(childNode);
    resultArr = resultArr.concat(getElementsByClassName(className, childNode));
    //console.log(resultArr);
  });
}
  console.log(resultArr)
  return resultArr; 
};
