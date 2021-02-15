
function makeList(stateArray){
    console.log('makeList called');
    var list = document.getElementById('myUL');
    list.innerHTML = '';  //clears list    
    
    var reviewList = (stateArray) ? stateArray.review : [];//sets value of review list to new state
    tempList =[];
    //get itemList from storage
    //concat itemList to review list
    for (var i = 0; i < reviewList.length; i++) {       
        tempList.unshift(reviewList[i].btn)
    }
    tempList.forEach(element => newElement(element));
    };
function newElement(inputValue) {
    var li = document.createElement('li');
    var t = document.createTextNode(inputValue);   
    var span = document.createElement('SPAN');
    var txt = document.createTextNode('\u00D7');
    //adds close class to x and adds it to list item
    span.className = 'close';   
    span.id = checkList.findIndex(()=> checkList === inputValue) 
    span.appendChild(txt);
    li.prepend(t);
    li.appendChild(span);
    list.prepend(li);      
};


function updateState(stateName) {
   
   
    makeList(stateName);
    localStorage.setItem('stateName', stateName);  
   
    //display is a bolean that is used to determine if the endorsment cost inputs should be displayed/
    display = (stateArray) ? stateArray.end : '';
    split = (stateArray) ? stateArray.split / 100 : 0;

    $('#bar').toggle(display);


    for (var i = 0; i < reviewList.length; i++) {   //adds review items to list
        // Create DOM element
        var li = document.createElement('li');
        // Set text of element
        li.textContent = reviewList[i];
        // Append this element to its parent
        list.appendChild(li);
    } //adds close box
    for (var i = 0; i < myNodelist.length; i++) {
        var span = document.createElement('SPAN');
        var txt = document.createTextNode('\u00D7');
        span.className = 'close';
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }
 
    }; updateState(stateName);