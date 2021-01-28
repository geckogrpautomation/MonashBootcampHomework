const inq = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const obj = require("./objClass");

const manQuestions = [  
  {name: "name", type: "input", message:"What is your name?", choices:null,default:null},
  {name: "id", type: "input", message:"What is your employee ID?", choices:null,default:null},
  {name: "email", type: "input", message:"What is your email address?", choices:null,default:null},
  {name: "offNum", type: "input", message:"What is your office number?", choices:null,default:null},
  {name: "addAnother", type: "checkbox", message:"Do you want to add a staff member?", choices:["Engineer","Intern","Exit"], default:"Exit"}  
]

const engQuestions = [  
  {name: "name", type: "input", message:"What is your name?", choices:null,default:null},
  {name: "id", type: "input", message:"What is your employee ID?", choices:null,default:null},
  {name: "email", type: "input", message:" What is your email address?", choices:null,default:null},
  {name: "gitHub", type: "input", message:"What is your gitHub?", choices:null,default:null},
  {name: "addAnother", type: "checkbox", message:"Do you want to add a staff member?", choices:["Engineer","Intern","Exit"],default:"Exit"}  
]

const internQuestions = [  
  {name: "name", type: "input", message:"What is your name?", choices:null,default:null},
  {name: "id", type: "input", message:"What is your employee ID?", choices:null,default:null},
  {name: "email", type: "input", message:" What is your email address?", choices:null,default:null},
  {name: "school", type: "input", message:"What school did you attend?", choices:null,default:null},
  {name: "addAnother", type: "checkbox", message:"Do you want to add a staff member?", choices:["Engineer","Intern","Exit"],default:"Exit"}  
]

//Define blank inquirer prompt questions ojects for array push later
let managerPrompt = new obj.Inquirer("", "", "", "", "");
let engineerPrompt = new obj.Inquirer("", "", "", "", "");
let internPrompt = new obj.Inquirer("", "", "", "", "");

/////////////////////////////TESTED/////////////////////////////
function buildClass(t,q){ 

  for (let i = 0; i < 5; i++) {   

    //Build managers object & prompt response
    if (t === "m"){      
      Array.prototype.push.apply(managerPrompt,[q[i]]);  
    }

    //Build engineers object & prompt response
    if (t === "e"){
      Array.prototype.push.apply(engineerPrompt,[q[i]]); 
    }
    
    //Build interns object & prompt response  
    if (t === "i"){
      Array.prototype.push.apply(internPrompt,[q[i]]);       
    }

  }//End for loop
}//End function  

function inquirer(promptObject){
  //Add prompts and raw lists to inquirer
  inquirer
   .prompt([ 
    promptObject
  ])
   .then(answers => {
    console.log(answers);
    //buildObject(answers);
  
    //if (answers.engineer){
    //  buildClass("e",engQuestions)
    //}
    //if (answers.intern){
    //  buildClass("i",internQuestions)
    //} 
    })
    //Catch error and console log it
    .catch(error => {
      console.log (error);
    });
  }

  buildClass("m",manQuestions);
  
  
  


 
  