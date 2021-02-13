var copyVal = "this is what was copied";

const myNotification = new Notification('', {
    body: `\"${copyVal}\" copied to clipboard`
})

myNotification.onclick = () => {
    console.log('Notification clicked')
}

//global variable declarations
var stateName;
var stateArray = [];
var reviewList = [];
var finishedList = [];
var split = 0;
var myNodelist = document.getElementsByTagName('LI');

var data = [{
    id: 'VA',
    state: 'Virginia',
    UW: 'CTIC',
    jacket: 'Refinance Rate \-> Standard Loan -\- > REFINANCE LOAN -\- > ALTA Short Form Residential Loan Policy 12/03/12 w-VA Mod_434 – Refinance Loan Policy',
    split: 13,
    end: false,
    cpl: '$35',
    pud: '5.1',
    signer: 'Melanie S. Johnson',
    review: ['NFT ABA', 'Owner\'s Aff', 'Deed of Trust', 'Executed Settlement Statement'],
    lps: "Transmital, jacket, CTIC Notice",
    ups: "Email policy to UW",
    regex: /\w*[nN][tT][vV][aA]\w*/
},
{
    id: 'MD',
    state: 'Maryland',
    UW: 'FATIC',
    jacket: 'ALTA Short Form Residential Loan Policy (Rev. 6-16-07) (A&B)',
    split: 13,
    end: false,
    cpl: '$45',
    pud: '5.1/4.1',
    signer: 'Melanie S. Johnson',
    review: ['NFT ABA', 'Owner\'s aff'],
    lps: "Transmital, jacket",
    ups: "N/A",
    regex: /\w*[nN][tT][mM][dD]\w*/
},
{
    id: 'CO',
    state: 'Colorado',
    UW: 'CTIC',
    split: 15,
    jacket: 'use your best judgment:-)',
    end: { 8.1: 50, 6: 30, 9: '', 4.1: '', 5.1: '' },
    cpl: '$25',
    pud: '5.1/4.1',
    signer: 'Melanie S. Johnson',
    review: ['NFT ABA', 'Owner\'s Aff', 'Gap Aff', 'Marital Status Aff'],
    lps: "Transmital, jacket, CTIC Notice",
    ups: "RATE CALC & POLICY"
},
{
    id: 'AL',
    state: 'Alabama',
    UW: '',
    split: 0,
    jacket: '',
    split: 20,
    end: false,
    cpl: '$25/ $25 (BWR opt.)',
    pud: '5.0 or 5.1',
    signer: 'Melanie S. Johnson',
    review: ['NFT ABA', 'Owner\'s aff', 'Fire Dues Aff'],
    lps: "POLICY MUST BE SIGNED PRIOR TO SENDING",
    ups: "POLICY MUST BE SIGNED PRIOR TO EMAILING TO UW"
},
{
    id: 'DC',
    state: 'District of Columbia',
    UW: 'FATICO',
    split: 13,
    jacket: 'ALTA Short Form Residential Loan Policy (6-17-06; Rev. 4-8-16) (A&B)',
    end: false,
    cpl: '$50',
    pud: '?',
    signer: 'Melanie S. Johnson',
    review: ['NFT ABA', 'Owner\'s Aff', 'Gap Aff', 'Executed Settlement Statement', 'Deed of Trust'],
    lps: "Transmital, jacket",
    ups: "N/A",
    regex: /\w*[nN][tT][dD][cC]\w*/
},
{
    id: 'FL',
    state: 'Florida',
    UW: 'CW',
    split: 30,
    jacket: '?',
    end: { '9': '10% prem' },
    cpl: 'n/a',
    pud: '5.1/4.1',
    signer: 'Melanie S. Johnson',
    review: ['NFT ABA', 'Owner\'s aff', 'Borrower Affidavit (BA)', 'Gap Affidavit & Indemnity (GA)', 'Marital Status (MSA)', '•	Title Affidavit (TA)', 'Indemnity Agreement (IA) [not notarized]', 'Lien Affidavit (LA)', 'Homestead Affidavit (HA)', 'FL Premium Disclosure (FPD) [not notarized]', 'Compliance Agreement (CA)']
},
{
    id: 'GA',
    state: 'Georgia',
    UW: 'FATICO',
    split: 15,
    jacket: 'ALTA Short Form Residential Loan Policy (Rev. 6-16-07) (A&B)',
    end: false,
    cpl: '$50',
    pud: '5.0',
    signer: 'Melanie S. Johnson',
    review: ['NFT ABA', 'Owner\'s aff', 'Security Deed', 'Executed Settlement Statement'],
    lps: "Transmital, jacket",
    ups: "N/A"
},
{
    id: 'IL',
    state: 'Illinois ',
    UW: 'FATICO',
    split: 15,
    jacket: 'ALTA Short Form Residential Loan Policy (Rev. 6-16-07) (A&B)',
    end: false,
    cpl: 'Lender $25; Borrower $25 for sale/$50 for refi; Seller $50',
    pud: '5.1/4.1',
    signer: 'Melanie S. Johnson',
    review: ['NFT ABA', 'Owner\'s aff', 'Marital Status Aff (notarized)', 'Personal Undertaking', 'Deed of Trust', 'Executed Settlement Statement'],
    lps: "Transmital, jacket",
    ups: "N/A"
},
{
    id: 'IN',
    state: 'Indiana',
    UW: 'CTIC',
    split: 15,
    jacket: 'BASIC LOAN – ALTA Short Form Residential Loan Policy 12/03/12_434 – Basic Loan Rates',
    end: true,
    cpl: '15',
    pud: '5.0/4.0',
    signer: 'Melanie S. Johnson',
    review: ['NFT ABA', 'Owner\'s aff', 'ABA (x2 NFTS/NFCU & NFTS/CTS)', 'Gap Aff (notarized) ', 'Mortgagor’s Aff (notarized)', 'Borrower’s Aff (notarized)', 'Homeowner’s Aff (notarized)', 'Tax Benefits Sheet'],
    lps: "Transmital, jacket, CTIC Notice",
    ups: "RATE CALC & POLICY"
},
{
    id: 'KS',
    state: 'Kansas ',
    UW: 'CTIC',
    split: 15,
    jacket: 'REFINANCE LOAN – ALTA Short form Residential Loan Policy 12/03/12 w-KS/MO mod_434 – Refinance Rates',
    end: 'filed rate',
    cpl: 'n/a',
    pud: '5.0- first lien',
    signer: 'Melanie S. Johnson',
    review: ['NFT ABA', 'Owner\'s aff', 'Gap (notarized)', 'Marital Status Affidavit (notarized)', 'Executed Settlement statement', 'Deed of trust']
},
{
    id: 'KY',
    state: 'Kentucky',
    UW: 'CTIC',
    split: 15,
    jacket: 'REFINANCE LOAN – ALTA Short Form Residential Loan Policy 12/03/12 w-KY Mod_434 – REFINANCE RATE',
    end: '$30/',
    cpl: '$50 lender; $25/borrower (optional) (+ lender\'s premium tax [dependant on county], full amount remitted)',
    pud: '5.0/4.0',
    signer: 'Mel',
    review: ['NFT ABA', 'Owner\'s aff', 'Owners Aff (notarized)', 'ABA (x2 NFTS/NFCU & NFTS/CTS)', 'Gap', 'Marital Status Affidavit (notarized)',
        'Cert in Residential Transactions',
        'Aff and Indemnity (notarized)',
        'Executed Settlement Statement', 'Deed of trust']
},
{
    id: 'LA',
    state: 'Louisiana',
    UW: 'CTIC',
    split: 20,
    jacket: 'BASIC LOAN - ALTA Short Form Residential Loan Policy 06/16/07 for LA 04/01/14_452 - Loan Rate',
    end: 'varies per endorsement (commonly used $50 -100); CPL paid directly to UW by attorney',
    cpl: '$25',
    pud: '5.0',
    signer: 'Melanie Johnson',
    review: ['NFT ABA', 'Owner\'s aff', 'Executed Settlement Statement', 'Deed of trust']
},
{
    id: 'ME',
    state: 'Maine',
    UW: 'CTIC',
    split: 20,
    jacket: 'REFINACE LOAN – ALTA Short Form Residential Loan Policy 12/03/12 w-ME Mod_434 – Refinance Rates',
    end: ' 9.3- Residential Endorsement Flat Fee: $75.00 (plus $50 survey aff, subject to split [$40.00 to NFTS, $10.00 to CTIC])',
    cpl: '$25',
    pud: '',
    signer: 'Melanie S. Johnson',
    review: ['NFT ABA', 'Owner\'s aff', 'Gap (notarized)',
        'Survey Aff (notarized)',
        'Residential Mortgage Survey Aff (notarized)',
        'No Open Lien Aff (notarized)',
        'Executed Settlement Statement', 'Deed of trust']
},
{
    id: 'MA',
    state: 'Massachusetts ',
    UW: 'CTIC',
    split: 25,
    jacket: 'BASIC LOAN – ALTA Short Form Residential Loan Policy 06/16/07-342 – Standard Loan Policy',
    end: false,
    cpl: 'n/a',
    pud: '5.0',
    signer: 'Melanie S. Johnson',
    review: ['NFT ABA', 'Owner\'s aff', 'Executed Settlement Statement', 'Deed of trust', 'FTO STATE']
},
{
    id: 'MI',
    state: 'Michigan ',
    UW: 'CTIC',
    split: 15,
    jacket: 'BASIC LOAN – ALTA Short Form Residential Loan Policy 12/03/12_434 – Basic Loan Rates',
    end: false,
    cpl: 'n/a',
    pud: '5.1/4.1',
    signer: 'Melanie S. Johnson',
    review: ['NFT ABA', 'Owner\'s aff', 'Gap (notarized)', ' Marital Status Aff (notarized)', 'Personal Undertaking (notarized)', 'Executed Settlement Statement', 'Deed of trust']
},
{
    id: 'MN',
    state: 'Minnesota ',
    UW: 'CTIC',
    split: 20,
    jacket: 'REFINANCE LOAN - ALTA Short Form Residential Loan Policy 12/03/12_434 - Refinance Loan Rate',
    end: 'some endorsements 10%; some flat $50-200; some at no charge',
    cpl: 'n/a',
    pud: '5.0/4.0',
    signer: 'Melanie S. Johnson',
    review: ['NFT ABA', 'Owner\'s aff', 'Gap (notarized)', 'Marital Status Affidavit (notarized)', 'Aff Regarding Seller (notarized)', 'Executed Settlement Statement', 'Deed of trust']
},
{
    id: 'MS',
    state: 'Mississippi ',
    UW: 'CTIC',
    split: 20,
    jacket: 'Mortgage Original Rate OR Reissue Loan Rate (as applicable)  BASIC LOAN – ALTA Short Form Residential Loan Policy 12/03/12_434 – Mortgage Original Rate OR REISSUE LOAN - ALTA Short Form Residential Loan Policy 12/03/12_434 – Reissue Loan Rate',
    end: 'No charge on residential endorsements except ALTA 7 is $100',
    cpl: '$50',
    pud: '5.1/4.1',
    signer: 'Melanie S. Johnson',
    review: ['NFT ABA', 'Owner\'s aff', ' Gap (notarized)', 'Marital Status Affidavit', 'Indemnity and Hold Harmless Aff (notarized)', 'Executed Settlement Statement', 'Deed of trust']
},
{
    id: 'MO',
    state: 'Missouri ',
    UW: 'FATICO',
    split: 50,
    jacket: 'First American – must be a licensed agent in the state for refi and purchase',
    end: 'Missouri does not presently charge for any endorsements All filed endorsements except for the following are issued for a work fee only  No premium or risk rate applies*',
    cpl: '%25',
    pud: '5.1/4.1',
    signer: 'Melanie Johnson',
    review: ['NFT ABA', 'Owner\'s aff', 'Owner Affidavit (state specific)', ' Gap', 'Notice of Closing or Settlement Risk, Form T-3 (only if no policy issued)', 'Title Insurance & Service Charge Disclosure',
        'NFT ABA + MO AfB',
        'Marital Status', 'CTS added: City Nuisance Fee Disclosure & Hold Harmless', 'Executed Settlement Statement', 'Deed of trust']
},
{
    id: 'NC',
    state: 'North Carolina',
    UW: 'FATICO',
    split: 15,
    jacket: 'ALTA Short Form Residential Loan Policy (Rev. 6-16-07) (A&B)',
    end: '$21 each for 8.1, 9 and PUD—no charge for all others *Closing services insurance premium is an additional fee added to the base premium (refer to First American rate calculator) *Commitment Premium is $15',
    cpl: 'n/a',
    pud: '5.0',
    signer: 'Melanie S. Johnson',
    review: ['NFT ABA', 'Owner\'s aff', 'Executed Settlement Statement', 'Deed of trust']
},
{
    id: 'NE',
    state: 'Nebraska',
    UW: 'CTIC',
    split: 15,
    jacket: 'REFINANCE LOAN – ALTA Short Form Residential Loan Policy 12/03/12 w-NE Mod_434 – Refinance Rate',
    end: '$25 Each',
    cpl: '$25',
    pud: '',
    signer: 'Melanie S. Johnson',
    review: ['NFT ABA', 'Owner\'s aff', 'Executed Settlement Statement', 'Deed of trust']
},
{
    id: 'NH',
    state: 'New Hampshire',
    UW: 'CTIC',
    split: 20,
    jacket: 'BASIC LOAN – ALTA Short Form Residential Loan Policy-Current Violations 04/02/15_492 – Original Mortgage Rate',
    end: 'Flat package rate for survey and all endorsements\n Standard loan $125\nExpanded $175\n',
    cpl: '$25',
    pud: '5.1/4.1',
    signer: 'Melanie S. Johnson',
    review: ['NFT ABA', 'Owner\'s aff', 'Owners Aff', 'ABA (x2 NFTS/NFCU & NFTS/CTS)', 'Gap Aff (notarized)', 'Gap Indemnity (notarized)', 'Marital Status Aff', ' Policy Aff (/expanded coverage policy aff) (notarized)', 'Survey Aff (notarized)', 'Executed Settlement Statement', 'Deed of trust']
},
{
    id: 'NJ',
    state: 'New Jersey',
    UW: 'CTIC',
    split: 13,
    jacket: 'REFINANCE LOAN - ALTA Short Form Residential Loan Policy-Current Violations 04/02/15 w-NJRB Mod 07/01/2018_506 – Refinance Loan Rates',
    end: '$25 each unless Enhanced policy is purchased *If Enhanced Lender’s policy is purchased then there are NO charges for endorsements however simultaneous issue fee is still applicable',
    cpl: '$75',
    pud: '5.1/4.1',
    signer: 'Melanie S. Johnson',
    review: ['NFT ABA', 'Owner\'s aff', 'Gap (notarized)', 'Marital Status Aff (notarized)', 'Aff of Title (notarized)', 'Executed Settlement Statement', ' Deed of trust']
},
{
    id: 'OH',
    state: 'Ohio',
    UW: 'FATICO',
    split: 10,
    jacket: 'ALTA Short Form Residential Loan Policy (Rev. 6-16-07) (A&B)',
    end: 'varies up to $150 (reference RC)',
    cpl: '$40 lender; $20 borrower (optional)',
    pud: '5.0/4.0',
    signer: 'Melanie Johnson',
    review: ['NFT ABA', 'Owner\'s aff', ' Marital Status Aff (notarized)', 'Closing Disclosure', 'Notice of Availability and Offer of Closing Protection Coverage/Offer of CPL', 'Affidavit of No New Improvements (notarized)', 'Executed Settlement Statement', 'Deed of trust']
},
{
    id: 'PA',
    state: 'Pennsylvania ',
    UW: 'CW',
    split: 0,
    jacket: 'NA',
    end: false,
    cpl: 'NA',
    pud: 'NA',
    signer: '?',
    review: ['NFT ABA', 'Owner\'s aff', 'Witness not required on Deed', ' POA Alive & Well Affidavit does not need to record', ' Outsale Affidavit is not required for Purchase Money MTG', ' Survey Waiver is not required per UW', ' NOP Judgments are listed in owner affidavit', 'Executed Settlement Statement', 'Deed of trust']
},
{
    id: 'RI',
    state: 'Rhode Island',
    UW: 'CTIC',
    split: 20,
    jacket: 'REFINANCE LOAN - ALTA Short Form Residential Loan Policy 06/16/07_343 – Reduced Rates – Refinance Mortgages',
    end: 'Endorsements 6.0, 6.1, and Alta 9 $25; Survey Deletion $25.00 (100% of endorsement fees go to UW)',
    cpl: '$35',
    pud: '4.0',
    signer: 'Melanie S. Johnson',
    review: ['NFT ABA', 'Owner\'s aff', 'Tax cert (municipal lien cert)', 'Executed Settlement Statement', 'Deed of trust']
},
{
    id: 'SC',
    state: 'South Carolina',
    UW: 'CTIC',
    split: 40,
    jacket: 'ALTA Short Form Residential Loan Policy 12/03/12 w/SC NS Mod_434',
    end: false,
    cpl: '$35',
    pud: '5.0',
    signer: 'Melanie S. Johnson',
    review: ['NFT ABA', 'Owner\'s aff', 'Executed Settlement Statement', 'Deed of trust', 'FTO state']
},
{
    id: 'TN',
    state: 'Tennessee ',
    UW: 'CW',
    split: 15,
    jacket: '[select agent CLTIC] Loan Original Rates  BASIC LOAN – ALTA Short Form Residential Loan Policy 12/03/12 for TN_434 – Loan Original Rates',
    end: false,
    cpl: '$50',
    pud: '5.0',
    signer: 'MEL',
    review: ['RISK RATE', 'NFT ABA', 'Owner\'s aff', 'Gap ', 'Marital Status Affidavit', 'Executed Settlement Statement', 'Deed of trust']
},
{
    id: 'WV',
    state: 'West Virginia ',
    UW: 'CW',
    split: 15,
    jacket: 'BASIC LOAN – ALTA Short Form Residential Loan Policy 12/03/12 w-WV Mod_434 – Loan Policy Rate OR REISSUE LOAN – ALTA Short Form Residential Loan Policy 12/03/12 w-WV Mod_434 – Reissue Loan Rate',
    end: '8.1 is $15 and included in split; $50 commitment included and subject to split (included in premium for split)',
    cpl: '$50',
    pud: '5.1/ 9.3',
    signer: 'Melanie S. Johnson',
    review: ['Owner\'s aff', 'Executed Settlement Statement', 'Deed of trust']
},
{
    id: 'WI',
    state: 'Wisconsin',
    UW: 'CTIC',
    split: 15,
    jacket: 'REFINANCE LOAN – ALTA Short Form Residential Loan Policy 12/03/12 w-WI Mod_434 – Original Policy Rates - 2013',
    end: 'Alta 6 and Alta 7 are $125, no charge for all others',
    cpl: 'na',
    pud: '5.0',
    signer: 'Mel',
    review: ['NFT ABA', 'Owner\'s aff', 'Gap', 'Marital Status Affidavit', 'Owner’s Affidavit as to Liens and Possession', 'Executed Settlement Statement', 'Deed of trust']
}


];
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

