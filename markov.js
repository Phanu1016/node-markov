/** Textual markov chain generator */

class MarkovMachine {
    /** build markov machine; read in text.*/

    constructor(text) {
        let words = text.split(/[ \r\n]+/);
        this.words = words.filter((c) => c !== "");
        this.makeChains();
    }

    /** set markov chains:
     *
     *  for text of "the cat in the hat", chains will be
     *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

    makeChains() {
        // TODO
        this.chains = {};

        // generate empty object with no duplicates
        for (let i = 0; i < this.words.length; i++) {

            if (!(this.words[i] in this.chains)){
                this.chains[this.words[i]] = []
            }
        }

        // generate chains
        for (let i = 0; i < this.words.length; i++){
            if(this.words[i+1] != undefined){
                let word = this.words[i+1]
                this.chains[this.words[i]].push(word)
            } else {
                this.chains[this.words[i]].push(null)
            }
        }
    }

    /** return random text from chains */

    makeText(numWords = 100) {
        // TODO
        const outputArray = []
        let index = Math.floor(Math.random() * this.words.length);
        for(let i = 0; i < numWords; i++){
            const chainedWords = this.chains[this.words[index]]
            const randomIndex = Math.floor(Math.random() * chainedWords.length);
            const wordPicked = chainedWords[randomIndex]
            if (wordPicked == null){
                break
            } else {
                outputArray.push(wordPicked)
                index = this.words.indexOf(wordPicked)
            }
            

        }

        return outputArray.join(' ')
    }
}

module.exports = {
    MarkovMachine
}

