import { createContext, useContext } from 'react';

const ColorModeContext = createContext(null);

const useColorModeContext = () => useContext(ColorModeContext);

const OpenContext = createContext(null);

const useOpenContext = () => useContext(OpenContext);

export { ColorModeContext, useColorModeContext, OpenContext, useOpenContext };
