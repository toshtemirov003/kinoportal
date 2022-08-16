import { Header } from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Popular } from './pages/Popular/Popular';
import { Single } from './pages/Single/Single';
import { TopMovies } from './pages/Topmovie/TopMovie';
import { UpComing } from './pages/UpComing/UpComing';
import { TvShow } from './pages/TvShow/TvShow';
import { Search } from './pages/Search/Search';


export const Private = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/popular' element={<Popular />} />
				<Route path='/popular/:id' element={<Single />} />
				<Route path='/top_rated' element={<TopMovies />} />
				<Route path='/upcoming' element={<UpComing />} />
				<Route path='/popular' element={<TvShow />} />
				<Route path='/search/:searchQuery' element={<Search />} />
			</Routes>
		</>
	);
};
