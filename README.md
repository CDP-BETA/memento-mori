# MEMENTO MORI

Memento mori는 라틴어로 "자신이 언젠가 죽는 존재임을 잊지마라" 뜻을 가지고 있습니다.

이를 쉽게 실천할 수 있도록 도와드리겠습니다.
성별, 결혼유무, 질병의 유무만 알려주시면 인공지능이 사망할 나이를 예측해드립니다.
내가 사망할 나이를 기억함으로써 신이 아닌 인간일 뿐임을 잊지말고 공손해지시길 바랍니다.

본 인공지능 모델은 [MIT Lab for Computational Physiology](https://lcp.mit.edu/)에서 제공하는 [Critical Care Database MIMIC-III](https://mimic.physionet.org/)을 이용하여 학습되었습니다. 2001~2012년간 수집된 Critical Care Patient 데이터이기에 사망 나이 예측 결과가 예상보다 어린 나이로 나올 수 있음을 미리 알려드립니다. 자세한 설명은 모델 설명을 참고 바랍니다.

### 사망 나이 예측 모델

사망 나이 예측 모델사망나이 예측 기준은 환자의 마지막 입원이며 데이터 중 사망기록이 존재하지 않는 환자는 제외하였습니다. 

| 항목                  | 값                                                           |
| --------------------- | ------------------------------------------------------------ |
| 데이터 소스           | [MIMIC-III](https://mimic.physionet.org/)                    |
| 모델                  | [LightGBM](https://github.com/microsoft/LightGBM)            |
| 사용된 Feature        | 성별, 결혼유무, 진단코드                                     |
| 성능 평가             | MSE : 2.2242<br />R2 Score : 5.8752                          |
| 학습에 사용된 환자 수 | 전체 환자 수 : 14,279<br />무질병 환자 수 : 12,390<br />유질병 환자 수 : 1,889 |

사용된 Feature 중 진단코드는 가장 많이 사용된 상위 100개의 진단명 중 선별하여 특정 진단명으로 묶는 조작적정의를 진행하였습니다. 진단명 조작적 정의는 아래와 같습니다.

| 항목         | 조작적 정의에 사용된 진단 명                                 |
| ------------ | ------------------------------------------------------------ |
| 폐 관련 질병 | PNEUMONIA, PNEUMONIA;TELEMETRY, PULMONARY EMBOLISM, PULMONARY EMBOLIS, URINARY TRACT INFECTION;PYELONEPHRITIS |
| 고혈압       | HYPOTENSION, HYPERKALEMIA                                    |
| 가슴통증     | CHEST PAIN, CHEST PAIN\CATH                                  |
| 호흡기 장애  | SEIZURE,RESPIRATIORY FAILURE, ASTHMA/COPD EXACERBATION       |
| 빈혈         | ANEMIA                                                       |
| 당뇨병       | DIABETIC KETOACIDOSIS                                        |
| 저혈당       | HYPOGLYCEMIA                                                 |
| 열           | FEVER                                                        |
| 심혈관 질환  | CONGESTIVE HEART FAILURE, ACUTE MYOCARDIAL INFARCTION, ACUTE MYOCARDIAL INFARCTION\\CATH, STROKE |
| 복통         | ABDOMINAL PAIN                                               |
| 췌장염       | PANCREATITIS                                                 |



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React-Mobx-Boilerplate

#### This project is made of React + Mobx + customize-cra + scss.

### 1. clone this project.

Run 
```git clone https://github.com/zerone2/react-mobx-boilerplate```

### 2. yarn 

Run ```yarn``` to download dependencies

### 3. yarn start or yarn build

>To Start app in dev mode

Run ```yarn start```

>To build app in prod mode

Run ```yarn build```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### 4. Enjoy the boilerplate

**Note: Please don't do eject. this is a one-way operation. Once you `eject`, you can’t go back!**

you can set webpack settings in config-overrides.js


---


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
