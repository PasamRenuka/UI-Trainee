//1-program:


// var s='Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence. ';
// for(let i=0;i<s.length;i++){
//     if(s.charAt(i)=='a'){
//        s= s.replace('a','4');
//     }
//     else if(s.charAt(i)=='e'){
//        s= s.replace('e','3');
//     }
//     else if(s.charAt(i)=='i'){
//         s=s.replace('i','1');
//     }
//     else if(s.charAt(i)=='o'){
//        s= s.replace('o','0');
//     }
//     else if(s.charAt(i)=='s'){
//         s=s.replace('s','5');
//     }
// }
// console.log(s);


//2-program:


// var s='Good, better, best. Never let it rest. \'Til your good is better and your better is best.';
// var count=0;
// for(let i=0;i<s.length;i++){
//     if(s.charAt(i)=='a' || s.charAt(i)=='e'|| s.charAt(i)=='i' || s.charAt(i)=='o' || s.charAt(i)=='u' ){
//       count++;  
//     }
// }
// console.log("Number of vowels = " + count);


//3-program:


// var s='The Quick Brown Fox' ;
// var result='';
// for(let i=0;i<s.length;i++){
 
//     if(s[i].toLowerCase() == s[i]){
//         result=result+s[i].toUpperCase();
//     }else{
//         result= result+s[i].toLowerCase();
//     }
// }
// console.log(result);


//4-program:


// for(let i=0;i<11;i++){
//     if(i%2==0){
//         console.log(i + " is Even")
//     }else{
//         console.log(i + " is Odd");
//     }
// }


//5-program:


// var s='There is exactly one space between each word and no punctuation is used.';
// var arr=s.split(" ");
// for(let i=0;i<arr.length;i++){
//     if(arr[i].length%2!=0){
//         var s2=arr[i];
//         var s3='';
//        for(let j=s2.length-1;j>=0;j--){
         
//         s3 = s3+s2[j];
//        }
//        arr[i]=s3;
//     }
//     else{
//         arr[i]=arr[i];
//     }
// }
// console.log(arr);