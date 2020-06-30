import React from 'react'
import { useStores } from 'stores'
import backIcon from 'assets/images/left_bracket@2x.png'
import nextIcon from 'assets/images/right_bracket@2x.png'
import { observer } from 'mobx-react'
import './stepContainer.scss'

const StepContainer = observer(() => {
  const { dataStore } = useStores()
  const { stepNext, stepBack, step, totalStep } = dataStore

  return (
    <div className={'stepContainer'}>
      <img src={backIcon} alt={'back_icon'} onClick={stepBack} />
      <p> {step + 1} / {totalStep}</p>
      <img src={nextIcon} alt={'next_icon'} onClick={stepNext} />
    </div>
  )
})

export default StepContainer