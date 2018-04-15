'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var result=[];
  if (number_a == number_b){
    if(number_a%2==0){
      return result.push(number_a);
    }
    else{
      return result;
    }
  }

  else if(number_a > number_b){
    for(var i=0;i<number_a;i++){
      if(number_a%2==0){
        return result.push(number_a);
      }
    }
  }
  else{

  }
}

module.exports = get_integer_interval_2;
