const { Buffer } = require('buffer');

// const buffer = Buffer.alloc(1000, 0);

// console.log(Buffer.poolSize >>> 1);
// const unsafeBuffer = Buffer.allocUnsafe(1000);

// const buff = Buffer.allocUnsafeSlow(2);

// Buffer.from();
// Buffer.concat();

// for(let i = 0; i < unsafeBuffer.length; i++){
//     if(unsafeBuffer[i] !== 0){
//         console.log(`The data at postion &{i} is ${unsafeBuffer[i].toString(2)}`)
//     }
// }

const buf = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
// const uint32array = new Uint32Array(buf);
// const uint16array = new Uint16Array(buf);
const uint8array = new Uint8Array(buf);

// console.log(uint32array);
// console.log(uint16array);
console.log(uint8array);