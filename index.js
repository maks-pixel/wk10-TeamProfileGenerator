const inquirer = require ('inquirer');
const Manager = require ('./lib/Manager');
const Engineer = require ('./lib/Engineer');
const Intern = require ('./lib/Intern');
const fs = require ('fs');
const path = require ('path');
const team = []

 

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: 'What is the Employees name?'
        },
        {
            type: 'text',
            name: 'id',
            message: 'What is their ID number?'
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is the Employees email?'
        },
        {
            type: 'text',
            name: 'officeNumber',
            message: 'What is the office number?'
        }
    ]).then( answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        team.push(manager)
        promptChoice();      
    })
};

const promptChoice = () => {
    return inquirer.prompt(
    {
        type: 'list',
        name: 'member',
        message: 'Do you want to add a team member to the team from the choices below?',
        choices: ['Engineer', 'Intern', "Nah I'm done"]
    })
    .then(choose => {
        switch (choose.member) {
         case 'Engineer':
           //engineer prompt function
           promptEngineer();
         break;
     
         case 'Intern':
          //intern prompt function
          promptIntern();
         break;

         case "Nah I'm done":
          //build the team function that executes the html
          console.log(team);
             buildteam(); 
     };

    });
};

const promptEngineer = () => {
    console.log(`
    =================
     Add an Engineer
    =================
    `);
    return inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is the Engineer's name?"
        },
        {
            type: 'text',
            name: 'id',
            message: "What is the Engineer's ID number?"
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the Engineer's email?"
        },
        {
            type:'text',
            name:'github',
            message: "what is the Engineer's github username?"
        }
    ]).then( answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        team.push(engineer);
        promptChoice();      
    });
};

const promptIntern = () => {
    console.log(`
    ===============
     Add an Intern
    ===============
    `);
    return inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is the Intern's name?"
        },
        {
            type: 'text',
            name: 'id',
            message: "What is the Intern's ID number?"
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the Intern's email?"
        },
        {
            type:'text',
            name:'school',
            message: "what is the Intern's School name?"
        }
    ]).then( answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        team.push(intern);
        promptChoice();      
    });
};

promptManager()