import React from 'react'
import { useStores } from 'stores'
import shareIcon from 'assets/images/share_btn.png'

const ShareButton = () => {
  const { appStore } = useStores()

  const clickShare = () => {
    if (navigator.share) {
      navigator.share({
        title: '사망예측기',
        url: appStore.baseUrl
      }).then(() => {
        console.log('Thanks for sharing!');
      })
        .catch(console.error);
    }
  }

  return (
    <div className={'shareContainer'}>
      <img src={shareIcon} alt={'share_btn'} onClick={() => clickShare()}/>
    </div>
  )
}

export default ShareButton