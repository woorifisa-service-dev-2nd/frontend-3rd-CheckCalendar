import React, { useState } from 'react';
import CheckBox from './CheckBox';
const CheckListForm = ({item, onUpdate}) => {
	const [id, setId] = useState(item.id);
	const [title, setTitle] = useState(item.title);
	const [summary, setSummary] = useState(item.summary);
	const [date, setDate] = useState(item.date);
	const [checked, setCheck] = useState(item.checked);
	const [disabled, setDisable] = useState(false);
	const[isUpdateTitle, setUpdate] = useState(false);

	const onCheckHandler =(e) => {
		//setCheck(!checked);
		//자기 자신의 데이터 수정
		const value = e.target.checked;
		onUpdate({id, date, title, summary, checked: value})
	};
	
	const whenType = (e)=>{
		let value = e.target.value;
		setTitle = {value};
	}

	return (
		<div>
			<div className='flex px-2'>	
				<CheckBox checked={checked} onCheck={onCheckHandler}></CheckBox>
			</div>
			<div>
		
			</div>

			<div className="flex ">
				{!isUpdateTitle && <p>{title}</p>}
				<button className='mx-2'>수정</button>
				{isUpdateTitle && <input type='text' value={title} onChange={(e)=>whenType(e)}></input>}

			</div>
			<p>{summary}</p>
			<p>{date}</p>
		</div>
	);
};

export default CheckListForm;