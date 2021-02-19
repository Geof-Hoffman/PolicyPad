// gets field values from localStorage
var fileNumVal = (localStorage.fileNum) ? localStorage.fileNum : '';
var stateNameVal = (localStorage.stateName) ? localStorage.stateName : '';
var myInputVal = (localStorage.myInput) ? localStorage.myInput : '';
var vestingVal = (localStorage.vesting) ? localStorage.vesting : '';
var addressVal = (localStorage.address) ? localStorage.address : '';
var loanAmtVal = (localStorage.loanAmount) ? localStorage.loanAmount : '';
var loanTypeVal = (localStorage.type) ? localStorage.type : '';
var loanDateVal = (localStorage.date) ? localStorage.date : '';
var optEndOneVal = (localStorage.optEndOne) ? localStorage.optEndOne : '';
var optEndTwoVal = (localStorage.optEndTwo) ? localStorage.optEndTwo : '';
var optEndThreeVal = (localStorage.optEndThree) ? localStorage.optEndThree : '';
var premiumVal = (localStorage.premium) ? localStorage.premium : '';
let uwCheckVal;
let display;
var checkNumVal = (localStorage.checkNum) ? localStorage.checkNum : '';
var costOneVal = (localStorage.costOne) ? localStorage.costOne : '';
var costTwoVal = (localStorage.costTwo) ? localStorage.costTwo : '';
var costThreeVal = (localStorage.costThree) ? localStorage.costThree : '';
var costFourVal = (localStorage.costFour) ? localStorage.costFour : '';
var costFiveVal = (localStorage.costFive) ? localStorage.costFive : '';
//gets file lists from local storage
var files = (localStorage.filesList) ? localStorage.filesList.split(',') : [];
var issuedFiles = (localStorage.issuedFiles) ? localStorage.issuedFiles.split(',') : [];
var problemFiles = (localStorage.problemFiles) ? JSON.parse(localStorage.problemFiles) : [];
//assign variables to field names 
var fileNumField = document.getElementById('fileNum');
var stateNameField = document.getElementById('stateName');
var myInputField = document.getElementById('myInput');
var addressField = document.getElementById('address');
var vestingField = document.getElementById('vesting');
var loanAmountField = document.getElementById('loanAmount');
var loanTypeField = document.getElementById('type');
var loanDateField = document.getElementById('date');
var optEndOneField = document.getElementById('optEndOne');
var optEndTwoField = document.getElementById('optEndTwo');
var optEndThreeField = document.getElementById('optEndThree');
var premiumField = document.getElementById('premium');
var uwCheckField = document.getElementById('UWsplit');
var checkNumField = document.getElementById('checkNum');
var costOneField = document.getElementById('costOne');
var costTwoField = document.getElementById('costTwo');
var costThreeField = document.getElementById('costThree');
var costFourField = document.getElementById('costFour');
var costFiveField = document.getElementById('costFive');
var endorsementCalcDiv = document.getElementById("bar"); //div with endorsement cost input fields, used to hide div if no charge by state.
var close = document.getElementsByClassName('close'); // class of dynamic list items close button (used for deleting items from list)

//Set field values 
fileNumField.value = fileNumVal;
myInputField.value = myInputVal;
addressField.value = addressVal;
vestingField.value = vestingVal;
loanAmountField.value = loanAmtVal;
loanTypeField.value = loanTypeVal;
loanDateField.value = loanDateVal;
optEndOneField.value = optEndOneVal
optEndTwoField.value = optEndTwoVal;
optEndThreeField.value = optEndThreeVal;
premiumField.value = premiumVal;
uwCheckField.value = '';
checkNumField.value = checkNumVal;
costOneField.value = costOneVal;
costTwoField.value = costTwoVal;
costThreeField.value = costThreeVal;
costFourField.value = costFourVal;
costFiveField.value = costFiveVal;

