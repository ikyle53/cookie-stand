'use strict';

/*Global variables and functions----------------------------------------------------------------*/

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
let locations = [];
let grandTotal = [];

/*Constainer for my list items*/
let body = document.getElementById('body');
const section = document.createElement('section');
body.appendChild(section);

/*Object literals converted via constructor fx/////////////////////////////////////////////////*/
function Store(location, custMin, custMax, average) {
    this.location = location;
    this.custMin = custMin;
    this.custMax = custMax;
    this.average = average;
    this.total = 0;
    this.cookieArray = [];

    locations.push(this);
}

/* New Objects /////////////////////////////////////////////////////////////////////////////////*/
let seattleStore = new Store('Seattle', 23, 65, 6.3);
let tokyoStore = new Store('Tokyo', 3, 24, 1.2);
let dubaiStore = new Store('Dubai', 11, 38, 3.7);
let parisStore = new Store('Paris', 20, 38, 2.3);
let limaStore = new Store('Lima', 2, 16, 4.6);

//************Calculates the hourly number of cookies
Store.prototype.cookieCalc = function () {
    for (let i = 0; i < hours.length; i++) {
        let calc = Math.floor(this.average * Math.floor(Math.random() * (this.custMax - this.custMin + 1) + this.custMin));
        this.cookieArray.push(calc);
        this.total += calc;
    }
}

/* HTML construction zone ///////////////////////////////////////////////////////////////////////*/
const table = document.createElement('table');  //Table beginning
section.appendChild(table);

const tableHead = document.createElement('thead'); //Table head
table.appendChild(tableHead);

const blank = document.createElement('td'); //Blank
tableHead.appendChild(blank);

const tableBody = document.createElement('tbody'); //Table body
table.appendChild(tableBody);

const tableFoot = document.createElement('tfoot'); //Table foot
table.appendChild(tableFoot);

const blank2 = document.createElement('th'); //Blank
tableFoot.appendChild(blank2);

/*THEAD function ///////////////////////////////////////////////////////////////////*/
function tableHeader() {
    for (let i = 0; i < hours.length; i++) {
        let th = document.createElement('th');
        tableHead.appendChild(th);
        th.innerText = hours[i];
    }
    let total = document.createElement('th');
    total.innerText = 'Daily Location Total';
    tableHead.appendChild(total);
} tableHeader();

/* Render function ////////////////////////////////////////////////////////////////*/
Store.prototype.render = function () {
    let tableHeads = document.createElement('th');
    let these = this.total;
    //rows
    let row = document.createElement('tr');
    tableBody.append(row);
    let tableData = document.createElement('td');
    tableData.innerHTML = this.location;
    row.appendChild(tableData);

    //Loop for my cells. Gives the cookies per hour
    for (let i = 0; i < hours.length; i++) {
        let tableData2 = document.createElement('td');
        tableData2.innerText = this.cookieArray[i];
        row.appendChild(tableData2);
    }

    let totals = document.createElement('td');
    totals.innerText = this.total;
    row.appendChild(totals);
}

/*TFOOT function //////////////////////////////////////////////////////////////////*/
function tableFooter() {
    let grandTotal = 0;
    //slooooow loop
    for (let i = 0; i < hours.length; i++) {
        let totals = 0;
        //fast loop
        for (let j = 0; j < locations.length; j++) {
            totals += locations[j].cookieArray[i];
        }
        let tfTotals = document.createElement('th');
        tfTotals.innerText = totals;
        tableFoot.appendChild(tfTotals);

        grandTotal += totals;
    }
    let tfGT = document.createElement('th');
    tfGT.innerText = grandTotal;
    tableFoot.appendChild(tfGT);
}

/*Calls the functions for the New Object //////////////////////////////////////////*/
function callStores() {
    for (let i = 0; i < locations.length; i++) {
        locations[i].cookieCalc();
        locations[i].render();
    }
}
callStores();
tableFooter();

// /*SEATTLE location ///////////////////////////////////////////////////////////////////////////////////*/
// let Store = {
//     location: 'Seattle',
//     custMin: 23,
//     custMax: 65,
//     average: 6.3,
//     total: 0,

//     //Random number for customers
//     randomNum: function (min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     },

//     //Average cookies calculation and <li> generator
//     cookieCalc: function () {
//         let calc = this.average * Math.floor(this.randomNum(this.custMin, this.custMax));
//         return Math.ceil(calc / 15);
//     },

