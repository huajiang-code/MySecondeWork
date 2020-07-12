//concat()


// var arr1=["sunhuajaing"];
// var arr2=["guoruimiao"];
// var arr3=arr1.concat(arr2);
// alert(arr3);


//join()


// var arr=[1,2,3];
// var str=arr.join("====>");
// alert(str);


//pop()


// var arr=["a" ,"b","c"];
// var brr=arr.pop();
// alert(brr);
// alert(arr);


//push()


// var arr=["a" ,"b","c"];
// var length=arr.push("*******");
// alert(length);
// alert(arr);


//reverse()


// var arr=["a" ,"b","c"];
// var brr= arr.reverse();
// alert(brr);


//shift()

// var arr=["a" ,"b","c"];
// var brr=arr.shift();
// alert(brr);
// alert(arr);


//unshift()


// var arr=[1,2,3];
// var brr=arr.unshift("*******");
// alert(brr);
// alert(arr);


// slice()

// var arr=["a" ,"b","c","d","e"];
// var brr=arr.slice(3,4);
// alert(brr);
// alert(arr);



//sort();

// var arr=[3,5,4,7,6];
// var brr=arr.sort();
// alert(brr);







//splice()   很强大    
//截取数组中的值，会影响原数组。
//一共有三个参数，前两个必写，第一个参数从什么位置开始截，第二个参数截多少个，第三个参数用什么替换被截取的数组。


var arr=["a" ,"b","c","d","e"];
var brr=arr.splice(0,3,"************"); //从0开始截取，截取的个数是3个
alert(brr);
alert(arr);








//toString()


// var arr=["a","b","c"];
// alert(typeof arr);
// var str=arr.toString();
// alert(str);
// alert(typeof str);

