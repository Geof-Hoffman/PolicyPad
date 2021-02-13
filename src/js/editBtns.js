const electron = require('electron');
const { ipcRenderer } = electron;
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
function newElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('btnDisplay').value;
    var t = document.createTextNode(inputValue);
    li.prepend(t);
    if (inputValue === '') {
        // alert('add curative items');
    } else {
        document.getElementById('myUL').prepend(li);
        var list = document.getElementById('myUL');
        list.addEventListener('click', 
        function (ev) { 
            hideItem();
            hideItem()
        }, false);
        var i;
    }
    document.getElementById('btnDisplay').value = '';
    document.getElementById('btnText').value = '';
    var span = document.createElement('SPAN');
    var txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.prepend(txt);
    li.prepend(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = 'none';
        }
    }
};
function hideItem() {
    var close = document.getElementsByClassName('close');
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = 'none';
        }
    }
};


    document.addEventListener('click', function (event) {

        if (event.target.matches('#add')) {
            var e = $(this).val();
            newElement(e);
        }
    
        if (event.target.matches('.close')) {
            console.log('close clicked')
            hideItem();
            hideItem();
        }
    
    }, false);


function dummyToHideTable(){

       
/*
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
        var $myTable = $('#my-table');
        var rowElements = [];
        var count = data.length;
        var i;
        var row;
        for ( i = 0; i < count; ++i ) {
            rowElements.push(
                $('<tr></tr>').append(
                    $('<td></td>').html(row.type),
                    $('<td></td>').html(row.content)
                )
            );
        }
      
        $('#button').on('click', function(){
            console.log('button clicked')
        });
        console.log('testing... is this script on')
        function buttonsAdd() {
            if ($("#buttonTable tbody").length == 0) {
                $("#buttonTable").append("<tbody></tbody>");
            }
            $("#buttonTable tbody").append(function(){
                var i;
                for (i = 0; i < buttons.length; i++) {
                  text += `<td>${buttons[i].btn}</td>` + `<td>${buttons[i].txt}</td>` + `<td>${buttons[i].hov}</td>`
                   
            "<tr>" +
                "<td>My First Video</td>" +
                "<td>6/11/2015</td>" +
                "<td>www.pluralsight.com</td>" +
                "</tr>");
            };
        }
        
        
        buttonsAdd();

    </script>-->
*/
/*function addRow() {
          
    var btnDisplay = document.getElementById("btnDisplay");
    var btnText = document.getElementById("btnText");
    var table = document.getElementById("myTableData");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= btnDisplay.value;
    row.insertCell(2).innerHTML= btnText.value;
 
}
 
function deleteRow(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
    
}
 
function addTable() {
      
    var myTableDiv = document.getElementById("myDynamicTable");
      
    var table = document.createElement('TABLE');
    table.border='1';
    
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
      
    for (var i=0; i<3; i++){
       var tr = document.createElement('TR');
       tableBody.appendChild(tr);
       
       for (var j=0; j<4; j++){
           var td = document.createElement('TD');
           td.width='75';
           td.appendChild(document.createTextNode("Cell " + i + "," + j));
           tr.appendChild(td);
       }
    }
    myTableDiv.appendChild(table);
    
}
 
function load() {
    
    console.log("Page load finished");
 
}
var addButton = document.getElementById("add");

document.addEventListener('click', function (event) {

	if (event.target.matches('#add')) {
		addRow();
	}

	if (event.target.matches('.close')) {
		// Run your code to close a modal
	}

}, false);
*/}