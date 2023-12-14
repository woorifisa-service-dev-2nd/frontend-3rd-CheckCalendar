import { useState } from 'react';
import DefaultLayout from './layouts/DefaultLayout';
import WhiteBox from './layouts/WhiteBox';
import Status from './components/Status';
import Calendar from './components/MyCalendar';
import CheckListContainer from './components/CheckListContainer';

const dummyTodos = [
	{
		id: 1,
		date : 'Thu Dec 14 2023',
		title: 'React 프로젝트1',
		summary: '체크 리스트 만들기',
		checked: true,
	},
	{
		id: 2,
		date : 'Wed Dec 13 2023',
		title: 'React 프로젝트2',
		summary: '체크 리스트 만들기',
		checked: false,
	},
	{
		id: 3,
		date : 'Tue Dec 12 2023',
		title: 'React 프로젝트3',
		summary: '체크 리스트 만들기',
		checked: false,
	},
	{
		id: 5,
		date : 'Wed Dec 20 2023',
		title: 'React 프로젝트4',
		summary: '체크 리스트 만들기',
		checked: false,
	},
	{
		id: 6,
		date : 'Thu Dec 14 2023',
		title: 'React 프로젝트4',
		summary: '체크 리스트 만들기',
		checked: true,
	},
	{
		id: 7,
		date : 'Fri Dec 22 2023',
		title: 'React 프로젝트4',
		summary: '체크 리스트 만들기',
		checked: false,
	},
	{
		id: 8,
		date : 'Thu Dec 14 2023',
		title: 'React 프로젝트4',
		summary: '체크 리스트 만들기',
		checked: false,
	},
	{
		id: 9,
		date : 'Thu Dec 14 2023',
		title: 'React 프로젝트4',
		summary: '체크 리스트 만들기',
		checked: false,
	},
];

function App() {
	const [status, setStauts] = useState('Done');
	const [lists, setDList] = useState(dummyTodos);
	const [date, setDate] = useState('Thu Dec 14 2023');

	const getCalendarDate = (updatedDate) => {
		console.log(updatedDate);
		setDate(updatedDate);
	};

	const getStatusValue = (updatedStatus) => {
		setStauts(updatedStatus);
	}

	let printList = ''; // 최종적으로 props 보낼 체크리스트 데이터들
	let workingNum = '0';  // working 해야하는 리스트 개수
	let doneNum = '0'; // done 된 리스트 개수

	if(status == 'Working'){
		printList = lists.filter((list) => list.checked == false && list.date == date);
		const done = lists.filter((list) => list.checked == true && list.date == date);
		workingNum = printList.length;
		doneNum = done.length;
	} else if(status == 'Done'){
		printList = lists.filter((list) => list.checked == true && list.date == date); 
		const work = lists.filter((list) => list.checked == true && list.date == date);
		doneNum = printList.length;
		workingNum = work.length;
	}
	console.log(printList);
	
	return (
		<DefaultLayout>
			<div id='App' className='flex justify-between w-full h-full' >
				<WhiteBox w={1} h={1} setting="flex-col space-between justify-around " id='side' className='border-[1px]'>
					<div id='status' className='border-[1px]'>
						<Status name="Working" num={workingNum} onClick={getStatusValue}/>
						<Status name="Done" num={doneNum} onClick={getStatusValue}/>
					</div>
					<div className='h-72'></div>
					<div id='cal' className='border-[1px]'>
						<Calendar onChange={getCalendarDate}/>
					</div>
				</WhiteBox>
				<div  id='body'  className='border-[1px]'>
					<div id='header' className='border-[1px]'>
						제목, 날짜
					</div>
					<CheckListContainer checkList={printList} id='list con' className='border-[1px]'>
					</CheckListContainer>
				</div>

			</div>
		</DefaultLayout>	
	);
}

export default App;
