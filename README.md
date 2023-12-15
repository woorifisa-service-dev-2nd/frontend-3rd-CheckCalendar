![header](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=300&section=header&text=Check%20List&fontSize=90&animation=fadeIn&fontAlignY=35&desc=Woori%20Fisa%20Project&descAlignY=51&descAlign=68)

# 🔍프로젝트 소개
### Calendar 라이브러리를 이용하여 checkList 구현한 웹 페이지 프로젝트
</br></br>

# 👨‍👩‍👧‍👦팀원
**홍혜진** **박선주** **김태혁**
</br></br>

# 🌝협업 방식

## 1. 역할분담
* 공통 - 웹 페이지 화면 구성
* 홍혜진 - 체크리스트 컴포넌트 추가 기능 + CSS
* 박선주 - 체크리스트 컴포넌트 출력, 수정 기능
* 김태혁 - 캘린더 라이브러리 기능
</br></br>

## 2. 협업 툴
<div style="display:flex; flex-wrap:wrap">
  <img style="margin-right:1rem" src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white">
 <img style="margin-right:1rem" src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white">
 <img style="margin-right:1rem" src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white">
</div>
</br></br>

# 🌟핵심 기능 및 구현 방법

## 0.체크리스트 컴포넌트
![Slide1](https://github.com/woorifisa-service-dev-2nd/frontend-3rd-CheckCalendar/assets/101613808/57cdd297-d180-4fac-bc0d-d697a1b772a6)
- 배경색, 하얀 상자와 같은 레이아웃 요소를 컴포넌트로 나누어 재사용 가능하도록 했습니다.
- 기능을 구분하여 컴포넌트로 구성해 수정을 용이하게 했으며, 반복되는 부분에 재사용하였습니다.
- 
## 1. 캘린더 라이브러리
![image](https://github.com/woorifisa-service-dev-2nd/frontend-3rd-CheckCalendar/assets/101613808/65f34cd5-f5d7-4cd1-b577-3936ad8d60a4)

```shell
npm i react-calendar
```
https://www.npmjs.com/package/react-calendar

react-calendar 라이브러리를 사용해 구현했습니다.

`StyleTodoCalendar.jsx`에는 캘린더에 적용할 스타일이 작성되어있습니다.
작성된 스타일과 라이브러리를 활용해 `MyCalendar`컴포넌트를 작성했습니다.

```jsx
const MyCalendar = ({onChange}) => {
	const [nowDate, setNowDate] = useState(new Date());

	const handleDateChange = (selectedDate) => {
		const formattedDate = moment(selectedDate).format('ddd MMM DD YYYY');
		onChange(formattedDate);
		setNowDate(moment(selectedDate).format('YYYY년 MM월 DD일'));
	};
```

App 컴포넌트의 getCalendarDate 함수를 Props로 전달해 캘린더에서 날짜를 클릭하면 App컴포넌트의 상태를 바꿀 수 있습니다.

```jsx
const [date, setDate] = useState(new Date().toDateString());
const getCalendarDate = (updatedDate) => {
		setDate(updatedDate);
	};
```


## 2.체크리스트 항목 데이터 형태
![image](https://github.com/woorifisa-service-dev-2nd/frontend-3rd-CheckCalendar/assets/101613808/b4eed7c2-afb5-4bc6-b7be-723eff603333)
```jsx
{
		id: 9,
		date: 'Thu Dec 15 2023',
		title: '스터디 모임',
		summary: '스터디 관련 이야기 나누기. 필기구 지참',
		checked: false, //체크 박스 :Workig, Done 상태
	},
```

## 3.체크리스트 필터링
![image](https://github.com/woorifisa-service-dev-2nd/frontend-3rd-CheckCalendar/assets/101613808/7a7010a5-8069-4d90-ad02-e6ec47a156ca)

리스트 항목이 완료된 항목과 완료되지 않은 항목을 Working과 Done 카테고리로 나누어 보여주기로 했습니다. 우측에는 각 카테고리의 개수를 계산해 표시합니다.
```jsx
let printList = ''; // 최종적으로 props 보낼 체크리스트 데이터들
	let workingNum = '0';  // working 해야하는 리스트 개수
	let doneNum = '0'; // done 된 리스트 개수

	if (status == 'Working') {
		printList = lists.filter((list) => list.checked == false && list.date == date);
		const done = lists.filter((list) => list.checked == true && list.date == date);
		workingNum = printList.length;
		doneNum = done.length;
	} else if (status == 'Done') {
		printList = lists.filter((list) => list.checked == true && list.date == date);
		const work = lists.filter((list) => list.checked == false && list.date == date);
		doneNum = printList.length;
		workingNum = work.length;
	}
```

## 3. 체크리스트 출력
![image](https://github.com/woorifisa-service-dev-2nd/frontend-3rd-CheckCalendar/assets/101613808/cab64791-cd0c-4a99-bcca-bf732fa21024)

APP컴포넌트에서 전달된 데이터 배열을 CheckListContainer 컴포넌트에서 하나의 객체로 분리해 전달해 CheckListItem에서 보여줍니다.
```jsx
const CheckListItem = ({item, onUpdate}) => {
	const id = item.id;
	const [title, setTitle] = useState(item.title);
	const [summary, setSummary] = useState(item.summary);
	const date = item.date;
	const checked = item.checked;

	return(
		<CheckBox checked={checked} onCheck={onCheckHandler}></CheckBox>
		<p>{title}</p>
		<p>{summary}</p>
		<p>{date}</p>
	);
};
```
## 4.체크리스트 추가
![image](https://github.com/woorifisa-service-dev-2nd/frontend-3rd-CheckCalendar/assets/101613808/eff68598-e6f1-4b24-ba4e-ef6c1041501b)

두 개의 인풋 태그로 체크리스트의 제목과 상세 내용을 작성해 추가 할 수 있습니다.
제목 하단에 표시되는 카테고리가  Working이면 체크가 안된 항목을, Done이 선택됐으면 체크된 항목으로 생성합니다.
```jsx
const addTodoHandler = ({ title, summary }) => {
	let checked = false
	if (status == "Done") checked = true;
	const newList = {
		id: self.crypto.randomUUID(),
		date: date,
		title,
		summary,
		checked
	};

	const updatedLists = [...lists, newList];
	setDList(updatedLists);
};
```

## 5.체크리스트 삭제
![image](https://github.com/woorifisa-service-dev-2nd/frontend-3rd-CheckCalendar/assets/138103209/7a7ebe15-2a47-44ec-84cd-e19ce8816edf)

CheckListContainer를 통해 각 체크리스트 데이터 객체에 생성된 삭제 버튼을 누르게 되면 해당 데이터 객체의 id값을 App의 delTodoHandlar로 가져옵니다.
가져온 id와 일치하지 않는 id를 deleteTodos에 담아 새로운 deleteTodos를 생성한 후 리렌더링 합니다.

```jsx
-------------CheckListContainer 컴포넌트 ------------------
<div className='text-end'>
	<button onClick = {() => onDelete(item.id)}>삭제</button>
</div>
-------------App 컴포넌트 ------------------
const delTodoHandlar = (id) => {
	const deleteTodos = lists.filter(list => list.id !== id);
	setDList(deleteTodos)
}
```

## 6.체크리스트 수정

### a. 체크박스에 따라 Working, Done 상태 변경
![image](https://github.com/woorifisa-service-dev-2nd/frontend-3rd-CheckCalendar/assets/101613808/0204a282-4e1d-4c45-abb6-5503902d0e75)
![image](https://github.com/woorifisa-service-dev-2nd/frontend-3rd-CheckCalendar/assets/101613808/a060e263-357c-4021-8764-ed5e19958704)

체크리스트 데이터 객체의  checked를 수정해주면 APP.jsx에서 렌더링이 되면서 `3.` 에서 구현한 대로 필터링이 됩니다.
결과적으로 Working 카테고리와 Done 카테고리 사이에서 체크리스트 항목이 이동하는 것처럼 느껴지게 됩니다.

```jsx
-------------CheckBox 컴포넌트 ------------------
const CheckBox = ({checked, onCheck}) => {
  return (
    <label>
        <input
            type="checkbox"
            checked={checked}
            onChange={(e)=>onCheck(e)}/>
    </label>
  )
}
---------------------CheckListItem 컴포넌트------------------------
const checked = item.checked;

<CheckBox checked={checked} onCheck={onCheckHandler}></CheckBox>
```

```jsx
const onCheckHandler =(e) => {
		const value = e.target.checked;
		onUpdate({id, date, title, summary, checked: value})
	};
```

### b. 체크리스트 항목의 제목과 상세 수정

![타이핑](https://github.com/woorifisa-service-dev-2nd/frontend-3rd-CheckCalendar/assets/101613808/c0a7d14c-9ca8-4a50-947e-7c4562612c96)

처음 수정 기능을 구현 할 때, 두 가지 방법을 생각했습니다.

1) 수정 버튼을 누르면 창을 추가로 띄워서 수정
2) 이미 나타나있는 페이지에서 바로 수정

하루에도 수많은 체크리스트들이 있을텐데 수정하기 위해 체크리스트 마다 창을 열고 닫는 과정이 피로할 것 같아, 2)번 방법을 선택했습니다.

그러나 실수로 클릭해 수정할 수 있다는 점도 생각해 

수정 버튼을 눌렀을 때만 입력 태그로 바뀌는 기능을 추가하기 쉽게

컴포넌트의 state 값에 따라서 p태그와 input 태그를 오갈 수 있는 상태로 코드를 완성했습니다.
```jsx
<input type='text' value={title} onChange={(e)=>whenType(e, setTitle)}></input>
```

```jsx
const isUpdate = true; //true: input 태그로 표시 false: p 태그로 표시

const whenType = (e, func)=>{
		let value = e.target.value;
		func(value);
		onUpdate({id, date, title, summary, checked}
	}
```
onCheckHandler, whenType 두 이벤트 핸들러에 사용된 onUpdate()함수는 주어진 인수의 내용으로 App.jsx내부 데이터 배열을 수정합니다. 
```jsx
const UpdateList = ({ id, date, title, summary, checked }) => {
		const updatedItem = {
			id: id,
			date: date,
			title: title,
			summary: summary,
			checked: checked,
		}
		const updatedList = lists.map(list => list.id === id ? updatedItem : list)
		setDList(updatedList);
	}
```
</br></br>
# 👀트러블 슈팅

## 1. 체크 박스 value 전달 형식
- useState를 이용하여 박스가 체크되었는지 아닌지의 value값을 check로 선언하여 전달하려고 했음 -> 이렇게 하면 setChecked가 함수가 종료 된 후에 값이 바뀜 -> 체크박스가 한박자 늦게 동작 => e.target.checked를 이용하여 바로 값을 넘겨주도록 수정

## 2. 캘린더 ui 수정
- 캘린더 ui가 라이브러리가 css를 수정하기 힘듦 -> style.component로 구현


## 3. Vite 실행 중에 파일명을 바꾸면 Vite가 인식하지 못하는 문제
- 주로 `Use react-error-boundary to handle errors in React` 라는 오류로 나타났는데 에러가 표시된 줄이 비어있고 해결을 못했었음
- Vite 종료 후 새로운 파일을 생성한 후 기존 내용을 붙여넣기 함

## 4. 깃 레포 생성 후 vite 프로젝트 생성했을 때 문제
깃 레포 폴더 안에 프로젝트 폴더가 생성되어 git 명령어를 사용할때와 `npm run dev` 명령어를 사용할 때 경로를 계속 왔다갔다해야해서 불편했습니다.
기존 레포를 삭제 하고 프로젝트 생성을 먼저 한 후 새로운 깃 레포에 푸시하여 해결했습니다.

# ⚖️도메인 용어 정의(화면 구성 정의)
### 컴포넌트 폴더 구조
![Untitled](https://github.com/woorifisa-service-dev-2nd/frontend-3rd-CheckCalendar/assets/101613808/35506ed2-abd2-4a67-9471-7b36828c16d9)

|함수|설명|
|:---:|:---|
|getCalendarDate()|Calendar에서 선택한 날짜를 가져오는 함수|
|getStatusValue()|사용자가 선택한 카테고리를 가져오는 함수|
|addTodoHandler()|체크 리스트 추가|
|UpdateList()|체크리스트 내용 수정|
|delTodoHandler()|체크리스트 삭제|

</br></br>

# 📖ESLint 규칙 및 적용 후기
* **괄호를 사용하는 방법**: "arrow-parens" 규칙을 사용하여 항상 괄호를 사용하도록 설정
* **띄어쓰기** : "indent" 규칙을 사용하여 들여쓰기를 탭으로 설정
* **콤마 위치** : "comma-style" 규칙을 사용하여 콤마를 줄 끝에 배치
* **세미콜론 사용** : "semi" 규칙을 사용하여 항상 세미콜론을 사용하도록 설정
* **줄 간격** : "no-multiple-empty-lines" 규칙을 사용하여 연속된 빈 줄을 허용하지 않음
* **주석 스타일** : "multiline-comment-style" 규칙을 사용하여 여러 줄 주석 스타일을 강제
* **따음표** : "quotes" 규칙을 사용하여 큰 따옴표 사용하도록 설정
</br></br>
# 📝회고

### **홍혜진**
>

### **박선주**
> 처음엔 간단한 동작이라 생각했는데 프로젝트를 생성하고 데이터 흐름과 수정에서 생각해야 할 것이 많아 생각보다 시간이 많이 걸렸습니다.
> 코드를 작성하고 보니 State 변수를 불필요한 곳에 남발한 것 같았습니다. 변수를 선언할 때 State 변수와 일반 변수의 차이를 구분해서 사용해야겠습니다.

### **김태혁**
>git과 eslint를 이전에 했던 프로젝트 경험을 통해서 어떻게 규칙을 설정하면 좋을지, 또 프로젝트를 기능 작성 전에 다같이 화면을 어떻게 구성할 지 먼저 얘기를 나누고 설정을 하고 진행하면서 이전보다 훨씬 수월하게 프로젝트를 수행하였습니다. 또한 반복되는 화면이나 기능을 component를 이용하도록 노력을 하며 작성을 하면서 처음에는 이 방법이 오히려 더 어렵고 귀찮다고 생각했지만 막상 후반부에 기능을 갑자기 추가하거나 수정하려고 할 때 왜 이렇게 사용해야 하는지 알 수 있었습니다.
