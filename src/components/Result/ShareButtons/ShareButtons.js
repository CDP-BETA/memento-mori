import React from 'react'
import { useStores } from 'stores'
import KakaoBtn from './KakaoBtn'
import FacebookBtn from './FacebookBtn'
import shareIcon from 'assets/images/share_btn.png'
import 'components/Result/ShareButtons/shareButtons.scss'

const ShareButton = () => {
  const { appStore } = useStores()

  const clickShare = async () => {
    console.log('navigator')
    if (navigator.share) {
      alert('navigator on')
      await navigator
        .share({
          title: '사망예측기',
          url: process.env.REACT_APP_BASE_URL,
        })
        .then(() => {
          console.log('Thanks for sharing!')
        })
        .catch(console.error)
    }
  }

  return (
    <div className={'shareContainer'}>
      {/*<button onClick={async () => await clickShare()}>*/}
      {/*  <img src={shareIcon} alt={'share_btn'} />*/}
      {/*</button>*/}
      {/*<FacebookBtn />*/}
      <KakaoBtn />
    </div>
  )
}

export default ShareButton
