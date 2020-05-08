//Requireds
const fs = require('fs');

// BD
let listToDo = [];


// Functions 

//Save tasks in data.json
const saveDB = () => {
    let data = JSON.stringify(listToDo);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('an error ocurred: \n', err);
        return true
    });
}

//Load BD (IMPORTANT)
const loadDB = () => {
    try {
        listToDo = require('../db/data.json'); // if data exists, it loads it into the array listToDo
    } catch (err) {
        listToDo; //if not, initialize an empty array
    }

}


const create = (description) => {
    loadDB(); //important
    let newTask = {
        description,
        status: false
    };

    listToDo.push(newTask);

    saveDB();
    return newTask;

}


const getlistOfTask = () => {
    loadDB(); //important   
    return listToDo;
}

const update = (desc, status = true) => {
    loadDB(); //Important
    let flag = false;

    listToDo.forEach(element => {
        if (element.description === desc) {
            element.status = status;
            saveDB();
            flag = true;
        };
    });

    if (flag) return true;
    else return false;
}

const deleteTasks = (desc) => {
    loadDB(); //Important
    let flag = false;

    listToDo.forEach((element, index) => {
        if (element.description === desc) {
            listToDo.splice(index, 1);
            saveDB();
            flag = true;
        };
    });
    if (flag) return true;
    else return false;
}

module.exports = {
    create,
    update,
    getlistOfTask,
    deleteTasks
}