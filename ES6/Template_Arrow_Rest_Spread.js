const name ='leela';
const name2='Triveni';




// const greetings =`Hello ${name} ${name2}`;
// console.log(greetings)




// function data(name,name2){

//     return `${name} ${name2}`;
// }
// const greetings2=`hello ${data(name,name2)}`
// console.log(greetings2)


             //ARROW FUNCTION

             
// const greetings3=(name2)=>{
//     return(`welcome ${name2}`)
// }

// console.log(greetings3(name2))



          //Rest Operator


// let sum1 = (...ar) => console.log(ar);
// sum1(1,2,3);



// let sum2 = (num1,num2) => console.log(num1+num2);
// sum2(1,2,3);



// let sum3 = (num1,num2,...args) =>{ console.log(num1);
// console.log(num2);
// console.log(args)}
// sum3(1,2,3,4,5,6,7);



          //Spread operator

// let a1=[1,2,3,4,5]
// let a2=[...a1];
// a1.push(6);
// console.log(a1);
// console.log(a2);

// let a3=[...a1,...a2]
// console.log(a3)


// const collegeName = "vijaya institute";

// console.log([...collegeName])



// const functionArgs = [1,2,3,4];

// function multiplyNumbers (a, b, c, d) {
//     return a*b*c*d;
// }

// console.log(multiplyNumbers(...functionArgs));



// const name4 = { firstName: "leela", lastName: "Triveni" };
// const bio = { ...name4, job: "Studying" };

// console.log(bio.firstName);



const firstObj = {
    "firstName" : "leela",
    "lastName" : "Triveni"
}

const secondObj = {
    ...firstObj,
    "age" : "22"
}

console.log(secondObj.lastName);
