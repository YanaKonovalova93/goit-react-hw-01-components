import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem'
import { FriendListUl } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListUl>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          name={name}
          avatar={avatar}
          isOnline={isOnline}
        />
      ))}
    </FriendListUl>
  );
};

Event.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
