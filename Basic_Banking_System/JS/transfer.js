// Define dummy customer data
const customers = [
    { id: 1, name: 'Shakshi', email: 'shaksh23@gmail.com', phone: '4665xxx32', balance: '35000' },
    { id: 2, name: 'Riya', email: 'ri25@gmail.com', phone: '87875xxx19', balance: '52000' },
    { id: 3, name: 'Moni', email: 'mni2133@gmail.com', phone: '65712xxx90', balance: '4500' },
    { id: 4, name: 'Kartik', email: 'krti44@gmail.com', phone: '78965xxx32', balance: '43000' },
    { id: 5, name: 'Rahul', email: 'rhl69@gmail.com', phone: '522341xxx88', balance: '25000' }
  ];
  
  // Get the customer table body
  const customerTableBody = document.querySelector('#customer-table tbody');
  
  // Loop through the customers and add them to the table
  customers.forEach((customer) => {
    const customerRow = document.createElement('tr');
    customerRow.innerHTML = `
      <td>${customer.id}</td>
      <td>${customer.name}</td>
      <td>${customer.email}</td>
      <td>${customer.phone}</td>
      <td>${customer.balance}</td>
      
    `;
    customerTableBody.appendChild(customerRow);
  });
  