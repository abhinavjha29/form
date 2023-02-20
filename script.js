
let btn = document.getElementsByClassName("btn")[0] ;
btn.addEventListener("click" ,store)
function store(e) {
  let name = document.getElementById("name").value ;
let mail = document.getElementById("email").value ;
  localStorage.setItem("name" ,name) ;
  localStorage.setItem("email", mail) ;
  
} ;