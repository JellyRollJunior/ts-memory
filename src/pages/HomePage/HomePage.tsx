import { Gameboard } from '../../features/game';
import { MainLayout } from '../../layout/MainLayout';

const HomePage = () => {
  return (
    <MainLayout>
      <Gameboard />
    </MainLayout>
  );
};

export { HomePage };
