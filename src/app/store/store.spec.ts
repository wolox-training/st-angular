import { Book } from '@app/models/book';
import { addBook, removeBook } from '@app/store/book.actions';
import { bookMock } from './../test/booksMock';
import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { select, Store } from '@ngrx/store';


describe('Store', () => {
  let store: Store<{ shopping: Book[] }>;
  const initialState = { shopping: null };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        provideMockStore({ initialState })
      ],
    });

    store = TestBed.get(MockStore);
  });

  it('Should add a book to shopping car with addBook action', () => {
    store.dispatch(addBook({book: bookMock}));
    store.pipe(select('shopping')).subscribe(res => {
      expect(res).toBe([bookMock]);
    });
  });

  it('Should delete a book in shopping car with delete action', () => {
    store.dispatch(addBook({book: bookMock}));
    store.dispatch(removeBook({index: 0}));
    store.pipe(select('shopping')).subscribe(res => {
      expect(res).toBe([]);
    });
  });
});
