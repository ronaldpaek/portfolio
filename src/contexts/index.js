import { createContext, useContext } from 'react';

const ColorModeContext = createContext(null);
const OpenContext = createContext(null);

const useColorModeContext = () => useContext(ColorModeContext);
const useOpenContext = () => useContext(OpenContext);

export { ColorModeContext, useColorModeContext, OpenContext, useOpenContext };
