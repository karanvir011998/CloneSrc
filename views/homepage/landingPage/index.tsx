import {
  FeedContainer,
  LeftWrapper,
  FeedWrapper,
  FeedUsernameWrapper,
  FeedImage,
  Span,
  Caption,
  //AddCommentWrapper,
  SavePostIconWrapper,
  CommentInput,
  PostTime,
  Wrap,
  RightWrapper,
  ProfileWrapper,
  UserName,
  ProfileName,
  SuggestionWrapper,
  Heading,
  ProfileImage,
  SuggestionProfilesWrapper,
  SuggestProfileWrapper,
  SuggestProfileName,
  SuggestUserName,
  ButtonFollow,
  SuggestProfileImage,
  ProfileNamesWrapper,
  IconsWrap,
} from 'styles/views/homepage/landingPage'
import { Profile, Suggestions, Posts } from './data'
import Dots from 'assets/svg/dots'
import Likes from 'assets/svg/likes'
import CommentsIcon from 'assets/svg/commentsIcon'
import SavePostIcon from 'assets/svg/savePostIcon'
import ShareIcon from 'assets/svg/shareIcon'

const LandingPage = () => {
  return (
    <>
      <FeedContainer>
        <LeftWrapper>
          {Posts.map((post) => {
            return (
              <FeedWrapper key={post.id}>
                <Wrap>
                  <FeedUsernameWrapper>
                    <SuggestProfileImage src={post.profilePhoto} />
                    {post.userName}
                  </FeedUsernameWrapper>
                  <Dots />
                </Wrap>
                <FeedImage src={post.postImage}></FeedImage>
                <IconsWrap>
                  <SavePostIconWrapper>
                    <Likes />
                    <CommentsIcon />
                    <ShareIcon />
                  </SavePostIconWrapper>
                  <SavePostIcon />
                </IconsWrap>
                <Caption>
                  <Span>{post.userName}</Span>
                  {post.caption}
                </Caption>
                <PostTime>{post.postTime}</PostTime>
                <CommentInput type="text" placeholder="Add Comment" />
              </FeedWrapper>
            )
          })}
        </LeftWrapper>
        <RightWrapper>
          {Profile.map((prof) => {
            return (
              <ProfileWrapper key={prof.id}>
                <ProfileImage src={prof.profilePhoto} />
                <ProfileNamesWrapper>
                  <UserName>{prof.userName}</UserName>
                  <ProfileName>{prof.name}</ProfileName>
                </ProfileNamesWrapper>
              </ProfileWrapper>
            )
          })}
          <SuggestionWrapper>
            <Heading>Suggestions For You</Heading>
            {Suggestions.map((suggest) => {
              return (
                <>
                  <SuggestionProfilesWrapper>
                    <SuggestProfileWrapper key={suggest.id}>
                      <SuggestProfileImage src={suggest.profilePhoto} />
                      <ProfileNamesWrapper>
                        <SuggestUserName>{suggest.userName}</SuggestUserName>
                        <SuggestProfileName>{suggest.name}</SuggestProfileName>
                      </ProfileNamesWrapper>
                    </SuggestProfileWrapper>
                    <ButtonFollow>Follow</ButtonFollow>
                  </SuggestionProfilesWrapper>
                </>
              )
            })}
          </SuggestionWrapper>
        </RightWrapper>
      </FeedContainer>
    </>
  )
}

export default LandingPage
