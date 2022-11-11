/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

export default function Form() {
  const [inputs, setInputs] = useState({
    name: '',
    eMail: '',
    message: '',
  });
  const [checkbox, setChekbox] = useState(false);
  const [err, setErr] = useState(false);
  const [submitForm, setSubmitForm] = useState(false);
  const [checkInput, setCheckInput] = useState(false);

  const changeHandler = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const submit = (e) => {
    e.preventDefault();
    if (inputs.name.length !== 0
        && inputs.eMail.length !== 0
        && inputs.message.length !== 0) {
      if (checkbox) {
        setInputs({
          name: '',
          eMail: '',
          message: '',
        });
        console.log(`Имя: ${inputs.name}`);
        console.log(`Почта: ${inputs.eMail}`);
        console.log(`Сообщение: ${inputs.message}`);
        setErr(false);
        setChekbox(false);
        setSubmitForm(true);
        setCheckInput(false);
      } else {
        setErr(true);
        setChekbox(false);
        setSubmitForm(false);
        setCheckInput(false);
      }
    } else {
      setCheckInput(true);
      setErr(false);
      setChekbox(false);
      setSubmitForm(false);
    }
  };

  const check = () => {
    setChekbox(!checkbox);
  };
  return (
    <div>
      <div className="form-desc">Напишите нам, и мы предоставим всю необходимую информацию.</div>
      <form onSubmit={submit}>
        <div className="inputs-group">
          <div className="input-container">
            {inputs.name && (
              <div className="plac-text">Ваше имя</div>
            )}
            <input className="input" type="text" name="name" onChange={changeHandler} value={inputs.name} placeholder="Ваше имя" />
          </div>
          <div className="input-container">
            {inputs.eMail && (
            <div className="plac-text">Ваш e-mail</div>
            )}
            <input className="input" type="eMail" name="eMail" onChange={changeHandler} value={inputs.eMail} placeholder="Ваш e-mail" />
          </div>
          <div className="input-container">
            {inputs.message && (
            <div className="plac-text">Ваше сообщение</div>
            )}
            <input className="input" type="text" name="message" onChange={changeHandler} value={inputs.message} placeholder="Ваше сообщение" />
          </div>
        </div>
        <div className="submit-group">
          {checkbox ? (
            <label className="lable-checkbox">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="2" />
                <path d="M10.0781 16.7891C10.1719 16.9297 10.3125 16.9766 10.5 16.9766C10.6641 16.9766 10.8047 16.9297 10.9219 16.7891L17.8359 9.89844C17.9297 9.80469 18 9.66406 18 9.47656C18 9.3125 17.9297 9.17188 17.8359 9.05469L16.9688 8.21094C16.8516 8.09375 16.7109 8.02344 16.5469 8.02344C16.3828 8.02344 16.2422 8.09375 16.125 8.21094L10.5 13.8359L7.875 11.2109C7.73438 11.0938 7.59375 11.0234 7.42969 11.0234C7.26562 11.0234 7.125 11.0938 7.03125 11.2109L6.16406 12.0547C6.04688 12.1719 6 12.3125 6 12.4766C6 12.6641 6.04688 12.8047 6.16406 12.8984L10.0781 16.7891Z" fill="white" />
              </svg>
              <input className="checkbox" type="checkbox" name="checkbox" onClick={check} />
            </label>
          ) : (
            <label className="lable-checkbox">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="2" />
              </svg>
              <input className="checkbox" type="checkbox" name="checkbox" onClick={check} />
            </label>
          )}

          <p>
            заполняя форму, вы даёте
            {' '}
            <br />
            {' '}
            согласие на обработку персональных данных
          </p>
          <button className="form-btn" type="submit">Отправить</button>
        </div>
      </form>
      {err
      && (
      <div className="data-processing-err">Подтвердите согласие на обработку персональных данных</div>
      )}
      {submitForm && (
        <div className="submit-form-ok">Заявка отправлена, скоро с вами свяжутся</div>
      )}
      {checkInput && (
        <div className="data-processing-err">Пожалуйста, заполните все поля</div>
      )}
    </div>
  );
}
