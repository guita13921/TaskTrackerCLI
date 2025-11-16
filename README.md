Task Tracker CLI

A simple command-line Task Tracker built with Node.js.
This tool allows you to create, update, manage, and filter tasks
directly from your terminal.

------------------------------------------------------------------------

📌 Features

-   Add new tasks
-   List all tasks or filter by status (done, todo, in-progress)
-   Mark tasks as done
-   Update task descriptions
-   Delete tasks
-   Stores all tasks in a local JSON file

------------------------------------------------------------------------

🧰 Usage

    node index.js add "task description"
    node index.js list
    node index.js list <done/todo/in-progress>
    node index.js done <id>
    node index.js update <id> "new task description"
    node index.js delete <id>

------------------------------------------------------------------------

📝 Commands Overview

add

Add a new task with a description.
Example:

    node index.js add "Buy groceries"

list

List all tasks or filter by status:

    node index.js list
    node index.js list done
    node index.js list todo
    node index.js list in-progress

done

Mark a task as completed:

    node index.js done 3

update

Update the description of a task:

    node index.js update 2 "Updated task description"

delete

Remove a task by ID:

    node index.js delete 5

------------------------------------------------------------------------

📂 Project Structure

    TaskTrackerCLI/
     ├── index.js
     ├── task.json
     ├── services/
     │    └── taskService.js
     └── README.txt

------------------------------------------------------------------------

📄 Notes

-   This project uses basic file operations (JSON storage).
-   Designed as a beginner-friendly CLI project.
-   Easy to extend with new features such as priority levels or
    deadlines.
