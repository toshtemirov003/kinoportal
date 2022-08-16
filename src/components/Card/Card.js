import styled from 'styled-components';
import { Link } from 'react-router-dom';
import "../Card/Card.css"

export const Card = ({ item }) => {
	return (
		<MovieCard>
			<Link className='popular-link' to={`/popular/${item.id}`}>
				<MovieImg src={`https://image.tmdb.org/t/p/w400${item.poster_path}`} />
				<MovieTitle>{item.title}</MovieTitle>
				<MovieDate>{item.release_date}</MovieDate>
			</Link>
		</MovieCard>
	);
};

const MovieCard = styled.li`
	width: 23%;
	margin-bottom: 30px;
	margin-top: 30px;
	padding: 8px;
	border-radius: 10px;
	background-color: teal;
	color: #fff;
`;

const MovieImg = styled.img`
	width: 100%;
	object-fit: cover;
`;

const MovieTitle = styled.h2`
	margin: 16px 0;
`;

const MovieDate = styled.time`
	font-size: 18px;
`;
