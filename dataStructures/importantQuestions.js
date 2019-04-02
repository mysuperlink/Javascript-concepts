ARRAY CODING QUESTIONS
// ALWAYS TRY USING OBJECTS CALLED HASH MAPS IN JAVA for better results;
https://jsbin.com/calepiyiso/1/edit?html,js,console,output

www.youtube.com/watch?v=GUDLRan2DWM 

Q1: How do you find the missing number in a given integer array of 1 to 100?
Q1 (a): Find missing numbers in sequence of array 
Q2 Find second minimum element in array

Q3 How do you find the duplicate number on a given integer array
Q3 Find largest or smallest in unsorted array

Q4 Find all pairs of an integer array whose sum is equal to a given number
Q5 FInd length of number without converting into string
Q6 FInd max count of numbers in array
Q7 Find sum pair 


//****** ANSWERS *******//

QUESTION1: How do you find the missing number in a given integer array of 1 to 100?
or Sum of n natural numbers

  Answer: n(n+1)/2 
  this will only work if array doesnt have duplicates or more than one missing numbers
  // sum - sumOfArr 
  example
   let a =  n(n+1)/2; // suppose 55
    let sumOfArr = 

QUESTION 1 (a) Find missing numbers in sequence of array 

function findMissingNumber (arr) {
   sortArray(arr)
   console.log(arr);
    for (let j=0; j<arr.length; j++ ){
      if(arr[j] && arr[j] - arr[j-1] != 1) {
        console.log(arr[j+1] - arr[j])
        break;
      }
    }
  
}

function sortArray(arr){
  for (let k = 0; k < arr.length; k++) {
    for (let m = k+1; m < arr.length; m++) {
      if(arr[k] > arr[m]){
        let temp = arr[m];
        arr[m] = arr[k];
        arr[k] = temp;
      }
    }
  }
}
findMissingNumber([3,4,7,1,6,5]);


Time complexity O(n2);

// NOTE when sort by "ASC" use  " > " also k + 1 


//
QUESTION 2 Find second minimum element in array or 
OR FIND largest in array
//

var arr = [12, 13, 1, 10, 34, 1];
let fistSmallest = "99999999999999";

let secondSmallest = 0;

let firstMax = 0;
let secondMax = 0;
let largest = false;
for (let k = 0; k < arr.length; k++) {
 
    if(arr[k] < fistSmallest){ // check if current elemeent is less than max
        secondSmallest = fistSmallest
        fistSmallest = arr[k];
      
    } else if (arr[k] < secondSmallest && arr[k] != fistSmallest ) {  // check if current element is less than second smallest
        secondSmallest = arr[k];
    }
    // if largest to be found
  if(largest){ 
    
    if(arr[k] > firstMax){ // check if current elemeent is less than max
      secondMax = firstMax;
          firstMax = arr[k];
        
      } else if (arr[k] > secondSmallest && arr[k] != fistSmallest ) {  // check if current element is less than second smallest
          secondSmallest = arr[k];
      }
  }
}
console.log(fistSmallest, secondSmallest);

//Q3 How do you find the duplicate number(s) on a given integer array
var arr = [12, 13, 8, 10, 34, 1, 6, 6, 4,5,8];

let dup=[];
function findDuplicates() {
   
  for (let j=0; j < arr.length; j++ ){
  
    for (let k = j+1; k <arr.length; k++) {
      if(arr[j] == arr[k]){
        console.log(arr[k]);
        dup.push(arr[k]);
        break;
      }
    }
  }
 
}
findDuplicates();
This fn has higher complexity O(n^2);
BETTER SOLUTION [USING OBJECTS]

let dup=[];
let pairObj;
function findDuplicates() {
   
  for (let j=0; j < arr.length; j++ ){
  
    if(pairObj[arr[j]]) {
        dup.push(arr[j])
    } else {
        pairObj[arr[j]] = true;
    }
  }
 
}
findDuplicates(); // O(n)
 // COMPLEXITY 


