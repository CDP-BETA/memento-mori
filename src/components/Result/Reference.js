import React from 'react'
import './reference.scss'

const Reference = () => {
  return (
    <div className={'reference'}>
      본 인공지능 모델은 MIT 에서 제공하는 MIMIC-III를 이용하여 학습되었습니다.
      MIMIC-III은 2001~2012년간 수집된 Critical Care Patient 데이터이기에 사망 나이 예측 결과가 예상보다 어린 나이로 나올 수 있음을 미리 알려드립니다.
    </div>
  )
}

export default Reference