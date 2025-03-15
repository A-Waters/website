function calculate_age() { 
    var firstDate = new Date(2000, 3, 31)
    var secondDate = new Date();
    var value = (secondDate.getTime() - firstDate.getTime())/ 31536000000
    document.getElementById("birthday").innerText = value.toFixed(9);
}



setInterval(function(){ 
    calculate_age()
}, 100);
