const fs = require("fs/promises");

(async () => {

    const commandFileHandler = await fs.open("./command.txt", "r")

    const watcher = fs.watch("./command.txt");

    for await(const event of watcher)  {
        if (event.eventType === "change") {
            // the file was changed...
            console.log("The file was changed");
            
            // get the size of file
            const size = (await commandFileHandler.stat()).size;
            console.log(size)
            
            // we want to read a content
            const content = await commandFileHandler.read(Buffer.alloc(size));
            console.log(content);
        }
    }
})();
