// const str = "Hi this is Renuka";
// const arr = str.split(' ');
// console.log(arr);
// let [second,first] = arr;
// console.log(second,first);
// let [second1, ,first1] = arr;
// console.log(second1,first1);


// const obj={
//     first2:'this',
//     second2:'is',
//     thrid2:'renuka'
// }
// let{first2,thrid2} = obj;
// console.log(first2);
// console.log(thrid2);


// let first3='this';
// let second3='is';
// let thrid3='renuka';
// const obj2={
//     first3:first3,
//     second3:second3,
//     thrid3:thrid3
// }
// console.log(first3);
// console.log(thrid3);



// let first3='this';
// let second3='is';
// let thrid3='renuka';
// const obj2={
//     first3,
//     second3,
//     thrid3
// }
// console.log(obj2);
// console.log(first3);
// console.log(thrid3);


        //Map()



// const arr=[1,2,3,4,5];
// const NewArray=[];
// for(let i=0;i<arr.length;i++){
//      NewArray.push(arr[i]*2)
// }
// console.log(NewArray);




// const arr=[1,2,3,4,5];
// const NewArray=[];
// const multiple=(item)=>{
//     return item*2;
// }
// for(let i=0;i<arr.length;i++){
//      NewArray.push(multiple(arr[i]))
// }
// console.log(NewArray);




// const arr=[1,2,3,4,5];
// let NewArray=arr.map((item,i)=>{
//     console.log(item);
//     return item*2;
// })
// console.log(NewArray);



// const persons = [
//     {firstname : "Renuka", lastname: "pasam"},
//     {firstname : "leela", lastname: "Triveni"},
//     {firstname : "chandra", lastname: "sekhar"}
//   ];
  
//  console.log( persons.map(getFullName));
  
//   function getFullName(item) {
//     return [item.firstname,item.lastname].join(" ");
//   }




       //Reduce()


// const arr=[1,2,3,4,5];
// arr.reduce((acc,item)=>{
//     console.log(item);
// },0)






// const arr=[1,2,3,4,5];
// arr.reduce((acc,item)=>{
//     console.log(item);
//     console.log(acc);
//     return acc+1;
// },0)



// const arr=[1,2,3,4,5];
// const result=arr.reduce((acc,item)=>{
//     console.log(item);
//     console.log(acc);
//     return acc+item;
// },0)





// const arr=[1,2,3,4,5];
// const result=arr.reduce((acc,item)=>{
//     console.log(item);
//     console.log(acc);
//     return acc+item;
// },0)
// console.log(result);






// let arr=[1,2,3];
// const result=arr.reduce((acc,item)=>{
//     return acc+item;},0);
// console.log(result)




// let arr=[1,2,3];
// const result=arr.reduce((acc,item)=>{
//     acc=acc+item.toString();
//     return acc.toString();});
// console.log(result)
// console.log(typeof(result));




// let arr=[
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];
// const result=arr.reduce((acc,item)=>{
//         if(item.voted===true){
//             acc=acc+1;
//          }
//     return acc},0);
//     console.log(result)






// let arr=[
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];
// const result=arr.reduce((acc,item)=>{
//         return acc+item.price;},0);
//     console.log(result)





// let arr=[
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ];
// var arr2=[];
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//     arr2.push(arr[i][j]);
// }
// }
// console.log(arr2)







var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
var count_1=0;
var count_2=0;
var count_3=0;
for(let i=0;i<voters.length;i++){
          if(voters[i].age>=18 && voters[i].age<=25){
               count_1++;
          }else if(voters[i].age>=26 && voters[i].age<=35){
            count_2++;
       }else if(voters[i].age>=36 && voters[i].age<=55){
        count_3++;
   }
}
console.log(count_1);
console.log(count_2);
console.log(count_3);














       //filter()



//const arr=[1,2,3,4,5];
//const result=arr.filter(item=>{
//    console.log(item);
//})
//console.log(result);



//const arr=[1,2,3,4,5];
//const result=arr.filter(item=>{
//     return true;
//})
//console.log(result);



//const arr=[1,2,3,4,5];
//const result=arr.filter(item=>{
//   return item %2===0;
//})
//console.log(result);




//const arr=[1,2,3,4,5];
//const result=arr.filter(item=>{
//    return item %2!==0;
//})
//console.log(result);


// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);
// function checkAdult(age) {
//   return age >= 18;
// }
// console.log(result)


// const arr=[3, 6, 8, 2];
// const result= arr.filter(fiveAndGreaterOnly)
// function fiveAndGreaterOnly(arr) {
//     return arr>=5;
//   }
// console.log(result);



// var arr=["dog", "wolf", "by", "family", "eaten", "camping"];
// let result=arr.filter(fiveCharactersOrFewerOnly);
// function fiveCharactersOrFewerOnly(arr) {
//     return arr.length<=5;
//   }
//   console.log(result);




// let obj=[{ name: "Angelina Jolie", member: true },
// { name: "Eric Jones", member: false },
// { name: "Paris Hilton", member: true },
// { name: "Kayne West", member: false },
// { name: "Bob Ziroll", member: true }];
// let result = obj.filter(peopleWhoBelongToTheIlluminati)
// function peopleWhoBelongToTheIlluminati(arr){
//     return arr.member===true;
//   }
//   console.log(result);





// let arr=[
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 }
// ];
// let result=arr.filter(ofAge)
// function ofAge(arr){
//     return arr.age>=18;
//   }
//   console.log(result);



        //Task-1



// const students = [
//     { name: "Alice", scores: [90, 85, 92] },
//     { name: "Bob", scores: [75, 80, 85] },
//     { name: "Charlie", scores: [90, 95, 85] },
//     { name: "David", scores: [100, 100, 100] }
//   ];
//   var add=0;
//   var res=[];
//   let NewArray=students.map((item,i)=>{
//     var sum=item.scores;
//     let NewArray=sum.map((item,i)=>{
        
//         add=add+item;
//     })
//     var avg=add/3;
//     res.push(avg);
//     item.average=avg;
    
//     add=0;
    
//     })
//     console.log(students);

//     const result=students.filter(item=>{
//         return item.average>=90;
//     })

//     console.log(result);



        //----------END----------
  



