const spans=document.querySelectorAll('.span')
spans.forEach(span=>{
    span.addEventListener('click',function(){
 var num =this.textContent

 var v=document.getElementById('input');
  var b=v.value+=num;
 if(b==="="){
    v.value="";

 }
 var calc=document.getElementById('calc');

 calc.onclick=()=>{
try{
    console.log(v.value)
var r= eval(v.value)
v.value=r
}
catch{
    console.log("err")
}}
    })

})