// Q4 Find all pairs of an integer array whose sum is equal to a given number
var arr = [12, 13, 8, 10, 34, 1, 18, 6, 4,5,8];
// 18
let findSum = 18;
let dup;
function findSumPair () {
   
  for (let j=0; j < arr.length; j++ ){
    findNumber = findSum - arr[j];
    // IF GREATER THAN ZERO 
    if ( findNumber > 0 ){
      
      for (let k = j+1; k < arr.length; k++) {
        if(arr[k] + arr[j] == findSum) {
          console.log(arr[k], arr[j]);
        }
      }
      
    }
  }
 
}
findSumPair ();
For above the complexity is very which is O(n^2) ;
// lets break this problem
// Better solution 

var pair = []
let pairObj = {}
function findMissingNumber () {
    for (let k = 0; k < arr.length; k++) {
        let missNum = sum - arr[k]
        if(pairObj[arr[k]] != undefined) {
            pair.push([arr[k], missNum]);
        } else {
            pairObj[missNum] = arr[k];
        }
     
   }
  
}




Q4 Find length of number without converting into string
var number = 200000;
var length = 0;
for(i = number; i > 1; i++){
     length++;
     i = Math.floor(i/10);
}

alert(length);

Q5 FInd max count of numbers in array
let x = [1,2,2,2,3,5,6,7,7,8,9,10,10,10,10,11,11,2,0,5,2];
let maxNumber, maxCount =0;
function countOfMaxNUmbers() {
  for(let k = 0; k < x.length; k++) {
    let tempMaxCount = 0,
        tempMAxNumber = x[k];
    for (let m = k+1; m < x.length -1; m++) {
      if(x[k] == x[m] ) {
        tempMaxCount = tempMaxCount + 1;
        tempMAxNumber = x[k];
      }
    }
    if(tempMaxCount > maxCount){
      maxCount = tempMaxCount;
      maxNumber = tempMAxNumber;
     }
  }
}
countOfMaxNUmbers();
console.log(maxNumber); // 2
BETTER SOLUTION
let arr = [1,2,2,2,3,5,6,7,7,8,9,10,10,10,10,11,11,2,0,5,2];
function countOfMaxNUmbers() {
 
  let tempObj = {};
  let repeatChar;
  let repeatCharCount = 0;

  for (let j=0; j < arr.length; j++ ){
    if(tempObj[arr[j]]) {

      let count = tempObj[arr[j]];
      count = count + 1;
      tempObj[arr[j]] = count;
      if(count > repeatCharCount) {
        repeatCharCount = count;
        repeatChar = arr[j];
      }
    }else {
      tempObj[arr[j]] = 1;
    }
  }
  
  console.log(repeatChar, repeatCharCount);
 
}
countOfMaxNUmbers();

Q6 Find sum pair
function sumPair(arr, sum){
 
  let tempObj = {};
  let sump = []
  for (let k = 0; k < arr.length; k++) {
    if(tempObj[arr[k]]) {
      sump.push([tempObj[arr[k]] , arr[k]])
    } else {
      let diff = sum - arr[k];
      tempObj[diff] = arr[k];
    }
  }
  console.log(sump);
}

sumPair([5,3,1,6,2,4], 7)



STRING CODING QUESTIONS

Q1 Print duplicate characters from a string
Q2 Check if two strings are anagrams of each other
Q3 Reverse a word or string
Q4 Find max characters in a string 
Q5 Check if string is palindrome
Q6 Find substring in a string

QUESTION1 Print duplicate chars from a string

Solution is similar to find duplicates

let str = "aatif";
let dup = [];
function findDuplicates() {
  let arr = str.split("");

  for (let j=0; j < arr.length; j++ ){
  
    for (let k = j+1; k <arr.length; k++) {
      if(arr[j] == arr[k]){
        dup.push(arr[k]);
        break;
      }
    }
  }
 
} // HIGHER COMPLEXITY 
BETTER SOLUTION [USING OBJECTS] ref to print duplicates in arr


QUESTION 2 Check if two strings are Anagrams of each other
let str1 = "army"; // stop
let str2 = "mary"; // post or pots

