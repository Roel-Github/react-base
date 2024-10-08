import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import Home2 from './pages/Home2';

const App: React.FC = () => (
	<BrowserRouter>
		<Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home2" element={<Home2 />} />
			<Route path="/login" element={<LoginPage />} />
		</Routes>
	</BrowserRouter>
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);