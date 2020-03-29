import React from "react"
import styled from "styled-components"
import Card from "../components/shared/Card"
import { breakpoints } from "../components/shared/Media"
import { TitleComponent, StyledText } from "../components/shared/TextWrapper"

const StyledRoot = styled.div`
  padding: 50px 12px;
`
const StyledContainer = styled.div`
  max-width: 80%;
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px 5rem;
  @media (max-width: ${breakpoints.mobileMax}) {
    max-width: 90%;
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`
const Project = () => {
  return (
    <StyledRoot>
      <TitleComponent>Project</TitleComponent>
      <StyledText>Some of my work</StyledText>
      <StyledContainer>
        <Card
          photo={require("../images/snackBar.svg")}
          title="Angular material Snackbar with multiple actions"
          link={{
            url: "https://stackblitz.com/edit/angular-bottomsheet-as-snackbar",
            title: "SnackBar via BottomSheet Project",
          }}
          description="Notifications are displayed using snackBar, 
          and for one action, its easy to handle using snackBar.
          If there is a requirement of adding 2 or multiple actions in the 
          snackBars as notifications are completely handled through snackBars.
          So, i created and styled the BottomSheet in such a manner to replicate the
           snackbar."
        />

        <Card
          photo={require("../images/encryption.svg")}
          title="Video Steganography"
          description="To store your any text message, image,  or a 
          video into a specified Video (say,  Stego Video) such that there is no 
          difference in Video after embedding the data. Same data hiding  can be
          done in your specified images without altering Stego Image. 
          Algorithms used : 
          1. Least Bit Substitution method 
          2. Discrete Wavelength Transformation technique (to improve capacity to hide without compromising the Video quality) "
        />

        <Card
          photo={require("../images/learning-logs.svg")}
          title="Learning Logs"
          description="Project to keep track of the learning made in the Organization combined with
          respect to different projects in the Organization. Project Owners can add any learning that
          has been encountered while working on the project. And others can view those learning in different
          projects so that those mistakes are not repeated in their projects. If same problem exists,
          the person may reach out to the Project Owner for detailed solution via emails."
        />

        <Card
          photo={require("../images/referral.svg")}
          title="Referral System"
          description="Project to keep track of the referrals. Mainly used by HR for their day to day
          life maintainence of referral system. HR can update the jobs vacancy in the Organization
          which is visible to all employees. Employees can select particular job and 
          can add their referral details for the job position. Both HR and Employee can track the
          current status of the referral."
        />
      </StyledContainer>
    </StyledRoot>
  )
}
export default Project
