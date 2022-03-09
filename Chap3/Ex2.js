function isEven(n) {
    if (n < 0) {
        return isEven(-n);
    } else if (n == 1) {
        return false;
    } else if (n == 0) {
        return true;
    }
    return isEven(n - 2);
}
console.log(isEven(75))