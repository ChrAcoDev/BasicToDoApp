class Todo {
    id: number;
    text: string;
    isCompleted: boolean;
    dateAdded: Date;
    dateCompleted?: Date;

    constructor(t: string) {
        this.text = t;
        this.id = Math.floor(Math.random() * 100000);
        this.isCompleted = false;
        this.dateAdded = new Date();
    }
}

export default Todo;