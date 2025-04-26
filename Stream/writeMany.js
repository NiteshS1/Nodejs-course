// const fs = require("fs/promises");

// (async () => {
//     console.time("writeMany");
//     const fileOpen = await fs.open("test.txt", "w");
//     for(let i = 0; i < 1000000; i++){
//         await fileOpen.write(i.toString() + "\n");
//     }
//     fileOpen.close();
//     console.timeEnd("writeMany");
// })()


// const fs = require("fs");

// console.time("writeData");
// fs.open("test.txt", "w", (err, fd) => {
//     for(let i = 0; i < 1000000; i++) {
//         const buff = Buffer.from(` ${i} `, "utf-8");
//         fs.writeSync(fd, buff);
//     }
//     console.timeEnd("writeData");
// })

// const fs = require("fs/promises");

(async () => {
    console.time("writeMany");
    const fileOpen = await fs.open("test.txt", "w");
    const stream = fileOpen.createWriteStream();
    for(let i = 0; i < 1000000; i++){
        const buff = Buffer.from(` ${i} `, "utf-8");
        stream.write(buff);
    }
    fileOpen.close();
    console.timeEnd("writeMany");
})()