import { useRouter } from 'next/router';
import { useEffect } from 'react';
import MainContainer from '../conponents/MainContainer';

function HomePage() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/cooperation');
  }, []);
  return (
    <MainContainer />
  );
}

export default HomePage;
