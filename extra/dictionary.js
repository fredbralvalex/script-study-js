class Dictionary {
    constructor (words) {
        this.mapWords = {}
        words.forEach((word) => {
            this.mapWords[word] = word
            // let tokens = []
            for (let i =0; i < word.length; i++) {
                let w = word.slice(0,i) +'*' + word.slice(i+1)
                this.mapWords[w] = w
                // tokens.push()
            }
        })
    }

    isInDictionary(word) {
        // if (word.includes('*')) {
        // } else {
        // }
        return !!this.mapWords[word]
    }
}

module.exports = Dictionary