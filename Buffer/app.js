const { Buffer } = require("buffer");

// const memoryContainer = Buffer.alloc(4);

// memoryContainer[0] = 0xf4;
// memoryContainer[1] = 0x64;
// memoryContainer.writeInt8(-60, 2);
// memoryContainer[2] = 0x00;
// memoryContainer[3] = 0xff;

// console.log(memoryContainer)
// console.log(memoryContainer[0])
// console.log(memoryContainer[1])
// console.log(memoryContainer.readInt8(2))
// console.log(memoryContainer[2])
// console.log(memoryContainer[3])

// console.log(memoryContainer.toString("hex"))

// const memoryContainer = Buffer.from([0x48, 0x69, 0x21]);
// console.log(memoryContainer.toString("utf16le"));

// const memoryContainer = Buffer.from("486921", 'hex');
// console.log(memoryContainer.toString("utf-8"));
// const memoryContainer = Buffer.from('010010000110100100100001', 'binary'); // This will not work

// const binaryString = "010010000110100100100001"; // Binary string
// let bytes = [];

// for (let i = 0; i < binaryString.length; i += 8) {
//   // Convert every 8 bits to a byte (integer)
//     bytes.push(parseInt(binaryString.slice(i, i + 8), 2));
// }

// console.log(bytes)

// const memoryContainer = Buffer.from(bytes);
// console.log(memoryContainer.toString("utf-8"));  

const buff = Buffer.from('String', 'utf-8');
console.log(buff);
// console.log(buff.toString('hex'));
