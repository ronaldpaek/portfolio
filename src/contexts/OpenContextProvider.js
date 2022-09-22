import React, { useState, createContext, useContext } from 'react';

export const OpenContextProvider = ({ children }) => {
	const [open, setOpen] = useState(false);

	const toggleOpenMenu = () => setOpen(open => !open);

	return (
		<OpenContext.Provider value={{ open, toggleOpenMenu }}>
			{children}
		</OpenContext.Provider>
	);
};

const OpenContext = createContext(null);

export const useOpenContext = () => useContext(OpenContext);
