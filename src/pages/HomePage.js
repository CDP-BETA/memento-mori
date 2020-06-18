import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { observer } from 'mobx-react'
import sampleImg from 'assets/images/howtodie.jpg'
import './homePage.scss'

const HomePage = observer(() => {
  const history = useHistory()
  return (
    <div className={'homePage'}>
      <h1>This is Home</h1>
      <img src={sampleImg} alt={'sample img'} />
      <div>
        <Link to={'/test'}>go to react test page</Link>
      </div>
    </div>
  )
})

export default HomePage
