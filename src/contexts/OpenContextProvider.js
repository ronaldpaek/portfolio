import { useState } from 'react';
import { OpenContext } from './';

const OpenContextProvider = ({ children }) => {
	const [open, setOpen] = useState(false);

	const handleToggleOpenMenu = () => setOpen(open => !open);

	return (
		<OpenContext.Provider value={{ open, handleToggleOpenMenu }}>
			{children}
		</OpenContext.Provider>
	);
};

export default OpenContextProvider;