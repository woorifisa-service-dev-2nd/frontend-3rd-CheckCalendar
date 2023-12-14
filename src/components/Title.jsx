import React, { useState } from 'react';
import icon from './Image/icons8-tasklist.gif';

const Title = ({ onAdd, date, name }) => {


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
			<div className='flex'>
				<h1 className='mt-[10px] mr-[15px] text-5xl font-border text-gray-800'>Check Calendar</h1>
				<img src={icon} alt="todoIcon" />
			</div>
			<p className='mt-[15px] text-gray-600'>Today is {date}</p>
			<div className='flex inline-block align-center'>
				<input
					className='text-lg w-[400px] my-[20px] h-[37px] mr-[50px] pl-[8px] bg-gray-300 rounded'
					type="text"
					placeholder="Write a new title..."
					value={title}
					onChange={(event) => setTitle(event.target.value)}
				/>
				<input
					className='text-lg w-[400px] mt-[20px] h-[37px] mr-[50px] pl-[8px] bg-gray-300 rounded'
					type="text"
					placeholder="Write a new todo..."
					value={summary}
					onChange={(event) => setSummary(event.target.value)}
				/>
				<button
				className='mt-[20px] mr-[50px] relative inline-flex items-center justify-center p-0.5 mb-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-600 to-blue-600 group-hover:from-cyan-600 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 font-bold hover:cursor-pointer'
				onClick={onAddTodo}
					disabled={!checkAdd}>
					<span
					className="relative px-3 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 font-bold"
					>추가</span>
				</button>
			</div>
			<div className='h-[2px] bg-gray-400 my-[16px]'></div>
		</div>
	);
};

export default Title;