import React from 'react'
import {
  EditProfileContainer,
  EditProfileWrapper,
  ProfileWrapper,
  ProfileImage,
  ProfileNameWrapper,
  ProfileUserName,
  ChangeProfilePic,
  EditProfileForm,
  InputWrapper,
  Label,
  Input,
  Textarea,
  Button,
} from 'styles/views/homepage/editProfile'

import { Profile } from 'views/homepage/landingPage/data'
const EditProfile = () => (
  <EditProfileContainer>
    {Profile.map((data) => {
      return (
        <EditProfileWrapper key={data.id}>
          <ProfileWrapper>
            <ProfileImage src={data.profilePhoto}></ProfileImage>
            <ProfileNameWrapper>
              <ProfileUserName>{data.userName}</ProfileUserName>
              <ChangeProfilePic>Change Profile Photo </ChangeProfilePic>
            </ProfileNameWrapper>
          </ProfileWrapper>
          <EditProfileForm>
            <InputWrapper>
              <Label>Name:</Label>
              <Input type="text" value={data.name} />
            </InputWrapper>
            <InputWrapper>
              Username:
              <Input type="text" value={data.userName} />
            </InputWrapper>
            <InputWrapper>
              Website:
              <Input type="text" value={data.website} />
            </InputWrapper>
            <InputWrapper>
              Bio:
              <Textarea value={data.bio} />
            </InputWrapper>
            <Button>Submit</Button>
          </EditProfileForm>
        </EditProfileWrapper>
      )
    })}
  </EditProfileContainer>
)
export default EditProfile
