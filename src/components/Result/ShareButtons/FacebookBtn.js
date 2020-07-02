import React from 'react'

const FacebookBtn = () => {
  return (
    <div className={'fb-share-button facebookBtn'} data-href="https://memento-mori-zzerjae.endpoint.ainize.ai/" data-layout="button" data-size="large">
      <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmemento-mori-zzerjae.endpoint.ainize.ai%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore" />
    </div>
    // <div className="fb-share-button" data-href="https://memento-mori-zzerjae.endpoint.ainize.ai/" data-layout="button"
    //   data-size="large"><a target="_blank"
    //   href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmemento-mori-zzerjae.endpoint.ainize.ai%2F&amp;src=sdkpreparse"
    //   className="fb-xfbml-parse-ignore">공유하기</a></div>
  )
}

export default FacebookBtn
