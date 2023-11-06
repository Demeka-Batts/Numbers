//Prompt the user for a list of integers separated by commas
const str = window.prompt("enter some numbers, like this", "1,2,3,3,5,9");

function multiplyResult(result, number) {
  return result * number;
}

// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
  constructor(data) {
    //data can either be a string or an array of numbers
    if (typeof data === "string") {
      this.data = str.split(",").map((number) => Number(number));
    } else {
      this.data = data;
    }
  }

  count() {
    //return the count of numbers in data
    return this.data.length;
  }

  printNumbers() {
    //print the numbers in data
    console.table(this.data);
  }
  odds() {
    //return the odd numbers in data
    // 1,2,3,3,5,9
    return this.data.filter((number) => number % 2 !== 0);
  }
  evens() {
    //return the even numbers in data
    return this.data.filter((number) => number % 2 === 0);
  }
  sum() {
    // let result = 0;
    // for (let i = 0; i < this.data.length; i++) {
    //   const number = this.data[i];
    //   result += number;
    // }

    // return result;

    // let result = 0;
    // for (let number of this.data) {
    //   // "hi", "there", "Lucy"
    //   // 1, 4, 9
    //   result += number;
    // }

    // return result;

    return this.data.reduce((result, number) => result + number, 0);
  }
  product() {
    //return the product of the numbers
    // return this.data.reduce((result, number) => result * number, 1);
    return this.data.reduce(function (result, number) {
      return result * number;
    }, 1);
  }
  greaterThan(target) {
    //return the numbers greater than the target
    return this.data.filter((number) => number > target);
  }

  howMany(target) {
    //return the count of a given number
    // let matches = 0;
    // for (let number of this.data) {
    //   if (number === target) {
    //     matches += 1;
    //   }
    // }
    // return matches;

    // return this.data.reduce(
    //   (total, number) => (number === target ? total + 1 : total),
    //   0
    // );
    return this.data.filter((number) => number === target).length;
  }
}

//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count()); //returns count of numbers
n1.printNumbers(); //prints the number along with their indexes
console.log(n1.odds()); //returns odd numbers
console.log(n1.evens()); //returns even numbers
console.log(n1.sum()); //returns sum of numbers
console.log(n1.product()); //returns product of numbers
console.log(n1.greaterThan(3)); //returns numbers greater than another number
console.log(n1.howMany(3)); //return the count of a specific number