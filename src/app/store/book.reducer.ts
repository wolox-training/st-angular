import { createReducer, on } from '@ngrx/store';
import * as shoppingActions from './book.actions';
 
export const initialState = [];
 
const shoppingReducer = createReducer(initialState,
  on(shoppingActions.addBook, (state, {book}) => {
    console.log(book)
    return [...state, book]
  }),
  on(shoppingActions.removeBook, (state, {index}) => {
    state.splice(index, 1);
    return state
  })
);
 
export function reducer(state, action) {
  return shoppingReducer(state, action);
}
