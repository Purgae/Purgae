 # NFT를 통한 투명한 해양 기부 서비스, 푸르게

<img src="https://raw.githubusercontent.com/JaeKP/image_repo/main/img/image-20221007115830334.png" alt="logo"/> 

### 🌊 https://purgae.net/

PC환경으로 제작되었습니다. 반응형 페이지가 적용되어 있습니다.

<br>

## 1. 프로젝트 개요

### 🏆 **프로젝트 목표**

### 심각한 환경 문제 중 하나인 해양 쓰레기를 처리하기 위한 기부 사이트 입니다.

<img src="https://raw.githubusercontent.com/JaeKP/image_repo/main/img/image-20221007120023186.png" alt="purgae_4" style="zoom: 50%;" /> 

> 기존에 단순히 성금 모금과 전달에 머물렀던 기부 서비스를 NFT와 결합하여 기부자에게 새로운 재미와 보람을 제공합니다.

`기부`와 동시에 `NFT`를 획득할 수 있으며, `게이미피케이션` 요소를 서비스 곳곳에 배치하여 일회성 기부 사이트가 아닌 즐기면서 기부할 수 있는 사이트를 제작하였습니다.

<br>

### 📅 **전체 일정**

### 2022.08.29 ~ 2022.10.06 (6주)

