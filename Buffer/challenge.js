// 0100 1000 0110 1001 0010 0001
const { Buffer } = require("buffer");

const memoryContainer = Buffer.alloc(3);

// Convert binary strings to integers and assign them to the buffer
memoryContainer[0] = parseInt('01001000', 2);
memoryContainer[1] = parseInt('01101001', 2);
memoryContainer[2] = parseInt('00100001', 2);

// memoryContainer[0] = 0x48;
// memoryContainer[1] = 0x69;
// memoryContainer[2] = 0x21;

console.log(memoryContainer);


console.log(memoryContainer.toString('utf8'));
console.log(memoryContainer.toJSON().data);
