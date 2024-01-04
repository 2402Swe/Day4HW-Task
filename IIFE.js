// 1. Print odd numbers in array
var array=[1,2,3,4,5,6,7,8,9];
 (function (array)
 {
    for(var i=0; i<array.length; i++)
    {
      if(array[i]%2!==0)
      {
         console.log(array[i]);
      }
    }
 })(array);

 // 2. Convert all the strings to title caps in a string array
 var str=" hi , this is swethakim";
 (function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
 })(str);
 
 // 3. sum of all numbers in array 
 var a=[1,2,3,4,5,6,7,8,9];
 var sum=0;
 (function (a)
 {
    for(let i=0; i<a.length; i++)
    {
      sum=sum+a[i];
    }
    return sum;
 })(a);
 console.log(sum);

 // prime numbers in an array
 let n=20;
(function (n)
{
   for(let i=2; i<=n; i++)
   {
      let flag=0;
      for(let j=2; j<i; j++)
      {
         if(i%j==0)
         {
            flag=1;
            break;
         }
      }
      if(flag==0)
      {
         console.log(i);
      }
   }
})(n);

// 5. palindromes in array


//Two sorted arrays of the size


//Remove duplicates from an array
var array=[1,1,2,3,4,5];
var remove = (function (array){
   let dup = [...new Set(array)];
   return(dup);
 })
 (array);
console.log(remove);

//rotate an array by k times
var Array = [1, 2, 3, 4, 5];
var N = Array.length;
var K = 2;
(function (a, n, k)
{
    k = k % n;
  
    for (let i = 0; i < n; i++) {
        if (i < k) {
  
           
            console.log(a[n + i - k] + " ");
        }
        else {
  
            
            console.log((a[i - k]) + " ");
        }
    }
   
})
(Array, N, K);

