import styled from 'styled-components'

export const EditProfileContainer = styled.div`
  margin: 35px auto auto auto;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  width: 70%;
`
export const EditProfileWrapper = styled.div`
  width: 46%;
  margin: 5% 25% 3% 25%;
  @media screen and (max-width: 800px) {
    width: 70%;
    margin: 5% 15%;
  }
`

export const ProfileWrapper = styled.div`
  display: flex;
  margin: auto auto 16px auto;
  column-gap: 1.9vw;
`
export const ProfileImage = styled.img`
  width: 60px;
`
export const ProfileNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const ProfileUserName = styled.div`
  font-size: 22px;
  font-weight: 500;
  padding: 3px 0 0 0;
`
export const ChangeProfilePic = styled.div`
  font-size: 15px;
  padding: 9px 0 0 0;
`
export const EditProfileForm = styled.form`
  padding: 2px 1px 0 0;
  display: flex;
  flex-direction: column;
  row-gap: 0.8vh;
`
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`

export const Label = styled.label``
export const Textarea = styled.textarea`
  width: 78.3%;
  height: 5vh;
  padding: 3px 0 1px 10px;

  @media screen and (max-width: 800px) {
    width: 75.5%;
    height: 4vh;
    padding-left: 10px;
  }
`

export const Input = styled.input`
  width: 78%;
  height: 3.7vh;
  padding: 0 0 1px 10px;
  @media screen and (max-width: 800px) {
    width: 75%;
    height: 3.5vh;
    padding-left: 10px;
  }
`
export const Button = styled.button`
  margin: 1vw 0 0 6.1vw;
  width: 85px;
  padding: 8px 7px;
  font-weight: 600;
  background-color: #1877f2;
  border: none;
  border-radius: 3px;
`
