require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt case area smoke film decrease nominee comfort install ensure slot general'; 
let testAccounts = [
"0x742770cae990098a2a0d58417eb2ecd38b1b45126b1db80ab6a505873a0bd5c3",
"0x9a8b93fad9e9fdd271b20f913e47f1247ae3fddfb26e0bc390735568fc556793",
"0x70549025f0bfed68aa6384f09cc07765fa34ed8ad097296654c1e23817f29988",
"0xc4c3e3e39b97e7284d4ac291892d1e4e089e0b45a7ed3c187b75d7a110693273",
"0x39f3cd8e8f1a79ea89d4c63fbb87873c91f37d32bfe5e2eb5042897d30b56954",
"0xf347d9cc4289843d993107f8c8a5dd8cb22a2ee9554370e941138a4494031c0c",
"0x194bf4c8e063e290826e6d5069666d64d997f3090bd408e00b73fe452eddca28",
"0x4e5796fb40a45f45bd8ab447c7001acab35af5a34c37c87b464413361b4d70d5",
"0x48f374340c04aa398c49603201583fe6466b01f0ed9a49af1d4f97d9ac022544",
"0x455c626e23401e8061208e8b8a18cdb51d88b1d66df56036bbcb7c75a67bba7f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


