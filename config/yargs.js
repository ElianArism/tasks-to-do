//Optimizing
const description = {
    alias: 'd',
    demand: true,
    desc: 'Describe the task you want to do'
}
const status = {
    alias: 's',
    desc: 'write true if the task is complete, false if not'
}
const configCommands = [
    // config command create
    {
        description,
    },
    //config command update
    {
        description,
        status
    },
    // config command delete
    {
        description
    }
];

const argv = require('yargs')
    .command('create', 'Create new tasks!', configCommands[0])
    .command('update', 'Update your tasks', configCommands[1])
    .command('delete', 'Delete your tasks', configCommands[2])
    .help()
    .argv;



//Export config 

module.exports = {
    argv
}