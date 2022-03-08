# Cypress
`Cypress`는 UI `E2E 테스트` 도구로 프론트엔드 개발자를 위한 `기능적 테스트` 도구이다.

> E2E 테스트? <br/>
개발을 진행하며 사용자 관점에서 테스트 하는 방법으로 이지에서 원하는 텍스트가 제대로 출력이 되었는지, 버튼을 클릭 했을 때 올바른 동작을 수행하는 지 등을 테스트한다.

`기능적 테스트`란 `시스템에 입력과 같은 예상가능한 사용자의 동작을 가했을 때, 기대되는 결과`가 나오는지 확인하는 데에 집중하는 테스트이다.

## 설치 및 실행
```javascript
yarn add -D cypress
npx cypress open
```

## 디렉터리 구조
- `integration` : 실질적인 테스트 코드가 위치하는 폴더
- `fixtures` : 네트워크 응답 같은 테스트에 필요한 정적인 데이터들을 만들어 두는 폴더 `cy.fixture()` 커맨드를 통해 사용할 수 있다.
- `plugins` : 플러그인을 관리할 수 있는 폴더로 기본적으로 `cypress/plugins/index.js`파일 포함되어 있는데 각 spec 파일이 실행되기 전에 한 번 수행된다.
- `support` : plugins 처럼 `cypress/support/index.js` 파일이 각 테스트 파일 수행 전 실행된다. 주로 `custom command`나 모든 spec 파일에 적용하거나 사용할 코드를 작성한다. ex) before, beforeEach

## Reference
https://docs.cypress.io/