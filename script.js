function btn_click(a){
    console.log(a)
 document.getElementById("out").value+=a
 
}

function clr(){
  document.getElementById("out").value=null
}
function eq_click(){
    var text=document.getElementById("out").value
    var res=eval(text)
    document.getElementById("out").value=res
}