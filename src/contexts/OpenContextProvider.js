import React, { useState, createContext } from 'react';

export const OpenContextProvider = ({ children }) => {
	const [open, setOpen] = useState(false);
	return (
		<OpenContext.Provider value={{ open, setOpen }}>
			{children}
		</OpenContext.Provider>
	);
};

export const OpenContext = createContext();
