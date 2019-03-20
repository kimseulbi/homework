# homework

## 설치
- git 저장소 fork https://github.com/front-end-beginner-study/homework

```bash
git clone https://github.com/ORIGIN_URL/homework

cd homework

git remote add upstream https://github.com/front-end-beginner-study/homework

npm install
```

## 테스트
```bash
npm run test `작업 중인 파일명`

// src/chapter1/file.spec.js 케이스 작업 중일 경우
npm run test `file`
```
src 폴더내에 테스트 파일 작성 후 위의 명령어 입력시 테스트 결과가 출력됩니다.

## 폴더 구조
```bash
├── node_modules              # Node Packages 모듈
├── src                       # 소스코드
│   ├── chapter1              # 진도별로 폴더명을 설정합니다
│       ├── 파일명.spec.js     # 테스트 케이스를 만들어 코드를 테스트합니다. 
│       └── 파일명.js          # 테스트할 코드를 만듭니다.
│   ├── chapter2              # 진도별로 폴더명을 설정합니다
│   └── chapter3              # 진도별로 폴더명을 설정합니다
.
.
.
.
```