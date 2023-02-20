// define user data
const users = [
    { name: "Ritvik", email: "rtvk@gmail.com", balance: 5000 },
    { name: "Shaily", email: "shly@gmail.com", balance: 9000 },
    { name: "Kunal", email: "knaal31@gmail.com", balance: 55000 },
    { name: "Shaurya", email: "shrya@gmail.com", balance: 20000 },
    { name: "Rahul", email: "rhl69@gmail.com", balance: 25000 },
    { name: "Kartik", email: "krti44@gmail.com", balance: 43000 },
    { name: "Prateek", email: "pratk25@gmail.com", balance: 121000 },
    { name: "Shakshi", email: "shaksh23@gmail.com", balance: 35000 },
    { name: "Tanvi", email: "tnvi11@gmail.com", balance: 52000 },
    { name: "Moni", email: "mni2133@gmail.com", balance: 4500 }
  ];
  
  // get elements from DOM
  const senderSelect = document.getElementById("sender");
  const receiverSelect = document.getElementById("receiver");
  const amountInput = document.getElementById("amount");
  const transactionList = document.getElementById("transaction-list");
  
  // populate sender and receiver options
  users.forEach(user => {
    const option = document.createElement("option");
    option.value = user.email;
    option.text = user.name;
    senderSelect.add(option);
    
    const option2 = document.createElement("option");
    option2.value = user.email;
    option2.text = user.name;
    receiverSelect.add(option2);
  });
  
  // load transactions from local storage
  let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
  
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
    const senderEmail = senderSelect.value;
    const receiverEmail = receiverSelect.value;
    const amount = parseInt(amountInput.value);
    const sender = users.find(user => user.email === senderEmail);
    const receiver = users.find(user => user.email === receiverEmail);
    if (sender && receiver && amount <= sender.balance) {
      sender.balance -= amount;
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
  