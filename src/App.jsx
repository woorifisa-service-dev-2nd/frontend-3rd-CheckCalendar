// import { useState } from 'react';
import DefaultLayout from './layouts/DefaultLayout';
import WhiteBox from './layouts/WhiteBox';
import Header from './components/header';

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
				<div id='body' className='border-[1px]'>
					<div id='header' className='border-[1px]'>
						<Header />
						제목, 날짜
					</div>
					<div  id='list con' className='border-[1px]'>
						<WhiteBox id='list item'> 리스트들 </WhiteBox>
					</div>
				</div>

			</div>
		</DefaultLayout>	
	);
}

export default App;