var btnList = (localStorage.buttonList) ? JSON.parse(localStorage.buttonList) : buttons;
var list = document.getElementById('myUL');// checklist items
var myNodelist = document.getElementsByTagName('LI');
let split;
var list = document.getElementById('myUL');
var data = (localStorage.data) ? (localStorage.data) : [{
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
var stringifyData = JSON.stringify(data);
//console.log(stringifyData);
localStorage.setItem('defaultData', stringifyData);
//console.log(localStorage.data);
data = (localStorage.data) ? JSON.parse(localStorage.data) : JSON.parse(localStorage.defaultData);
var buttons = [{
    btn: "Melanie",
    txt: "Melanie S. Johnson",
    tip: "",

},
{
    btn: "sub",
    txt: "Said deed of trust is secondary and subordinate to the lien of the insured deed of trust set forth under Schedule A hereof.",
    tip: "Subordination Language"
},
{
    btn: "tran",
    txt: "tran",
    tip: "searching or trans... doc"
},
{
    btn: "ctic",
    txt: "ctic",
    tip: "searching or CTIC notice... doc",

},
{
    btn: "LPS",
    txt: "LOAN POLICY SET",
    tip: ""
},
{
    btn: "UW SET",
    txt: "UW SET",
    tip: ""
},
{
    btn: "FNF Policy Email",
    txt: "PI-StarterRepositoryShipments@propertyinsight.biz",
    tip: "",

},
{
    btn: "jacket",
    txt: "Said deed of trust is secondary and subordinate to the lien of the insured deed of trust set forth under Schedule A hereof.",
    tip: "Subordination Language"
}];
var stored = {};
//input change event handlers
document.addEventListener('change', (e) => {
    if (e.target == stateNameField) {
        stateNameVal = e.target.value;
        updateState(stateNameVal);
    }
    if (e.target == loanTypeField) {
        loanTypeVal = e.target.value;
        console.log(`change event triggered with ${e.target.value} for value`);
        localStorage.setItem('type', loanTypeVal);
    }
});
//input event handlers
document.addEventListener('input', (e) => {
    if (e.target == fileNumField) {
        fileNumVal = e.target.value;
        localStorage.setItem('fileNum', fileNumVal);
    }
    if (e.target == myInputField) {
        myInputVal = e.target.value;
        console.log(myInputVal);
        localStorage.setItem('myInput', myInputVal);
    }
    if (e.target == addressField) {
        addressVal = e.target.value;
        localStorage.setItem('address', addressVal);
    }
    if (e.target == vestingField) {
        vestingVal = e.target.value;
        localStorage.setItem('vesting', vestingVal);
    }
    if (e.target == loanAmountField) {
        loanAmountVal = e.target.value;
        localStorage.setItem('loanAmount', loanAmountVal);
    }

    if (e.target == loanDateField) {
        loanDateVal = e.target.value;
        console.log(loanDateVal);
        localStorage.setItem('date', loanDateVal);
    }
    if (e.target == loanTypeField) {
        console.log(`input event triggered with ${e.target.value} for value`);
        loanTypeVal = e.target.value;
        localStorage.setItem('type', loanTypeVal);
    }
    if (e.target == optEndOneField) {
        optEndOneVal = e.target.value;
        localStorage.setItem('optEndOne', optEndOneVal);
    }
    if (e.target == optEndTwoField) {
        optEndTwoVal = e.target.value;
        localStorage.setItem('optEndTwo', optEndTwoVal);
    }
    if (e.target == optEndThreeField) {
        optEndThreeVal = e.target.value;
        localStorage.setItem('optEndThree', optEndThreeVal);
    }
    if (e.target == premiumField) {
        console.log('premium fild event triggered')
        premiumVal = e.target.value;
        localStorage.setItem('premium', premiumVal);
        checkCalc();
    }
    if (e.target == uwCheckField) {
        uwCheckVal = e.target.value;
        console.log(uwCheckVal);
    }
    if (e.target == checkNumField) {
        checkNumVal = e.target.value;
        localStorage.setItem('checkNum', checkNumVal);
    }
    if (e.target == costOneField) {
        costOneVal = e.target.value;
        checkCalc();
        localStorage.setItem('costOne', costOneVal);
    }
    if (e.target == costTwoField) {
        costTwoVal = e.target.value;
        checkCalc()
        localStorage.setItem('costTwo', costTwoVal);
    }
    if (e.target == costThreeField) {
        costThreeVal = e.target.value;
        console.log(costThreeVal);
        checkCalc()
        localStorage.setItem('costThree', costThreeVal);
    }
    if (e.target == costFourField) {
        costFourVal = e.target.value;
        checkCalc();
        localStorage.setItem('costFour', costFourVal);
    }
    if (e.target == costFiveField) {
        costFiveVal = e.target.value;
        checkCalc();
        localStorage.setItem('costFive', costFiveVal);
    }
});
//click event handlers
document.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
    if (ev.target.tagName === 'SPAN') {
        hideItem(ev.target);
    }
    if (ev.target.matches('button')) {
        copyButtonDataValToClipBoard(ev)

    }
    if (ev.target.id === ('add')) {
        //sends input value to newElement function to be added to list; 
        myInputVal = ev.target.value;
        console.log(myInputVal);
        newElement(localStorage.myInput);
    }
    if (ev.target.id === ('myUL')) {
        hideItem()
        console.log('list Item clicked')
    }
    if (ev.target.id === ('issue')) {
        console.log('Issue button clicked')

        function issueFileNumber() {
            var issuedList= issuedFiles;            
            var filesList = files;
            
            // when issue is clicked, if file number and file list, 
            if (fileNumVal && filesList) {
                // - move issued file number to issued list, 
                // - get new file number and remove from list
               
                // - put new file number in filenumber field
                if (fileNumVal === fileslist[0]) {
                    var oldFile = fileslist.shift();
                    var newFile = fileslist[0];
                }
                if (fileNumVal != filesList[0]) {
                    var oldFile = fileNumVal;
                    var newFile = fileslist[0];
                }
                fileNumField.value = newFile;
                issuedList.push(oldFile);
                var stringifiedFilesList = JSON.stringify(fileslist);
                var stringifiedIssuedList = JSON.stringify(IssuedList);
                localStorage.setItem('filesList',stringifiedFilesList)
                localStorage.setItem('issuedList', stringifiedIssuedList)
                // - notify, (issued file added to issued list)     
            }
        }
        console.log(fileNumVal);
        var filesList = files
        var newFile = filesList.shift();

        if (!fileNumVal) {
            fileNumField.value = (filesList) ? newFile : '';
            localStorage.setItem('files', filesList);
            console.log(newFile);
            console.log(localStorage.files)
        }
        if (fileNumVal) {
            issuedFiles.push(fileNumVal);
            fileNumField.value = (filesList) ? newFile : '';
            localStorage.setItem('files', filesList);
            console.log(newFile);
            console.log(localStorage.files)

            ///put old file in isssued files list
            //get new file number
        }
        // 
        // localStorage.setItem('issuedFiles', issuedFiles);




        else {
            console.log(fileNumVal)  /// >=0 is false if file number is in field

            /* var files = localStorage.getItem('filesList');
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
              };
             var issuedFile = currentList.shift();
             console.log(issuedFile);
             finishedList.push(issuedFile);
             console.log(finishedList);
             localStorage.setItem('filesList', currentList);
             localStorage.setItem('finished', finishedList);
             $('#fileNum').val(currentList[0]).val();
             //stateSelector(currentList[0]);    
     
         };*/
        }
    }
    if (ev.target.id === ('clear')) {
        clear();
        console.log('storage cleared')
    }

});
$('#myInput').keyup(function (event) {
    if (event.keyCode === 13) {
        $('#add').click();
    }
});
// utility function used for finding indexes or arrays by value
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
};
//Displays state dropdown menu
function displayStates() {
    var stateOptionsOutput = '<option value=""><strong>choose state</strong></option>';
    for (var i = 0; i < data.length; i++) {
        stateOptionsOutput += '<option>' + data[i].state + '</option>';
    }
    document.getElementById('stateName').innerHTML = stateOptionsOutput;
    if (localStorage.stateName) {
        stateNameField.value = localStorage.stateName;
    }

}; displayStates();
function createButtonsFromStoredData() {
    setFileNumDataVal();
    var buttonsDiv = document.getElementById('buttonsDiv');
    buttonsDiv.innerHTML = "";
    for (var i = 0; i < btnList.length; i++) {   //adds buttons dynamically from stored values       
        // Create DOM element
        var btn = document.createElement('button');
        // Set text of element
        //btn.value = buttons[i].btn;
        btn.innerHTML = btnList[i].btn;
        btn.setAttribute("data-val", btnList[i].txt);
        btn.setAttribute("title", btnList[i].tip);
        btn.setAttribute("class", "copyBtn")
        btn.setAttribute("data-toggle", "tooltip")
        // Append this element to its parent
        buttonsDiv.appendChild(btn);
    }

}; createButtonsFromStoredData();
function makeList(stateArray) {
    var tempList = [];
    list.innerHTML = '';  //clears list     
    var reviewList = (stateArray) ? stateArray.review : [];
    for (var i = 0; i < reviewList.length; i++) {
        tempList.unshift(reviewList[i])
    }
    tempList.forEach(listItem => newElement(listItem));
};
function newElement(listItem) {
    var li = document.createElement('li');
    var t = document.createTextNode(listItem);
    var span = document.createElement('SPAN');
    var txt = document.createTextNode('\u00D7');
    //adds close class to x and adds it to list item
    span.className = 'close';
    span.appendChild(txt);
    li.prepend(t);
    li.appendChild(span);
    list.prepend(li);
    myInputField.value = '';
};
function updateState(stateName) {
    localStorage.setItem('stateName', stateName);
    stateArray = find(data, index => index.state === stateName);
    split = (stateArray) ? stateArray.split / 100 : 0;
    makeList(stateArray);

    $('#split').text(`UW:${stateArray ? stateArray.UW : ''} 
    split:${stateArray ? stateArray.split : ''} 
    CPL:${stateArray ? stateArray.cpl : ''} 
    Rider:${stateArray ? stateArray.pud : ''}`
    );

    var lps = (stateArray) ? data[data.findIndex(data => data.state === stateName)].lps : [];
    var ups = (stateArray) ? data[data.findIndex(data => data.state === stateName)].ups : [];;
    var jacket = (stateArray) ? data[data.findIndex(data => data.state === stateName)].jacket : '';
    display = (stateArray) ? stateArray.end : false;
    updateLpsButton(lps);
    updateUwsButton(ups);
    updateJacketButton(jacket);
    toggleEndorsementCalc(display);
    checkCalc();

    $("#lps").attr("title", lps);
    $("#ups").attr("title", ups);
    $("#jacket").attr("title", jacket);


}; updateState(stateNameVal);
function toggleEndorsementCalc(display) {
    console.log('toggleEndorsmentCalc Ran')
    if (display) {
        endorsementCalcDiv.style.display = 'block';
        costOneField.value = localStorage.costOne;
        costTwoField.value = localStorage.costTwo;
        costThreeField.value = localStorage.costThree;
        costFourField.value = localStorage.costFour;
        costFiveField.value = localStorage.costFive;
        checkCalc();

    }
    if (!display) {
        endorsementCalcDiv.style.display = 'none';
        costOneField.value = '';
        costTwoField.value = '';
        costThreeField.value = '';
        costFourField.value = '';
        costFiveField.value = '';
        checkCalc();
    }

};
function hideItem() {
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = 'none';
        }
    }
};
function checkCalc() {
    //captures numbers from inputs 
    // console.log('checkCalc ran');
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
    uwCheckField.value = UWcheck;

};
checkCalc();
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
    localStorage.setItem('date', '');
    localStorage.setItem('checkNum', '');
    localStorage.setItem('myInput', '');

    location.reload();

    if (stateArray.end != false) {
        $('#bar').toggle(display)
        checkCalc()
    } else {
        checkCalc()
    };

    console.log("values cleared");
};
function copyButtonDataValToClipBoard(ev) {
    var data = ev.target.getAttribute('data-val');
    var dummy = $('<input>').val(data).appendTo('body').select();
    document.execCommand('copy');
    copyNotification(data);
    dummy.remove();
};
function copyNotification(data) {
    const myNotification = new Notification('', {
        body: `\"${data}\" copied to clipboard`
    })
    myNotification.onclick = () => {
        console.log('Notification clicked')
    }
};

//functions that aren't working yet
//updates LPS button with state specific LPS
function updateLpsButton(lps) {
    console.log(`updateLpsButton called with ${lps}`);
};//
function updateUwsButton(uws) {
    console.log(`updateUwsButton called with ${uws}`)
};
function updateJacketButton(jacket) {
    console.log(`updateJacketButton called`)
};
function setFileNumDataVal() {
    console.log('setFileNumDataVal called')
    /*
 var FileNumBtnIndex = btnList.findIndex((data) => data.btn == "File#");
 console.log(FileNumBtnIndex);
 btnList[FileNumBtnIndex].txt = localStorage.getItem('fileNum');
 var stringifyBtnList = JSON.stringify(btnList);
 localStorage.setItem('buttonList', stringifyBtnList)
 */
};










