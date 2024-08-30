import { PayloadAction } from "@reduxjs/toolkit";
import { InitialStateCount, CounterTypes } from "../../Types";

const InitialState: InitialStateCount = {
  count: 0,
};

const reducerCounter = (
  state = InitialState,
  action: PayloadAction<number>
) => {
  switch (action.type) {
    case CounterTypes.INCREMENT:
      return {
        count: state.count + 1,
      };

    case CounterTypes.DECREMENT:
      return {
        count: state.count - 1,
      };
    case CounterTypes.INCREMENT_BY_AMOUNT:
      return {
        count: state.count + action.payload,
      };

    default:
      return state;
  }
};

export default reducerCounter;
