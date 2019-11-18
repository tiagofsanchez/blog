import React, { Component } from "react";
import AvatarLinks from "../components/Avatar/AvatarLinks";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

class About extends Component {
  render() {
    return (
      <>
        <div
          sx={{
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`
          }}
        >
          <div>
            <Styled.h1>Me</Styled.h1>
          </div>
          <div sx={{ display: `flex` }}>
            <AvatarLinks size={"small"} />
          </div>
        </div>
        <Styled.p>
          Ola, my name is Tiago and I am a dad, a strategist working in the
          innovation space and a developer apprentice. A couple of years back I
          moved to Singapore with my better half and our 2 kids have been born
          in the little red dot.
        </Styled.p>
        <Styled.p>
          I have started this website as a small experiment to teach myself how
          to code, to share that journey and to put "pen to paper" on stuff that
          I like to do and to think about.
        </Styled.p>
        <Styled.p>Hope you enjoy!</Styled.p>
        <Styled.h1>Us</Styled.h1>

        <Styled.p />
      </>
    );
  }
}

export default About;
