'use strict';

/*Global variables and functions*/
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

/*SEATTLE location ///////////////////////////////////////////////////////////*/
let store = {
    location: 'Seattle',
    custMin: 23,
    custMax: 65,
    average: 6.3,
    total: 0,

    //Random number for customers
    hourlyCust: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },

    //Average cookies calculation and <li> generator
    cookieCalc: function () {
        let calc = this.average * Math.floor(this.hourlyCust(this.custMin, this.custMax));
        return Math.ceil(calc / 15);
    },

    totalSales: function () {
        for (let i = 0; i < 15; i++) {
            return this.cookieCalc[i] += this.cookieCalc;
        }
    },

    render: function () {
        //H2------------------------------------>>>>><><><><>
        const h2 = document.createElement('h2');
        section.appendChild(h2);
        h2.textContent = this.location;
        let total = 0;

        //UL
        const unLi = document.createElement('ul');
        section.appendChild(unLi);

        for (let i = 0; i < 15; i++) {
            let myCookies = this.cookieCalc();
            let listItems = document.createElement('li');

            //Adds to my total variable to display the total
            this.total += myCookies;
            //Creates and appends the <li> elements
            listItems.textContent = hours[i] + ': ' + myCookies + ' cookies';
            unLi.appendChild(listItems);

            //Pushes the daily average to the hourlyArr
            dataArray.push(this.cookieCalc());

            //console.log(this.hourlyArr[i] = myCookies);
        }

        const totalLi = document.createElement('li');
        unLi.appendChild(totalLi);
        totalLi.textContent = 'Total ' + Math.floor(this.total) + ' cookies';
    },

    //My arrays for data display
    hourlyArr: [],
}

//Variables assigned to my arrays to capture data
let dataArray = store.hourlyArr;
let dataCookies = store.avgCookies;
let total = 0;

/*HTML generators ------------------------------------------------------------*/

//My body ID
let body = document.getElementById('body');

//Section
const section = document.createElement('section');
body.appendChild(section);

store.render();

/*TOKYO location ////////////////////////////////////////////////////////////*/
let tokyoStore = {
    location: 'Tokyo',
    custMin: 3,
    custMax: 24,
    average: 1.2,
    total: 0,

    //Random number for customers
    hourlyCust: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },

    //Average cookies calculation and <li> generator
    cookieCalc: function () {
        let calc = this.average * Math.floor(this.hourlyCust(this.custMin, this.custMax));
        return Math.ceil(calc / 15);
    },

    totalSales: function () {
        for (let i = 0; i < 15; i++) {
            return this.cookieCalc[i] += this.cookieCalc;
        }
    },

    render: function () {
        //H2------------------------------------>>>>><><><><>
        const h2 = document.createElement('h2');
        section.appendChild(h2);
        h2.textContent = this.location;
        let total = 0;

        //UL
        const unLi = document.createElement('ul');
        section.appendChild(unLi);

        for (let i = 0; i < 15; i++) {
            let myCookies = this.cookieCalc();
            let listItems = document.createElement('li');

            //Adds to my total variable to display the total
            this.total += myCookies;
            //Creates and appends the <li> elements
            listItems.textContent = hours[i] + ': ' + myCookies + ' cookies';
            unLi.appendChild(listItems);

            //Pushes the daily average to the hourlyArr
            dataArray.push(this.cookieCalc());

            //console.log(this.hourlyArr[i] = myCookies);
        }

        const totalLi = document.createElement('li');
        unLi.appendChild(totalLi);
        totalLi.textContent = 'Total ' + Math.floor(this.total) + ' cookies';
    },

    //My arrays for data display
    hourlyArr: [],
}

let tokyoArray = tokyoStore.hourlyArr;
tokyoStore.render();

