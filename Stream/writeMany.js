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
// (async () => {
//     console.time("writeMany");
//     const fileOpen = await fs.open("test.txt", "w");
//     const stream = fileOpen.createWriteStream();
//     for(let i = 0; i < 1000000; i++){
//         const buff = Buffer.from(` ${i} `, "utf-8");
//         stream.write(buff);
//     }
//     fileOpen.close();
//     console.timeEnd("writeMany")
// })()

// const fs = require("fs/promises");
// (async () => {
//     console.time("writeMany");
//     const fileOpen = await fs.open("test.txt", "w");
//     const stream = fileOpen.createWriteStream();
//     console.log(stream.writableHighWaterMark)

//     // const buff = Buffer.alloc(16383, 10)
//     // console.log(stream.write(buff))
//     // console.log(stream.write(Buffer.alloc(1, "a")));

//     // stream.on("drain", () => {
//     //     console.log("I am free now");
//     // })

//     let i = 0;
//     const writeMany = () => {
//         while(i < 1000000) {
//             const buff = Buffer.from(` ${i} `, "utf-8");

//             if(i === 99999) {
//                 return stream.end(buff);
//             }

//             // if stream.write returns false, stop the loop
//             if(!stream.write(buff)) break;
//             i++;
//         }
//     }

//     writeMany();

//     // resume our loop once our stream's internal buffer is emptied
//     stream.on("drain", () => {
//         writeMany();
//     })

//     // for(let i = 0; i < 1000000; i++){
//     //     const buff = Buffer.from(` ${i} `, "utf-8");
//     //     stream.write(buff);
//     // }

//     stream.on("finish" , () => {
//         fileOpen.close();
//         console.timeEnd("writeMany")
//     })
// })()



const fs = require("fs/promises");
(async () => {
    const fileOpen = await fs.open("test.txt", "w");
    const stream = fileOpen.createWriteStream();
    console.log(stream.writableHighWaterMark)


    let i = 0;
    const writeMany = () => {
        while(i < 1000000) {
            const buff = Buffer.from(` ${i} `, "utf-8");

            if(i === 99999) {
                return stream.end(buff);
            }

            // if stream.write returns false, stop the loop
            if(!stream.write(buff)) break;
            i++;
        }
    }

    writeMany();

    // resume our loop once our stream's internal buffer is emptied
    stream.on("drain", () => {
        writeMany();
    })

    stream.on("finish" , () => {
        fileOpen.close();
        console.timeEnd("writeMany")
    })
})()