// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    }
  }
}

// module.exports = {
//   networks: {
//     localhost: {
//       host: "localhost", 
//       port: 8546, // for ropsten expose this one
//       //port: 8545, // expose this one for testrpc
//       network_id: "*" // Match any network id
//     },  
//     ropsten: {
//       host: "localhost",
//       port: 8545,
//       network_id: "3",
//       gas: 500000
//     }
//   }
// };
