// Copy/Paste you solutions below. Each solution should be accompanied by a multiline comment explaining the solution.
//1.
function solution(number){
  let sum = 0;
  for (let i = 0; i < number; i++){
    if (i % 3 === 0 || i % 5 === 0){
      sum += i
    }
  }
  return sum 
}
/*
The solution function starts with us declaring a variable "sum" with variable set to zero. We use this as a starting place for our counter. from here we then create a for loop count from 0 to the argument. As we start iterating we want to check if each number is either divisible by 5 or 3. If the condition is met then we add that element to the sum. Once the loop is completed we will return the sum variable.
*/

//2.
function likes(names) {
  if (names == 0){
    return "no one likes this"
  } else{
  for (let i = 0; i < names.length; i++){
    console.log(names[i])
 if(names.length === 1){
    return `${names[0]} likes this`
    } else if (names.length === 2){
      return `${names[0]} and ${names[1]} like this`
    } else if (names.length === 3) {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else if (names.length >= 4){
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    } else if (names == 0){
      return 
      }
    }
  }
}

/*
In this function we want to return a string of how many people liked a said publication. The function checks an array of people will return one of the 5 conditions met. If no one likes the post it will return "no one likes this" if there is 1 or more people who like the post then it will display the person who liked the person who liked the post. If there is 4 or more people who like the post then it will display the first 2 people's name who like the post and the rest of the people will show as a number. That number being the length of the array minus the 2 people who they display with their names.

*/

//3.
function findUniq(arr) {
  let obj = {};
  let final = 0; 
    for (let num of arr){
      if (num in obj){
        obj[num]++
  } else{
    obj[num] = 1;
  }
    }
    console.log(obj)
    for (let i = 0; i < arr.length; i++){
      if (obj[arr[i]] === 1) {
        return arr[i]
      }
    }
  }
  /*
In this function we are looking for the integer that does not repeat in the array. The function initializes 2 variables one for an empty object and the second one with zero. Then we have an initial for of loop that loopes through the array which then uses the empty object to either create a property setting the key to the element in the array and the value as 1. If it already exists then mutate the value from the existing property counting up 1 that value. 
We then create for loop in the function scope under the first for of loop to check if find a property in the object that has a value set to 1. This will signify the uniqe number that never repeated. Once we meet that condition we will return that value from that property from the condition that was met. 
*/
  
  //4.
  function findOutlier(integers){
let even = integers.filter(num => num % 2 === 0)
let odd = integers.filter(num => num % 2 !== 0)
if (even.length === 1){
  return even[0]
} else{
  return odd[0]
}
}
/*
In this function we are trying to find if in a given array we have one single odd or even number. 
On the first line of the function we have a higher order method that will store an array of soley even integers. 
The second line is another higher order method that stores solely odd integers in an array. 
the last part of this function if a condition that will check if the length of the even array is equal to 1 meaning that in the even array there was only 1 even number in array full of odds. If that condition was false then it this means that there was only one odd number in an array full of even numbers. 
*/
//5.
function duplicateCount(text){
  let obj = {};
  let obj2 = {};
  let count = 0;
  for (let i = 0; i < text.length; i++){
    let letter = text[i].toLowerCase()
    if (letter in obj){
      obj[letter]++
    }else{
      obj[letter] = 1
    }
  }
for (let i = 0; i < text.length; i++){
  if (obj[text[i]] > 1){
    obj2[text[i]] = true
  }
}
return Object.keys(obj2).length
}
/*
In this function we are keeping count of how many letters in a given word repeat more than once. In this function we initialized two empty objects. We also initialized a count variable set it to 0.
In our first for loop we have a created a condition that allows us to check whether an element in the array is in obj1 if it is not then we create the property to bein the obj1 object. After that loop complete we then move onto our second loop this time checking if for properties with obj1 if the value is greater than 1 then we will add that value as a key with a value set to true in obj2. We lastly return the keys of obj 2 in an array form and with that array we will return the length. The length being the amount of letters that repeated more than once. 
*/

//6.
function moveZeros(arr) {
  let newArray = [];
  console.log(arr)
  for(let i = 0; i < arr.length; i++){
    if (arr[i] !== 0){
      newArray.push(arr[i])
    }
  }
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === 0){
      newArray.push(arr[i])
    }
  }
  return newArray
}
/*
In this function we want to move all zeros to the end of a new array. We start by initializing a new array. and from there initializing a for loop that checks if an element is not 0 it is then pushed into the new array. Once all the none 0 elements have been pushed we then start a second for loop that will push all the zeroes into that same newArray, this second for loop due to control flow it will push the elements that are 0's to the end of the array.
We then return the newArray array.
*/

//7.
function pigIt(sentence) {
  const words = sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (/[a-zA-Z]/.test(word)) {
      const firstLetter = word[0];
      word = word.slice(1);
      word = word + firstLetter;
      word = word + "ay";
      words[i] = word;
    }
  }
  return words.join(' ');
}

/*
In this function we first split the sentence into an array of words and then iterates over each word in the array. For each word, the code checks if it is a word by checking if it contains any letters using a regular expression. If the word results true, it takes the first letter of the word, removes it from the word using slice and appends it to the end of the word (word + firstLetter), and then appends "ay" to the end of the word (word + "ay"). The modified word is then replaced in the array of words be re-assigning the words[i] = word;. Finally, the modified array of words is joined back into a single string using the join method and returned.
*/