function findDuplicates() {
  let arr = str1.split("");
  let arr1 = str2.split("");

  for (let j=0; j < arr.length; j++ ){
    let match = false;
    for (let k = 0; k <arr1.length; k++) {
      if(arr[j] == arr[k]){
        match = true;
        break;
      }
    }
    if(!match) {
      break;
    }
  }
 
}

QUESTION 3 Reverse a word or string
var str = "I love Java";
// var str = "Javascript" ; WORKS FOR STRING AND WORD

let newStr="";
function reverseString(str){
   let splitStr = str.split("");
   for(let k = (splitStr.length-1); k >= 0; k--) {
      newStr+=splitStr[k];
   }
}
reverseString(str);
console.log(newStr)

BETTER SOLUTION

function reverseString (str) {
  let limit = str.length;
  let middleChar =  "";
  if(limit % 2 != 0) {
    limit = Math.round(str.length / 2) - 1;
    middleChar = str[limit]
  }  else {
     limit = Math.round(str.length / 2)
  }
  let firstHalf = "";
  let otherHalf = "";
  let j = str.length - 1;
  
  for (let k = 0; k < limit; k++ ) {
    firstHalf += str[j];
    otherHalf = str[k] + otherHalf;
    j = j - 1;
  }
  console.log(firstHalf+middleChar+otherHalf)
}

reverseString("HeXlojn"); // Time complexity O(n)/2



QUESTION 4 Find max characters in a string 

var strQuest = "hellomynameisaatifbandey";
var finalCount = 0;
var finalStr = "";

function strQuestFn () {
  let splitArr = strQuest.split("");
  
  for (let k = 0; k < splitArr.length; k++ ) {
    let tempCount = 0;
    let tempStr = "";
    for (let m = k; m < splitArr.length; m ++) {
      
        if(splitArr[k] == splitArr[m] )  {
          tempStr += splitArr[k];
          tempCount = tempCount + 1;
        }   
      
    }
    if(tempCount > finalCount) {
       finalCount = tempCount;
       finalStr = tempStr;
    }
  }
}
strQuestFn();
console.log(finalStr, finalCount);

BETTER SOLUTION [USING OBJECTS]
var strQuest = "hellomynameisaatifbandey";

var pairedObj = {};
let finalStr = 0;
let finalCount = 0;

function strQuestFn () {
  let splitArr = strQuest.split("");
  
  for (let k = 0; k < splitArr.length; k++ ) {
     if(pairedObj[splitArr[k]]) {
        let ab = pairedObj[splitArr[k]] + 1 ;
       
        pairedObj[splitArr[k]] = v;
        if(ab > finalCount) {
          finalStr = splitArr[k];
          finalCount = v;
        }
      
     } else {
       pairedObj[splitArr[k]] = 1;
     }
  }
}
strQuestFn();
console.log(pairedObj);





QUESTION 5 Check id string isPalindrome()

var newStr = "racecar";
var newStr = "race car"; // works for space too.

function isPalindrome() {
  let splitArr = newStr.split("");
  let lastIndex = splitArr.length - 1;
  let maxCheck = splitArr.length % 2 == 0;
  let maxVal = splitArr.length;

  if(!maxCheck) {
     maxVal = splitArr.length - 1;
  }
  for (let k = 0; k < maxVal/2; k++ ) {
    if(splitArr[k] != " " && splitArr[lastIndex] != " " && splitArr[k] != splitArr[lastIndex] )  {
      return false;
    }
    lastIndex = lastIndex - 1;
    
  }
  return true;
}
isPalindrome();

Q6 Find substring

function findsubStr(str, subStr){
  let j = 0;
  for(let k = 0; k < str.length ; k++) {
    if(subStr.length == j ) {
      console.log("match found")
      return 1;
    }
    if(str[k] == subStr[j]){
      j = j + 1;
    } else {
      j = 0;  
    }
  }
  console.log("No match")
}

findsubStr("hellomyname", "oly")


