import React from 'react';

function WhiteBox( {w,y,children}) {
	return (
		<div 
			className={`w-${w} h-${y} my-2 px-3 py-4 border-none rounded shadow-xl top-1/2 left-1/2 bg-white`}>
			{children}
		</div>
	);
}

export default WhiteBox;