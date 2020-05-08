//Requireds
const argv = require('./config/yargs').argv;
const { create, update, getlistOfTask, deleteTasks } = require('./to-do/to-do');
const colors = require('colors/safe');

let command = argv._[0];

switch (command) {

    case 'create':
        if (create(argv.description)) console.log(`Task created!`);
        else console.log(`an error ocurred :(`);
        break;

    case 'list':
        let i = 1;
        let list_tasks = getlistOfTask();
        let status;
        if (list_tasks.length === 0) {
            console.log(colors.bgWhite(colors.rainbow(`==== List of tasks: ====\n`)));
            console.log(colors.cyan(`--- You haven't pending tasks! ---\n`));
            console.log(colors.bgWhite(colors.rainbow(`==== End. ====\n`)));
            return;
        }

        console.log(colors.bgWhite(colors.rainbow(`==== List of tasks: ====\n`)));
        for (task of list_tasks) {
            console.log(colors.cyan(`Task ${i}:`));
            if (!task.status) status = colors.yellow("In process");
            else status = colors.green("Done!");
            console.log(` --- ${colors.cyan('Description:')} ${task.description} --- ${colors.cyan('Status:')}  ${status} \n`);
            i++;
        }
        console.log(colors.bgWhite(colors.rainbow(`==== End. ====\n`)));
        break;

    case 'update':
        if (update(argv.description, argv.status)) console.log(`Task updated!`);
        else console.log(`Task not found :(`);
        break;

    case 'delete':
        if (deleteTasks(argv.description)) console.log(`Task deleted!`);
        else console.log(`task not found :(`);
        break;

    default:
        console.log(`the command is not known`);

}