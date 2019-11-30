function linkedList() {
  let length = 0;
  let head = null; // 单链表头指针
  let Node = function(ele){
    this.ele = ele;
    this.next = null;
  }
  //向尾部增加增加

linkedList.prototype.append = function(ele){
  let node = new Node(ele),
          temp; //临时指针

      if (!this.head) {
          this.head = node;
          this.length = 0;//必须要要为0
      } else {
          temp = this.head;
          while (temp.next) {
              temp = temp.next
          }
          temp.next = node;
      }
      this.length +=1;
      return true;
  }

  //向指定位置增加元素
linkedList.prototype.insert =function(position,ele){
      if(position>=0&&this.length>=position){
        let node = new Node(ele),
            temp = this.head,//临时变量用来存储当前值
            index =0, // 遍历的序号
            prev;//临时变量储存前一个值
        if(position==0){
          node.next = temp;
          this.head = node;
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
        this.length++;
        return true;
      }else {
        return false;
      }
  }
  //清空节点
  linkedList.prototype.isEmpty = function () {
         return this.length === 0;
  };
   //打印
  linkedList.prototype.printList =function(){
      const nodes = [];
      let current = this.head;
      while (current) {
        nodes.push(current.ele);
        current = current.next;
      }
      return nodes.join(' -> ');
  };
  //获取头节点的值
  linkedList.prototype.getHead = function () {
         return this.head.ele;
  };
  //删除指定位置节点
  linkedList.prototype.delete = function(position){
        if (position > -1 && position < this.length) { // 值没有越界
          let current = this.head
          let previous, index = 0
          if (position === 0) { //  移除第一项
              this.head = current.next
          } else {
              while (index++ < position) {
                  previous = current
                  current = current.next
              }
              previous.next = current.next // 将previous与current的下一项连接起来，跳过current，从而移除
          }
          this.length-- // 更新列表的长度
          return current.ele
        } else {
          return null
        }
    };
  linkedList.prototype.reverses = function () {
    if (this.head == null || this.head.next == null){
      return this.head;
    } else{
      let prev = null;
      let current = this.head;
      while (current) {
        let temp = current.next; //记录当前节点的下一位
        current.next = prev; //指定当前节点的next为前一位
        prev = current; //记录下一位节点
        current = temp;//当前节点后移一位
      }
    }
  };
}
