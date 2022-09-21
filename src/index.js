import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { AppThemeProvider } from '@themes';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AppThemeProvider>
				<App />
			</AppThemeProvider>
		</BrowserRouter>
	</React.StrictMode>
);
