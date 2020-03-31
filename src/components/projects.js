import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "@emotion/styled";
/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

import config from "../../data/SiteConfig";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled.a`
  width: 200px;
  height: 300px;
  flex: 0 1 200px;
  display: flex;
  flex-direction: column;
  margin: 8px;
  padding: 8px;
  border-radius: 5px;
  text-decoration: none;
`;
const ImageContainer = styled.div`
  width: 200px;
`;

const TextContainer = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  width: 100%;
  margin-bottom: 0;
  text-align: center;
`;

const Description = styled.p`
  text-align: center;
  margin-bottom: 0;
`;

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      projImages: allFile(
        filter: { relativeDirectory: { eq: "projects" }, childImageSharp: {} }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 250, grayscale: true) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  //Array that organizes all my projects
  let projArray = [];
  const { edges } = data.projImages;
  edges.forEach(({ node }) => {
    const project = node;
    const imageSrc = project.childImageSharp.fluid.src;
    const img = project.childImageSharp.fluid;
    config.projects.forEach(proj => {
      if (imageSrc.includes(proj.image)) {
        projArray.push({
          img: img,
          name: proj.name,
          description: proj.description,
          link: proj.link
        });
      }
    });
  });

  return (
    <Container>
      {projArray.map(proj => {
        return (
          <CardContainer
            key={proj.name}
            href={proj.link}
            sx={{
              ":hover": {
                borderRadius: `10px`,
                boxShadow: "0 0 1px 2px rgba(0, 0, 0, .125)",
                bg: "muted"
              }
            }}
          >
            <ImageContainer>
              <Img fluid={proj.img} alt={proj.name} />
            </ImageContainer>
            <TextContainer>
              <Title sx={{ color: `primary` }}>{proj.name}</Title>
              <Description sx={{ color: `text` }}>
                {proj.description}
              </Description>
            </TextContainer>
          </CardContainer>
        );
      })}
    </Container>
  );
};

export default Projects;
