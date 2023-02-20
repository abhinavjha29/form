
// let btn = document.getElementsByClassName("btn")[0] ;
// btn.addEventListener("click" ,store)
// function store(e) {
//   let name = document.getElementById("name").value ;
// let mail = document.getElementById("email").value ;
//   localStorage.setItem("name" ,name) ;
//   localStorage.setItem("email", mail) ;
  
//   // let timestamp = new Date().getTime(); // generate a unique timestamp
//   // localStorage.setItem("name_" + timestamp, name); // use a unique key for each field
//   // localStorage.setItem("email_" + timestamp, email);
// };
let btn = document.getElementsByClassName("btn")[0]; // select the first element with class "btn"

btn.addEventListener("click", store);

function store(e) {
  e.preventDefault(); // prevent form submission
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let submission = { name: name, email: email };
  let submissions = JSON.parse(localStorage.getItem("submissions")) || []; // get previous submissions, or create an empty array if none exist
  submissions.push(submission); // add current submission to the array
  localStorage.setItem("submissions", JSON.stringify(submissions)); // save the updated array to local storage
}

  
