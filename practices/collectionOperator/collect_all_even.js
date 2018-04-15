'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var collection_result = [];
  for (var i= 0;i< collection.length ;i++){
    if (collection[i]%2 == 0)
      collection_result.push(collection[i]);
  }
  return collection_result;
}

module.exports = collect_all_even;
// var collection = [1, 2, 3, 4, 5];
//
// console.log(collect_all_even(collection));
