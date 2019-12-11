function Sort() {
  Sort.prototype.bubbles =function(arry){
    //从小到大
    var temp;
    for (var i = 0; i < arry.length-1; i++) {
        for (var j = 0; j < arry.length-1-i;j++) {
            if(arry[j]>arry[j+1]){
                temp = arry[j+1];
                arry[j+1] = arry[j]
                arry[j] = temp
            }
      }
    }
      return arry
  },
  Sort.prototype.selector = function(arr){
    var len = arr.length;
     var minIndex, temp;
     for (var i = 0; i < len - 1; i++) {
         minIndex = i;
         for (var j = i + 1; j < len; j++) {
             if (arr[j] < arr[minIndex]) {     // 寻找最小的数
                 minIndex = j;                 // 将最小数的索引保存
             }
         }
         temp = arr[i];
         arr[i] = arr[minIndex];
         arr[minIndex] = temp;
     }
     return arr;
  }
  Sort.prototype.insert = function(arr){
    for(var i=0;i<arr.length;i++){
        var insertVal = arr[i];
        var insertValIndex = i-1;
        while (insertValIndex>=0&&insertVal<arr[insertValIndex]) {
          //如果当前值小于前面一个 那个后移一位
          arr[insertValIndex+1] = arr[insertValIndex];
          insertValIndex --
        }
        if(insertValIndex!=i-1){
          arr[insertValIndex+1] = insertVal;
        }
    }
    return arr;
  }

}
