import React from "react"
import {
  NavWrapper,
  Navbar,
  Nav,
  NavItem,
  Item,
  NavBrand,
  NavLink,
} from "./Navigation/Navigation"
import ScrollIntoView from "react-scroll-into-view"

const Menu = () => {
  return (
    <Navbar>
      <NavWrapper>
        <NavBrand>
          <span
            style={{
              cursor: "pointer",
            }}
            onClick={() =>
              (window.location.href = "https://fast-resume.netlify.app/")
            }
          >
            Abhishek Kumar
          </span>
        </NavBrand>
        <Nav>
          <NavItem>
            <ScrollIntoView selector="#about">
              <Item>
                <NavLink
                  onClick={() =>
                    (window.location.href =
                      "https://abshakekumar.netlify.com/#about")
                  }
                >
                  About
                </NavLink>
              </Item>
            </ScrollIntoView>
            <ScrollIntoView selector="#project">
              <Item>
                <NavLink
                  onClick={() =>
                    (window.location.href =
                      "https://abshakekumar.netlify.com/#project")
                  }
                >
                  Project
                </NavLink>
              </Item>
            </ScrollIntoView>
            <ScrollIntoView selector="#contactme">
              <Item>
                <NavLink
                // onClick={() =>
                //   (window.location.href =
                //     "https://abshakekumar.netlify.com/#contactme")
                // }
                >
                  Contact
                </NavLink>
              </Item>
            </ScrollIntoView>
          </NavItem>
        </Nav>
      </NavWrapper>
    </Navbar>
  )
}
export default Menu
