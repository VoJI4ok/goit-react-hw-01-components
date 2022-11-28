import PropTypes from 'prop-types';


export const FriendList = ({ friends }) => {

};



FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ),
  };