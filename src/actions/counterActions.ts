export enum CounterActionType {
  ADD = "COUNTER/ADD",
  DECREMENT = "COUNTER/DECREMENT",
  INCREMENT = "COUNTER/INCREMENT"
}

export interface CounterAction {
  type: CounterActionType;
  payload?: { amount: number };
}

export const add = (amount: number): CounterAction => ({
  payload: { amount },
  type: CounterActionType.ADD
});

export const increment = (): CounterAction => ({
  type: CounterActionType.INCREMENT
});

export const decrement = (): CounterAction => ({
  type: CounterActionType.DECREMENT
});
