import { Display } from '../../Components/Display/Display';
import { History } from '../../Containers/History/History';
import { Main } from './style';
export const Home = () => {
  return (
    <Main>
      <Display />
      <History />
    </Main>
  );
};
