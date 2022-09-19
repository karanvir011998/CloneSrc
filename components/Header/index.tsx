import {
  NavbarContainer,
  NavbarWrapper,
  ProfileImg,
  InstaWrap,
  SearchWrap,
  Input,
  IconsWrap,
  SearchWrapper,
} from 'styles/components/header'
import HomeIcon from 'assets/svg/home'
import Addpost from 'assets/svg/addPost'
import Explore from 'assets/svg/explore'
import Notification from 'assets/svg/notification'
import Profile from 'assets/images/animator.png'
import Instagram from 'assets/svg/instagram'
const Header = () => (
  <NavbarContainer>
    <NavbarWrapper>
      <InstaWrap>
        <Instagram />
      </InstaWrap>
      <SearchWrap>
        <SearchWrapper>
          <Input type="text" placeholder="Search"></Input>
        </SearchWrapper>
      </SearchWrap>
      <IconsWrap>
        <HomeIcon />
        {/*<Message />*/}
        <Addpost />
        <Explore />
        <Notification />
        <ProfileImg src={Profile} />
      </IconsWrap>
    </NavbarWrapper>
  </NavbarContainer>
)

export default Header
