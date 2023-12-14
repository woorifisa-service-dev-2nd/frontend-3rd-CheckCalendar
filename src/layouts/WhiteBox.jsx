import React from 'react';

function WhiteBox({w,h,children}) {
	return (
		<div 
			className={`w-${w} h-${h} p-8 m-0 border-none rounded shadow-xl top-1/2 left-1/2 bg-white`}>
			{children}
		</div>
	);
}

export default WhiteBox;