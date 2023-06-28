import React, { FC, ReactNode, createContext, useReducer } from 'react';

type CounterProviderProps = {
  children: ReactNode;
}

export const CounterContext = createContext({});

const initState = {}

export let counterDispatch: any = null;

const CounterProvider: FC<CounterProviderProps> = ({ children }) => {
	const [state, dispatch] = useReducer(counterReducer, initState,);

	counterDispatch = dispatch;

	return (
		<CounterContext.Provider value={state}>{children}</CounterContext.Provider>
	)
}

export default CounterProvider;