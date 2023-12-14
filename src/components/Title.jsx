import React, { useState } from 'react'

const Title = ({ onAdd }) => {

    const today = new Date();
    const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    let dayOfWeek = week[today.getDay()];
    const formattedDate = `오늘은 ${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 ${dayOfWeek}`;

    const [title, setTitle] = useState('dummy제목');
    const [summary, setSummary] = useState('dummy summary');

    const onAddTodo = () => {
        console.log(title, summary)
        onAdd({ title, summary });
    };


    return (
        <div>
            <h1 className='text-4xl font-normal'>Check title</h1>
            <p className='text-gray-600'>{formattedDate}</p>
            <input
                type="text"
                placeholder="Write a new title..."
                onChange={event => setTitle(event.target.value)}
            />
            <input
                type="text"
                placeholder="Write a new todo..."
                onChange={event => setSummary(event.target.value)}
            />
            <button className='bg-teal-500 decoration-white rounded-30 bg-origin-padding'
            onClick={onAddTodo}>
                추가
            </button>
        </div>
    );
};

export default Title