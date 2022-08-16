import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from '../../components/Card/Card';
import styled from 'styled-components';
export const TvShow = () => {
	const [movies, setMovies] = useState({});

	useEffect(() => {
		axios
			.get('https://api.themoviedb.org/3/tv/popular', {
				params: {
					api_key: '91516251523cadb315938d57c611f05c',
				},
			})
			.then((res) => setMovies(res.data.results))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<TvShowHead>Tv-Show</TvShowHead>
			{movies.length && (
				<List>
					{movies.map((e) => (
						<Card item={e} />
					))}
				</List>
			)}
		</div>
	);
};

const List = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

const TvShowHead = styled.h2`
  color: yellow;
  font-size: 40px;
  padding: 20px;
`