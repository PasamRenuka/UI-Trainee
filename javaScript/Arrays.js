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

var arr=[NaN,0,15,false,-22,'',undefined,47,null,94];
for(let i=0;i<arr.length;i++){
    if(Boolean(arr[i])==true){
        console.log(arr[i]);
    }
}



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
