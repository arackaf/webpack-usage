'use strict'

let types = [
    'Contacts',
    'Scheduling',
    'Admin',
    'Account',
    'Reporting',
    'Billing',
    'Tasks',
    'Messaging'
];

const fs = require('fs')
const template = fs.readFileSync(`./classTemplate.js`, { encoding: 'utf8' });

types.forEach(type => {
    let templateAdjusted = template.replace(/Contacts/g, type)
                                   .replace(/contacts/g, type.toLowerCase());

    fs.mkdirSync(`../modules/${type}`);
    fs.writeFileSync(`../modules/${type}/${type}.js`, templateAdjusted);
});

