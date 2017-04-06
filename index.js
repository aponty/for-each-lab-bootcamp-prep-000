function iterativeLog(array){
  function logger(element,index,array){
    console.log(index+`: `+element)
  }
  array.forEach(logger)
}
function iterate(callback){
  var x=[1,2]
  x.forEach(callback)
  return x
}
function doToArray(array, callback){
  array.forEach(callback)
}
