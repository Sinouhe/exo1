
const isUniqueIncrement = (list, element) => {
    if(list[element] === undefined) {
        list[element] = 0
        return 1;        
    } else {
        if(list[element] === 0) {
            list[element] = 1
            return -1;            
        }else {
            return 0;
        }
    } 
}

const addToMostCommonList = (list, element) => {
    if (list[element] === undefined){
        list[element] = 1;
    }else {
        list[element] = list[element]+1;        
    }
}

const addArrayMostCommon = (array, element, list) => {
    if(array.length < 10) {
        for(let i = 0 ; i < array.length ; i++){
            if(array[i].element === element) {
                array[i].count = array[i].count + 1;
                return;
            }             
        }
        array.push({element, count: 1});
        return;
    } else{
        for(let i = 0 ; i < 10 ; i++){
            if (element === array[i].element){
                array[i].count = array[i].count + 1;
                return;
            } 
        }
        for(let i = 0 ; i < 10 ; i++){
            if (list[element] > array[i].count){
                array[i] = {element, count: list[element]}
                return;
            }            
        }
    }
}

exports.NumberOfUnique = (person, isUnique) => {
        isUnique.counterfullNameUniqueList += isUniqueIncrement(isUnique.fullNameUniqueList, person.getFullName());
        isUnique.counterfirstNameUniqueList += isUniqueIncrement(isUnique.firstNameUniqueList, person.getFistName());
        isUnique.counterlastNameUniqueList += isUniqueIncrement(isUnique.lastNameUniqueList, person.getLastName());
};
            

exports.tenMostCommonFirstNameAndLastName = (tenMostCommonFirstName, 
                                    sumCommonFirstName, 
                                    tenMostCommonLastName, 
                                    sumCommonLastName, 
                                    person) => {

    addToMostCommonList(sumCommonFirstName, person.getFistName());
    addToMostCommonList(sumCommonLastName, person.getLastName());


    addArrayMostCommon(tenMostCommonFirstName, person.getFistName(),sumCommonFirstName);
    addArrayMostCommon(tenMostCommonLastName, person.getLastName(),sumCommonLastName);
}

exports.FullNameOrderindex = (FullNameOrderindex, FullNameOrderCounter, person) => {
    FullNameOrderindex.push(person.getFullName());
    if(FullNameOrderCounter[person.getFullName()] === undefined){
        FullNameOrderCounter[person.getFullName()] = 1
    } else {
        FullNameOrderCounter[person.getFullName()] = FullNameOrderCounter[person.getFullName()]+1
    }
}

exports.getFirstUniqueFullName = (FullNameOrderindex, FullNameOrderCounter) => {
    const arrayReturn = [];

    for (let i = 0 ; i < FullNameOrderindex.length ; i++) {
        if(FullNameOrderCounter[FullNameOrderindex[i]] === 1){
            arrayReturn.push(FullNameOrderindex[i])
        }
        if(arrayReturn.length === 25){
            return arrayReturn;
        }
    }
}