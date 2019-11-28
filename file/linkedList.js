function linkedList() {

  let Node = function(ele){
    this.ele = ele;
    this.next = null;
  }

  let length = 0,
  head = null // 单链表头指针

  //向尾部增加增加
  this.append = function(ele){
    let node = new Node(ele);
    let temp;
    if(!head){
      //如果头指针是null则将head指向node节点
      head = node
    }else{
      //如果不是指向null；则找到指向null的节点就是尾部节点
      temp = head;
      while (temp.next) {
        temp = temp.next; // 依此顺移
      }
      temp.next = node; //出while则找到null节点  指向node即可
    }
    length++; //总的链表长度自增加；
  }

  //向指定位置增加元素
  this.insert =function(position,ele){
      if(position>=0&&length>=position){
        let node = new Node(ele),
            temp = head,//临时变量用来存储当前值
            index =0, // 遍历的序号
            prev;//临时变量储存前一个值
        if(position==0){
          node.next = temp;
          head = node;
        }else{
          while(index++<position){
            //当index在位置之前的时候
            prev = temp;
            temp  = temp.next; //往后移一位
          }
          //当index == position
          node.next = temp; //插入
          prev.next = node;
        }
        length++;
        return true;
      }else {
        return false;
      }
  }
  //长度
  this.length = function () {
       return length;
   }
   //清空
   this.isEmpty = function () {
       return length === 0;
   };
   //获取头
   this.getHead = function () {
       return head.ele;
   }

}
