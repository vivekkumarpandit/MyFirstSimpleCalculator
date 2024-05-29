function InputValue(data)
{
document.getElementById("inputfield").value =document.getElementById("inputfield").value + data;
}
function ResultCal()
{
var exp=document.getElementById("inputfield").value;
try{
    if(exp)
        {
            document.getElementById("inputfield").value=exp + " = "+eval(exp);
        }
        else{
            alert("Please Input Value!!");
        }
}

catch(err)
{
 alert(err.message);
 document.getElementById("inputfield").value="";
}

}