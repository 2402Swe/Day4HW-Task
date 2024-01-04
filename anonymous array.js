// 1. Print odd numbers in array
var array=[1,2,3,4,5,6,7,8,9,10];
var odd = function(array){
    for(var i = 0 ; i< array.length ; i++){
          if(array[i]%2!=0){
             console.log(array[i]);
          } 
     }
  }(array);
  
// 2. Convert all the strings to title caps in a string array
var str="hi this is swethakim";
var string = function (str) {
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
}(str);
console.log(str);

// 3. sum of all numbers in array 
var a=[1,2,3,4,5,6,7,8,9];
var sum=0;
var sum = function (a)
{
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
   }
   return sum;
}(a);
console.log(sum);

// prime numbers in an array
let n=50;
 var prime = function (n)
{
   for(let i=2; i<=n; i++)
   {
      let num=0;
      for(let j=2; j<i; j++)
      {
         if(i%j==0)
         {
            num=1;
            break;
         }
      }
      if(num==0)
      {
      console.log(i);
      }
   }
}
(n);

// palindromes in array

const arr = ['carecar', 1344, 12321, 'did', 'cannot'];
const isPalindrome = el => {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};
const findPalindrome = arr => {
   return arr.filter(el => isPalindrome(el));
};
console.log(findPalindrome(arr));


//Two sorted arrays of the size

const median = (a1, a2) => {
    let x = a1.concat(a2);
    x.sort(function (a,b) {
      return a - b;
    });
    let len = x.length;
    
    return len%2 === 0 ? (x[Math.floor(len/2)-1] + x[Math.ceil(len/2)])/2 : x[Math.floor(len/2)];
  
  }
  
  let a = [0,2,3,5,9];
  let b = [1,4];
  console.log(median(a,b));


// remove dulpicates from an array
var array=[1,1,2,3,4,5];

var remove = function (array){
   let dup = [...new Set(array)];
   return(dup);
 }
 (array);
console.log(remove);

// rotate an array by k times
