// var array1=['renu','renuka','something','triveni'];
// var max_length=array1[0].length;
// var string1=array1[0];
// for(let i=0;i<array1.length;i++){
//    if(array1[i].length>max_length){
//        string1=array1[i];
//        max_length=array1[i].length;
//    }
// }
// console.log(string1);


//2-program:

// var arr=[NaN,0,15,false,-22,'',undefined,47,null,94];
// for(let i=0;i<arr.length;i++){
//     if(Boolean(arr[i])==true){
//         console.log(arr[i]);
//     }
// }



//3-program:

// var arr1=[1,3,6,2,5,10];
// var sum1=0;
// var sum2=0;
// for(let i=0;i<arr1.length;i++){
//     if(i%2==0){
//        sum1= sum1+arr1[i];
//     }
//     else{
//         sum2= sum2 + arr1[i];
//     }
// }
// var arr2=[sum1,sum2];
// console.log(arr2);


//4-program:

// var arr1=[1,2,3];
// var arr2=[6,4,5];
// var sol=0;
// for(let i=0;i<arr1.length;i++){
//     for(let j=0;j<arr2.length;j++){
//         if(arr1[i]==arr2[j]){
//             sol=sol+1;
//         }
//     }
// }
// if(sol>0){
//     console.log("True");
// }
// else{
//     console.log("False");
// }




//5-Program:


// var arr1=[1,2,3];
// var arr2=[100,2,1,10];
// var arr3=[];
// var count=0;
// for(let i=0;i<arr1.length;i++){
//     for(let j=0;j<arr2.length;j++){
//         if(arr1[i]==arr2[j]){
//             count= count+1;
//         }
        
//     }

//     if(count ==0){
//         arr3.push(arr1[i]);
//     }
//     count=0;
// }
// for(let j=0;j<arr2.length;j++){
//     for(let i=0;i<arr1.length;i++){
//         if(arr2[j]==arr1[i]){
//             count= count+1;
//         }
        
//     }
    
//     if(count ==0){
//         arr3.push(arr2[j]);
//     }
//     count=0;
// }
// console.log(arr3);


//6-program:


// var arr=[1,'a',2,'b',3,'c',6,'d',7,'e',8,'f'] ;
// console.log(arr.reverse());


//7-program:


// var arr1 = [4, 11, 12, 23, 46, 65, 70, 73, 98];  
// var arr2 = [7, 13, 25, 46, 58, 70, 84]; 
// for(let i=0;i<arr1.length;i++){
//     for(let j=0;j<arr2.length;j++){
//         if(arr1[i]==arr2[j]){
//             console.log("Element found: Yes");
//              break;
//         }
//     }
// }
 

//8-program:
// var arr1=[4,5,6,7,8];  
// var arr2=[3,4,6,6,7,8,9] ;
// var arr3=[34,23,45,55,67,77] ;
// var count=0;
//  for(let i=0;i<arr2.length-1;i++){
//     if(arr2[i]+1!=arr2[i+1]){
//         count++;
//     }
//  }
//  if(count>0){
//     console.log(arr2 + "is NOT a strictly increasing sequence");
//  }
//  else{
//      console.log(arr2 + "is a strictly increasing sequence");
//  }



//9-program:


// var a=46;
// var arr1=[25, 10, 5, 2, 1];



//10-program:


var arr1=[22,8, 301, 404, 35, 99] ;
var arr2=[];
for(let i=0;i<arr1.length;i++){
       var n=arr1[i]%10;
       if(n==0){
        arr2[i]=arr1[i]+"th";
       }else if(n==1){
        arr2[i]=arr1[i]+"st";
       }else if(n==2){
        arr2[i]=arr1[i]+"nd";
       }else if(n==3){
        arr2[i]=arr1[i]+"rd";
       }else if(n==4){
        arr2[i]=arr1[i]+"th";
       }else if(n==5){
        arr2[i]=arr1[i]+"th";
       }else if(n==6){
        arr2[i]=arr1[i]+"th";
       }else if(n==7){
        arr2[i]=arr1[i]+"th";
       }else if(n==8){
        arr2[i]=arr1[i]+"th";
       }else if(n==9){
        arr2[i]=arr1[i]+"th";
       }
}
console.log(arr2);

