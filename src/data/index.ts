import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import Todo from '../classes/Todo';

type InitState = {
    todoList: Todo[]
}

const initState: InitState = {
    todoList: []
};

const todoSlice = createSlice({
    name: 'todoList',
    initialState: initState,
    reducers: {
        add(state: InitState, action: PayloadAction<Todo>) {
            state.todoList.push(action.payload);
        },
        remove(state: InitState, action: PayloadAction<number>) {
            state.todoList = state.todoList.filter(todo => { return todo.id !== action.payload });
        },
        complete(state: InitState, action: PayloadAction<number>) {
            const index = state.todoList.findIndex(todo => { return todo.id === action.payload });
            let newArr = [...state.todoList];
            newArr[index].isCompleted = !newArr[index].isCompleted;
            state.todoList = newArr;
        },
        removeAll(state: InitState) {
            state.todoList = [];
        },
        completeAll(state: InitState) {
            let newArr = [...state.todoList];
            for (let i = 0; i < newArr.length; i++) {
                newArr[i].isCompleted = true;
            }
            state.todoList = newArr;
        }
    }
});

const store = configureStore({
    reducer: {
        todoReducer: todoSlice.reducer
    }
});

export default store;
export const storeActions = todoSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;