import ImageIcon from "@/assets/ImageIcon";
import ImdbPro from "@/assets/ImdbPro";
import Share from "@/assets/Share";
import Topics from "@/assets/topics";
import VideoIcon from "@/assets/VideoIcon";
import Category from "@/Components/Category/Category";
import { Container } from "@/Components/common/common";
import { Media } from "@/Components/Media/Media";
import Stats from "@/Components/Stats/Stats";
import Video from "@/Components/Video/Video";
import WatchList from "@/Components/WatchList/WatchList";
import useGetMovie from "@/Hooks/useGetMovie";
import { handleLongString } from "@/utils/string";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";

const multipleMedia = [
  { number: +99, title: "Images", icon: <ImageIcon /> },
  { number: 76, title: "Videos", icon: <VideoIcon /> },
];
const information = ["Movie", "TV-MA", "", "2 H"];
const getInfo = (year: number) =>
  information.map((info, i) => (
    <Typography key={i} color="#FFFFFFB3">
      {info ? info : year}
    </Typography>
  ));
const desc =
  "An ex-con assumes the identity of a murdered sheriff in the small town of Banshee, Pennsylvania, where he has some unfinished business.";
const MovieDetail: React.FC = () => {
  const Router = useRouter();
  const [readMore, setReadMore] = useState(false);
  const Movie = useGetMovie(
    Array.isArray(Router.query.MID) ? "" : Router.query.MID || ""
  );
  const handleReadMoreClick = () => setReadMore((old) => !old);
  return (
    <PageContainer>
      <ContentContainer>
        <Container justifyContent="flex-end">
          <DottedContainer>
            <Container gap="0px">
              <Typography>Cast & Crew</Typography>
              <Typography>User Reviews</Typography>
              <Typography>Trivia</Typography>
            </Container>
          </DottedContainer>
          <VerticalDash />
          <Typography>IMDBPro</Typography>
          <VerticalDash />
          <Container>
            <Topics />
            <Typography>All Topics</Typography>
          </Container>
          <VerticalDash />
          <Share />
        </Container>
        <Container justifyContent="space-between">
          <Title fontSize="48px">{Movie?.title}</Title>
          <RightStatsContainer>
            <Stats showHeader={true} />
          </RightStatsContainer>
        </Container>
        <DottedContainer>
          <Container gap="0px" paddingBlock="0px">
            {getInfo(Movie?.year || 0)}
          </Container>
        </DottedContainer>

        <VideoContainer>
          <ImageContainer>
            <GridItem gridRow="1 / span 3" gridCol="span 1 / span 1">
              <Image
                src={Movie?.image?.[0]?.[1] || ""}
                alt={""}
                fill
                style={{ maxHeight: 400, maxWidth: 280 }}
              />
            </GridItem>
          </ImageContainer>
          <GridItem gridRow=" 1 / span 3" gridCol="span 2 / span 2">
            <Video />
          </GridItem>
          <GridItem gridCol="span 1 / span 1">
            <MediaContainer>
              {multipleMedia.map((media) => (
                <Media key={media.title} {...media} />
              ))}
            </MediaContainer>
          </GridItem>
        </VideoContainer>

        <Container smallScreenFlip alignItems="start" gap="10px">
          <DescriptionContainer>
            <Container border="none">
              {Movie?.genre?.map((cat) => (
                <Category key={cat} title={cat} />
              ))}
            </Container>
            <Container>
              <Typography fontSize="16px">
                {readMore
                  ? Movie?.description
                  : handleLongString(Movie?.description, 100)}
                {desc.length > 100 ? (
                  readMore ? (
                    <ReadSpan onClick={handleReadMoreClick}>
                      ...ReadLess
                    </ReadSpan>
                  ) : (
                    <ReadSpan onClick={handleReadMoreClick}> ReadAll</ReadSpan>
                  )
                ) : (
                  ""
                )}
              </Typography>
            </Container>
            <StatsContainer>
              <Stats />
            </StatsContainer>
            <Container>
              <Typography fontSize="16px">{"director"}</Typography>

              {Movie?.director?.map((director) => (
                <Link key={director}> {director || "Jonh tRAVOLTA"} </Link>
              ))}
            </Container>
            <Container>
              <Typography fontSize="16px">{"Writers"}</Typography>
              {Movie?.writers?.map((director) => (
                <Typography fontSize="16px" key={director}>
                  {director || "Jonh tRAVOLTA"}{" "}
                </Typography>
              ))}
            </Container>
            <Container>
              <Typography fontSize="16px">{"Stars"}</Typography>
              <DottedContainer>
                <Container gap="0px" border="none">
                  <Link>{"Tom Cruise"}</Link>
                  <Link>{"Tom william"}</Link>
                </Container>
              </DottedContainer>
            </Container>
            <Container border="none">
              <ImdbPro />
              <Typography>see production box office </Typography>
            </Container>
          </DescriptionContainer>
          <div style={{ flex: 1, paddingBlock: "10px" }}>
            <WatchList />
            <Container style={{ flex: 1, paddingBlock: "10px" }}>
              <Link>28 User Reviews</Link>
              <Link>30 User Reviews</Link>
              <Link>
                <MetaScore> 80</MetaScore> User Reviews
              </Link>
            </Container>
          </div>
        </Container>
      </ContentContainer>
    </PageContainer>
  );
};

