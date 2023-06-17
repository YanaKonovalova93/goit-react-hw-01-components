
import { Profile } from 'components/Profile/Profile';
import user from '../../data/user.json';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </Container>
  );
};

/* <Statistics />
      <FriendList />
      <TransactionHistory /> */
