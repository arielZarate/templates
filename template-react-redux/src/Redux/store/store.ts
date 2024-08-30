import { configureStore, combineReducers } from "@reduxjs/toolkit";
import reducerContador from "../reducer/contador/CounterReducer";
import CounterSlices from "../reducer/contador/CounterSlices";
//si tengo varios reducer puedo combinarlos aca
const rootReducer = combineReducers({
  counterReducer: reducerContador, //es una forma de hacerlo al counter con Reducer
  counterSlices: CounterSlices, //es otra forma de hacerlo con el Slices
});

const store = configureStore({
  reducer: rootReducer,
});

/*
combineReducers se utiliza para combinar múltiples reducers en un solo reducer raíz.
RootState se define utilizando ReturnType<typeof rootReducer>, 
lo que significa que es el tipo del valor de retorno de rootReducer. 
En otras palabras, RootState representa el tipo del estado completo de la aplicación.

*/

export default store;

export type RootState = ReturnType<typeof rootReducer>;
