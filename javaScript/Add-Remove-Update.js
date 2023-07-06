var Addlist = document.getElementById('Add-list');
var updatelist = document.getElementById('update-list');

var removelist = document.getElementById('remove-list');

var inputValue = document.getElementById('Input');
var list_1 = document.getElementById('List-1');
var deleteButton = document.getElementsByClassName("btn-delete")
var image1 = document.getElementsByClassName('image');
var btnID = 0


Addlist.addEventListener('click', function () {
    var newListElement = document.createElement('li');
    newListElement.id = 'listBtn' + btnID
    btnID++
    newListElement.innerHTML = inputValue.value;
    var btn = document.createElement('BUTTON');
    btn.className = "btn-delete"
    btn.innerHTML = "Delete"
    btn.style.cssText = "position:absolute;right:0;top:0;background-color:transparent;padding:3px;bottom:0;border:none;font-size:20px;color: rgb(227, 101, 162);"
    var trashImg = document.createElement('IMG');
    trashImg.className = "image"
    trashImg.src = "./pngwing.com (1).png"
    trashImg.width = 10
    trashImg.height = 10
    trashImg.style.cssText = "margin-left:10px;height:20px;width:20px;background-color:transparent;margin-top:0px;color: rgb(227, 101, 162);"
    btn.appendChild(trashImg);
    newListElement.appendChild(btn);

    list_1.appendChild(newListElement);

    btn.addEventListener('click', function (event) {
        var value_ = event.target.closest('li');
        value_.remove()

    })


});



updatelist.addEventListener('click', function () {
    var firstElement = list_1.firstElementChild;
    var newListElement = document.createElement('li');
    newListElement.innerHTML = inputValue.value;
    list_1.replaceChild(newListElement, firstElement);
    var btn = document.createElement('BUTTON');
    btn.className = "btn-delete"
    btn.innerHTML = "Delete"
    btn.style.cssText = "position:absolute;right:0;top:0;background-color:transparent;padding:3px;bottom:0;border:none;font-size:20px;color: rgb(227, 101, 162);"
    var trashImg = document.createElement('IMG');
    trashImg.className = "image"
    trashImg.src = "./pngwing.com (1).png"
    trashImg.width = 10
    trashImg.height = 10
    trashImg.style.cssText = "margin-left:10px;height:20px;width:20px;background-color:transparent;margin-top:0px;color: rgb(227, 101, 162);"
    btn.appendChild(trashImg);
    newListElement.appendChild(btn);


    btn.addEventListener('click', function (event) {
        var value_ = event.target.closest('li');
        value_.remove()

    })
});
removelist.addEventListener('click', function () {
    var firstElement = list_1.firstElementChild;
    list_1.removeChild(firstElement);
})




