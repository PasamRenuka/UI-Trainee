var Addlist = document.getElementById('Add-list');
var inputValue = document.getElementById('Input');
var list_1 = document.getElementById('List-1');



Addlist.addEventListener('click',function(){
    var newListElement = document.createElement('li');
    newListElement.innerHTML =inputValue.value;
    console.log(newListElement)
    list_1.appendChild(newListElement);
});


// function getTodollist(){
//     var http = new XMLHttpRequest();
//     http.open('GET',"https://jsonplaceholder.typicode.com/",true);
//     http.send();
// }
// getTodollist()


var obj=[{
    "id" : 25,
    "name" : "Renu",
    "age" : 22}
,
{
    "id" : 24,
    "name" : "Renuka",
    "age" : 23
}]
fetch('https://jsonplaceholder.typicode.com/users',
    {
        method:"POST",
        headers:{
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })


// fetch('https://jsonplaceholder.typicode.com/users/1',
//     {
//         method:"PUT",
//         headers:{
//         'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(obj)
//     })



// fetch('https://jsonplaceholder.typicode.com/users/1',
//     {
//         method:"DELETE",
//         headers:{
//         'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(obj)
//     })


fetch('https://jsonplaceholder.typicode.com/users/1',
    {
        method:"GET",
        headers:{
        'Content-Type': 'application/json'
        },
    })

