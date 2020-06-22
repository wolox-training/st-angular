import { createReducer, on } from '@ngrx/store';
import * as shoppingActions from './book.actions';

export const initialState = [];

const shoppingReducer = createReducer(initialState,
  on(shoppingActions.addBook, (state, {book}) => {
    return [...state, book]
  }),
  on(shoppingActions.removeBook, (state, {index}) => {
    const cart = [...state];
    cart.splice(index, 1);
    return cart
  })
);

export function reducer(state, action) {
  return shoppingReducer(state, action);
}
