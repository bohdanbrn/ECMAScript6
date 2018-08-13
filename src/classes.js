class Task {
    constructor(title = Task.getDefaultTitle()) {
        this.title = title;
        this._done = false;
        Task.count += 1;
        console.log("Create task");
    }

    get done() {
        return this._done === true ? "Completed" : "Failed";
    }

    set done(value) {
        if (value !== undefined && typeof value === 'boolean') {
            this._done = value;
        } else {
            console.error('Error! Please set value true or false');
        }
    }

    complete() {
        this._done = 34;
        console.log('Task "' + this.title + '" completed');
    }

    static getDefaultTitle() {
        return "Task";
    }
}
Task.count = 0;
let task = new Task("Clean room");

console.log(task.done, task._done);
task.complete();
console.log(task.done, task._done);