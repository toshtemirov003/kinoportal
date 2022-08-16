import axios from 'axios';
import { useRef } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../hook/UseAuth';

export const Login = () => {

  const {token, setToken} = useAuth()

	const elEmail = useRef();
	const elPassword = useRef();
	const handleFormSubmit = (evt) => {
		evt.preventDefault();
    axios.post('https://reqres.in/api/login',
    {			email: elEmail.current.value,
       		password: elPassword.current.value,}
    ).then(function (response){
      if(response.data){
        setToken(response.data);
      }
    })
    .catch(function(err){
      console.log(err);
    })
	// 	fetch(`https://reqres.in/api/login`, {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify({
	// 			email: elEmail.current.value,
	// 			password: elPassword.current.value,
	// 		}),
	// 	})
	// 		.then((res) => res.json())
	// 		.then((data) => console.log(data))
	// 		.catch((err) => console.log(err));
	};


	return (
		<Wrapper>
			<Title>Login page</Title>
			<Form onSubmit={handleFormSubmit}>
				<Input
					ref={elEmail}
					className='form-control'
					type='email'
					placeholder='Email...'
					name='Email'
				/>
				<Input
					ref={elPassword}
					className='form-control'
					type='password'
					placeholder='Password...'
					name='Pass'
				/>
				<Button className='btn btn-primary' type='submit'>
					Send
				</Button>
			</Form>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	height: 100vh;
	padding: 2rem;
	background-color: orange;
`;

const Title = styled.h2`
	text-align: center;
	color: #fff;
	text-transform: uppercase;
`;

const Form = styled.form`
	width: 400px;
	margin: 100px auto;
	background-color: #fff;
	padding: 1rem;
	border: 1px solid #444;
	text-align: center;
`;

const Input = styled.input`
	width: 100%;
	margin-bottom: 20px;
`;

const Button = styled.button``;
