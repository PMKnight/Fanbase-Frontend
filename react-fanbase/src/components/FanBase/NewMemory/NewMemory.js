import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './NewMemory.css';
import { TextField } from '@mui/material';
import Navigation from '../../Navigation/Navigation';

function NewMemory(props) {
	const { id, memory } = useParams();

	const [usermemories, setUserMemories] = useState([]);
	const navigate = useNavigate;

	// const addUserMemory = () => {
	// 	const url = 'http://localhost:8000/api/memories/';
	// };

	async function getUserMemories() {
		try {
			const res = await fetch('http://localhost:8000/api/memories/');
			const data = await res.json();
			console.log(data);
			setUserMemories(data);
			console.log(setUserMemories);
		} catch (error) {
			console.log(error);
		}
	}
	// fetch(`http://localhost:8000/api/memories/${id}`)
	// 	.then((data) => data.json())
	// 	.then((data) => {
	// 		console.log(data);
	// 		setFlavor(data);
	// 	});
	// }

	useEffect(() => {
		// This code to run when component mounts
		getUserMemories();
	}, [id]);

	const handleChange = (event) => {
		setUserMemories({ ...memory, [event.target.id]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Write your PUT fetch() or axios() request here
		axios.post('http://localhost:8000/api/memories/').then((res) => {
			console.log(res);
			// rediredct the user to 'localhost:3000/'
			navigate('/');
		});
	};

	// const handleDelete = () => {
	// 	// Write your DELETE fetch() or axios() request here
	// 	axios
	// 		.delete(`http://localhost:8000/api/memories/${memory.id}`)
	// 		.then((data) => {
	// 			navigate('/');
	// 		});
	// };

	//   https://stackoverflow.com/questions/3828554/how-to-allow-input-type-file-to-accept-only-image-files/15857189

	const handleMemorySubmit = (e) => {
		if (e.target.files.length === 0) return false;
		const file = e.target.files.length[0];

		if (!/^image\//.test(file.type)) {
			alert(`File ${file.name} is not an image.`);
			return false;
		}
	};

	// if (!memory) {
	// 	return <h1>Loading...</h1>;
	// }

	return (
		<div className='memoryContainer'>
			<Navigation />
			<h2>Add Your Memory</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='title'>Title</label>
					<input
						type='text'
						id='text'
						value={usermemories.title}
						onChange={handleChange}
					/>
				</div>
				<label htmlFor='memory'>Memory</label>
				<input
					className='file-upload'
					name='memory'
					type='file'
					accept='image/*'
					onChange={(e) => handleMemorySubmit(e)}
				/>
				<label htmlFor='comments'>Comments</label>
				<TextField
					multiline
					rows={4}
					type='text'
					onChange={handleChange}
					id='comments'
					value={usermemories.body}
				/>

				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}

export default NewMemory;
