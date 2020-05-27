import m from 'mithril'
import Auth from '../../controllers/auth';
import BasePage from './base';
import UserProfile from '../components/user/profile';

const Profile = BasePage(UserProfile, {user: Auth.getLoggedUser()})

export default Profile
