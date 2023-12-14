import React from 'react';
import CheckListItem from './CheckListItem';
import WhiteBox from '../layouts/WhiteBox';
const CheckListContainer = ({checkList, onUpdate}) => {

	return (
		<div className='w-[650px] mt-[20px]'>
			{checkList.map((item)=><WhiteBox key={item.id}>
				<CheckListItem key={item.id} item={item} onUpdate={onUpdate} >
				</CheckListItem>
			</WhiteBox>)}
		</div>
	);
};

export default CheckListContainer;