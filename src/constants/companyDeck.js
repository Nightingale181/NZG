export const companyDeck = [
    {
        id: 1,
        idValue:1,
        synmain: "../img/company/14/background-1.png" ,
        companyName: 'Dwellings, Inc. ',
        type: 'consumer',
        initialValue: 2,
        initialCarbon: 2,
        actualValue: 2,
        actualCarbon: 2,
        companyBank: 0,
    },
    {
        id: 2,
        idValue:2,
        synmain: "../img/company/14/background-1.png" ,
        companyName: 'Steaks, Inc. ',
        type: 'consumer',
        initialValue: 1,
        initialCarbon: 1,
        actualValue: 1,
        actualCarbon: 1,
        companyBank: 0,

    },
    {
        id: 3,
        idValue:3,
        synmain: "../img/company/14/background-1.png" ,
        companyName: 'Smartphone, Inc. ',
        type: 'consumer',
        initialValue: 3,
        initialCarbon: 1,
        actualValue: 3,
        actualCarbon: 1,
        companyBank: 0,
    },
    {
        id: 4,
        idValue:4,
        synmain: "../img/company/14/background-1.png" ,
        companyName: 'Airline, Inc. ',
        type: 'consumer',
        initialValue: 4,
        initialCarbon: 2,
        actualValue: 4,
        actualCarbon: 2,
        companyBank: 0,
    },
    {
        id: 5,
        idValue:5,
        synmain: "../img/company/14/background-1.png" ,
        companyName: 'Aircraft, Inc. ',
        type: 'production',
        initialValue: 4,
        initialCarbon: 2,
        actualValue: 4,
        actualCarbon: 2,
        companyBank: 0,
    },
    {
        id: 6,
        idValue:6,
        synmain: "../img/company/14/background-1.png" ,
        companyName: 'Packaging, Inc. ',
        type: 'production',
        initialValue: 2,
        initialCarbon: 1,
        actualValue: 2,
        actualCarbon: 1,
        companyBank: 0,
    },
    {
        id: 7,
        idValue:7,
        synmain: "../img/company/14/background-1.png" ,
        companyName: 'Chemicals, Inc. ',
        type: 'production',
        initialValue: 4,
        initialCarbon: 2,
        actualValue: 4,
        actualCarbon: 2,
        companyBank: 0,
    },
    {
        id: 8,
        idValue:8,
        synmain: "../img/company/14/background-1.png" ,
        companyName: 'Software, Inc. ',
        type: 'production',
        initialValue: 4,
        initialCarbon: 1,
        actualValue: 4,
        actualCarbon: 1,
        companyBank: 0,
    },
    {
        id: 9,
        idValue:9,
        synmain: "../img/company/14/background-1.png" ,
        companyName: 'Cement, Inc. ',
        type: 'production',
        initialValue: 3,
        initialCarbon: 2,
        actualValue: 3,
        actualCarbon: 2,
        companyBank: 0,
    },
    {
        id: 10,
        idValue:10,
        synmain: "../img/company/14/background-1.png" ,
        companyName: 'Shipping, Inc. ',
        type: 'distribution',
        initialValue: 4,
        initialCarbon: 3,
        actualValue: 4,
        actualCarbon: 3,
        companyBank: 0,
    },
    {
        id: 11,
        idValue:11,
        synmain: "../img/company/14/background-1.png" ,
        companyName: 'Road Transport, Inc. ',
        type: 'distribution',
        initialValue: 5,
        initialCarbon: 3,
        actualValue: 5,
        actualCarbon: 3,
        companyBank: 0,
    },
    {
        id: 12,
        idValue:12,
        synmain: "../img/company/14/background-1.png" ,
        companyName: 'Data & Wireless, Inc. ',
        type: 'distribution',
        initialValue: 3,
        initialCarbon: 2,
        actualValue: 3,
        actualCarbon: 2,
        companyBank: 0,
    },
    {
        id: 13,
        idValue:13,
        synmain: "../img/company/14/background-1.png" ,
        companyName: 'Grid & Pipeline, Inc. ',
        type: 'distribution',
        initialValue: 3,
        initialCarbon: 1,
        actualValue: 3,
        actualCarbon: 1,
        companyBank: 0,
    },
    {
        id: 14,
        idValue:14,
        synmain: "../img/company/14/background-1.png" ,
        companyName: 'Oil & Gas, Inc. ',
        type: 'resource',
        initialValue: 6,
        initialCarbon: 3,
        actualValue: 6,
        actualCarbon: 3,
        companyBank: 0,
    },
    {
        id: 15,
        idValue:15,
        synmain: "../img/company/14/background-1.png" ,
        companyName: 'Sand & Metal, Inc. ',
        type: 'resource',
        initialValue: 2,
        initialCarbon: 1,
        actualValue: 2,
        actualCarbon: 1,
        companyBank: 0,
    },
    {
        id: 16,
        idValue:16,
        synmain: "../img/company/16/background-16.png" ,
        companyName: 'Farm, Inc. ',
        type: 'resource',
        initialValue: 3,
        initialCarbon: 2,
        actualValue: 3,
        actualCarbon: 2,
        companyBank: 0,
    },
    {
        id: 17,
        idValue:17,
        synmain: "../img/company/14/background-1.png" ,
        companyName: 'Wind Power, Inc. ',
        type: 'resource',
        initialValue: 3,
        initialCarbon: 0,
        actualValue: 3,
        actualCarbon: 0,
        companyBank: 0,
    },
    {
        id: 18,
        idValue:18,
        synmain: "../img/company/14/background-1.png" ,
        companyName: 'Recycling, Inc. ',
        type: 'resource',
        initialValue: 5,
        initialCarbon: 1,
        actualValue: 5,
        actualCarbon: 1,
        companyBank: 0,
    },

];

export const getRandomCard = (deck) =>
    deck[Math.floor(Math.random() * deck.length)];
