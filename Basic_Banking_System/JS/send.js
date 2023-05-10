// define user data
const users = [
    { name: "Rahul", email: "rhl69@gmail.com", balance: 25000 },
    { name: "Kartik", email: "krti44@gmail.com", balance: 43000 },
    { name: "Shakshi", email: "shaksh23@gmail.com", balance: 35000 },
    { name: "Riya", email: "ri25@gmail.com", balance: 52000 },
    { name: "Moni", email: "mni2133@gmail.com", balance: 4500 }
  ];
  
  // get elements from DOM
  const receiverSelect = document.getElementById("receiver");
  const amountInput = document.getElementById("amount");
  const transactionList = document.getElementById("transaction-list");
  
  // load transactions from local storage
  let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

  // get the currently signed-in user
  const signedInUserEmail = localStorage.getItem('userEmail');
  const signedInUser = users.find(user => user.email === signedInUserEmail);

  // set the sender as the currently signed-in user
  const senderEmail = signedInUser.email;
  const senderName = signedInUser.name;
  const senderBalance = signedInUser.balance;


  // populate sender and receiver options
  users.forEach(user => {
    if (user.email !== senderEmail) {
    const option2 = document.createElement("option");
    option2.value = user.email;
    option2.text = user.name;
    receiverSelect.add(option2);
    }
  });


  // display the sender's name
  const senderNameElement = document.getElementById("sender-name");
  senderNameElement.textContent = senderName;

  
    
  // display transactions and update balances
  function displayTransactions() {
    transactionList.innerHTML = "";
    users.forEach(user => {
      const userTransactions = transactions.filter(t => t.sender === user.email || t.receiver === user.email);
      const balance = user.balance + userTransactions.reduce((sum, t) => {
        if (t.sender === user.email) {
          return sum - t.amount;
        } else {
          return sum + t.amount;
        }
      }, 0);
      const li = document.createElement("li");
      li.innerText = `${user.name}: $${balance}`;
      transactionList.appendChild(li);
    });
  }
  
  displayTransactions();

  // handle form submission
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const receiverEmail = receiverSelect.value;
  const amount = parseInt(amountInput.value);
  const receiver = users.find(user => user.email === receiverEmail);
  if (receiver && amount <= senderBalance) {
    signedInUser.balance -= amount;
    receiver.balance += amount;
    transactions.push({ sender: senderEmail, receiver: receiverEmail, amount });
    localStorage.setItem("transactions", JSON.stringify(transactions));
    displayTransactions();
    amountInput.value = "";
    alert("Transaction successful!");
  } else {
    alert("Transaction failed. Please check the details and try again.");
  }
});
  