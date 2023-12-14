import React, { useState } from "react";

const Status = ({name, num, onClick}) => {

	const [isHover, setIsHover] = useState(false);

	const handleMouseEnter = () => {
		setIsHover(true);
	};
	const handleMouseLeave = () => {
		setIsHover(false);
	};
	const boxStyle = {
		backgroundColor: isHover ? 'rgb(209 213 219)' : '',
		cursor : isHover? 'pointer':''
	};
	
	return (
		<li style={boxStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={()=>onClick(name)} className='flex justify-between pb-[5px] px-[5px]'>
			<span>{name}</span>
			<span className="hover:cursor-pointer">{num}</span>
		</li>
	);
};

export default Status;