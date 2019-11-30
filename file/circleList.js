function circleList() {
  let length = 0;
  let head = null; // 单链表头指针
  let Node = function(ele){
    this.ele = ele;
    this.next = null;
  }
  circleList.prototype.append = function(ele){
		var node = new Node(ele),
		    current;
		if (!this.head) {
			this.head = node;
			node.next = head;
		}else{
			current = this.head;
      if(current.next){
        while(current.next !== this.head){
          current = current.next;
        }
        current.next = node;
        node.next = head;
      }
		};

		this.length++;
		return true;
	};
  //打印
 circleList.prototype.printList =function(){
     const nodes = [];
     let current = this.head;
     while (current) {
       nodes.push(current.ele);
       current = current.next;
     }
     return nodes.join(' -> ');
 };
 circleList.prototype.toString = function(){
   var current = this.head,
       string = '',
       indexCheck = 0;

   while(current && indexCheck < length){
     string += current.element;
     current = current.next;
     indexCheck++;
   }

   return string;
 };
}