//     totalSales: function () {
//         for (let i = 0; i < 15; i++) {
//             return this.cookieCalc[i] += this.cookieCalc;
//         }
//     },

//     render: function () {
//         //H2------------------------------------>>>>><><><><>
//         const h2 = document.createElement('h2');
//         section.appendChild(h2);
//         h2.textContent = this.location;
//         let total = 0;

//         //UL
//         const unLi = document.createElement('ul');
//         section.appendChild(unLi);

//         for (let i = 0; i < 15; i++) {
//             let myCookies = this.cookieCalc();
//             let listItems = document.createElement('li');

//             //Adds to my total variable to display the total
//             this.total += myCookies;
//             //Creates and appends the <li> elements

//             listItems.textContent = hours[i] + ': ' + myCookies + ' cookies';

//             unLi.appendChild(listItems);

//             //Pushes the daily average to the hourlyArr
//             dataArray.push(this.cookieCalc());

//             //console.log(this.hourlyArr[i] = myCookies);
//         }

//         const totalLi = document.createElement('li');
//         unLi.appendChild(totalLi);
//         totalLi.textContent = 'Total ' + Math.floor(this.total) + ' cookies';
//     },

//     //My arrays for data display
//     hourlyArr: [],
// }

// //Variables assigned to my arrays to capture data


// /*HTML generators ------------------------------------------------------------*/

// //My body ID
// let body = document.getElementById('body');

//Section
// const section = document.createElement('section');
// body.appendChild(section);

// store.render();

// /*TOKYO location ////////////////////////////////////////////////////////////*/
// let tokyoStore = {
//     location: 'Tokyo',
//     custMin: 3,
//     custMax: 24,
//     average: 1.2,
//     total: 0,

//     //Random number for customers
//     randomNum: function (min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     },

//     //Average cookies calculation and <li> generator
//     cookieCalc: function () {
//         let calc = this.average * Math.floor(this.randomNum(this.custMin, this.custMax));
//         return Math.ceil(calc / 15);
//     },

//     totalSales: function () {
//         for (let i = 0; i < 15; i++) {
//             return this.cookieCalc[i] += this.cookieCalc;
//         }
//     },

//     render: function () {
//         //H2------------------------------------>>>>><><><><>
//         const h2 = document.createElement('h2');
//         section.appendChild(h2);
//         h2.textContent = this.location;
//         let total = 0;

//         //UL
//         const unLi = document.createElement('ul');
//         section.appendChild(unLi);

//         for (let i = 0; i < 15; i++) {
//             let myCookies = this.cookieCalc();
//             let listItems = document.createElement('li');

//             //Adds to my total variable to display the total
//             this.total += myCookies;
//             //Creates and appends the <li> elements

//             listItems.textContent = hours[i] + ': ' + myCookies + ' cookies';
//             unLi.appendChild(listItems);

//             //Pushes the daily average to the hourlyArr
//             dataArray.push(this.cookieCalc());

//             //console.log(this.hourlyArr[i] = myCookies);
//         }

//         const totalLi = document.createElement('li');
//         unLi.appendChild(totalLi);

//         totalLi.textContent = 'Total ' + Math.floor(this.total) + ' cookies';
//     },

//     //My arrays for data display
//     hourlyArr: [],
// }

// let tokyoArray = tokyoStore.hourlyArr;
// tokyoStore.render();

// /*DUBAI location ///////////////////////////////////////////////////////////*/
// let dubaiStore = {
//     location: 'Dubai',
//     custMin: 11,
//     custMax: 38,
//     average: 3.7,
//     total: 0,

//     //Random number for customers
//     randomNum: function (min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     },

//     //Average cookies calculation and <li> generator
//     cookieCalc: function () {
//         let calc = this.average * Math.floor(this.randomNum(this.custMin, this.custMax));
//         return Math.ceil(calc / 15);
//     },

//     totalSales: function () {
//         for (let i = 0; i < 15; i++) {
//             return this.cookieCalc[i] += this.cookieCalc;
//         }
//     },

//     render: function () {
//         //H2------------------------------------>>>>><><><><>
//         const h2 = document.createElement('h2');
//         section.appendChild(h2);
//         h2.textContent = this.location;
//         let total = 0;
//         //UL
//         const unLi = document.createElement('ul');
//         section.appendChild(unLi);

