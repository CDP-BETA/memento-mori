import React from 'react'
import styled from 'styled-components'
import ainizeLogo from 'assets/images/ainize.png'
import githubLogo from 'assets/images/git.png'

const StyledFooter = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  img {
    width: 150px;
  }
`
const Footer = () => {
  return (
    <StyledFooter>
      <img src={ainizeLogo} alt={'ainize_logo'} onClick={() => (window.location.href = 'http://ainize.ai/')} />
      <img src={githubLogo} alt={'github_logo'} onClick={() => (window.location.href = 'https://github.com/CDP-BETA/memento-mori')} />
    </StyledFooter>
  )
}

export default Footer
