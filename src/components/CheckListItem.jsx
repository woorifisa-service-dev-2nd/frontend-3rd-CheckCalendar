import React, { useState } from 'react';

const CheckListForm = ({item, onUpdate}) => {
	const [id, setId] = useState(item.id);
	const [title, setTitle] = useState(item.title);
	const [summary, setSummary] = useState(item.summary);
	const [date, setDate] = useState(item.date);
	const [checked, setCheck] = useState(item.checked);
	const [disabled, setDisable] = useState(false);
	const[isUpdate, setUpdate] = useState(false);
	const onCheckHandler =() => {
		setCheck(!checked);
		//자기 자신의 데이터 수정
		onUpdate({id, date, title, summary, checked})
	};

	return (
		<div>
			<div className='flex px-2'>	
				<label>
					<input
						type="checkbox"
						checked={checked}
						onChange={onCheckHandler}/>
				</label>
			</div>
			<div>
		
			</div>

			<div className="mx-1">
				<p>{title}</p>
				<button>수정</button>
			</div>
			<p>{summary}</p>
			<p>{date}</p>
		</div>
	);
};

export default CheckListForm;