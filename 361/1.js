function f(){
  f.a=function(){console.log(1);};
  this.a=function(){console.log(2);};
  a=function(){console.log(3);};
  var a=function(){console.log(4);};
  console.log('运行了一次f()');
}
f.prototype.a=function(){console.log(5);};
f.a=function(){console.log(6);};
f.a();
console.log(f.a.toString());
var ob=new f();
ob.a();
f.a();

console.log(f.a.toString());