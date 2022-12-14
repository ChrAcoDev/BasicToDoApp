import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import Todo from '../classes/Todo';
import Cookie from 'universal-cookie';

const cookie = new Cookie();
const savedTodos = cookie.get('savedTodos');

type InitState = {
    todoList: Todo[]
}

const initState: InitState = {
    todoList: (savedTodos && savedTodos.length > 0) ? savedTodos : []
};

const todoSlice = createSlice({
    name: 'todoList',
    initialState: initState,
    reducers: {
        add(state: InitState, action: PayloadAction<Todo>) {
            state.todoList.push(action.payload);
        },
        remove(state: InitState, action: PayloadAction<number[]>) {
            state.todoList = state.todoList.filter(todo => { return !action.payload.includes(todo.id) });
        },
        complete(state: InitState, action: PayloadAction<number>) {
            let newArr = [...state.todoList];
            let index = state.todoList.findIndex(todo => todo.id === action.payload);
            newArr[index].isCompleted = !state.todoList[index].isCompleted;
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
        },
        save(state: InitState) {
            cookie.set('savedTodos', state.todoList);
        },
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