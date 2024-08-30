import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store/store";

//============  estos metodos de usan con CounterSlices==============================0
import {
  increment,
  decrement,
  incrementByAmount,
} from "../Redux/reducer/contador/CounterSlices";

//importamos los Tipos para usar con la version CounterReducer
import { CounterTypes } from "../Redux/Types";

import { Dispatch } from "@reduxjs/toolkit"; //el tipo
const Contador = () => {
  /**
   ==========metodo viejo cin redux con useSate=============
  const [contador, SetContador] = useState(0);
  const handleIncrement = () => SetContador(contador + 1);
 */

  //metodo con redux/slices
  // const contador = useSelector((state: RootState) => state.counterSlices.count);

  //metodo con redux/reducer
  const contador2 = useSelector(
    (state: RootState) => state.counterReducer.count
  );

  const dispatch: Dispatch = useDispatch();

  return (
    <>
      <div className="" style={{ display: "flex", justifyContent: "center" }}>
        <h2 style={{ color: "blueviolet", margin: "10px 20px" }}>Contador</h2>
        <div style={{ display: "flex" }}>
          <button
            type="button"
            style={{
              backgroundColor: "cyan",
              padding: "4px 0",
              width: "60px",
              borderRadius: "15px",
              fontWeight: "bold",
              fontSize: "30px",
            }}
            //   onClick={() => SetContador(contador - 1)} //con useState()
            //onClick={() => dispatch(decrement())}  //con Slices

            //con Reducer y switch
            onClick={() =>
              dispatch({
                type: CounterTypes.DECREMENT,
              })
            }
          >
            -
          </button>
          <span
            style={{
              padding: "4px 0",
              width: "60px",
              borderRadius: "15px",
              fontWeight: "bold",
              fontSize: "30px",
              textAlign: "center",
            }}
          >
            {contador2}
          </span>
          <button
            type="button"
            style={{
              backgroundColor: "cyan",
              padding: "4px 0",
              width: "60px",
              borderRadius: "15px",
              fontWeight: "bold",
              fontSize: "30px",
            }}
            //onClick={() => SetContador(contador + 1)} //con useState()
            //onClick={() => dispatch(increment())}  //con Slices

            //con Reducer y switch
            onClick={() =>
              dispatch({
                type: CounterTypes.INCREMENT,
              })
            }
          >
            +
          </button>

          <button
            type="button"
            style={{
              backgroundColor: "cyan",
              padding: "4px 0",
              width: "200px",
              borderRadius: "15px",
              fontWeight: "bold",
              fontSize: "30px",
            }}
            //onClick={() => SetContador(contador + 1)} //con useState()
            //  onClick={() => dispatch(incrementByAmount(2))} //con Slices

            //con Reducer y switch
            onClick={() =>
              dispatch({
                type: CounterTypes.INCREMENT_BY_AMOUNT,
                payload: 2,
              })
            }
          >
            increment x 2
          </button>
        </div>
      </div>
    </>
  );
};

export default Contador;
