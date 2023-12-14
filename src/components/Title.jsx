import React, { useState } from 'react';

const Title = ({ onAdd, date }) => {


	const [title, setTitle] = useState('');
	const [summary, setSummary] = useState('');

	const onAddTodo = () => {
		console.log(title, summary);
		onAdd({ title, summary });
		setTitle('');
		setSummary('');
	};

	const checkAdd = title.trim() != '' && summary.trim() != '';

	return (
		<div>
			<h1 className='text-4xl font-normal'>Check title</h1>
			<p className='text-gray-600'>{date}</p>
			<input
				type="text"
				placeholder="Write a new title..."
				value={title}
				onChange={(event) => setTitle(event.target.value)}
			/>
			<input
				type="text"
				placeholder="Write a new todo..."
				value={summary}
				onChange={(event) => setSummary(event.target.value)}
			/>
			<button className='bg-teal-500 decoration-white rounded-30 bg-origin-padding'
				onClick={onAddTodo}
				disabled={!checkAdd}>
				추가
			</button>
		</div>
	);
};

export default Title;