// import {Avatar} from './Profile.styles'
import PropTypes from 'prop-types';

export const Profile = ({ username, tag,location,avatar,stats:{followers,views,likes} }) => {

   
    return (
        <div>
<img src={avatar} alt="User avatar"/>
       <p>{username}</p>
       <p>{tag}</p>
       <p>{location}</p>
        
        <ul>
          <li><span>followers</span>
        <span>{followers}</span></li>
        <li><span>views</span>
        <span>{views}</span></li>
        <li><span>likes</span>
        <span>{likes}</span></li>
        </ul>
        
        </div>
    )
};
    Profile.propTypes = {
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.shape({
          followers: PropTypes.number.isRequired,
          views: PropTypes.number.isRequired,
          likes: PropTypes.number.isRequired,
        }),
};