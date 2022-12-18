class Todo {
    id: number;
    text: string;

    constructor(t: string) {
        this.text = t;
        this.id = Math.floor(Math.random() * 100000);
    }
}

export default Todo;