//         for (let i = 0; i < 15; i++) {
//             let myCookies = this.cookieCalc();
//             let listItems = document.createElement('li');

//             //Adds to my total variable to display the total
//             this.total += myCookies;
//             //Creates and appends the <li> elements

//             listItems.textContent = hours[i] + ': ' + myCookies + ' cookies';
//             unLi.appendChild(listItems);

//             //Pushes the daily average to the hourlyArr
//             dataArray.push(this.cookieCalc());

//             //console.log(this.hourlyArr[i] = myCookies);
//         }

//         const totalLi = document.createElement('li');
//         unLi.appendChild(totalLi);

//         totalLi.textContent = 'Total ' + Math.floor(this.total) + ' cookies';
//     },

//     //My arrays for data display
//     hourlyArr: [],
// }

// dubaiStore.render();

// /*PARIS location ///////////////////////////////////////////////////////////*/
// let parisStore = {
//     location: 'Paris',
//     custMin: 20,
//     custMax: 38,
//     average: 2.3,
//     total: 0,

//     //Random number for customers
//     randomNum: function (min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     },

//     //Average cookies calculation and <li> generator
//     cookieCalc: function () {
//         let calc = this.average * Math.floor(this.randomNum(this.custMin, this.custMax));
//         return Math.ceil(calc / 15);
//     },

//     totalSales: function () {
//         for (let i = 0; i < 15; i++) {
//             return this.cookieCalc[i] += this.cookieCalc;
//         }
//     },

//     render: function () {
//         //H2------------------------------------>>>>><><><><>
//         const h2 = document.createElement('h2');
//         section.appendChild(h2);
//         h2.textContent = this.location;
//         let total = 0;
//         //UL
//         const unLi = document.createElement('ul');
//         section.appendChild(unLi);

//         for (let i = 0; i < 15; i++) {
//             let myCookies = this.cookieCalc();
//             let listItems = document.createElement('li');

//             //Adds to my total variable to display the total
//             this.total += myCookies;
//             //Creates and appends the <li> elements

//             listItems.textContent = hours[i] + ': ' + myCookies + ' cookies';

//             unLi.appendChild(listItems);

//             //Pushes the daily average to the hourlyArr
//             dataArray.push(this.cookieCalc());

//             //console.log(this.hourlyArr[i] = myCookies);
//         }

//         const totalLi = document.createElement('li');
//         unLi.appendChild(totalLi);

//         totalLi.textContent = 'Total ' + Math.floor(this.total) + ' cookies';

//     },

//     //My arrays for data display
//     hourlyArr: [],
// }

// parisStore.render();

// /*LIMA location ////////////////////////////////////////////////////////////*/
// let limaStore = {
//     location: 'Lima',
//     custMin: 2,
//     custMax: 16,
//     average: 4.6,
//     total: 0,

//     //Random number for customers
//     randomNum: function (min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     },

//     //Average cookies calculation and <li> generator
//     cookieCalc: function () {
//         let calc = this.average * Math.floor(this.randomNum(this.custMin, this.custMax));
//         return Math.ceil(calc / 15);
//     },

//     totalSales: function () {
//         for (let i = 0; i < 15; i++) {
//             return this.cookieCalc[i] += this.cookieCalc;
//         }
//     },

//     render: function () {
//         //H2------------------------------------>>>>><><><><>
//         const h2 = document.createElement('h2');
//         section.appendChild(h2);
//         h2.textContent = this.location;
//         let total = 0;
//         //UL
//         const unLi = document.createElement('ul');
//         section.appendChild(unLi);

//         for (let i = 0; i < 15; i++) {
//             let myCookies = this.cookieCalc();
//             let listItems = document.createElement('li');

//             //Adds to my total variable to display the total
//             this.total += myCookies;
//             //Creates and appends the <li> elements

//             listItems.textContent = hours[i] + ': ' + myCookies + ' cookies';
//             unLi.appendChild(listItems);

//             //Pushes the daily average to the hourlyArr
//             dataArray.push(this.cookieCalc());

//             //console.log(this.hourlyArr[i] = myCookies);
//         }

//         const totalLi = document.createElement('li');
//         unLi.appendChild(totalLi);

//         totalLi.textContent = 'Total ' + Math.floor(this.total) + ' cookies';

//     },

//     //My arrays for data display
//     hourlyArr: [],
// }


// limaStore.render();