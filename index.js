const fs = require('fs');
import Person from './class/Person';
import * as tools from './tools/tools';


function compare( a, b ) {
    if ( a.count < b.count ){
      return 1;
    }
    if ( a.count > b.count ){
      return -1;
    }
    return 0;
}

/*
tools to : 
Print out the number of unique full names, first names and last names
*/
const isUnique  = {
    fullNameUniqueList: {},
    counterfullNameUniqueList: 0,
    firstNameUniqueList: {},
    counterfirstNameUniqueList: 0,
    lastNameUniqueList: {},
    counterlastNameUniqueList: 0,
}

const tenMostCommonFirstName = [];
const sumCommonFirstName = {};

const tenMostCommonLastName = [];
const sumCommonLastName = {};

const FullNameOrderindex = [];
const FullNameOrderCounter = [];

const readline = require('readline');

const rl = readline.createInterface({
    //input: fs.createReadStream('files/test-data-10-exp-5.list'),
    input: fs.createReadStream('files/test-data-10-exp-5.list'),
    output: process.stdout,
    terminal: false 
}); 

rl.on('line', (line) => {
    if(line.includes('--')){
        const person = new Person(line);
        tools.NumberOfUnique(person, isUnique);
        tools.tenMostCommonFirstNameAndLastName(tenMostCommonFirstName, 
                                                sumCommonFirstName, 
                                                tenMostCommonLastName, 
                                                sumCommonLastName, 
                                                person);

        tools.FullNameOrderindex(FullNameOrderindex, FullNameOrderCounter, person);
        
    }

   
})
rl.on('close', function (line) {
    //console.log(isUnique.lastNameUniqueList)
    console.log(`There are  ${isUnique.counterfullNameUniqueList} unique full names.`);
    console.log(`There are  ${isUnique.counterfirstNameUniqueList} unique first names.`);
    console.log(`There are  ${isUnique.counterlastNameUniqueList} unique last names.`);
    
    console.log('');
    console.log('');
    tenMostCommonFirstName.sort( compare );
    console.log('The ten most common first names are:');
    tenMostCommonFirstName.map((element) => console.log(`${element.element} (${element.count})`))
    /*
    for(let i =0 ; i < tenMostCommonFirstName.length ;i++) {
        console.log(`${tenMostCommonFirstName[i].element} (${tenMostCommonFirstName[i].count})`);
    }
    */

    console.log('');
    console.log('');
    tenMostCommonLastName.sort( compare );
    console.log('The ten most common last names are:');
    tenMostCommonLastName.map((element) => console.log(`${element.element} (${element.count})`));    
    /*
    for(let i =0 ; i < tenMostCommonLastName.length ;i++) {
        console.log(`${tenMostCommonLastName[i].element} (${tenMostCommonLastName[i].count})`);
    }
    */

    console.log('');
    console.log('');
    console.log('the first 25 unique first and last names are:');
    const ArrayFistUniqueFullName = tools.getFirstUniqueFullName(FullNameOrderindex, FullNameOrderCounter);
    ArrayFistUniqueFullName.map((element) => console.log(element));
});


  
  