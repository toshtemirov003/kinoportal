import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
export const Single = () => {
	const { id } = useParams();

	const [movie, setMovie] = useState({});

	useEffect(() => {
		axios
			.get('https://api.themoviedb.org/3/movie/' + id, {
				params: {
					api_key: '91516251523cadb315938d57c611f05c',
				},
			})
			.then((res) => setMovie(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<Wrapper>
				<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} width="300" height="400" />
				<Content>
					<h1>{movie.title}</h1>
					<h2>{movie.tagline}</h2>
					<p>{movie.overview}</p>
					<h3>Budget: {movie.budget}$</h3>
					<h4>Release date : <span>{movie.release_date}</span></h4>
					<h4>Run time: {movie.runtime} min</h4>
					<a href={movie.homepage} target='blank'>Official site</a>
				</Content>
			</Wrapper>
		</div>
	);
};

const Wrapper = styled.div`
	max-width: 800px;
	padding: 30px;
	margin-top: 80px;
	margin-bottom: 80px;
	display: flex; 
	align-items: center; 
	justify-content: center;
	background-color: tomato;
	border-radius: 10px;
`
const Content = styled.div`
	margin-left: 100px; 
`
