// console.log("Enter the Numbers") 

function abc(){
    var firstnum =document.getElementById('first').value ;
    var operation =document.getElementById('ope').value ;
    var secondnum =document.getElementById('second').value ;

    if( operation == '+' ){
        var sol= parseInt(firstnum) + parseInt(secondnum); 
    }
    if( operation == '-' ){
        var sol= parseInt(firstnum) - parseInt(secondnum); 
    }
    if( operation == '*' ){
        var sol= parseInt(firstnum) * parseInt(secondnum); 
    }
    if( operation == '/' ){
        var sol= parseInt(firstnum) / parseInt(secondnum); 
    }
    document.getElementById('Done').value = sol;

    var display2 =document.getElementById('display')
    display2.innerHTML=firstnum + operation + secondnum + "=" + sol;

}