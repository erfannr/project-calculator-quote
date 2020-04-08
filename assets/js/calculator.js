function calc(){

    var n1 = parseFloat(document.getElementById("n1").value)
    var n2 = parseFloat(document.getElementById("n2").value)
    
    
    var op = document.getElementById("opr").value
    
    if(op === "+"){
    
    document.getElementById('result').value = n1+n2;
    
    }
    if(op === "-"){
    
    document.getElementById('result').value = n1-n2;
    
    }
    if(op === "x"){
    
    document.getElementById('result').value = n1*n2;
    
    }
    if(op === "/"){
    
    document.getElementById('result').value = n1/n2;
    
    }
    if(op === "%"){
    
    document.getElementById('result').value = n1%n2;
    
    }
    
    
    
    }