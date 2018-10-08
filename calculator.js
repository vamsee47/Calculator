var a,b,result;
function setvalues(){
    a=Number(document.getElementById("a").value);
    b=Number(document.getElementById("b").value);
  
}
function sum(){
 setvalues();
 result=a+b;
 alert("The Sum is equal to "+result);
 }

 function Diff()
{
  setvalues();
  result=a-b;
  alert("The Diff is equal to "+result);
 }
 function mul()
{
  setvalues();
  result=a*b;
  alert("The multiplication operation is equal to "+result);
 }
 function div(){
  setvalues();
  result=a/b;
  alert("The division operation is equal to "+result);
 }
 function Reset(){
  setvalues();
  document.getElementById("a").value = "";
  document.getElementById("b").value = "";
 }