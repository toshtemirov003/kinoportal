import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react'
import "../Header/Header.css"
export const Header = () => {

	const [inputVal, setInputVal] = useState('')
	const navigate = useNavigate()

	useEffect(() => {
		if (inputVal.trim().length) {
			navigate('/search/' + inputVal)
		} else {
			navigate('/')
		}
	}, [inputVal])

	return (
		<Head>
			<Link className='header-link' to='/'>
				<Href>Home</Href>
			</Link>
			<Link className='header-link' to='/popular'>
				<Href>Popular movies</Href>
			</Link>
			<Link className='header-link' to='/top_rated'>
				<Href>Top Rated Movies</Href>
			</Link>
			<Link className='header-link' to='/upcoming'>
				<Href>Up Coming Movies</Href>
			</Link>
			<Link className='header-link' to='/popular'>
				<Href>TV-show</Href>
			</Link>

			<Input onInput={(evt) => setInputVal(evt.target.value)} type="search" placeholder='Search...' />
		</Head>
	);
};

const Head = styled.header`
	display: flex;
	padding: 1rem;
	color: #fff;
	background-color: rgb(47, 201, 124, 0.5);
`;

const Href = styled.span`
	margin-right: 30px;
`;

const Input = styled.input`
	margin-left: auto;
	padding: 5px;
	padding-left: 10px;
	outline: none;
	border-radius: 30px;
	border: none;
`