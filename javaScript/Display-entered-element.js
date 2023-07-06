var Addlist = document.getElementById('Add-list');
var inputValue = document.getElementById('Input');
var list_1 = document.getElementById('List-1');



Addlist.addEventListener('click',function(){
    var newListElement = document.createElement('li');
    newListElement.innerHTML =inputValue.value;
    console.log(newListElement)
    list_1.appendChild(newListElement);
});

