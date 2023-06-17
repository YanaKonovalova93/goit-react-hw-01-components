import PropTypes from 'prop-types';
import { ProfileDiv, Description, Avatar, Name, Tag, Location, Stats, StatsLi, Label, Quantity } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileDiv>
      <Description>
        <Avatar src={avatar} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsLi>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsLi>

        <StatsLi>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsLi>

        <StatsLi>
      
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsLi>
      </Stats>
    </ProfileDiv>
  );
};

Event.propTypes = {
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};


