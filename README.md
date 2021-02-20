# BoHr Javascript SDK


This library aims to providing javascript utilities for Bohr client-side applications, such as bohr-extension.


## Install

```
npm install
```

## Getting Started

**Node.js**

```javascript
// import BOHR module
const {AccountApi, BlockchainApi, Configuration, DelegateApi, NodeApi, ToolApi, WalletApi} = require("bohr-js");

// create an API client
const api = new NodeApi(new Configuration({
    username: "user",
    password: "pass",
    basePath: "http://mainnetapi.bohrweb.org/v2.4.0"
}));

// call GET /info API
api
  .getInfo({ mode: 'cors', credentials: 'include' })
  .then(response => console.log(response))
  .catch(err => console.error(err));
```

## Development

### Install Modules

```
npm install
```


### npm Run

```
npm run build
```


## License

[MIT](LICENSE) © [The Bohr Developers](https://github.com/BOHRweb)