/*DUBAI location ///////////////////////////////////////////////////////////*/
let dubaiStore = {
    location: 'Dubai',
    custMin: 11,
    custMax: 38,
    average: 3.7,
    total: 0,

    //Random number for customers
    hourlyCust: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },

    //Average cookies calculation and <li> generator
    cookieCalc: function () {
        let calc = this.average * Math.floor(this.hourlyCust(this.custMin, this.custMax));
        return Math.ceil(calc / 15);
    },

    totalSales: function () {
        for (let i = 0; i < 15; i++) {
            return this.cookieCalc[i] += this.cookieCalc;
        }
    },

    render: function () {
        //H2------------------------------------>>>>><><><><>
        const h2 = document.createElement('h2');
        section.appendChild(h2);
        h2.textContent = this.location;
        let total = 0;
        //UL
        const unLi = document.createElement('ul');
        section.appendChild(unLi);

        for (let i = 0; i < 15; i++) {
            let myCookies = this.cookieCalc();
            let listItems = document.createElement('li');

            //Adds to my total variable to display the total
            this.total += myCookies;
            //Creates and appends the <li> elements
            listItems.textContent = hours[i] + ': ' + myCookies + ' cookies';
            unLi.appendChild(listItems);

            //Pushes the daily average to the hourlyArr
            dataArray.push(this.cookieCalc());

            //console.log(this.hourlyArr[i] = myCookies);
        }

        const totalLi = document.createElement('li');
        unLi.appendChild(totalLi);
        totalLi.textContent = 'Total ' + Math.floor(this.total) + ' cookies';
    },

    //My arrays for data display
    hourlyArr: [],
}

dubaiStore.render();

/*PARIS location ///////////////////////////////////////////////////////////*/
let parisStore = {
    location: 'Paris',
    custMin: 20,
    custMax: 38,
    average: 2.3,
    total: 0,

    //Random number for customers
    hourlyCust: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },

    //Average cookies calculation and <li> generator
    cookieCalc: function () {
        let calc = this.average * Math.floor(this.hourlyCust(this.custMin, this.custMax));
        return Math.ceil(calc / 15);
    },

    totalSales: function () {
        for (let i = 0; i < 15; i++) {
            return this.cookieCalc[i] += this.cookieCalc;
        }
    },

    render: function () {
        //H2------------------------------------>>>>><><><><>
        const h2 = document.createElement('h2');
        section.appendChild(h2);
        h2.textContent = this.location;
        let total = 0;
        //UL
        const unLi = document.createElement('ul');
        section.appendChild(unLi);

        for (let i = 0; i < 15; i++) {
            let myCookies = this.cookieCalc();
            let listItems = document.createElement('li');

            //Adds to my total variable to display the total
            this.total += myCookies;
            //Creates and appends the <li> elements
            listItems.textContent = hours[i] + ': ' + myCookies + ' cookies';
            unLi.appendChild(listItems);

            //Pushes the daily average to the hourlyArr
            dataArray.push(this.cookieCalc());

            //console.log(this.hourlyArr[i] = myCookies);
        }

        const totalLi = document.createElement('li');
        unLi.appendChild(totalLi);
        totalLi.textContent = 'Total ' + Math.floor(this.total) + ' cookies';
    },

    //My arrays for data display
    hourlyArr: [],
}

parisStore.render();

/*LIMA location ////////////////////////////////////////////////////////////*/
let limaStore = {
    location: 'Lima',
    custMin: 2,
    custMax: 16,
    average: 4.6,
    total: 0,

    //Random number for customers
    hourlyCust: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },

    //Average cookies calculation and <li> generator
    cookieCalc: function () {
        let calc = this.average * Math.floor(this.hourlyCust(this.custMin, this.custMax));
        return Math.ceil(calc / 15);
    },

    totalSales: function () {
        for (let i = 0; i < 15; i++) {
            return this.cookieCalc[i] += this.cookieCalc;
        }
    },

    render: function () {
        //H2------------------------------------>>>>><><><><>
        const h2 = document.createElement('h2');
        section.appendChild(h2);
        h2.textContent = this.location;
        let total = 0;
        //UL
        const unLi = document.createElement('ul');
        section.appendChild(unLi);

        for (let i = 0; i < 15; i++) {
            let myCookies = this.cookieCalc();
            let listItems = document.createElement('li');

            //Adds to my total variable to display the total
            this.total += myCookies;
            //Creates and appends the <li> elements
            listItems.textContent = hours[i] + ': ' + myCookies + ' cookies';
            unLi.appendChild(listItems);

            //Pushes the daily average to the hourlyArr
            dataArray.push(this.cookieCalc());

            //console.log(this.hourlyArr[i] = myCookies);
        }

        const totalLi = document.createElement('li');
        unLi.appendChild(totalLi);
        totalLi.textContent = 'Total ' + Math.floor(this.total) + ' cookies';
    },

    //My arrays for data display
    hourlyArr: [],
}

limaStore.render();

