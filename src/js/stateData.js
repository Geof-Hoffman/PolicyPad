//get default data from storage
var data = (localStorage.data) ? JSON.parse(localStorage.data) : JSON.parse(localStorage.defaultData);
let stateArray;
var stateNameField = document.getElementById('stateName');
var stateUWField = document.getElementById('stateUW');
var stateJacketField = document.getElementById('stateJacket');
var stateSplitField = document.getElementById('stateSplit');
var stateEndField = document.getElementById('stateEnd');
var stateCPLFeeField = document.getElementById('stateCPLFee');
var stateRiderField = document.getElementById('stateRider');
var stateSignerField = document.getElementById('stateSigner');
var upsField = document.getElementById('UPS');
var lpsField = document.getElementById('LPS');
var stateReviewField = document.getElementById('stateReview');
function find(array, criteriaFn) {
    let current = array
    let next = []
    while (current || current === 0) {
        if (criteriaFn(current)) {
            return current
        }
        if (Array.isArray(current)) {
            for (let i = 0; i < current.length; i++) {
                next.push(current[i])
            }
        }
        current = next.shift()
    }
    return null;
}
//display state dropdowns
function displayStates() {
    var stateOptionsOutput = '<option value=""><strong>choose state</strong></option>';
    for (var i = 0; i < data.length; i++) {
        stateOptionsOutput += '<option>' + data[i].state + '</option>';
    }
    document.getElementById('stateName').innerHTML = stateOptionsOutput;
}; displayStates();
// get array of state specific data and display in fields. 
function updateState(stateName) {
    stateArray = find(data, index => index.state === stateName);
    console.log(stateArray);
    stateUWField.value= stateArray.UW;
    stateJacketField.value= stateArray.cpl;
    stateSplitField.value= stateArray.split;
    stateEndField.value= stateArray.end;
    stateCPLFeeField.value= stateArray.cpl;
    stateRiderField.value= stateArray.rider;
    stateSignerField.value= stateArray.signer;
    upsField.value= stateArray.ups;
    lpsField.value= stateArray.lps;
    var reviewList = stateArray.review;
    var reviewListOutput = '';
    for (var i = 0; i < reviewList.length; i++) {
        reviewListOutput += reviewList[i] + ' ,';
    }
    stateReviewField.innerHTML = reviewListOutput;
   
};

//on submit, store data from fields in object and replace exsisting state object in state data. 



document.addEventListener('change', (e) => {
    if (e.target == stateNameField) {
        stateNameField = e.target.value;
        console.log(stateNameField);
        updateState(stateNameField);
    }
});