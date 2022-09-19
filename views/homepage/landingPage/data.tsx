import ProfilePic from 'assets/images/left1.png'
import Pic from 'assets/images/image.jpg'

const Profile = [
  {
    id: 1,
    name: 'Karanvir Singh',
    userName: 'karanvir',
    bio: 'The IT guy',
    website: '/',
    profilePhoto: ProfilePic,
  },
]
const Posts = [
  {
    id: 1,
    name: 'Admin',
    userName: 'admin123',
    caption: 'Youtube using Pern stack',
    profilePhoto: ProfilePic,
    postImage: Pic,
    postTime: '92 seconds ago',
  },
  {
    id: 2,
    name: 'Admin',
    userName: 'admin123',
    caption: 'Youtube using Pern stack',
    profilePhoto: ProfilePic,
    postImage: Pic,
    postTime: '92 seconds ago',
    comment: [{}],
  },
]

const Saved = [{}]

const Followers = [
  {
    id: 1,
    name: 'Karan',
    userName: 'karan123',
  },
  {
    id: 2,
    name: 'Anmol',
    userName: 'anmol123',
  },
  {
    id: 3,
    name: 'Lakhvir',
    userName: 'lakhvir123',
  },
  {
    id: 4,
    name: 'Jassi',
    userName: 'jassi123',
  },
]
const Following = [
  {
    id: 1,
    name: 'wits',
    userName: 'wits123',
  },
]

const Suggestions = [
  {
    id: 1,
    name: 'Rahul',
    userName: 'rahul1234',
    profilePhoto: ProfilePic,
  },
  {
    id: 2,
    name: 'Shubham',
    userName: 'shubham1234',
    profilePhoto: ProfilePic,
  },
  {
    id: 3,
    name: 'Piyush',
    userName: 'piyush12344',
    profilePhoto: ProfilePic,
  },
  {
    id: 1,
    name: 'Sunil',
    userName: 'sunil123232',
    profilePhoto: ProfilePic,
  },
]

export { Profile, Followers, Following, Saved, Posts, Suggestions }
