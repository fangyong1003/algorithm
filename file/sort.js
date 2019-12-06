function Sort() {
  Sort.prototype.bubbles =function(arry){
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
  }

}
