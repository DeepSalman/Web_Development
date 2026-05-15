document.getElementById("add-money-btn").addEventListener("click",function(e){
    e.preventDefault()
    console.log("Button Clicked")

    const bank=document.getElementById("bank_option").value
    const account_number = document.getElementById("bank_account").value
    const amount =parseInt(document.getElementById("amount_add").value)
    const pin = document.getElementById("pin_number").value 

    console.log(bank,account_number,amount,pin)
    
    const balance = parseInt(document.getElementById("available_balance").innerText)

    const new_balance = balance + amount

    document.getElementById("available_balance").innerText=new_balance

    console.log("Local COntribution")
    
    


})