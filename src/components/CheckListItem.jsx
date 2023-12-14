import React, { useState } from 'react';
import CheckBox from './CheckBox';
const CheckListForm = ({item, onUpdate}) => {
	const [id, setId] = useState(item.id);
	const [title, setTitle] = useState(item.title);
	const [summary, setSummary] = useState(item.summary);
	const [date, setDate] = useState(item.date);
	const [checked, setCheck] = useState(item.checked);
	const[isUpdate, setUpdate] = useState(true); //true: input 태그로 표시 false: p 태그로 표시


	const onCheckHandler =(e) => {
		//setCheck(!checked);
		//자기 자신의 데이터 수정
		const value = e.target.checked;
		onUpdate({id, date, title, summary, checked: value})
	};
	
	const whenType = (e, func)=>{
		let value = e.target.value;
		func(value);
		onUpdate({id, date, title, summary, checked})
	}

	return (
		<div>
			<div className='flex px-2'>	
				<CheckBox checked={checked} onCheck={onCheckHandler}></CheckBox>
			</div>
				{!isUpdate && <p>{title}</p>}
				{isUpdate && <input type='text' value={title} onChange={(e)=>whenType(e, setTitle)}></input>}

				{!isUpdate ? <p>{summary}</p> : <input type='text' value={summary} onChange={(e)=>whenType(e, setSummary)}></input>}
		
			<p>{date}</p>
		</div>
	);
};

export default CheckListForm;