let form = document.querySelector(".form-container");
let email = document.querySelector("#email")
let password = document.querySelector("#password")

form.addEventListener("submit",function(dets){
        dets.preventDefault()

        document.querySelector("#emailError").textContent=" "
        document.querySelector("#passwordError").textContent=" "

        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
   
          

        const emailans = emailRegex.test(email.value)
        const passwordans = passwordRegex.test(password.value)

         let ifvalid = true

        if(!emailans){
                document.querySelector("#emailError").textContent = "Email is incorrect"
                document.querySelector("#emailError").style.display = "initial"
                ifvalid = false 
        }
        if(!passwordans){
                document.querySelector("#passwordError").textContent = "Password is incorrect"
                document.querySelector("#passwordError").style.display = "initial"
                ifvalid = false
        }

        if(ifvalid){
                document.querySelector("#resultmessage").textContent="everything is correct"
        }

}) 
    




