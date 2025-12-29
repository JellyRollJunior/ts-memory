import { ErrorContent } from '@/layout/ErrorContent';
import { MainLayout } from '@/layout/MainLayout';

const ErrorPage = () => {
  return (
    <MainLayout>
      <ErrorContent className='mt-3' />
    </MainLayout>
  );
};

export { ErrorPage };
