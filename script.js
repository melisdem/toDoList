var button = document.getElementsByTagName('button')[0];
// var button = document.getElementsByTagName('button') 
// gives error since button is an object, 
// for check you can type getElementsByTagName("button") 
// it gives you button object.
 var input = document.getElementById('userinput');
 var ul = document.querySelector("ul");

// adding new items and delete  button near to them to the list
 // do not repeat yourself
 function inputLength() {
  return input.value.length;
 };

 function createListElement() {
  // create list element
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
  // create delete button and remove item
  var Delete = document.createElement("button");
  Delete.innerHTML = "Delete"
  Delete.classList.add("delete");
  li.appendChild(Delete);
  Delete.onclick = removeParent;
  // adding class for toggle .done
  // li.onclick = toggleDone;
 };

 function addListAfterClick() {
    if (inputLength() > 0) {
    createListElement();
    }
 };

 function addListAfterKeyPress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
      createListElement();
    }
 }

 button.addEventListener("click", addListAfterClick);  // pressing button with mouse click

 input.addEventListener("keypress", addListAfterKeyPress); // pressing enter key
 // it is not addListAfterKeyPress(), it is called callback function 
 // we don't want the addListAfterClick function to run because 
 // we are just adding the event listener now to wait for click or keypress

// removing items with delete button

var li = document.getElementsByTagName("li");
var j ;

function removeParent(evt) 
{
  evt.target.parentNode.parentNode.removeChild(evt.target.parentNode);
  return false;
};

function listLength()
{
  return li.length;
};

function deleteItem()
{
  var Delete = document.createElement("button");
  Delete.innerHTML = "Delete"
  Delete.classList.add("delete");
  li[i].appendChild(Delete);
  Delete.onclick = removeParent;
};

for (var i = 0; i < listLength(); i++)
{
  deleteItem();
};

//toggle items

// function toggleDone(evt)
// {
//   evt.target.classList.toggle("done");
// }
// for (var i = 0; i < listLength(); i++)
// {
//   li[i].addEventListener("click", toggleDone);
// };

ul.onclick=function(event){
  var target=event.target;
  target.classList.toggle("done");
}

// ul.onclick=function(event){
//   event.target.parentNode.parentNode.removeChild(event.target.parentNode);
// }