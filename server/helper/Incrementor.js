

class Incrementor {

    /**
     * @param {Number} startingIndex length of list
     */
    constructor(startingIndex) {
        this.startingIndex = startingIndex;
    }

    next() {
        return this.startingIndex++;
    }
}

module.exports = Incrementor;