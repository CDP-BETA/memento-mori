import React from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import { useStores } from 'stores'
import ainizeLogo from 'assets/images/ainize.png'
import './homePage.scss'

const HomePage = observer(() => {
  const { dataStore } = useStores()
  const resetQuestions = () => {
    dataStore.initialize()
  }
  return (
    <div className={'homePage'}>
      <div className={'titleContainer'}>
        <p className={'title'}>
          당신의 사망 나이를
          <br /> 측정합니다.
        </p>
      </div>
      <div className={'subTitleContainer'}>
        <p className={'subTitle'}>
          우리는 당신이 가진 병의 증상과
          <br />
          간단한 인공지능을 이용하여 사망나이를 예측합니다.
          <br />
          당신의 기대수명에 대해 알아볼까요?
        </p>
      </div>
      <Link to={'/question'} className={'startBtn'} onClick={() => resetQuestions()}>
        <p>시작하기</p>
      </Link>
      {/*<p>{`화면넓이: ${screen.availWidth}, 화면높이: ${screen.availHeight}`}</p>*/}
      <img className={'ainizeLogo'} src={ainizeLogo} alt={'ainize_logo'} />
    </div>
  )
})

export default HomePage
