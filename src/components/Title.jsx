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
			<button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-600 group-hover:from-cyan-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
				onClick={onAddTodo}
				disabled={!checkAdd}>
				<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 ">
					추가
				</span>
			</button>
		</div>
	);
};

export default Title;