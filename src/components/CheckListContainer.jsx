import React from 'react';
import CheckListItem from './CheckListItem';
import WhiteBox from '../layouts/WhiteBox';
const CheckListContainer = ({checkList}) => {
	//const [list, setTitle] = useState('체크리스트 제목');
	console.log(checkList);
	return (
		<div>
			{checkList.map((item)=><WhiteBox w={300} y={1/2}> <CheckListItem key={item.id} item={item}></CheckListItem></WhiteBox>)}
			
		</div>
	);
};

export default CheckListContainer;