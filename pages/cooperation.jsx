import Form from '../conponents/Form';
import MainContainer from '../conponents/MainContainer';

export default function cooperation() {
  return (
    <MainContainer>
      <div className="coop-container">
        <div className="left-block">
          <p className="title">Сотрудничество</p>
          <p className="description">по вопросам сотрудничества</p>
          <p className="number">+7 (495) 111-22-33</p>
        </div>
        <Form />
      </div>
    </MainContainer>
  );
}
