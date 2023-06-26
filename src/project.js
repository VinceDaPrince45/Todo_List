export const projectObject = function(name) {
    this.name = name;
    this.tasks = [];
    // access the objects tasks by appending and deleting from this array
}

export const taskObject = function(name,description,date,priority,status) {
    this.name = name;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.status = status;
    // create this.priority and use radio buttons with choice normal/important
}