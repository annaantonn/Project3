

function validDenomination(coin) {
    let values = [1,5,10,25,50,100]
    if (values.indexof(coin) !== -1) {
        return true;
    } else {
        return false;
    }
}

function valueFromCoinObject(obj) {
    let { denom = 0, count = 0} = obj;
    return denom * count;
}

function valueFromArray(arr) {
    return arr.reduce((accumulator, currentValue) => 
    accumulator + valueFromCoinObject(currentValue), 0
    )

}

function coinCount(...coinage) {
    return valueFromArray(coinage);
}

module.exports = {
    coinCount
}
