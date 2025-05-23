const fs = require("fs/promises");

(async () => {

    // commands
    const CREATE_FILE = "create a file";
    const DELETE_FILE = "delete the file";
    const RENAME_FILE = "rename the file";
    const ADD_TO_FILE = "add to the file";

    const createFile = async (path) => {
        try{
            // we want to check whether or not we already have that file
            const existingFileHandle = await fs.open(path, "r");
            existingFileHandle.close();

            // we already have that file
            return console.log(`The file ${path} already exists`);
        }catch (e) {
            // we don't have the file, so we should create it
            const newFileHandle = await fs.open(path, "w");
            console.log(`A new file successfully created at ${path}`);
            newFileHandle.close();
        }
    };

    const deleteFile = async (path) => {
        try{
            await fs.unlink(path);
            console.log("The file has successfully removed.")
        } catch (e) {
            if(e.code === 'ENOENT'){
                console.log("Not file at this path to remove");
            } else {
                console.log("An error occurred while deleting the file");
                console.log(e);
            }
        }
    }

    const renameFile = async (path, newPath) => {
        try {
            await fs.rename(path, newPath);
            console.log("The file has successfully renamed.")
        } catch (e) {
            if(e.code === 'ENOENT'){
                console.log("No file at this path to rename, or the destination doesn't exist");
            } else {
                console.log("An error occurred while renaming the file");
                console.log(e);
            }
        }
    }

    let addedContent;

    const addToFile = async (path, content) => {
        if(addedContent === content) return;
        try {
            const fileHandle = await fs.open(path,"a");
            if(!fileHandle) {
                console.log("No file at this path to add content to");
            }
            fileHandle.write(content);
            addedContent = content;
            console.log(addedContent)
            console.log(`The content has successfully added to the file ${path}`);
            fileHandle.close();
        } catch (e) {
            console.log("An error occurred while adding content to the file");
            console.log(e);
        }
    }

    const commandFileHandler = await fs.open("./command.txt", "r")

    commandFileHandler.on("change", async () => {
        // get the size of file
        const size = (await commandFileHandler.stat()).size;
        // allocate our buffer with the size of the file
        const buff = Buffer.alloc(size);
        // the location at which we want to start filling our buffer
        const offset = 0;
        // how many bytes we want to read
        const length = buff.byteLength;
        // the position that we want to start reading the file from
        const position = 0;
        
        // we always want to read the whole content (from beginning all the way to the end)
        await commandFileHandler.read(buff, offset, length, position);

        // convert the buffer to string
        const command = buff.toString("utf-8");

        // create a file
        // create a file <path>
        if(command.includes(CREATE_FILE)){
            const filePath = command.substring(CREATE_FILE.length + 1);
            createFile(filePath);
        }

        // delete the file
        // delete the file <path>
        if(command.includes(DELETE_FILE)){
            const filePath = command.substring(DELETE_FILE.length + 1);
            deleteFile(filePath);
        }

        // rename the file
        // rename the file <path> to <new-path>
        if(command.includes(RENAME_FILE)){
            const _idx = command.indexOf(" to ");
            const oldFilePath = command.substring(RENAME_FILE.length + 1, _idx);
            const newFilePath = command.substring(_idx + 4);
            renameFile(oldFilePath, newFilePath);
        }

        // add to the file
        // add to the file <path> this content: <content>
        if(command.includes(ADD_TO_FILE)){
            const _idx = command.indexOf(" this content: ");
            const filePath = command.substring(ADD_TO_FILE.length + 1, _idx);
            const content = command.substring(_idx + 15);
            addToFile(filePath, content);
        }
    })

    // watcher...
    const watcher = fs.watch("./command.txt");

    for await(const event of watcher)  {
        if (event.eventType === "change") {
            commandFileHandler.emit("change");
        }
    };
})();
