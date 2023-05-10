const users = [
  { id: 1, name: 'Shakshi', email: 'shaksh23@gmail.com', phone: '4665xxx32', balance: '35000' },
  { id: 2, name: 'Riya', email: 'ri25@gmail.com', phone: '87875xxx19', balance: '52000' },
  { id: 3, name: 'Moni', email: 'mni2133@gmail.com', phone: '65712xxx90', balance: '4500' },
  { id: 4, name: 'Kartik', email: 'krti44@gmail.com', phone: '78965xxx32', balance: '43000' },
  { id: 5, name: 'Rahul', email: 'rhl69@gmail.com', phone: '522341xxx88', balance: '25000' }
];

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const email = loginForm.querySelector("input[type='text']").value;
  const password = loginForm.querySelector("input[type='password']").value;

  const user = users.find(function(user) {
    return user.email === email;
  });

  if (user && password === "password") {
    localStorage.setItem('userEmail', email);
    // redirect to User.html
    window.location.href = "User.html";
  } else {
    alert("Invalid email or password");
  }
});  


