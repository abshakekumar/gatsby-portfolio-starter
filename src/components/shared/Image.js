import styled from "styled-components"

export const Image = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  max-height: ${props => props.maxHeight};
  max-width: ${props => props.maxWidth};
  border-radius: ${props => props.borderRadius};
`
