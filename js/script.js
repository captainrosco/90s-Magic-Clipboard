var newlistElement;
var listText;
var newTextnode;
var closeBtn;
var btnTxt;

var list = document.getElementsByTagName('ol')[0];

function newListItem() {
  //create an empty element
  newlistElement = document.createElement('li');
  //get user input
  listText = document.getElementById('userText').value;
  //create text element
  newTextnode = document.createTextNode(listText);
  //append text to empty element
  newlistElement.appendChild(newTextnode);
  //append close button
  newlistElement.appendChild(addButton());
  //append element to list
  list.appendChild(newlistElement);
}


function addButton() {
  //create new button
  closeBtn = document.createElement('BUTTON');
  //add on click method that can delete it's parent
  closeBtn.onclick = function() {
    this.parentNode.parentNode.removeChild(this.parentNode);
  };
  //give it a nice fat X
  btnTxt = document.createTextNode('X');
  //append the X
  closeBtn.appendChild(btnTxt);
  //give class name to target in css
  closeBtn.className = "remove";
  return closeBtn;
}
