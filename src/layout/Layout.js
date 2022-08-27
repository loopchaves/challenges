import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../features/Header';

import Author from '../pages/Author';
import Challenges from '../pages/Challenges';

export default function Layout() {
	return (
		<Router>
			<div className="header-container">
				<Header />
			</div>
			<div className="main-container">
				<Routes>
					<Route path='/challenges' element={<Challenges />} />
					<Route path='/author' element={<Author />} />
				</Routes>
			</div>
		</Router>
	);
}
