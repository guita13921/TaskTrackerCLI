const fs = require('fs');
const path = require('path');
var Table = require('cli-table3');

const TASK_FILE = path.join(__dirname, '..', 'task.json');

function addTask(description) {
    if (!description) {
        console.log('Please specify the task name.');
        process.exit(1);
    }

    // TODO: เรียก service จริง เช่น taskService.addTask(title);
    console.log(`[DEBUG] จะเพิ่ม task ใหม่: "${description}"`);
    const jsonData = fs.readFileSync('./task.json', 'utf8');
    const data = JSON.parse(jsonData);
    //console.log(data.length);

    const ids = data.map(t => t.id);
    const maxId = Math.max(...ids);
    const newId = maxId + 1;

    const newTask = {
        id: newId,
        description: description[0],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        status: "todo"
    };

    data.push(newTask)
    //console.log(data)
    const jsonString = JSON.stringify(data, null, 2); // แปลง array → JSON string พร้อมจัด format
    //console.log(jsonString)
    fs.writeFileSync('./task.json', jsonString, 'utf8');
}

function listTasks(statusFilter) {
    const filter = statusFilter[0];
    if (!filter) {
        // TODO: เรียก service จริง เช่น taskService.l~istTasks();
        console.log('[DEBUG] จะแสดงรายการ task ทั้งหมด');
        try {
            const jsonData = fs.readFileSync(TASK_FILE, 'utf8');
            const data = JSON.parse(jsonData);
            var table = new Table({
                head: ['ID', 'Description', 'Created At', 'Updated At', 'Status'],
                wordWrap: true
            });

            //console.log(data);
            data.forEach(task => {
                table.push([
                    task.id,
                    task.description,
                    task.createdAt,
                    task.updatedAt,
                    task.status
                ]);
            });
            console.log(table.toString());

        } catch (error) {
            console.error('Error reading or parsing JSON file:', error);
        }
    } else if (filter == "done") {
        // TODO: เรียก service จริง เช่น taskService.listTasks();
        console.log('[DEBUG] จะแสดงรายการ task ทั้งหมดที่ Status = done');
        try {
            const jsonData = fs.readFileSync(TASK_FILE, 'utf8');
            const data = JSON.parse(jsonData);
            const dataFilter = data.filter(data => data.status === "done");
            console.log(dataFilter);

            var table = new Table({
                head: ['ID', 'Description', 'Created At', 'Updated At', 'Status'],
                wordWrap: true
            });

            //console.log(data);
            dataFilter.forEach(task => {
                table.push([
                    task.id,
                    task.description,
                    task.createdAt,
                    task.updatedAt,
                    task.status
                ]);
            });
            console.log(table.toString());

        } catch (error) {
            console.error('Error reading or parsing JSON file:', error);
        }
    } else if (filter == "in-progress") {
        // TODO: เรียก service จริง เช่น taskService.listTasks();
        console.log('[DEBUG] จะแสดงรายการ task ทั้งหมดที่ Status = in progress');
        try {
            const jsonData = fs.readFileSync(TASK_FILE, 'utf8');
            const data = JSON.parse(jsonData);
            const dataFilter = data.filter(data => data.status === "in progress");
            console.log(dataFilter);

            var table = new Table({
                head: ['ID', 'Description', 'Created At', 'Updated At', 'Status'],
                wordWrap: true
            });

            //console.log(data);
            dataFilter.forEach(task => {
                table.push([
                    task.id,
                    task.description,
                    task.createdAt,
                    task.updatedAt,
                    task.status
                ]);
            });
            console.log(table.toString());

        } catch (error) {
            console.error('Error reading or parsing JSON file:', error);
        }
    } else if (filter == "todo") {
        // TODO: เรียก service จริง เช่น taskService.listTasks();
        console.log('[DEBUG] จะแสดงรายการ task ทั้งหมดที่ Status = todo');
        try {
            const jsonData = fs.readFileSync(TASK_FILE, 'utf8');
            const data = JSON.parse(jsonData);
            const dataFilter = data.filter(data => data.status === "todo");
            //console.log(dataFilter);

            var table = new Table({
                head: ['ID', 'Description', 'Created At', 'Updated At', 'Status'],
                wordWrap: true
            });

            //console.log(data);
            dataFilter.forEach(task => {
                table.push([
                    task.id,
                    task.description,
                    task.createdAt,
                    task.updatedAt,
                    task.status
                ]);
            });

            console.log(table.toString());

        } catch (error) {
            console.error('Error reading or parsing JSON file:', error);
        }
    } else {
        console.log('Unknow Command');
        process.exit(1);
    }
}

