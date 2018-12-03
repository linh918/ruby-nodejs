
  // const Neon = require("@cityofzion/neon-js");
  
  const elliptic_1 = require("elliptic");
    const curve = new elliptic_1.ec("p256");

// Let us create a ContractTransaction

function tx(privateKey, msgHash) {
//     let tx = Neon.default.create.contractTx();
  
//  // Now let us add an intention to send 1 NEO to someone
//     const balance = new Neon.wallet.Balance({
//     assets: {
//       NEO: {
//         unspent: [{ value: 10, txid: "ab", index: 0 }]
//       }
//     },
//     address: "ALq7AWrhAueN6mJNqk6FHJjnsEoPRytLdW"
// });

// // const sig = "173253991914e4d758999536521b42f574452a3a68c2a9f876aa6a5ab326e060d88d3ce427e46f7a343bed3d336d4edd4daa6111612b680b4f783e88eab38ddb"
// // const abc = "a0a464655dfd6a889c8f9ab5bfbc820b357cecbde78e721aa37509e4a147ba6581d82ee8a5280df0bb216912de7b298bf737386d5406ad10c8a23c78e6a8ab15"
//  const privateKey = "7d128a6d096f0c14c3a25a2b0c41cf79661bfcb4a8cc95aaaea28bde4d732344"
// tx.addIntent("NEO", 1, "AVf4UGKevVrMR1j3UkPsuoYKSC4ocoAkKx")
//    .addRemark("I am sending 1 NEO to someAddress") // Add an remark
//   .calculate(balance) // Now we add in the balance we retrieve from an external API and calculate the required inputs.
// //    // Sign with the private key of the balance
//     tx.sign(privateKey);
// //     console.log(JSON.stringify(tx))
// // // Now we can use this serializedTx string and send it through sendrawtransaction RPC call.
// //     const serializedTx = tx.serialize();
//     return tx.serialize();
    // const msgHash = "be714574dd89907a5c1cb6294738ddf002de7e761aa33ff8e13888a8703ee2d0"
    const msgHashHex = Buffer.from(msgHash, "hex");
    const privateKeyBuffer = Buffer.from(privateKey, "hex");
    const sig = curve.sign(msgHashHex, privateKeyBuffer);
    return sig.r.toString("hex", 32) + sig.s.toString("hex", 32);
}



module.exports = { test: tx };