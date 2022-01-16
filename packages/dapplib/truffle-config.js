require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note museum code gesture brave bubble gift'; 
let testAccounts = [
"0xec250f1b9d387acdf9ff06742e0891c99ffb1241067976ce0ea1e33b07854c58",
"0xf8fc4333273a959eea9066aa4d80b776d750d36a782d4984ab64226cdc2f5e4a",
"0xd5d905086146abaa94a28375540cd7acc7a5836f803e36774aa447d6219e4240",
"0x28a547b679551a1c542d23b1a1fc488042e6fbba3a87956977ed3f780106e2ec",
"0x77c93f4172151f886719bf49e5b7483ef10883505f71d500106a15bbf7800116",
"0x240e2558fb4841c3ecead5eb4ab81e74ef2827c4b762bb94146e0a8bf6afe421",
"0xb0f490ffba36f8c6dcc0bb0d8979f707c826c53b2c0128038a0d2e0a00aeb997",
"0x2c4ff6ae47eaa427cd5b5af5f20eb01a7c4d4833439305d8510044f2e51e6a68",
"0x9210fa888c3743979492cdf5566bf62ffba85e2b0d81a1c688efdec850ec2e1d",
"0xdd41e3e449f625607af8073dd52427e06b08ddc7f15e7c0b3aea2d4d20590060"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

