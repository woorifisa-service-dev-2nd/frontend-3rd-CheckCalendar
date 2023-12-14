import React, { useState } from 'react';

const CheckListForm = ({item}) => {
	const [title, setTitle] = useState(item.title);
	const [summary, setSummary] = useState(item.summary);
	const [date, setDate] = useState(item.date);
	const [checked, setCheck] = useState(item.checked);
	const [disabled, setDisable] = useState(false);

	const onCheckHandler =() => {
		setCheck(!checked);
		//자기 자신의 데이터 수정
		
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
			<p>{title}</p>
			<p>{summary}</p>
			<p>{date}</p>
			
		</div>
	);
};

export default CheckListForm;