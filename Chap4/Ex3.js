//refer
function arrayToList(array) {
    let result = {};
    if (Array.isArray(array)) {
        let currListItem = result;
        for (let item of array) {
            let newListItem = {
                value: item,
                rest: null
            };
            if (typeof currListItem.rest === 'undefined') {
                result = newListItem;
            } else {
                currListItem.rest = newListItem;
            }
            currListItem = newListItem;
        }
    }
    return result;
}
console.log(arrayToList([10, 19, 6]))

function listToArray(list) {
    let result = [];
    if (typeof list === 'undefined' || list.value === undefined || list.rest === undefined) {
        return result;
    } else {
        result.push(list.value);
        while (list.hasOwnProperty('rest') && list.rest !== null) {
            list = list.rest;
            if (list.hasOwnProperty('value')) {
                result.push(list.value);
            }
        }
    }
    return result;
}

function prepend(element, list) {
    return {
        value: element,
        rest: list
    };
}

function nth(list, number) {
    return listToArray(list)[number];
}

function nthRecursive(list, number) {
    if (number === 0) {
        return list.value;
    } else if (list.rest === null) {
        return undefined;
    } else {
        return nthRecursive(list.rest, number - 1);
    }
}
console.log(listToArray(arrayToList()))