import React, { useState } from 'react';
import * as S from './StyleTodoCalendar';
import moment from 'moment';

const MyCalendar = ({onChange}) => {
	const [nowDate, setNowDate] = useState(new Date());

	const handleDateChange = (selectedDate) => {
		const formattedDate = moment(selectedDate).format('ddd MMM DD YYYY');
		onChange(formattedDate);
		setNowDate(moment(selectedDate).format('YYYY년 MM월 DD일'));
	};

	return (
		<S.CalendarBox>
			<S.StyleCalendar locale="en" onChange={handleDateChange} value={nowDate} formatDay={(locale, date) => moment(date).format('DD')} />
		</S.CalendarBox>
	);
};

export default MyCalendar;