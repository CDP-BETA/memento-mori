import React from 'react'
import './shareButtons.scss'

const KakaoBtn = () => {
  const shareWithKakao = () => {
    console.log(window.Kakao.isInitialized())
    window.Kakao.Link.sendScrap({
      requestUrl: process.env.REACT_APP_BASE_URL,
      // requestUrl: 'http://626593721a3b.ngrok.io',
      fail: function (err) {
        console.log(err)
        // alert(JSON.stringify(err))
      },
    })
  }
  return <button className={'kakaoBtn'} onClick={shareWithKakao} />
}

export default KakaoBtn
