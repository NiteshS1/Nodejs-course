const { Buffer } = require('buffer');

const b = Buffer.alloc(0.5e9);

setInterval(() => {
    // for(let i = 0; i < b.length; i++){
    //     b[i] = 0x22;
    // }

    b.fill(0x22);
    console.log(b.toString());
    
}, 5000);