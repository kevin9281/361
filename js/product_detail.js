//商品数量加减
var c_btn=document.getElementById('c_btn');
var btns=c_btn.getElementsByTagName('button');

for(var btn of btns){

    btn.onclick=function (){
    var btn=this;
    
    var span=c_btn.getElementsByTagName('span')[0];
    if(btn.innerHTML==='+'){
      span.innerHTML++;
    }else if(span.innerHTML>0){
      span.innerHTML--;
    }
    
  }
}
//标签切换
var as=document.querySelectorAll('#tab>li>[data-toggl=tab]');
for(var a of as){
  a.onclick=function(e){
   e.preventDefault();
   
   var a=this;
   var id=a.getAttribute('data-id');
   var div=document.querySelector(`#${id}`);
   var divs=document.querySelectorAll('.contents>div');
   
   for(var d of divs){
    d.style.display='none';
    
  }
  
  div.style.display='block';
   
  }
}
//详情图切换
var img_list=document.getElementById('pd-img-list');
var img_detail=document.getElementById('img-detail');

var imgs=img_list.querySelectorAll('li img');
var lgDiv=document.getElementById('lgDiv');
for(var i=0;i<imgs.length;i++){
  
  imgs[i].onclick=function(){
    for(var j=0;j<imgs.length;j++){
      imgs[j].style.border=''
    }
    this.style.border='1px solid #000'
    var md=this.getAttribute('data-md');
    var lg=this.getAttribute('data-lg');
    console.log(lgDiv);
    console.log(lg);
    lgDiv.style.backgroundImage=`url(${lg})`;
    img_detail.style.backgroundImage=`url(${md})`;
    
    
  }
  img_detail.onmouseover=function(){
    
    lgDiv.style.display='block';
    
  }
  img_detail.onmousemove=function(e){
    var msize=150;
    var left=e.offsetX-msize/2;
    var top=e.offsetY-msize/2;
    lgDiv.style.backgroundPosition=
        `-${2*left}px -${2*top}px`
  }
  img_detail.onmouseout=function(){
    lgDiv.style.display='none';
  }
}