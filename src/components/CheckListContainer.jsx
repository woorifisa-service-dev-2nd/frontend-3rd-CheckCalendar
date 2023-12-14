import React from 'react';
import CheckListItem from './CheckListItem';
import WhiteBox from '../layouts/WhiteBox';
const CheckListContainer = ({checkList, onUpdate}) => {

	return (
		<div>
			{checkList.map((item)=><WhiteBox  key={item.id} w={300} y={1/2}> <CheckListItem key={item.id} item={item} onUpdate={onUpdate}></CheckListItem></WhiteBox>)}
			
		</div>
	);
};

export default CheckListContainer;