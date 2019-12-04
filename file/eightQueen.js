function Queen() {
  Queen.prototype.arrays =new Array();
  Queen.prototype.total=0;
  Queen.prototype.getDimenArray=function(){
     let len =64;
     for (let i = 0; i < 8; i++) {
       this.arrays[i] = new Array();
         for (let j = 0; j < 8; j++) {
            let temp =[];
            temp[0] = i;
            temp[1] = j;
            this.arrays[i][j] = temp;
             console.log(`第${i}行，第${j}列，是${this.arrays[i][j]}`);
         }
     }

  };//初始化一个二维数组
  Queen.prototype.find=function(row){
    if(row>7){
      this.total++;
      this.printQueen();
      return;
    }
    for(let column=0;column<8;column++){
        if(this.checkQueen(row,column)){
          this.arrays[row][column]=1;
          this.find(row+1);
          this.arrays[row][column]=0;
        }
    }
  };
  Queen.prototype.printQueen=function(){
    let apt = new Array();
    for(var i=0;i<8;i++){
         apt[i] = new Array();
       for(var m=0;m<8;m++){
           if(this.arrays[i][m]==1){
             let temp =[];
             temp[0] = i;
             temp[1] = m;
              apt[i][m] =temp;
           }
       }
   }
   console.log(apt);
  };
  Queen.prototype.checkQueen=function(k,j){
    for (var i = 0; i <8; i++) {
      if(this.arrays[i][j]==1){
         return false;
      }
    };
    for(let i=k-1,m=j-1; i>=0 && m>=0; i--,m--){//检查左对角线
        if(this.arrays[i][m]==1){
          return false;
        }
    }
    for(let i=k-1,m=j+1; i>=0 && m<=7; i--,m++){//检查右对角线
        if(this.arrays[i][m]==1){
           return false;
        }
    }
    return true;
}
}
