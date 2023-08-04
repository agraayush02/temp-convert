function convert(){
    var x=document.getElementById("input").value;
    var y=document.getElementById("conversion").value;
    if(y=="FtoC"){
        var res=((parseInt(x)-32)*5/9);
    }
    if(y=="FtoK"){
        var res=(parseInt(x)-32)*5/9+273.15;
    }
    if(y=="KtoC"){
        var res=(parseInt(x)-273.15);
    }
    if(y=="KtoF"){
        var res=(parseInt(x)-273.15)*9/5+32;
    }
    if(y=="CtoK"){
        var res=(parseInt(x)+273.15);
    }
    if(y=="CtoF"){
        var res=(parseInt(x)*9/5)+32;
    }
    document.getElementById("output").value= res;
    
}