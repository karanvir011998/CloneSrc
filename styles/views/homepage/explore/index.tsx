import styled from 'styled-components'
export const ExploreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ExploreWrap = styled.div`
  width: 70%;
`

export const Explore = styled.h3`
  font-weight: 400;
  /*font-size: 1.2vw;
  padding: 0 0 0 0.3vw;*/
  font-size: 26px;
  padding: 27px 0 5px 0.3vw;
`

export const ImageWrapper = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 6px;
  row-gap: 6px;
  padding: 0.8vh 0 0 0.3vw;
  margin: 1.4vh 0 0 0;
  justify-content: center;
`
export const IconsWrap = styled.div`
  display: none;
  gap: 25px;
  position: absolute;
  top: 50%;
  left: 40%;
  color: white;

  @media (max-width: 768px) {
    left: 22%;
    gap: 20px;
  }
`

export const LikesWrap = styled.div`
  display: flex;
  gap: 5px;
`

export const CommentsWrap = styled.div`
  display: flex;
  gap: 5px;
`

export const Images = styled.div`
  position: relative;

  &:hover {
    background: black;
    opacity: 0.8;
    font-weight: 400;
    font-size: 18px;
    border-radius: 6px;
    cursor: pointer;
  }

  &:hover ${IconsWrap} {
    display: flex;
  }
`

export const Image = styled.img`
  height: fit-content;
  width: 100%;
  border-radius: 5px;
`
