import styled from 'styled-components'

export const NavbarContainer = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  height: 8vh;
  justify-content: space-around;
  background-color: white;
  padding: 1vh 0;
`

export const NavbarWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  /* border: 1px solid green; */
`
export const InstaWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
`
export const SearchWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 30%;
`
export const SearchWrapper = styled.div`
  height: 30px;
  padding: 3px;
  display: flex;
  gap: 4px;
  width: 100%;
`
export const Input = styled.input`
  border-radius: 8px;

  outline: none;
  border: none;
  width: 250px;
  background-color: rgb(245, 239, 239);
  padding: 3px 0 0 8px;

  &::placeholder {
    font-size: 16px;
    /* padding: 10px 0 0 15px; */
  }
`
export const IconsWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  gap: 25px;
`
export const ProfileImg = styled.img`
  height: 3vh;
  background-color: white;
`
