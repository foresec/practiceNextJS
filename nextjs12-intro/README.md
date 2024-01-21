# NextJs practice

## Overview

### 1. Pages
`export default function`을 통해 page지정, 파일이름이 url이 됨 
(내부 컴포넌트 이름은 상관없음)
예외적으로 home은 기본적으로 index.js에서 나온 것

### 2. pre-rendering
SSR시 user가 UI를 먼저 보고, hydration 과정을 통해 JS코드가 매칭됨

#### Hydration
SSR 등을 통해 전달되는 정적 HTML에 이벤트 핸들러를 첨부하여 동적 웹페이지로 변환되는 기술
- 전송받은 JS가 이전에 보내진 HTML DOM 위에서 한번 더 렌더링 되며 본인의 자리를 찾아가며 매칭되는 작업
- Hydration이후에 click을 비롯한 이벤트나 모듈들이 적용됨


### 3. Routing
- `a태그`를 사용해서 이동하는것을 권장하지 않음(라우팅마다 새로고침이 발생하여 SSR의 장점이 사라짐)
-> `Link태그`를 사용

- `useRouter`와 같은 Hook을 사용하여 조건을 거는것도 가능


### 4. CSS Modules
- 빌드시 class 이름에 random Text가 붙으며 다른 컴포넌트에서도 동일한 class 이름을 사용할 수 있도록 함. 즉, class이름 중복사용 시 충돌이 일어나지 않음


### 5. Styles JSX
styles 태그를 사용가능

### 6. Custom App
- pages폴더 내 _app.js를 통해 렌더링
- 전역적인 설정(Styles 등) 가능
- module.css파일이 아닌, css파일도 불러올 수 있음


## Practice Project


