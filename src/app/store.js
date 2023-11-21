import { configureStore } from "@reduxjs/toolkit";
// import reducers
import topicsReducer from '../features/topics/topicsSlice.js';
import quizReducer from '../features/quizzes/quizSlices.js';
import cardsReducer from '../features/cards/cardsSlice.js';

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizReducer,
    cards: cardsReducer
    
  },
});
