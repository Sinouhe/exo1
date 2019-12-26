
class Person {
    
    #fullName = '';
    #lastName = '';
    #fistName = '';

    constructor(line) {
        this.fullName = line.split('--')[0];
        this.lastName = this.fullName.split(',')[0].trim()
        this.fistName = this.fullName.split(',')[1].trim()
    }


    getFullName = () => {
        return this.fullName;
    }
    getLastName = () => {
        return this.lastName;
    }
    getFistName = () => {
        return this.fistName;
    }


    toJson = () => {
        return {
            fullName: this.fullName,
            lastName: this.lastName,
            fistName: this.fistName
        }
    }

    
}

module.exports = Person;
