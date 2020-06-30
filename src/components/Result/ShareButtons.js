import React from 'react'
import { useStores } from 'stores'

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

    </div>
  )
}

export default ShareButton