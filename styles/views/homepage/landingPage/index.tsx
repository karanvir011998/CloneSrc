import styled from 'styled-components'

export const FeedContainer = styled.div`
  margin: 5vh 0 0 0;
  display: flex;
  justify-content: center;
`
export const LeftWrapper = styled.div`
  width: 44%;
`
export const IconsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px 0 22px;
`

export const SavePostIconWrapper = styled.div`
  display: flex;
  gap: 15px;
`

export const FeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid lightgray;
  margin-bottom: 18px;
`
export const Caption = styled.div`
  padding: 0 22px;
`

export const Span = styled.span`
  font-weight: 500;
  padding-right: 5px;
`

export const FeedUsernameWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin: auto 0;
  font-size: 20px;
  font-weight: 500;
  opacity: 0.8;
`
export const AddCommentWrapper = styled.div``

export const Wrap = styled.div`
  margin: auto 0;
  display: flex;
  text-align: center;
  padding: 10px 22px 0 22px;
  font-size: 25px;
  justify-content: space-between;
  /*font-size: clamp(1.4rem, 1.5vw, 2rem);*/
`
export const FeedImage = styled.img`
  border-top: 1px solid lightgrey;
  height: 48vh;
`

export const RightWrapper = styled.div`
  width: 26%;
`
export const ProfileWrapper = styled.div`
  display: grid;
  grid-template-areas: 'image username' 'image profilename';
  justify-content: start;
  padding: 0.8vh 3vw;
  column-gap: 2vh;
  align-items: center;
  width: 100%;
`
export const ProfileImageWrapper = styled.div`
  grid-area: image;
`

export const ProfileImage = styled.img`
  max-width: 70px;
  min-width: 70px;
`
export const UserName = styled.div`
  font-size: 18px;
  padding: 2px;
  font-weight: 500;

  grid-area: username;
  width: fit-content;
`
export const ProfileName = styled.div`
  font-weight: 700;
  font-size: 17px;
  opacity: 0.5;
  grid-area: profilename;
  width: fit-content;
`
export const SuggestionWrapper = styled.div``

export const SuggestionProfilesWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
`

export const PostTime = styled.div`
  padding: 0 22px;
`
export const CommentInput = styled.input`
  font-size: 20px;
  height: 60px;
  padding: 0 16px;
  border: none;
  border-top: 1px solid lightgray;
  outline: none;
  /*height: 4vh;*/
`

export const Heading = styled.div`
  width: 100%;
  font-size: clamp(1rem, 1.3vw, 2.8rem);
  font-weight: 500;
  /*margin: 10px 22px 0 45px;*/
  padding: 2vw 3vw 0 3vw;
`
export const SuggestProfileWrapper = styled.div`
  display: flex;
  padding: 0.8vh 3vw;
  column-gap: 2vh;
  align-items: center;
  width: 10 0%;
`
export const ProfileNamesWrapper = styled.div``

export const SuggestProfileImage = styled.img`
  max-width: 55px;
  min-width: 55px;
`
export const SuggestUserName = styled.div`
  padding: 0 2px 0 0;
`
export const SuggestProfileName = styled.div`
  opacity: 0.5;
`

export const ButtonFollow = styled.button`
  background-color: white;
  border: none;
  color: #1877f2;
  font-weight: 600;
`
