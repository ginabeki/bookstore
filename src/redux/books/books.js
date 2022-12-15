const initialState = [
  {
    id: '1',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: '2',
    title: 'A Place Called Home',
    author: 'Preeti Shenoy',
  },
  {
    id: '3',
    title: 'Queen of Fire',
    author: 'Roger Faligot',
  },
];
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((item) => item.payload.id !== action.id);
    default:
      return state;
  }
};

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (index) => ({
  type: REMOVE_BOOK,
  id: index,
});

export default bookReducer;
