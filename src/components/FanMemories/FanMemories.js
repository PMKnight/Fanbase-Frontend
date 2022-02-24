import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import './FanMemories.css';
import Navigation from '../Navigation/Navigation';
function FanMemories(props) {
	// const navigate = useNavigate();
	const [memories, setMemories] = useState();

	// const [comment, setCommment] = useState()

	// comment = {[
	//   commentValue = '',
	//   commentLine: [{ commentId:””, text: “”, }],]
	//   }

	const url = 'http://localhost:8000/api/memories/';

	const getMemory = async () => {
		try {
			const response = await fetch(url);
			if (response.status === 200) {
				const data = await response.json();
				console.log(data);
				setMemories(data);
			}
		} catch (error) {}
	};

	useEffect(() => {
		getMemory();
	}, []);

	if (!memories) {
		return null;
	}

	return (
		<div className='container'>
			<Navigation className='nav' />
			<Link to='/add-memory'>
				<EmojiEventsRoundedIcon sx={{ color: 'gold', fontSize: 60 }}>
					Add Memory
				</EmojiEventsRoundedIcon>
			</Link>

			<Container sx={{ width: 500, height: 450 }}>
				<ImageList variant='masonry' cols={2} gap={8}>
					{memories.map((memory) => (
						<Link to={`/fanbase/${memory.id}`} key={memory.id}>
							<ImageListItem key={memory.photo_url}>
								<img
									src={`${memory.photo_url}?w=248&fit=crop&auto=format`}
									srcSet={`${memory.photo_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
									alt={memory.title}
									loading='lazy'
								/>
								<ImageListItemBar
									className='title'
									position='below'
									title={memory.name}
								/>
							</ImageListItem>
						</Link>
					))}
				</ImageList>
			</Container>
		</div>
	);
}

export default FanMemories;
