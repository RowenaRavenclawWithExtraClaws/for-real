import { configureStore } from "@reduxjs/toolkit";
import questionaireReducer from "../controllers/reduxSlices/questionaireSlice";

const store = configureStore({
  reducer: {
    questionaire: questionaireReducer,
  },
});

export default store;
