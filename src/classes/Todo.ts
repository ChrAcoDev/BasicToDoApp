class Todo {
    id: number;
    text: string;
    isCompleted: boolean;

    constructor(t: string) {
        this.text = t;
        this.id = Math.floor(Math.random() * 100000);
        this.isCompleted = false;
    }
}

export default Todo;