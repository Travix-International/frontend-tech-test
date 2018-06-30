/**
 * Validates task model
 * @param task
 * @returns {valid: boolean, validationFields: Array | undefined}
 */
function validateTask(task) {
    if (!task) {
        return { valid: false }
    }

    const validationFields = [];
    if (!task.title) {
        validationFields.push({name: 'title', message: 'Title is empty'})
    }
    if (!task.description) {
        validationFields.push({name: 'description', message: 'Description is empty'})
    }

    if (validationFields.length > 0) {
        return { valid: false, validationFields }
    }

    return { valid: true }
}

function sortByString(a, b, commonPropertyName) {
    const nameA = a[commonPropertyName].toUpperCase(); // ignore upper and lowercase
    const nameB = b[commonPropertyName].toUpperCase(); // ignore upper and lowercase
    if (nameA > nameB)
        return 1;
    if (nameA < nameB)
        return -1;
    return 0;
}

function reverseIfNeeded(items, direction = 'asc') {
    if (direction === 'desc')
        items = items.reverse();
    return items;
}

module.exports = {
    validateTask,
    sortByString,
    reverseIfNeeded
};