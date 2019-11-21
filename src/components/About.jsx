import React, { Component } from "react";
import AvatarLinks from "../components/Avatar/AvatarLinks";
import Img from "gatsby-image";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

class About extends Component {
  render() {
    const { edges } = this.props.data.images;
    console.log(edges);
    return (
      <>
        <div
          sx={{
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `baseline`
          }}
        >
          <Styled.h1 sx={{my:0}}>Me</Styled.h1>

          <div sx={{ display: `flex` }}>
            <AvatarLinks size={"small"} />
          </div>
        </div>
        <Styled.p>
          Ola, my name is Tiago and I am a dad, a strategist working in the
          innovation space and a developer apprentice. A couple of years
          back I moved to Singapore with my better half and our 2 kids have
          been born in the little red dot.
        </Styled.p>
        <Styled.p>
          I have started this website as a small experiment to teach myself
          how to code, to share that journey and to put "pen to paper" on
          stuff that I like to do and to think about.
        </Styled.p>
        <Styled.p>Hope you enjoy!</Styled.p>
        <Styled.h1>Us</Styled.h1>
        <Styled.p>
          Briefly describing me wouldn't be complete without uploading a
          picture of the four of us 😎! For some reason I couldn't find a
          nice picture with the four of us, go figure!
        </Styled.p>
        <div sx={{ display: `flex` }}>
          {edges.map(image => {
            return (
              <Img
                fixed={image.node.childImageSharp.fixed}
                sx={{ mx: `20px` }}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default About;
