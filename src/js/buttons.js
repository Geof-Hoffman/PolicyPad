const electron = require('electron');


var buttons =[  {
    btn: "first",
    txt: "first text",
    tip: "first hover",

},
{
    btn: "second",
    txt: "second text",
    tip: "second hover"
},
{
    btn: "third",
    txt: "third text",
    tip: "third hover"
}]
var btnList;
var myNodelist = document.getElementsByTagName('LI');
var list = document.getElementById('myUL');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        console.log('clicked')
       
    }
},
    false);
var i;
var myNodelist = document.getElementsByTagName('LI');
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement('SPAN');
    var txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
};
function getStoredData() {
    var stored = {};
    stored.buttonList = localStorage.getItem('buttonList');
    if(!(stored.buttonList) ){
        console.log('neg')
        btnList = buttons;
    } else{
        btnList = stored.buttonList;
        console.log('positive')
    };  
   
};
getStoredData();
function displayList(){
    for (var i = 0; i < btnList.length; i++) {   //adds review items to list
        createListItem(i);
    };
};
displayList();
function createListItem(i){// Create DOM element
    var li = document.createElement('li');
    // Set text of element
    li.textContent =  btnList[i].btn;
    li.className = 'close';
    // Append this element to its parent
    list.appendChild(li);
}; 
    

function newElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('btnDisplay').value;
    var t = document.createTextNode(inputValue);
    li.prepend(t);
    if (inputValue === '') {
        alert('add curative items');
    } else {
        document.getElementById('myUL').prepend(li);
    }
    document.getElementById('btnDisplay').value = '';

};

function hideItem() {
    var close = document.getElementsByClassName('close');
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = 'none';
        }
    localStorage.getItem('btnList')
    }
};
$('#myUL').on('click', () =>
    hideItem()
);
function clear() {

   // localStorage.setItem('fileNum', ''); 

   // $('#fileNum').val('').val();
   
};
$('#add').on('click', function () {
   var e = $(this).val();
    newElement(e);
});

for (var i = 0; i < buttons.length; i++) {   //adds review items to list
    var buttonsDiv = document.getElementById('buttonsDiv');
    // Create DOM element
    var btn = document.createElement('button');
    // Set text of element
    btn.value =  buttons[i].btn;
    btn.innerHTML = buttons[i].btn;
    btn.setAttribute("data-val", buttons[i].btn);
    btn.setAttribute("class", "copyBtn")
    // Append this element to its parent
    buttonsDiv.appendChild(btn);
} 
$('button').on('click', function () {
    var value = $(this).val();
    var data = $(this).data('val');
    var dummy = $('<input>').val(data).appendTo('body').select();
    document.execCommand('copy');
    dummy.remove();        
});
document.addEventListener('click', function(ev){
    if (ev.target.tagName === 'LI') {
        console.log('clicked dfvsfd')
    }
    if (ev.target.matches('button')) {
        console.log('clicked button')
    }
});