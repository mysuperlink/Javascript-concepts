
*******BUBLE SORT *******
var a = [5,3,2,1,9,8,6];
// Buble sort is when you check next element is smaller
// or greater;
// Ex: 
//   5 > 3 then swap 3,5
//   5 > 2 then swap 3,2,5
//   5 > 1 then swap 3,2,1,5
//   5 > 9 // change the element and check
//   9 > 8 swap 3,2,1,5,8,9
//   9 > 6 then swap 3,2,1,5,8,6,9
//   continue
//   3 > 2 swap 2,3
//   3 > 1 swap 2,1,3
//   3 > 5 change element 
//   5 > 8 change element 
//   8 > 6 swap 2,1,3,5,6,8
//   8 > 9 then 2,1,3,5,6,8,9
// then continue
let newAr =[]
function bubbleSort(ar){
  for (let k = 0; k < ar.length; k++) {
    let isSorted = false;
    for(let m = 0; m < ar.length-1; m++){
      if(ar[m] > ar[m+1]){
        let temp = ar[m];
        ar[m] = ar[m+1];
        ar[m+1] = temp;
        isSorted = true;
      }
      if(!isSorted){
        break;
      }
    }
  }
  
  return ar;
}
bubbleSort(a);
console.log(a); // [1,2,3,5,6,8,9]
//Time complexity of this fn is 
// O(n2) //n square which mean two loops working
//

*******SELECTION SORT *******
// selection sort is when you pick the smallest element 
// and swap it with first element 
// keep on going
// time complexity will be On2 (O of n square)
// which means n can be n(n-1)/2
// n is length of array

var arr = [4,6,2,9,3];
// [2, 6, 4, 9, 3]
// [2, 3, 4, 9, 6]
// [2, 3, 4, 6, 9]
// [2, 3, 4, 6, 9]

 
for(let k = 0; k < arr.length; k++) {
  //let valCheck = arr[k];
  //console.log(valCheck)
  let min = arr[k];
  let temp1=null, temp2=null, temp3=null;
  for(let j = k; j < arr.length; j++){
     
    if(min > arr[j]){
       temp1 = arr[k];
       temp2 = j;
       min = arr[j];
      //break;
    }
  }
  if(temp1 && temp2){
    arr[k] = min;
    arr[temp2] = temp1;
    console.log(arr);
  }
}
console.log(arr);



********** INSERTION SORT ********** 
// we will pick the element on index 1 we will assume the 
// the zero th index is sorted
// if the element at index 1 is less than the element
// at index at 0 then we will shift index 0 to right and place
// index 1 to left
// and continue

// [7,2,4,1,5,3]
// Pick 2 and check if less than or greater than 7
// [2,7,4,1,5,3]
// [2,4,7,1,5,3]
var arr = [2,4,7,1,5,3];
for (let i = 1; i < arr.length; i++){
  for(let m = 0; m < i ; m++){
    if(arr[i] < arr[m]){
      let temp = arr[m];
      arr[m] = arr[i];
      arr[i] = temp;
      
    }
  }
}
console.log(arr);