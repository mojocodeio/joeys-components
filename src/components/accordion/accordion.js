import React, { useState } from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div``

const StyledHeader = styled.button`
  color: #2f3337;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 4px;
  border: ${({ borderColor }) => `1px solid ${borderColor || '#dadcdf'}`};
  border-right: none;
  border-left: none;
  border-bottom: ${({ borderBottom }) =>
    borderBottom ? '1px solid #dadcdf' : 'none'};
  border-top: ${({ borderTop }) => (borderTop ? '1px solid #dadcdf' : 'none')};
  background-color: ${({ isExpanded }) => (isExpanded ? '#f9fafb' : 'white')};

  &:hover {
    cursor: pointer;
    background-color: #f5f6f7;
  }
`

const StyledTitle = styled.h3`
  padding: 0;
  margin: 0;
  font-family: Helvetica Neue;
  line-height: 22px;
`

const StyledSvg = styled.svg`
  transform: ${({ isExpanded }) => !isExpanded && 'rotate(180deg)'};
`

const StyledContent = styled.div`
  padding: 16px;
  border: ${({ isExpanded }) => (isExpanded ? '1px solid #dadcdf' : '')};
  border-top: none;
  border-radius: 4px;
`

export default function Accordion({
  title,
  children,
  isExpanded: defaultExpanded,
  borderTop,
  borderBottom
}) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)
  function handleClick() {
    setIsExpanded(!isExpanded)
  }

  return (
    <StyledContainer role='region' isExpanded={isExpanded}>
      <StyledHeader
        borderBottom={borderBottom}
        borderTop={borderTop}
        onClick={handleClick}
        isExpanded={isExpanded}
        aria-expanded={isExpanded}
        aria-controls={`${title}-accordion`}
      >
        <StyledTitle>{title}</StyledTitle>
        <StyledSvg
          isExpanded={isExpanded}
          height='32px'
          width='32px'
          viewBox='0 0 19.399999618530273 11.099998474121094'
          aria-labelledby='aosi-evil-chevron-up-title'
          id='si-evil-chevron-up'
        >
          <title id='aosi-evil-chevron-up-title'>icon chevron-up</title>
          <path d='M18 11.1L9.7 2.8l-8.3 8.3L0 9.7 9.7 0l9.7 9.7z' />
        </StyledSvg>
      </StyledHeader>
      {isExpanded && (
        <StyledContent
          aria-labelledby={`${title}-accordion`}
          isExpanded={isExpanded}
        >
          {children}
        </StyledContent>
      )}
    </StyledContainer>
  )
}

// function Caret({ isExpanded }) {
//   if (isExpanded) {
//     return (
//       <StyledSvg
//         height='32px'
//         width='32px'
//         viewBox='0 0 19.399999618530273 11.099998474121094'
//         aria-labelledby='aosi-evil-chevron-up-title'
//         id='si-evil-chevron-up'
//       >
//         <title id='aosi-evil-chevron-up-title'>icon chevron-up</title>
//         <path d='M18 11.1L9.7 2.8l-8.3 8.3L0 9.7 9.7 0l9.7 9.7z' />
//       </StyledSvg>
//     )
//   }
// }
