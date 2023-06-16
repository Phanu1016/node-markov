/** Command-line tool to generate Markov text. */
const fs = require("fs");
const axios = require('axios')
const markov = require("./markov");

function file(path) {
    fs.readFile(path, "utf8", (error, data) => {
        if (error) {
            console.log(`Error reading ${path}:`);
            console.log(error);
            process.exit(1);
        }
        console.log("WHY IS IT NOT WORKING?")
        let mm = new markov.MarkovMachine(data);
        let madeText =  mm.makeText()
        logString(madeText)
        return madeText
    });
}

async function url(link) {
    try {
        let response = await axios.get(link);
        let mm = new markov.MarkovMachine(response.data);
        let madeText =  mm.makeText()
        logString(madeText)
        return madeText
    } catch (error) {
        console.log(`Error fetching ${link}:`);
        console.log(error);
        process.exit(1);
    }
}



if(process.argv[2] == 'file'){
    file(process.argv[3])
} else if (process.argv[2] == 'url'){
    url(process.argv[3])
}

function logString(str){
    console.log(str)
}

