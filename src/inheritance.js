class Task {
    constructor(title) {
        this.title = title;
        this.done = false;
        Task.count++;
        console.log('Create task');
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    static getDefaultTitle() {
        return "Task";
    }
    complete() {
        this.done = true;
        console.log(`Task ${this.title} is complete`);
    }
}
Task.count = 0;

class SubTask extends Task {
    constructor(title, parent) {
        super(title);
        this.parent = parent;
        console.log('Create subtask');
    }
    
    complete() {
        super.complete();
        console.log(`Subtask ${this.title} is complete`);
    }
}


let task = new Task("Learn JavaScript");
let subtask = new SubTask("Learn EcmaScript6", task);

task.complete();
subtask.complete();

console.log(SubTask.getDefaultTitle());
console.log(SubTask.count);

console.log(task);
console.log(subtask);
