//loginButton Functionality 
document.getElementById("login_button").addEventListener("click",function(e){
    e.preventDefault()
    const mobileNumber = 12345
    const pin = 1111

    const userInputMobileNumber = parseInt(document.getElementById("mobile_input").value)
    const userInputPin = parseInt(document.getElementById("pin_input").value)

    if(userInputMobileNumber===mobileNumber && pin===userInputPin){
        window.location.href="./home.html"
    }
    else{
        alert("Invalid Credentials! ")
    }




})