$(function () {

    function displayStates() {
        var output = '<option value=""><strong>choose state</strong></option>';

        for (var i = 0; i < data.length; i++) {
            output += '<option>' + data[i].state + '</option>';
        }

        document.getElementById('stateName').innerHTML = output;
    };
    function displayList() {
        var list = document.getElementById('myUL');
        list.addEventListener('click', function (ev) {
            if (ev.target.tagName === 'LI') {
                ev.target.classList.toggle('checked');
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
        }
    };
    //import input values from storage on open
    function getStoredData() {
        var stored = {};
        stored.stateName = localStorage.getItem('stateName');
        stateName = stored.stateName;
        stored.filesList = localStorage.getItem('filesList');
        stored.fileNum = localStorage.getItem('fileNum');
        stored.address = localStorage.getItem('address');
        stored.vesting = localStorage.getItem('vesting');
        stored.loanAmount = localStorage.getItem('loanAmount');
        stored.type = localStorage.getItem('type');
        stored.date = localStorage.getItem('date');
        stored.optEndOne = localStorage.getItem('optEndOne');
        stored.optEndTwo = localStorage.getItem('optEndTwo');
        stored.optEndThree = localStorage.getItem('optEndThree');
        stored.premium = localStorage.getItem('premium');
        stored.costOne = localStorage.getItem('costOne');
        stored.costTwo = localStorage.getItem('costTwo')
        stored.costThree = localStorage.getItem('costThree');
        stored.costFour = localStorage.getItem('costFour');
        stored.costFive = localStorage.getItem('costFive')
        stored.optEndTwo = localStorage.getItem('optEndTwo');
        stored.stateName = localStorage.getItem('stateName');
        stored.date = localStorage.getItem('date');
        stored.checkNum = localStorage.getItem('checkNum');
        stored.finished = localStorage.getItem('finished');
        console.log(stored);

        // var workingFile = stored.filesList[0];
        $('#stateName').val(stored.stateName).val();
        $('#fileNum').val(stored.fileNum).val();
        $('#checkNum').val(stored.checkNum).val();
        $('#address').val(stored.address).val();
        $('#vesting').val(stored.vesting).val();
        $('#loanAmount').val(stored.loanAmount).val();
        $('#type').val(stored.type).val();
        $('#optEndOne').val(stored.optEndOne).val();
        $('#optEndTwo').val(stored.optEndTwo).val();
        $('#optEndThree').val(stored.optEndThree).val();
        $('#premium').val(stored.premium).val();
        $('#costOne').val(stored.costOne).val();
        $('#costTwo').val(stored.costTwo).val();
        $('#costThree').val(stored.costThree).val();
        $('#costFour').val(stored.costFour).val();
        $('#costFive').val(stored.costFive).val();
        $('#date').val(stored.date).val();

    };
    function updateState(stateName) {
        $('#stateName').val(stateName).val();
        var list = document.getElementById('myUL');
        list.innerHTML = '';  //clears list
        localStorage.setItem('stateName', stateName);
        stateArray = find(data, index => index.state === stateName);
        //console.log(stateArray);
        //updates variable stateArray to the new state

        reviewList = (stateArray) ? stateArray.review : [];//sets value of review list to new state
        //console.log(reviewList);
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
        //console.log(stateArray);
        $('#split').text(`UW:${stateArray ? stateArray.UW : ''} 
split:${stateArray ? stateArray.split : ''} 
CPL:${stateArray ? stateArray.cpl : ''} 
Rider:${stateArray ? stateArray.pud : ''}`
        );

        var lps = (stateArray) ? data[data.findIndex(data => data.state === stateName)].lps : [];
        //console.log(LPS);
        $("#lps").attr("title", lps);
        var ups = (stateArray) ? data[data.findIndex(data => data.state === stateName)].ups : [];;
        var jacket = (stateArray) ? data[data.findIndex(data => data.state === stateName)].jacket : '';
        //console.log(jacket);
        $("#ups").attr("title", ups);
        $("#jacket").attr("title", jacket);
    };
    function checkCalc() {
        //captures numbers from inputs 
        var premium = parseFloat($('#premium').val());
        if (isNaN(premium)) {
            premium = 0;
        }
        var costOne = parseFloat($('#costOne').val());
        if (isNaN(costOne)) {
            costOne = 0;
        }
        var costTwo = parseFloat($('#costTwo').val());
        if (isNaN(costTwo)) {
            costTwo = 0;
        }
        var costThree = parseFloat($('#costThree').val());
        if (isNaN(costThree)) {
            costThree = 0;
        }
        var costFour = parseFloat($('#costFour').val());
        if (isNaN(costFour)) {
            costFour = 0;
        }
        var costFive = parseFloat($('#costFive').val());
        if (isNaN(costFive)) {
            costFive = 0;
        }
        var total = parseFloat(premium) + parseFloat(costOne) + parseFloat(costTwo) + parseFloat(costThree) + parseFloat(costFour) + parseFloat(costFive);
        var totalFixed = total * split;
        var UWcheck = totalFixed.toFixed(2);
        $('#UWsplit').val(UWcheck).val();
    };
    function newElement() {
        var li = document.createElement('li');
        var inputValue = document.getElementById('myInput').value;
        var t = document.createTextNode(inputValue);
        li.prepend(t);
        if (inputValue === '') {
            alert('add curative items');
        } else {
            document.getElementById('myUL').prepend(li);
        }
        document.getElementById('myInput').value = '';

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
    function clear() {

        localStorage.setItem('fileNum', '');
        localStorage.setItem('address', '');
        localStorage.setItem('vesting', '');
        localStorage.setItem('loanAmount', '');
        localStorage.setItem('type', '');
        localStorage.setItem('date', '');
        localStorage.setItem('optEndOne', '');
        localStorage.setItem('optEndTwo', '');
        localStorage.setItem('optEndThree', '');
        localStorage.setItem('premium', '');
        localStorage.setItem('costOne', '');
        localStorage.setItem('costTwo', '')
        localStorage.setItem('costThree', '');
        localStorage.setItem('costFour', '');
        localStorage.setItem('costFive', '')
        localStorage.setItem('stateName', '');
        localStorage.setItem('date', '');
        localStorage.setItem('checkNum', '');


        $('#fileNum').val('').val();
        $('#address').val('').val();
        $('#vesting').val('').val();
        $('#loanAmount').val('').val();
        $('#type').val('').val();
        $('#date').val('').val();
        $('#optEndOne').val('').val();
        $('#optEndTwo').val('').val();
        $('#optEndThree').val('').val();
        $('#premium').val('').val();
        $('#costOne').val('').val();
        $('#costTwo').val('').val();
        $('#costThree').val('').val();
        $('#costFour').val('').val();
        $('#costFive').val('').val();
        $('#date').val('').val();
        $('#checkNum').val('').val();
        updateState(stateName);
        if (stateArray.end != false) {
            $('#bar').toggle(display)
            checkCalc()
        } else {
            checkCalc()
        };

        console.log("values cleared");
    };

    //************event handlers */
    $('#premium').on('change mouseup mousedown mouseout keydown', function () {
        checkCalc()
        var premium = $(this).val();
        localStorage.setItem('premium', premium);
    });
    $('#costOne').keyup(function () {
        checkCalc();
        var costOne = $(this).val();
        localStorage.setItem('costOne', costOne);
    });
    $('#costTwo').keyup(function () {
        checkCalc()
        var costTwo = $(this).val();
        localStorage.setItem('costTwo', costTwo);
    });
    $('#costThree').keyup(function () {
        checkCalc()
        var costThree = $(this).val();
        localStorage.setItem('costThree', costThree);
    });
    $('#costFour').keyup(function () {
        checkCalc();
        var costFour = $(this).val();
        localStorage.setItem('costFour', costFour);
    });
    $('#costFive').keyup(function () {
        checkCalc();
        var costFive = $(this).val();
        localStorage.setItem('costFive', costFive);
    });

    $('#issue').on('click', function () {
        var fileNumber = $('#fileNum').val();
        console.log(fileNumber);
        if (fileNumber >= 0) {
            var files = localStorage.getItem('filesList');
            var filesList = files.split(',');
            console.log(filesList);
            $('#fileNum').val(filesList[0]).val();

        } else {   /// >=0 is false if file number is in field

            var files = localStorage.getItem('filesList');
            var filesList = files.split(',');
            var currentList = filesList;
            if (fileNumber == currentList[0]) {
                finishedList.push(fileNumber);
                console.log(finishedList);
                localStorage.setItem('finished', finishedList);
                $('#fileNum').val('').val();
            }
            //console.log(data.finished);
            /* if(data.finished){
             var finishedList =data.finished;    
             console.log(finishedList); 
             }else{
              var finishedList =[];
              console.log("no finished files stored yet")
             };*/
            var issuedFile = currentList.shift();
            console.log(issuedFile);
            finishedList.push(issuedFile);
            console.log(finishedList);
            localStorage.setItem('filesList', currentList);
            localStorage.setItem('finished', finishedList);
            $('#fileNum').val(currentList[0]).val();
            //stateSelector(currentList[0]);    

        };
    });
    $('#fileNum').on('change', function () {
        var fileNum = $(this).val();
        console.log(fileNum)
        localStorage.setItem('fileNum', fileNum);
    });
    $('#stateName').change(function () {
        //sets statename to input    
        stateName = $(this).val();
        updateState(stateName);
    });
    $('#clear').on('click', function () {
        //sets all variables to ''
        clear();
        console.log('storage cleared')
    });
    $('#add').on('click', function () {

        console.log('add clicked')
        //sends input value to newElement function to be added to list; 
        var e = $(this).val();
        newElement(e);
    });//enter key clicks add 
    $('#myInput').keyup(function (event) {
        if (event.keyCode === 13) {
            $('#add').click();
        }
    });
    $('#address').keyup(function () {
        var address = $(this).val();
        localStorage.setItem('address', address);
    });
    $('#vesting').keyup(function () {
        var vesting = $(this).val();
        localStorage.setItem('vesting', vesting);
    });
    $('#loanAmount').keyup(function () {
        var loanAmount = $(this).val();
        localStorage.setItem('loanAmount', loanAmount);
    });
    $('#type').on('change', function () {
        var type = $(this).val()
        //   alert(type);        
        localStorage.setItem('type', type);
        var oneMOretime = localStorage.getItem('type')
        console.log(oneMOretime);
    });
    $('#date').on('change', function () {
        var date = $(this).val();
        localStorage.setItem('date', date);
    });
    $('#checkNum').on('change mouseup mousedown mouseout keydown', function () {
        var checkNum = $(this).val();
        localStorage.setItem('checkNum', checkNum);
    });
    $('#optEndOne').keyup(function () {
        var optEndOne = $(this).val();
        localStorage.setItem('optEndOne', optEndOne);
    });
    $('#optEndTwo').keyup(function () {
        var optEndTwo = $(this).val();
        localStorage.setItem('optEndTwo', optEndTwo);
    });
    $('#optEndThree').keyup(function () {
        var optEndThree = $(this).val();
        console.log(optEndThree);
        localStorage.setItem('optEndThree', optEndThree);
    });
    //calls hide item to x delete list item
    $('#myUL').on('click', () =>
        hideItem()
    );

    //run on open

    displayStates();
    displayList();
    getStoredData();
    checkCalc();
    updateState(stateName);
    //newElement();
    hideItem()

});