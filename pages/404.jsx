import { useRouter } from 'next/router';
import MainContainer from '../conponents/MainContainer';

export default function Error() {
  const router = useRouter();
  const goBack = () => {
    router.push('/');
  };
  return (
    <MainContainer>
      <div className="not-found">
        404 || not found
      </div>
      <div className="back">
        <button onClick={goBack} type="button" className="back-btn">
          Вернуться на главную
        </button>
      </div>
    </MainContainer>

  );
}
