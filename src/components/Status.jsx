import React from 'react';

const Status = ({name, num}) => {
	return (
		<li className='flex gap-4 justify-between py-1 px-1'>
			<span>{name}</span>
			<span>{num}</span>
		</li>
	);
};

export default Status;