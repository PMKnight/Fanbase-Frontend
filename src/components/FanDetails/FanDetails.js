import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { Container, CardMedia, CardContent, Typography } from '@mui/material';
import './FanDetails.css';

function FanDetails(props) {
	const { id } = useParams();
	const [memory, setMemory] = useState();

	useEffect(() => {
		getDetails();
	}, []);

	const url = 'http://localhost:8000/api/memories/';

	const getDetails = async () => {
		try {
			const response = await fetch(`${url}${id}`);
			if (response.status === 200) {
				const data = await response.json();
				console.log(data);
				setMemory(data);
			}
		} catch (error) {}
	};

	if (!memory) {
		return null;
	}

	return (
		<Container sx={{ maxWidth: 400 }}>
			<Navigation />
			<CardContent className='card'>
				<Link to='/fanbase/:id'></Link>
				<Link to={`/fanbase/${memory.id}`} key={memory.id}>
					<Typography variant='h5' color='black' component='div'>
						{memory.title}
					</Typography>
					<CardMedia
						className='img'
						component='img'
						// height='300'
						image={memory.photo_url}
						alt={memory.title}
					/>
					<Typography variant='body1' color='black'>
						{memory.body}
					</Typography>
				</Link>
			</CardContent>
		</Container>
	);
}

export default FanDetails;
