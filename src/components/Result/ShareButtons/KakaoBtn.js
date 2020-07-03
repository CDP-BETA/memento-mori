import React from 'react'
import { useStores } from 'stores'
import './shareButtons.scss'

const KakaoBtn = () => {
  const { appStore } = useStores()
  const { setLoading } = appStore
  const shareWithKakao = () => {
    console.log(window.Kakao.isInitialized())
    setLoading(true)
    window.Kakao.Link.sendScrap({
      requestUrl: process.env.REACT_APP_BASE_URL,
      // requestUrl: 'http://7d62c916728d.ngrok.io',
      fail: function (err) {
        console.log(err)
        setLoading(false)
        // alert(JSON.stringify(err))
      },
      success: function () {
        setLoading(false)
      },
    })
  }
  return <button className={'kakaoBtn'} onClick={shareWithKakao} />
}

export default KakaoBtn
