import { atom, atomFamily, selector } from 'recoil';
import { todoData } from '../todos';

export const todoAtomFamily = atomFamily({
    key : "todoAtomFamily",
    default : (id) => {
        const todo = todoData.find((todo) => todo.id == id);
        return todo;
    }
})