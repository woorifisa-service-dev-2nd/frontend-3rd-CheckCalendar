import React from 'react';

const Status = ({name, num, onClick}) => {
	return (
		<li className='flex gap-4 justify-between py-1 px-1'>
			<span onClick={()=>onClick(name)}>{name}</span>
			<span>{num}</span>
		</li>
	);
};

export default Status;