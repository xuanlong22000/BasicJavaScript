//Su dung Spread

const food = { corn: 'Long', bacon: 'Duke' };
const cloneFood = { ...food };
console.log(cloneFood);

//Su dung Object.assign

const food1 = { corn: 'Long', bacon: 'Huy' };
const cloneFood1 = Object.assign({}, food1);
console.log(cloneFood1);

//Su dung JSON
const food2 = { corn: 'Long', bacon: 'Wibu' };
const cloneFood2 = JSON.parse(JSON.stringify(food2))
console.log(cloneFood2);

/*
Shadow Clone vs Deep Clone
Shadow CLone chi clone duoc level dau, Deep Clone duoc hieu la tham chieu
*/

const nestedObject = {
    country: 'VIE',
    detail: {
        city: 'ha noi'
    }
};

const shallowClone = { ...nestedObject };

shallowClone.country = 'DaiLoan'
shallowClone.detail.city = 'taipei';

console.log(shallowClone);

console.log(nestedObject);

const deepClone = JSON.parse(JSON.stringify(nestedObject));

console.log(deepClone);

console.log(nestedObject);

