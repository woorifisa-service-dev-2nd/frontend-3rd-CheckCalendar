import React, { useState } from 'react';
import DefaultLayout from './layouts/DefaultLayout';
import WhiteBox from './layouts/WhiteBox';
import Title from './components/Title';
const dummyTodos = [
	{
		id: 1,
		date: new Date().getDate(),
		title: 'React 프로젝트1',
		summary: '체크 리스트 만들기',
		checked: false,
	},
	{
		id: 2,
		date: new Date().getDate(),
		title: 'React 프로젝트2',
		summary: '체크 리스트 만들기',
		checked: false,
	},
	{
		id: 3,
		date: new Date().getDate(),
		title: 'React 프로젝트3',
		summary: '체크 리스트 만들기',
		checked: false,
	},
	{
		id: 4,
		date: new Date().getDate(),
		title: 'React 프로젝트4',
		summary: '체크 리스트 만들기',
		checked: false,
	},
]

function App() {

	const [todos, setTodos] = useState(dummyTodos);

	const addTodoHandler = ({ title, summary }) => {
		const newTodo = {
			id: self.crypto.randomUUID(),
			date: new Date().toDateString,
			title,
			summary,
			checked: false
		};

		const updatedTodos = [...todos, newTodo];
		setTodos(updatedTodos);
	}


	return (
		<DefaultLayout>
			<div id='App' className='flex justify-between w-full h-full' >
				<WhiteBox w={1} h={1} id='side' className='border-[1px]'>
					<div id='status' className='border-[1px]'>
						work
					</div>
					<div id='cal' className='border-[1px]'>
						달력
					</div>
				</WhiteBox>
				<div id='body' className='border-[1px]'>
					<div id='header' className='border-[1px]'>
						<Title onAdd={addTodoHandler} />
					</div>
					<div id='list con' className='border-[1px]'>
						<WhiteBox w={1 / 2} id='list item'> 리스트들 </WhiteBox>
					</div>
				</div>

			</div>
		</DefaultLayout>
	);
}

export default App;