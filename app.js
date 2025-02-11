const user = { name: 'John Doe', age: 30 };
localStorage.setItem('_scs', JSON.stringify(user));

// Retrieving and parsing
const retrievedUser = JSON.parse(localStorage.getItem('user'));
console.log(retrievedUser.name); // Output: John Doe
