var creatPassword = confirm("Want to create a Password?");
if(creatPassword){
    alert("Great! You came to the right site!")
}
else{
    alert("This isn't the page for you.")
}
var characters = prompt("How many charcters?");
if(characters > 7){
    alert("We can help you!")
}
else if(characters < 8){
    alert("We need at least 8 characters.")
}


function generate(){

    let complexity = document.getElementById("slider").value;
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
    let password = "";
    
    for (var i = 0; i <= complexity; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }
    
    document.getElementById("display").values = password;


}
