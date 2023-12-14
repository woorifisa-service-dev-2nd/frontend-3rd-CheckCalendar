import React from 'react';

function WhiteBox({w,y,children,setting}) {
	return (
		<div 
			className={`w-${w} h-${y} my-2 mb-[20px] px-3 py-4 border-none rounded shadow-xl top-1/2 left-1/2 bg-white ${setting}`}>
			{children}
		</div>
	);
}

export default WhiteBox;