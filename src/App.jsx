import React, { useState } from 'react';
import DefaultLayout from './layouts/DefaultLayout';
import WhiteBox from './layouts/WhiteBox';
import Status from './components/Status';
import Calendar from './components/MyCalendar';
import CheckListContainer from './components/CheckListContainer';
import Title from './components/Title';

const dummyTodos = [
	{
		id: 1,
		date: 'Thu Dec 14 2023',
		title: 'React 프로젝트',
		summary: '18시까지 체크 리스트 만들기📌',
		checked: true,
	},
	{
		id: 2,
		date: 'Wed Dec 13 2023',
		title: 'React 수업✏',
		summary: 'props',
		checked: false,
	},
	{
		id: 3,
		date: 'Thu Dec 14 2023',
		title: '점심식사',
		summary: '1시 태국음식점',
		checked: false,
	},
	{
		id: 5,
		date: 'Wed Dec 20 2023',
		title: '농구🏀',
		summary: '농구화 챙겨서 2시까지 운동장 도착하기',
		checked: false,
	},
	{
		id: 6,
		date: 'Fri Dec 15 2023',
		title: '다이어리 쇼핑',
		summary: '2024년 다이어리 구매 및 스티커 구경📖',
		checked: true,
	},
	{
		id: 7,
		date: 'Mon Dec 25 2023',
		title: '크리스마스 데이트',
		summary: '영화관람 및 쇼핑🌹💍',
		checked: false,
	},
	{
		id: 8,
		date: 'Fri Dec 15 2023',
		title: '스터디 모임',
		summary: '스터디 관련 이야기 나누기. 필기구 지참',
		checked: false,
	},
	{
		id: 9,
		date: 'Fri Dec 15 2023',
		title: 'React 프로젝트 발표',
		summary: '당당하고 멋지게 체크 리스트 자랑하기💕😘',
		checked: false,
	},
];

function App() {
	const [status, setStauts] = useState('Working');
	const [lists, setDList] = useState(dummyTodos);
	const [date, setDate] = useState(new Date().toDateString());


	/*CheckList Item 수정 동작 */
	const UpdateList = ({ id, date, title, summary, checked }) => {
		const updatedItem = {
			id: id,
			date: date,
			title: title,
			summary: summary,
			checked: checked,
		}
		const updatedList = lists.map(list => list.id === id ? updatedItem : list)
		setDList(updatedList);
	}


	/*CheckList Item 추가 동작 */
	const addTodoHandler = ({ title, summary }) => {
		let checked = false
		if (status == "Done") checked = true;
		const newList = {
			id: self.crypto.randomUUID(),
			date: date,
			title,
			summary,
			checked
		};

		const updatedLists = [...lists, newList];
		setDList(updatedLists);
	};

	const delTodoHandlar = (id) => {
		const deleteTodos = lists.filter(list => list.id !== id);
		console.log(deleteTodos);
		setDList(deleteTodos)
	}

	/*Side - Chalendar 날짜 선택 동작 */
	const getCalendarDate = (updatedDate) => {
		setDate(updatedDate);
	};

	/*Side - Working-Done 변경 동작 */
	const getStatusValue = (updatedStatus) => {
		setStauts(updatedStatus);
	};


	let printList = ''; // 최종적으로 props 보낼 체크리스트 데이터들
	let workingNum = '0';  // working 해야하는 리스트 개수
	let doneNum = '0'; // done 된 리스트 개수

	if (status == 'Working') {
		printList = lists.filter((list) => list.checked == false && list.date == date);
		const done = lists.filter((list) => list.checked == true && list.date == date);
		workingNum = printList.length;
		doneNum = done.length;
	} else if (status == 'Done') {
		printList = lists.filter((list) => list.checked == true && list.date == date);
		const work = lists.filter((list) => list.checked == false && list.date == date);
		doneNum = printList.length;
		workingNum = work.length;
	}

	return (
		<DefaultLayout>
			<div id='App' className='flex place-content-center mt-[30px]' >
				<WhiteBox w={3} h={3} setting="flex-col space-between justify-around " id='side' className='border-[1px]'>
					<div id='status' className='mt-[5px]'>
						<Status name="Working" num={workingNum} onClick={getStatusValue} className="border-solid border-2 border-blue-500 bg-blue-200 w-[30px] text-center" />
						<Status name="Done" num={doneNum} onClick={getStatusValue} className="border-solid border-2 border-yello-500 bg-yello-200 w-[30px] text-center" />
					</div>
					<div className='h-[2px] bg-gray-400 my-[16px] my-[15px]'></div>
					<div className='h-72'></div>
					<div id='cal' className='border-[1px]'>
						<Calendar onChange={getCalendarDate} />
					</div>
				</WhiteBox>
				<div id='body' className='mt-[10px] ml-[40px]'>
					<div id='header'>
						<Title onAdd={addTodoHandler} state={status} date={date} />
					</div>
					<CheckListContainer checkList={printList} onUpdate={UpdateList} onDelete={delTodoHandlar} id='list con' className=''>
					</CheckListContainer>
				</div>
			</div>
		</DefaultLayout>
	);
}

export default App;