function markDone(id) {
    if (!id) {
        console.log('Please specify the task ID.');
        process.exit(1);
    }

    // TODO: เรียก service จริง เช่น taskService.markDone(id);
    console.log(`[DEBUG] จะเปลี่ยนสถานะ task id=${id} ให้เป็น true`);
    const jsonData = fs.readFileSync('./task.json', 'utf8');
    const data = JSON.parse(jsonData);
    data.find(data => data.id === Number(id)).status = "done";
    data.find(data => data.id === Number(id)).updatedAt = new Date().toISOString();
    //console.log(data)
    const jsonString = JSON.stringify(data, null, 2); // แปลง array → JSON string พร้อมจัด format
    fs.writeFileSync('./task.json', jsonString, 'utf8');
}

function deleteTask(id) {
    if (!id) {
        console.log('Please specify the task ID.');
        process.exit(1);
    }

    // TODO: เรียก service จริง เช่น taskService.deleteTask(id);
    console.log(`[DEBUG] จะลบ task id=${id}`);
    const jsonData = fs.readFileSync('./task.json', 'utf8');
    const data = JSON.parse(jsonData);
    const index = data.findIndex(data => data.id === Number(id));

    //console.log(index);
    if (index === -1) {
        console.log('This Task ID does not exist in the system.');
        process.exit(1);
    } else {
        data.splice(index, 1);
        //console.log(data);
        const jsonString = JSON.stringify(data, null, 2); // แปลง array → JSON string พร้อมจัด format
        fs.writeFileSync('./task.json', jsonString, 'utf8');
    }
}

function startTask(id) {
    console.log(id);
    if (!id) {
        console.log('Please specify the task ID.');
        process.exit(1);
    }

    // TODO: เรียก service จริง เช่น taskService.markDone(id);
    console.log(`[DEBUG] จะเปลี่ยนสถานะ task id=${id} ให้เป็น in progress`);

    const jsonData = fs.readFileSync('./task.json', 'utf8');
    const data = JSON.parse(jsonData);
    data.find(data => data.id === Number(id)).status = "in progress";
    data.find(data => data.id === Number(id)).updatedAt = new Date().toISOString();
    //console.log(data)

    const jsonString = JSON.stringify(data, null, 2); // แปลง array → JSON string พร้อมจัด format
    fs.writeFileSync('./task.json', jsonString, 'utf8');
}

function updateDescription(id, newDescription) {
    if (!id) {
        console.log('Please specify the task ID.');
        process.exit(1);
    }

    // TODO: เรียก service จริง เช่น taskService.updateTask(id);
    console.log(`[DEBUG] จะอัพเดท task id=${id}`);
    const jsonData = fs.readFileSync('./task.json', 'utf8');
    const data = JSON.parse(jsonData);
    const index = data.findIndex(data => data.id === Number(id));

    //console.log(index);
    if (index === -1) {
        console.log('This Task ID does not exist in the system.');
        process.exit(1);
    } else {
        data[index].description = newDescription;
        data.find(data => data.id === Number(id)).updatedAt = new Date().toISOString();
        //console.log(data);
        const jsonString = JSON.stringify(data, null, 2); // แปลง array → JSON string พร้อมจัด format
        fs.writeFileSync('./task.json', jsonString, 'utf8');
    }
}

module.exports = {
    addTask,
    listTasks,
    startTask,
    markDone,
    deleteTask,
    updateDescription,
};
