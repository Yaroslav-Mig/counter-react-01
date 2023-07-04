import React, { FC, ReactNode, createContext, useReducer } from 'react';
import { counterReducer } from '../state/counterReducer';

type CounterProviderProps = {
  children: ReactNode;
};

export const CounterContext = createContext({});

const initState: any = {
  curVal: 0,
  minVal: 0,
  maxVal: 5,
  isSetting: true,
  infoStr: "Enter values and press 'set' ",
  warningStr: 'Incorrect value',
};

export let counterDispatch: any = null;

const CounterProvider: FC<CounterProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initState);

  counterDispatch = dispatch;

  return <CounterContext.Provider value={state}>{children}</CounterContext.Provider>;
};

export default CounterProvider;
