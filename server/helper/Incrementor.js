
/**
 * Simple incrementor
 */
class Incrementor {
    /**
     * Constructor
     * @param {Number} startingIndex length of the list
     */
    constructor(startingIndex) {
        this.startingIndex = startingIndex;
    }

    /**
     * Increment from last index
     * @returns {Number}
     */
    next() {
        return this.startingIndex++;
    }
}

module.exports = Incrementor;