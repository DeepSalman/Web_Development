const valid_pin = 2456


document.getElementById("add-money-btn").addEventListener("click",function(e){
    e.preventDefault()
    console.log("Button Clicked")

    const bank=document.getElementById("bank_option").value
    const account_number = document.getElementById("bank_account").value
    const amount =parseInt(document.getElementById("amount_add").value)
    const pin = parseInt(document.getElementById("pin_number").value)

    
    
    const balance = parseInt(document.getElementById("available_balance").innerText)

    const new_balance = balance + amount

    if(account_number.length<11 ){
        alert("Please Provide Valid Account Number")
        return
    }
    if(pin!=valid_pin){
        alert("Please Provide Valid Pin Number")
        return
    }
    
    
    document.getElementById("available_balance").innerText=new_balance
    
    


})