import React from 'react'
import { useStores } from 'stores'
import shareIcon from 'assets/images/share_btn.png'
import './shareButtons.scss'

const ShareButton = () => {
  const { appStore } = useStores()

  const clickShare = async () => {
    console.log('navigator')
    if (navigator.share) {
      alert('navigator on')
      await navigator.share({
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
      <button onClick={async () => await clickShare()}><img src={shareIcon} alt={'share_btn'}/></button>
    </div>
  )
}

export default ShareButton