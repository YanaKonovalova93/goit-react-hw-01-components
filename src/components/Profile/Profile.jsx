import PropTypes from 'prop-types';
import { ProfileDiv, Description, Avatar, Name, Tag, Location, Stats, StatsLi, Label, Quantity } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileDiv>
      <Description>
        <Avatar>{avatar}</Avatar>
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsLi>
          <Label text="followers" />
          <Quantity>{stats.followers}</Quantity>
        </StatsLi>

        <StatsLi>
          <Label text="views" />
          <Quantity>{stats.views}</Quantity>
        </StatsLi>

        <StatsLi>
          <Label text="likes" />
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
