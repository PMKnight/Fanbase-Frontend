import { Routes, Route } from 'react-router-dom';
import FanMemories from './components/FanMemories/FanMemories';
import FanDetails from './components/FanDetails/FanDetails';
import FanBase from './components/FanBase/FanBase';
import NewMemory from './components/FanBase/NewMemory/NewMemory';

function App() {
	return (
		<>
			<main>
				<Routes>
					<Route path='/fanbase' element={<FanBase />} />
					<Route path='/' element={<FanMemories />} />
					<Route path='/add-memory' element={<NewMemory />} />
					<Route path='/fanbase/:id' element={<FanDetails />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
