// import { baseurl } from "./"

let signup = document.getElementById('form')
signup.addEventListener('submit', function(){
   event.preventDefault()

   let username = form.username.value
      let email = form.email.value
         let password = form.password.value
            let gender = form.gender.value
            
     let userObj = {username,email,password,gender}  
     
     fetch("http://localhost:3000/users")
       .then((res) => res.json())
       .then((data) => {
        let user = data.some((el,i)=>el.email==email)
        if(user){
            alert("user is already registred, please login")
            window.location.href = "login.html"
        }else{
            fetch("http://localhost:3000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(userObj),
            }).then(()=>{
               alert("signup successfull")
                           window.location.href = "login.html";

            })
               
            
        }
       }).catch((err)=>{
        console.log(err)
        alert("something went wrong");
       })
       
})