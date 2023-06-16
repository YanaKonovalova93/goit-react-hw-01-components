
import { Profile } from 'components/Profile/Profile';
import user from '../../data/user.json';
import { Container } from './App.styled';

export const App = () => {
  console.log(user)
  return (
    <Container>
      <Profile data={user} />
    </Container>
  );
};

/* <Statistics />
      <FriendList />
      <TransactionHistory /> */
