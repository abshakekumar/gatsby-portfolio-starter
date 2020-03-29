import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  border: 1px solid #fff;
  padding: 25px 12px 18px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.19), 0 1px 1px rgba(0, 0, 1, 0.23);
  .projectLink {
    &:hover {
      color: #d6f10b;
      cursor: pointer;
    }
  }
`
const Title = styled.h2`
  color: #2d2d2d;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`

const Description = styled.p`
  color: #2d2d2d;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`
const StyledPhoto = styled.img`
  width: 100%;
  height: 40vh;
  max-height: 40vh;
  object-fit: cover;
  border: 1px solid #fff;
`

const Card = ({ title, description, link, photo }) => (
  <StyledContainer>
    <StyledPhoto src={photo} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    {link && (
      <p
        className="projectLink"
        onClick={() => window.open(`${link.url}`, "_blank")}
      >
        {link.title}
      </p>
    )}
  </StyledContainer>
)
export default Card
