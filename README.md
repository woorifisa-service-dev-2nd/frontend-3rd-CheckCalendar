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

## 1. 체크리스트 컴포넌트
- 체크 리스트 컴포넌트를 어떤 형식으로 구현을 했고
- 어떻게 재사용 가능한지
## 1-1. 체크리스트 출력
- 체크를 어떻게 출력하게 구현했는지(컴포넌트와 유사하면 삭제)
## 1-2. 체크리스트 추가
- 체크리스트 추가를 어떻게 구현했는지
## 1-3. 체크리스트 수정
- 체크리스트 수정 방식
## 2. 캘린더 라이브러리
- 캘린더 라이브러리를 어떻게 구현했는지




</br></br>
# 👀트러블 슈팅

## 1. 체크 박스 value 전달 형식
- useState를 이용하여 박스가 체크되었는지 아닌지의 value값을 check로 선언하여 전달하려고 했음 -> 이렇게 하면 setChecked가 함수가 종료 된 후에 값이 바뀜 -> 체크박스가 한박자 늦게 동작 => e.target.checked를 이용하여 바로 값을 넘겨주도록 수정

## 2. 캘린더 ui 수정
- 캘린더 ui가 라이브러리가 css를 수정하기 힘듦 -> style.component로 구현


## 3. Vite 실행 중에 파일명을 바꾸면 Vite가 인식하지 못하는 문제
주로 `Use react-error-boundary to handle errors in React` 라는 오류로 나타났는데 에러가 표시된 줄이 비어있고 해결을 못했었음
- Vite 종료 후 새로운 파일을 생성한 후 기존 내용을 붙여넣기 함


# ⚖️도메인 용어 정의(화면 구성 정의)
(여기서 어떻게 화면을 구성했고, 어떠한 방식으로 데이터와 이미지가 전달되는지 등을 설명하면 좋을 듯)
ex
- `App.jsx` : 메인 랜더링 화면 / 체크리스트들의 데이터를 받아 조작 후 화면에 랜더링 및 각종 함수 구현...
    -> `UpdateList({id, date, title, summary, checked})` : 체크리스트의 값을 변경된 값으로 바꾸고 그에 따라 화면 다시 랜더링
    .... 이런식으로 작성하면 될 듯

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
>

### **김태혁**
