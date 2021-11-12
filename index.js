const inquirer = require ('inquirer');
const Manager = require ('./lib/Manager');
const Engineer = require ('./lib/Engineer');
const Intern = require ('./lib/Intern');
const fs = require ('fs');
const path = require ('path');
const renderTeam = require('./src/template.js')
const OUTPUTDIR = path.resolve(__dirname, 'output');
const outpath = path.join(OUTPUTDIR, 'index.html')
const team = []

 
//prompting the manager questions first
const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: 'What is the Manager name?'
        },
        {
            type: 'text',
            name: 'id',
            message: 'What is their ID number?'
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is the Manager email?'
        },
        {
            type: 'text',
            name: 'officeNumber',
            message: 'What is the office number?'
        } //pushing the answers to team and the manager tag
    ]).then( answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        team.push(manager)
        promptChoice();      
    })
};

//creating the choice to add a new employee
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
         
          buildTeam(team); 
     };

    });
};

//the Engineering question prompts
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

// prompting the intern questions when adding an intern employee
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

//writing a file using the data presented and putting it in a new directory
function writeToFile(data){
    if(!fs.existsSync(OUTPUTDIR)){
        fs.mkdirSync(OUTPUTDIR)
    }
    return fs.writeFileSync(outpath, data)
}

//generating the HTML file using the renderTeam template and data in the team object
function buildTeam(team){
   writeToFile(renderTeam(team))
}

promptManager();