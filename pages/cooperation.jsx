import React, { useState } from 'react';
import MainContainer from '../conponents/MainContainer';

export default function cooperation() {
  const [inputs, setInputs] = useState({
    name: '',
    eMail: '',
    message: '',
  });

  const changeHandler = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    setInputs({
      name: '',
      eMail: '',
      message: '',
    });
  };
  return (
    <MainContainer>
      <div>
        <h1>Сотрудничество</h1>
        <p>по вопросам сотрудничества</p>
        <h3>+7 (495) 111-22-33</h3>
      </div>

      <div>
        <h3>Напишите нам, и мы предоставим всю необходимую информацию.</h3>
        <form onSubmit={submit}>
          <input type="text" name="name" onChange={changeHandler} value={inputs.name} />
          <input type="text" name="eMail" onChange={changeHandler} value={inputs.eMail} />
          <input type="text" name="message" onChange={changeHandler} value={inputs.message} />
          <div>
            <p>@</p>
            <p>заполняя форму, вы даёте согласие на обработку персональных данных</p>
            <button type="submit">Отправить</button>
          </div>
        </form>
      </div>
    </MainContainer>
  );
}
