import React, { useState } from 'react';
import CheckBox from './CheckBox';
const CheckListItem = ({ item, onUpdate }) => {
	const [id, setId] = useState(item.id);
	const [title, setTitle] = useState(item.title);
	const [summary, setSummary] = useState(item.summary);
	const [date, setDate] = useState(item.date);
	const [checked, setCheck] = useState(item.checked);
	const [isUpdate, setUpdate] = useState(true); //true: input 태그로 표시 false: p 태그로 표시


	const onCheckHandler = (e) => {
		const value = e.target.checked;
		onUpdate({ id, date, title, summary, checked: value })
	};

	const whenType = (e, func) => {
		let value = e.target.value;
		func(value);
		onUpdate({ id, date, title, summary, checked })
	}

	return (
		<div>
			<div className='flex justify-between px-[10px]'>
				<CheckBox checked={checked} onCheck={onCheckHandler}></CheckBox>
				<p className='text-gray-500 text-base'>{date}</p>
			</div>
			{!isUpdate && <p>{title}</p>}
			{isUpdate && <input type='text' value={title} className='flex px-[15px] w-[600px]' onChange={(e) => whenType(e, setTitle)}></input>}
			{!isUpdate ? <p>{summary}</p> : <input type='text' value={summary} className='px-[25px] w-[600px] text-lg font-thin' onChange={(e) => whenType(e, setSummary)}></input>}
		</div>
	);
};

export default CheckListItem;