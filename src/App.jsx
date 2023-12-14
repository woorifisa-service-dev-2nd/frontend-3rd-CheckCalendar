import { useState } from 'react';
import DefaultLayout from './layouts/DefaultLayout';
import WhiteBox from './layouts/WhiteBox';
import CheckListContainer from './components/CheckListContainer';


// const setDateItem = (Date)=>{
// 	const newData
// }

function App() {
	
	return (
		<DefaultLayout>
			<div id='App' className='flex justify-between' >
				<div id='side' className='border-[1px]'>
					<div id='status' className='border-[1px]'>
						work
					</div>
					<div id='cal' className='border-[1px]'>
						달력
					</div>
				</div>
				<div  id='body'  className='border-[1px]'>
					<div id='header' className='border-[1px]'>
						제목, 날짜
					</div>
					<CheckListContainer checkList={dummyTodos} id='list con' className='border-[1px]'>
					</CheckListContainer>
				</div>

			</div>
		</DefaultLayout>	
	);
}

export default App;
