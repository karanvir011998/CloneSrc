import React from 'react'
import {
  ProfileContainer,
  ProfileWrapper,
  PostsWrapper,
  ProfileDetailsWrapper,
  ProfilePhoto,
  ProfileNameWrapper,
  EditButton,
  NumberOfPosts,
  DetailsWrapper,
  Name,
  Bio,
  Website,
  IconsWrapper,
  PostsIconWrapper,
  SavedIconWrapper,
  SavedText,
  PostsText,
} from 'styles/views/homepage/profile'
import { Profile } from 'views/homepage/landingPage/data'
import SettingIcon from 'assets/svg/setting'
import PostsIcon from 'assets/svg/postsIcon'
import SavePostIcon from 'assets/svg/savePostIcon'
//import data from '../explore/data'
const ProfilePage = () => {
  return (
    <>
      <ProfileContainer>
        {Profile.map((data) => {
          return (
            <>
              <ProfileWrapper key={data.id}>
                <ProfilePhoto src={data.profilePhoto}></ProfilePhoto>
                <ProfileDetailsWrapper>
                  <ProfileNameWrapper>
                    {data.userName}
                    <EditButton>Edit Profile</EditButton>
                    <SettingIcon />
                  </ProfileNameWrapper>

                  <NumberOfPosts>
                    <div>3 Posts</div>
                    <div>3 Followers</div>
                    <div>1 Following</div>
                  </NumberOfPosts>
                  <DetailsWrapper>
                    <Name>{data.name}</Name>
                    <Bio>{data.bio}</Bio>
                    <Website>{data.website}</Website>
                  </DetailsWrapper>
                </ProfileDetailsWrapper>
              </ProfileWrapper>
              <PostsWrapper>
                <IconsWrapper>
                  <PostsIconWrapper>
                    <PostsIcon />
                    <PostsText>Posts</PostsText>
                  </PostsIconWrapper>
                  <SavedIconWrapper>
                    <SavePostIcon />
                    <SavedText>Saved</SavedText>
                  </SavedIconWrapper>
                </IconsWrapper>
              </PostsWrapper>
            </>
          )
        })}
      </ProfileContainer>
    </>
  )
}

export default ProfilePage
