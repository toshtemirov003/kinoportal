import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from '../../components/Card/Card';
import styled from 'styled-components';
import { PaginationMovies } from '../../components/Pagination/Pagination';
export const TopMovies = () => {
	const [movies, setMovies] = useState({
		isLoading: true,
		isError: false,
		data: {},
		totalPage: 1,
	});
	const [activePage, setActivePage] = useState(1)

	useEffect(() => {
		axios
			.get('https://api.themoviedb.org/3/movie/top_rated', {
				params: {
					api_key: '91516251523cadb315938d57c611f05c',
					page: activePage,
				},
			})
			.then((res) => setMovies({
				isLoading: false,
				isError: false,
				data: res.data.results,
				totalPage: res.data.total_pages > 500 ? 500 : res.data.total_pages,
			}))
			.catch((err) => setMovies({
				isLoading: false,
				isError: true,
				...movies,
			}));
	}, [activePage]);

	return (
		<div>
			<TopRated>Top Rated Movie</TopRated>
			{movies.data.length && (
				<List>
					{movies.data.map((e) => (
						<Card key={e.id} item={e} />
					))}
				</List>
			)}
			<PaginationMovies count={movies.totalPage} setActivePage={setActivePage} />
		</div>
	);
};

const List = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	list-style-type: none;
`;
const TopRated = styled.h2`
  color: yellow;
  font-size: 40px;
  padding: 20px;
`