export default MovieDetail;

const PageContainer = styled.div`
  max-width: 100vw;
  background-color: #2c2828;
  min-height: 100vh;
  padding-inline: 50px;
  @media only screen and (min-width: 768px) {
    padding-inline: 150px;
  }
`;
const ContentContainer = styled.div`
  max-width: 1180px;
  margin: auto;
`;

const DescriptionContainer = styled.div<{ justifyContent?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 60%;
  padding-block: 10px;
  div {
    width: 100%;
    padding-block: 5px;
    border-bottom: 1px solid lightgray;
  }
  @media only screen and (max-width: 1000px) {
    width: 100%;
    div {
      border-bottom: none !important;
      padding-block: 0px;
    }
  }
`;
export const Typography = styled.p<{
  fontSize?: string;
  color?: string;
  marginBlock?: string;
}>`
  color: ${({ color }) => color || "white"};
  font-size: ${({ fontSize }) => fontSize};
  margin-block: ${({ marginBlock }) => marginBlock};
  @media only screen and (max-width: 1000px) {
    font-size: 12px;
  }
`;
export const VerticalDash = styled.div`
  background-color: #616161;
  height: 26px;
  width: 1px;
  display: block !important;
`;
const MediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
  height: 100%;
  @media only screen and (max-width: 1000px) {
    flex-direction: row;
  }
`;
const VideoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 5px;
  position: relative;
  height: 400px;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    row-gap: 10px;
    grid-template-rows: repeat(3, minmax(0, 1fr));
    position: relative;
    height: 500px;
  }
`;
const ImageContainer = styled.div`
  @media only screen and (max-width: 1000px) {
    position: absolute;
    left: 25px;
    bottom: 70px;
    width: 240px;
    height: 60%;
  }
`;
const GridItem = styled.div<{ gridCol?: string; gridRow?: string }>`
  grid-column: ${({ gridCol }) => gridCol};
  @media only screen and (max-width: 1000px) {
    grid-row: ${({ gridRow }) => gridRow};
    grid-column: 1 / span 3;
  }
`;
export const Title = styled.h2<{
  paddingBlock?: string;
  fontSize?: string;
  color?: string;
  marginBlock?: string;
}>`
  padding-block: ${({ paddingBlock }) => paddingBlock || 0};
  color: ${({ color }) => color || "white"};
  font-size: ${({ fontSize }) => fontSize};
  margin-block: ${({ marginBlock }) => marginBlock || 0};
`;
const MetaScore = styled.span`
  background-color: green;
  padding: 5px;
  color: white;
  font-weight: 600;
`;
export const Link = styled.a`
  text-decoration: none;
  color: rgb(87, 153, 239);
  cursor: pointer;
`;
const DottedContainer = styled.div`
  border: none !important;
  a:not(:last-child):after {
    content: "";
    margin-inline: 10px;
    height: 4px;
    width: 4px;
    border-radius: 50%;
    background-color: #b4b4b4;
    display: inline-block;
    margin-bottom: 4px;
    @media only screen and (max-width: 600px) {
      content: none;
    }
  }
  p:not(:last-child):after {
    content: "";
    margin-inline: 6px;
    height: 4px;
    width: 4px;
    border-radius: 50%;
    background-color: #b4b4b4;
    display: inline-block;
    margin-bottom: 4px;
    @media only screen and (max-width: 600px) {
      content: none;
    }
  }
  @media only screen and (max-width: 600px) {
    a,
    p {
      margin-inline: 2px;
    }
  }
`;
const ReadSpan = styled.span`
  color: rgb(87, 153, 239);
  cursor: pointer;
`;
const StatsContainer = styled.div`
  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;
const RightStatsContainer = styled.div`
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;
