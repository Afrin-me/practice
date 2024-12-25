// import { baseurl } from "./"

let login = document.getElementById("form");
login.addEventListener("submit", function () {
  event.preventDefault();

  
  let email = form.email.value;
  let password = form.password.value;
  

  let userObj = { email, password };

  fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then((data) => {
      let user = data.find((el, i) => el.email == email);
      //checking user password is available 
      if (user) {
        if(user.password==password){
        alert("login success...")
        localStorage.setItem("loginData",JSON.stringify(user))
             window.location.href = "todos.html";
        }else{
        alert("please with right paasword")
        }
        
      } else {
        
        alert("user not registered,please signup")
      }
    })
    .catch((err) => {
      console.log(err);
      alert("something went wrong");
    });
});
