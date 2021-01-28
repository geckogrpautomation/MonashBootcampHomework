//<-------------------------------------------OBJECTS------------------------------------------->

function Inquirer(fullName, type, message,choices,defaultChoice) {
      
    this.name = fullName;
    this.type = type;
    this.message = message;
    this.choices = choices;
    this.default = defaultChoice;
    
}



//<-------------------------------------------CLASSES------------------------------------------->

//Create Employee class. Base Class
class Employee{

    constructor(obj) {

        this.fullName = obj.name;
        this.id = obj.id;
        this.email = obj.email;
        this.className = Employee.name;   

    }

    getName(){

        return this.fullName; 
           
    }

    getID(){ 

        return this.id;
    }


    get_Email(){

        return this.email;
            
    }

    get_Role(){

        return this.className; 

    }
    
}


//Extend employee class to manager via the below. Extended class of Employee
class Manager extends Employee{

    constructor(obj) {

      this.officePhone = obj.offPhone;
      this.className = Manager.name;     

    }
}


//Extend employee class to engineer via the below:

class Engineer extends Employee{

    constructor(obj) {

      this.gitHub = obj.gitHub;
      this.className = Engineer.name;        
    }

    getGithub(){

        return this.gitHub;

    }
}


//Extend employee class to intern via the below:

class Intern extends Employee{

    constructor(obj) {
        
      this.school = obj.school;
      this.className = Intern.name;     

    }

    getSchool(){

        return this.school;

    }
}


class InquirerInpNumCnfrmPass{
    
    constructor(obj) {
    
    [{
        
    v
    
    }];
}
}


class InquirerListChkBx extends InquirerInpNumCnfrmPass{
       
    constructor(obj) {   
    
    [{
        
    
    
    }];

}
}


module.exports = {
    
    Inquirer      

}

