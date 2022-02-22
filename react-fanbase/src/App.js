import { Routes, Route } from 'react-router-dom';
import FanMemories from './components/FanMemories/FanMemories';
import FanDetails from './components/FanDetails/FanDetails';

function App() {
	return (
		<>
			<main>
				<Routes>
					<Route path='/' element={<FanMemories />} />
					<Route path='/:id' element={<FanDetails />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
