var customers_data={
    'Ben10':[22,30,11,17,15,52,27,12],
    'Sameer':[5,17,30,33,40,22,26,10,11,45],
    'Zeeshan':[22,30,11,5,17,30,6,57]
}
for(i in customers_data ){
    var person=customers_data[i];
    var count=0;
    for(j in person){
        if(person[j]>19){
            count++;
        }
    }
    if(count>4){
        console.log(i + "have premium membership")
    }
}


person?.name?.firstName

//2-program:


// var student = { 
//     name: "David Rayy", 
//     sclass: "VI", 
//     rollno: 12 
// };
// console.log(Object.keys(student));


//3-program:

// var student = { 
//     name: "David Rayy", 
//     sclass: "VI", 
//     rollno: 12 
// };
// console.log(student);
// delete student.rollno;
// console.log(student);


//4-program:
// var student = { 
//         name: "David Rayy", 
//         sclass: "VI", 
//         rollno: 12 
//     };
// console.log(Object.keys(student).length);


//5-program:


// var library = [ 
//     { 
//     author: 'Bill Gates', 
//     title: 'The Road Ahead', 
//     readingStatus: true 
//     }, 
//     { 
//     author: 'Steve Jobs', 
//     title: 'Walter Isaacson', 
//     readingStatus: true 
//     }, 
//     { 
//     author: 'Suzanne Collins', 
//     title: 'Mockingjay: The Final Book of The Hunger Games', 
//     readingStatus: false 
//     }]; 
// for(let i=0;i<Object.keys(library).length;i++){
//     if(library[i].readingStatus){
//         console.log("true");
//     }
//     else{
//         console.log("false");
//     }
// }
