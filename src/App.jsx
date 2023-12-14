import { useState } from 'react';
import DefaultLayout from './layouts/DefaultLayout';
import WhiteBox from './layouts/WhiteBox';
function App() {

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
						제목, 날짜
					</div>
					<div  id='list con' className='border-[1px]'>
						<WhiteBox w={1/2} id='list item'> 리스트들 </WhiteBox>
					</div>
				</div>

			</div>
		</DefaultLayout>	
	);
}

export default App;