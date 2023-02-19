const users = [
  { id: 1, name: 'Shakshi', email: 'shaksh23@gmail.com', phone: '4665xxx32', balance: '35000' },
  { id: 2, name: 'Tanvi', email: 'tnvi11@gmail.com', phone: '87875xxx19', balance: '52000' },
  { id: 3, name: 'Moni', email: 'mni2133@gmail.com', phone: '65712xxx90', balance: '4500' },
  { id: 4, name: 'Kartik', email: 'krti44@gmail.com', phone: '78965xxx32', balance: '43000' },
  { id: 5, name: 'Rahul', email: 'rhl69@gmail.com', phone: '522341xxx88', balance: '25000' },
  { id: 6, name: 'Kunal', email: 'knaal31@gmail.com', phone: '89575xxx19', balance: '55000' },
  { id: 7, name: 'Prateek', email: 'pratk25@gmail.com', phone: '89976xxx11', balance: '121000' },
  { id: 8, name: 'Shaurya', email: 'shrya@gmail.com', phone: '76887xxx32', balance: '20000' },
  { id: 9, name: 'Ritvik', email: 'rtvk@gmail.com', phone: '99142xxx67', balance: '5000' },
  { id: 10, name: 'Shaily', email: 'shly@gmail.com', phone: '78665xxx44', balance: '9000' }
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
    const userInfo = document.createElement("div");
    userInfo.innerHTML = `
      <p>Name: ${user.name}</p>
      <p>Phone: ${user.phone}</p>
      <p>Balance: ${user.balance}</p>
    `;
    loginForm.parentNode.replaceChild(userInfo, loginForm);
  } else {
    alert("Invalid email or password");
  }
});
