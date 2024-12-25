let navbar = ()=>{
    let nav = `
    <div id="nav">
        <a href="index.html">Home</a>
        <a href="todos.html">Todos</a>
        <a href="signup.html">SignUp</a>
        <a href="login.html">Login</a>

    </div>`;
    
    document.getElementById("nav").innerHTML = nav;
}
navbar()
