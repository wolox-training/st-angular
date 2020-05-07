import { Injectable } from '@angular/core'
import { createAction, props } from '@ngrx/store'
import { Book } from '@app/models/book'

export const addBook = createAction('[SHOPPING CART] Add', props<{book: Book}>());
export const removeBook = createAction('[SHOPPING CART] Remove', props<{index}>());
