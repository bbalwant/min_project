https://ropsten.infura.io/v3/f9abd67209ac4a57ab954b696fcb5c70

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://ropsten.infura.io/v3/f9abd67209ac4a57ab954b696fcb5c70',
      accounts: ['cfcfbedac0d8f246b0b22a73bb2dfa875520aa566753996baed2402ff7df7ff1'],
    },
  },
};