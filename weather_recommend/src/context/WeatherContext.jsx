// import { createContext, useReducer, useContext } from 'react';


// const WeatherStateContext = createContext();
// const WeatherDispatchContext = createContext();

// const initialState = {
//   weather: null,
//   history: [],
//   theme: 'light',
//   error: null
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'SET_WEATHER':
//       return {
//         ...state,
//         weather: action.payload,
//         history: [action.payload.name, ...state.history.filter(c => c !== action.payload.name)].slice(0,5),
//         error: null
//       };
//     case 'SET_ERROR':
//       return { ...state, error: action.payload };
//     case 'TOGGLE_THEME':
//       return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
//     default:
//       return state;
//   }
// }

// export function WeatherProvider({ children }) {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <WeatherStateContext.Provider value={state}>
//       <WeatherDispatchContext.Provider value={dispatch}>
//         {children}
//       </WeatherDispatchContext.Provider>
//     </WeatherStateContext.Provider>
//   );
// }

// export const useWeatherState = () => useContext(WeatherStateContext);
// export const useWeatherDispatch = () => useContext(WeatherDispatchContext);

import { createContext, useReducer, useContext } from 'react';

// Create two contexts: one for state, one for dispatch
const WeatherStateContext = createContext();
const WeatherDispatchContext = createContext();

const initialState = {
  weather: null,
  history: [],
  theme: 'light',
  error: null
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_WEATHER':
      return {
        ...state,
        weather: action.payload,
        history: [
          action.payload.name,
          ...state.history.filter(c => c !== action.payload.name)
        ].slice(0, 5),
        error: null
      };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
}

export function WeatherProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <WeatherStateContext.Provider value={state}>
      <WeatherDispatchContext.Provider value={dispatch}>
        {children}
      </WeatherDispatchContext.Provider>
    </WeatherStateContext.Provider>
  );
}

// Named hooks to access state and dispatch
export const useWeatherState = () => useContext(WeatherStateContext);
export const useWeatherDispatch = () => useContext(WeatherDispatchContext);
