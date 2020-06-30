import React from 'react'
import { useStores } from 'stores'
import { observer } from 'mobx-react'
import './stepNumber.scss'

const StepNumber = observer(() => {
  const { dataStore } = useStores()
  return (
    <p className={'stepNumber'}>
      {dataStore.step + 1}
    </p>
  )
})

export default StepNumber