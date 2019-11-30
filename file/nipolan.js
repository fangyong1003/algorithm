function rp(str) {
    var arr = str.split('');
    var ops = '+-#*/'.split(''); // #用来分级，+-是同一级，*/同一级，两级之间的位置差至少为2
    var result = [], temp = [];
    arr.forEach(function(ele, ind) {
        if (ele == '(') {
            temp.push(ele); // 左括号直接推入暂存区
        } else if (ele == ')') {
            var flag = true;
            while (flag) {
                if (temp[temp.length-1] != '(') {
                    result.push(temp.pop())
                } else {
                    temp.pop();
                    flag = false;
                }
            }
        } else if (ops.indexOf(ele) != -1) {
            cb(ele, temp)
            function cb(x, o) {
                if (o.length == 0 || o[o.length-1] == '(' ||
                    ops.indexOf(x) - ops.indexOf(o[o.length-1]) > 2) { //判断分级
                    o.push(x)
                }  else {
                    result.push(o.pop());
                    return cb(x, o)
                }
            }
        } else {
            result.push(ele);
        }
    })
    while (temp.length > 0) {
        if(temp[temp.length-1] != '(') {
            result.push(temp.pop())
        } else {
            temp.pop()
        }
    }
    return result.join('');
}
