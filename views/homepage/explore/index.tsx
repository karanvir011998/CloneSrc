import {
  ExploreContainer,
  ExploreWrap,
  Explore,
  ImageWrapper,
  Images,
  IconsWrap,
  LikesWrap,
  CommentsWrap,
} from 'styles/views/homepage/explore'
import datas from 'views/homepage/explore/data'
import Likes from 'assets/svg/likes'
import Comments from 'assets/svg/likes'

const Index = () => {
  return (
    <ExploreContainer>
      <ExploreWrap>
        <Explore>Explore</Explore>
      </ExploreWrap>
      <ImageWrapper>
        {datas.map((data) => {
          return (
            <Images key={data.id}>
              <div>{data.icon}</div>
              <IconsWrap>
                <LikesWrap>
                  <Likes />
                  {data.likes}
                </LikesWrap>
                <CommentsWrap>
                  <Comments />
                  {data.comments?.length}
                </CommentsWrap>
              </IconsWrap>
            </Images>
          )
        })}
      </ImageWrapper>
    </ExploreContainer>
  )
}

export default Index
