import PropTypes from 'prop-types';
import {
  Item,
  StatusTrue,
  StatusFalse,
  Avatar,
  Name,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    
  return (
    <Item>
      {isOnline ? <StatusTrue></StatusTrue> : <StatusFalse></StatusFalse>}
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};