//1-program:


// var num1=8;
// var num2=25;
// var gcd=0;
// var lcm=0;
// var i=1;
// var div1=[];
// var div2=[];
// var j=1;
// while( i<num1){
//       if(num1%i==0){
//         div1.push(i);
//       }
// i++;
// }
// while( j<num2){
//     if(num2%j==0){
//        div2.push(j);
//     }
// j++;
// }
// var n=0;
// var max=0;
// while(n<div1.length){
//     var m=0;
//     while(m<div2.length){
//         if(div1[n]==div2[m]){
//               var eql=div1[n];
//               if(eql>max){
//                 max=eql;
//               }
//         }
//         m++;
//     }
//     n++;
// }
// console.log(max);



//2-program:



var num1=18;
var num2=5;
var gcd=0;
var lcm=0;
var i=1;
var div1=[];
var div2=[];
var j=1;
while( i<num1){
      if(num1%i==0){
        div1.push(i);
      }
i++;
}
while( j<num2){
    if(num2%j==0){
       div2.push(j);
    }
j++;
}
console.log(div1);
console.log(div2);

var n=0;
var value=1;
while(n<div1.length){
            var m=0;
            while(m<div2.length){
                if(div1[n]==div2[m]){
                    value=value*div2[m];
                }
                else{
                    value=value*div1[n]*div2[m];
                }
                m++;
            }
            n++;
}
console.log(typeof(div1));

