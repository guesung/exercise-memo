# WE (Exercise Memo, 운동을 적다)

## 🎈 사용 목적 및 소개

- 자신이 운동 했던 기록들을 작성하고 싶다구요? 운동 일지 작성에 대한 모든 것은 여기에!!
- 운동 일지를 작성하고, 운동을 내가 언제 했고 언제 안했는지 한 눈에 볼 수 있습니다.

<br />

## 👉 개발 기간

- 2022.07.26 ~ 2022.08.01
  <br /><br />

## 🎈개발 도구

- React
  - useState, useReducer, useContext, useNavigate, localStorage 활용
  - 메모이징 함수(useMemo, useCallback) 일부 활용
- Firebase
  - [Firebase를 통한 배포](https://guesung-exerciseinformation.web.app/)
    </br>

## 🚀 프로젝트 주 차별 계획 및 회고

<!-- | 👉 주차 |    계획    |    회고    |
| :-----: | :--------: | :--------: |
| 1 주차  | [:link:]() | [:link:]() | -->

- 1일차(7/26) ; 설계도 작성 1 1
- 2일차 ; Header와 WriteNewDiary(새 일지 작성) 페이지 작성
- 3일차 ; WriteNewDiaryForm 완성 & DiaryEdit 작성 -> localStorage에 저장
- 4일차 ; ExerciseInformation 페이지 작성 => slide library를 통해 슬라이드 구현 & useReducer를 통해 from양식 리스트에 ADD 기능 & useState를 통한 input 상태 관리
- 5일차 ; ExerciseInformation을 LocalStarage에 저장 & Firebase배포 & 마무리
  <br /> <br />

## 시연 사진
<img src="src\assets\img\ExerciseInformationPage.png" width="600px" >
<img src="src\assets\img\ExerciseDiary.png" >

## 📚 Project Settings

#### 📢 Install npm dependencies

```bash
> npm install
```

#### 📢 Start dev-server

```bash
> npm run start
```

#### 📢 Run tests

- Run unit test and e2e test

```bash
> npm test
```

- unit test

```bash
> npm run test:unit
```

- Run e2e test

```bash
> npm run test:e2e
```

#### 📢 Run build project

```bash
> npm build
```

#### 📢 Run Lint

```bash
> npm run lint
```

#### 📢 Run Coverage

```bash
> npm run coverage
```

- 자세한 사항은 `package.json`의 `scripts` 참고

## 📚 Getting start with firebase  

- [Firebase](https://firebase.google.com/)
- [Docs](https://firebase.google.com/docs/cli?hl=ko)

#### 📢 firebase API키 관리

- [Firebase API 키 관리에 대한 참고 사항](https://github.com/CodeSoom/project-react-2-saseungmin/issues/133)
- [Firebase API 키에 대해서 작성한 블로그 글](https://haranglog.tistory.com/25)

#### 📢 Initial firebase setup

- Install firebase-tools

```bash
> npm install -g firebase-tools
```

- Login to firebase

```bash
> firebase login
```

- Deploy with firebase hosting

```bash
> firebase deploy
```

## 🔥 기술 스택 및 사용 라이브러리

- React

