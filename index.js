const fs = require('fs');
var Table = require('cli-table3');
const taskService = require('./services/taskService');

//console.log(process.argv);
//node index.js add "learn Node.js"

/*
[
  'C:\\Program Files\\nodejs\\node.exe',
  'D:\\Learning\\Project\\TaskTrackerCLI\\index.js',
  'add',
  'learn Node.js'
]
*/

const args = process.argv.slice(2);
const command = args[0];
const commandArgs = args.slice(1);
//console.log(command); //add
//console.log(commandArgs); //'learn Node.js'

// TODO: connect service
// const taskService = require('./services/taskService');

function showHelp() {
    console.log(`
Task Tracker CLI

Usage:
  node index.js add "task description"
  node index.js list
  node index.js list <done/todo/in-progress>
  node index.js done <id>
  node index.js update <id> "task description"
  node index.js delete <id>

Commands:
  add     
  list    
  done    
  update
  delete  
  `);
}

switch (command) {
    case 'add': {
        taskService.addTask(commandArgs);
        break;
    }

    case 'list': {
        taskService.listTasks(commandArgs);
        break;
    }

    case 'start': {
        taskService.startTask(commandArgs[0]);
        break;
    }

    case 'done': {
        taskService.markDone(Number(commandArgs[0]));
        break;
    }

    case 'delete': {
        taskService.deleteTask(commandArgs[0]);
        break;
    }

    case 'update': {
        taskService.updateDescription(commandArgs[0], commandArgs[1]);
        break;
    }

    case 'help':
    case undefined: {
        showHelp();
        break;
    }

    default: {
        console.log('Unknow Command');
        showHelp();
    }
}