|             기 간             | 내 용                                                        |
| :---------------------------: | :----------------------------------------------------------- |
| 2022. 08. 29. ~ 2022. 08. 31. | 아이디어 선정                                                |
| 2022. 09. 01. ~ 2022. 09. 04. | 요구사항 분석 및 기능명세서 작성 / WIREFRAME / ERD / REST API 설계 / Generative Art 기획 |
| 2022. 09. 05. ~ 2022. 09. 12. | 디자인 시스템, 프로토타입 설계 / 개발환경 설정 / 개발 시작   |
|  2022. 09. 06. 13:00 ~ 13:30  | 1회차 전문가 리뷰                                            |
|  2022. 09. 20. 13:00 ~ 13:30  | 2회차 전문가 리뷰                                            |
| 2022. 09. 19. ~ 2022. 09. 25. | 서비스 배포 자동화                                           |
| 2022. 09. 26. ~ 2022. 10. 02. | 서비스 개발 및 유지보수                                      |
|    2022.10.03 ~ 2022.10.07    | [QA](https://www.notion.so/QA-ac30a4b221f64e2e9da168ebdc59fc64) 및 프로젝트 마무리 |

<br>

### 👥 **구성원**

**같이海요 팀**      ![purg ae_3](https://raw.githubusercontent.com/JaeKP/image_repo/main/img/purgae_3.png)   

<br>

## 2. 프로젝트 설계

### 🎨 Figma[(link)](https://www.figma.com/file/Kf02dtcXGDTx3gkyybEcoN/Purgae?node-id=5%3A2) / 📖 **REST API [(link)](https://www.notion.so/80c93366fa7a4eacb0f61119e0215a92)**/  📃 **컨트랙트 [(link)](https://www.notion.so/bff65d66e5964684b6c2c7ac5bc02edd)** / :file_folder: 파일 구조 ([link](https://evanescent-tuba-146.notion.site/d47993d8e3844f6db4d82775082a4846))

<br>

### 🛠 개발환경 [(link)](https://evanescent-tuba-146.notion.site/79bc547a3cff4ac6abc5f3d5dc3f1e2a)

| Backend                     | Frontend              | Blockchain           | CI/CD            | 협업툴     |
| --------------------------- | --------------------- | -------------------- | ---------------- | ---------- |
| Java Open-JDK zulu 8.33.0.1 | React 18.2.0          | IPFS                 | AWS EC2          | Mattermost |
| SpringBoot Gradle 2.7.2     | Redux 4.2.0           | Solidity 0.8.7       | Ubuntu 20.04 LTS | Webex      |
| Spring Data JPA             | Redux RTK 1.8.5       | Web3.js 1.7.5        | Docker 20.10.18  | Notion     |
| Lombok                      | TypeScript 4.6.4      | metamask-react 2.4.0 |                  |            |
| Swagger 2.9.2               | StoryBook 6.5.10      |                      |                  |            |
| MySQL 8.0.29                | StyledComponent 5.3.5 |                      |                  |            |
| Remix 0.26.3                | Vite 3.0.7            |                      |                  |            |
|                             | Upbit Open API        |                      |                  |            |

<br>

### 📊 아키텍처

<img src="https://raw.githubusercontent.com/JaeKP/image_repo/main/img/purgae_1.png" alt="purgae_1" style="zoom:67%;" /> 

<br>

### 🛢 ERD

  <img src="https://raw.githubusercontent.com/JaeKP/image_repo/main/img/puragae_2.png" alt="puragae_2" style="zoom: 67%;" />    

<br>

## 4. 프로젝트 소개

### 초기 접속 페이지(수족관)

- 수족관이 보이고, 오늘 기부한 후 발급된 해양생물 NFT가 떠다닌다.
- 음악을 재생할 수 있고, 배경을 누르면 물방울이 올라간다.
- 프로필에서 접속하는 개인수족관은 개인이 기부한 후 발급받은 NFT가 보인다.

<br>

### 메인페이지

- 푸르게 서비스에 대한 설명과, 기부받은 돈을 어떻게 사용할 것인지 알 수 있다.
- 간단한 FAQ를 볼 수 있다.

<br>

### 로그인

- 메타마스크를 이용하여 고릴 네트워크로 연결할 수 있다. 초기 렌덤 닉네임이 발급된다.
- 메타마스크에 로그인이 되어 있다면 자동으로 연결되어 서비스를 이용할 수 있고, 잠금 시 로그아웃된다.

<br>

### 기부

- 최소 0.005ETH를 기부할 수 있고, 기부한 금액으로 몇kg의 쓰레기를 치웠는지 볼 수 있다.
- 기부를 누르게되면, 메타마스크 창이 열리고 거래가 진행된다. 기부된 금액은 100% 기부되며, opensea에서 재판매시 금액의 10%가 푸르게 서비스로 기부된다.
- 도감상세를 누르면 제공되는 해양생물 NFT종류를 볼 수 있고,발급된 NFT는 프로필페이지에서 볼 수 있다.

<br>

### 프로필

**개인정보 수정**

- 프로필 페이지에서 내 NFT를 등록할 수 있고, 초기 발급받은 랜덤 닉네임이 수정 가능하다.
- 유효성 검사, 닉네임 글자수 제한이 되어있다.

**프로필 팔로우 및 도감**

- 다른 사용자의 프로필을 팔로우, 팔로우 해제할 수 있으며 리스트에서 볼 수 있다.
- 기부를 통해 발급받은 NFT를 도감으로 볼 수 있고, NFT를 클릭하면 도감 상세를 확인할 수 있다.

<br>

### 게임

- 내가 발급받은 NFT로 게임을 진행할 수 있다.
- 게임 방법, 랭킹 등을 확인할 수 있고 카카오톡으로 게임점수를 공유할 수 있다.

<br>

### 랭킹

- 팔로워, 게임랭킹을 볼 수 있다.
- web3를 통해 NFT기부 횟수, 기부횟수에 따른 쓰레기를 치운 횟수를 볼 수 있다.

<br>

### 자주 묻는 질문

- NFT가 익숙하지 않은 사용자들을 위해, 사이트 소개와 더불어 메타마스크 사용방법, 고릴이더를 무료로 받는 방법 등 다양한 안내를 적어두었다.

<br>

## 5. 포팅 매뉴얼

### Backend

1. git clone https://lab.ssafy.com/s07-blockchain-nft-sub2/S07P22B107.git
2. cd Back
3. 경로 : Back/src/main/resources/properties/**env.properties 파일 추가**

```java
db.username = {username}
db.pw = {password}
```

1. Build Project
2. Run ‘PurgaeApplication’

<br>

### Frontend

1. cd Front
2. 경로: Front/**.env**파일 추가

```jsx
VITE_API = {api}

# contract
VITE_CONTRACT_ADDRESS = {contract_address}

## wallet
VITE_BE_METAMASK_ADDRESS ={metamask wallet address}
VITE_BE_METAMASK_SECRET_KEY = ''

## alchemy: 고릴
VITE_PURGAE_NET_ALCHEMY = {alchemy key}

## 카카오 공유하기
VITE_KAKAO_APP_KEY = {kakao app key}

## 구글 애널리틱스
VITE_GA_KEY = {google analytics}
```

1. Project build : `npm install`
2. Project run : `npm run dev`

<br>

## 6. 프로젝트 산출물

- [발표자료](https://docs.google.com/presentation/d/1WI1bnst0weqybZ_Kiq9_drXL2-qv-BGa4mz5zdKgrNU/edit#slide=id.p)

- [UCC](https://www.youtube.com/watch?v=e6dPtQ7RAsA)

- [배포 매뉴얼](https://evanescent-tuba-146.notion.site/aea7ade1a3c24e879fbce235eb9c0936)

- [시연 시나리오](https://www.notion.so/1fc5666360e74c1ca06c17898388e285)

<br>
