//function foo()
// {
//     var a=2+2;
//     alert(a);
//     //alert("adil waheed");
// }
// function fool(greet)
// {
    
//     alert(greet);
  
   
// }
// function btn()
// {
//     alert("adil");
// }
// function getname()
// {
//     var name =document.getElementById("name");
//     alert(name.value);
//     name.value="";
// }

function getNumber(num)
{
var result=document.getElementById("result");
result.value +=num;
}
function clrresult()
{
    var result=document.getElementById("result");
result.value ="";
}
function getresult()
{
    var result=document.getElementById("result");
    result.value= eval(result.value);
}