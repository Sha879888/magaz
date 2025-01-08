import React, {useState} from 'react';
import './App.css';

import Catalog from './Copmonents/Catalog';
import Basket from './Copmonents/Basket';

import { addUser, changePass, getPass } from './Copmonents/Utils/Functions';


function App() {

  const [isOpen, isOpenState] = useState(false); // модальное окно регистрации и входа
  const [isOffice, isOfficeState] = useState(false); // модальное окно личного кабинета
  const [isReg, isRegState] = useState(false); // состояние для регистрации или для входа в аккаунт
  const [isAccount, isAccountState] = useState(localStorage.getItem("currentUser") != "null" ? true : false); // состояние аккаунта = вход или выход

  const setOpenState = (state) => {
    isOpenState(state);
  };

  const setOfficeState = (state) => {
    isOfficeState(state);
  };

  const setAccountState = (state) => {
    isAccountState(state);
  };

  const setRegState= () => {
    isRegState(!isReg);
  };

  const Account = () => {
    let login = document.getElementsByClassName("LoginInput")[0];
    let pass = document.getElementsByClassName("PassInput")[0];

    const userData = JSON.parse(localStorage.getItem(login));

    if (login.value.length > 0 & pass.value.length > 0)
    {
      if (localStorage.getItem(login.value) == null) {
        document.getElementsByClassName("AccountOut")[0].innerHTML = "Аккаунт не найден";
      } else {
        if (!isReg && pass.value == getPass(login.value))
        {
          setAccountState(true);
          setOpenState(false);
          localStorage.setItem("currentUser", login.value)
          
        }
        
      }

      if (isReg && localStorage.getItem(login.value) == null) {
        addUser(login.value, pass.value);
        setAccountState(true);
        setOpenState(false);
        localStorage.setItem("currentUser", login.value)
      } else if (isReg && localStorage.getItem(login.value) != null) {
        document.getElementsByClassName("AccountOut")[0].innerHTML = "Аккаунт уже существует";
      }
    }
  }

  const AccountChangePass = () => {
    let pass = document.getElementsByClassName("ChangePassInput")[0];

    if (pass.value.length > 0)
    {
      changePass(localStorage.getItem("currentUser"), pass.value);
      document.getElementsByClassName("PassOut")[0].innerHTML = "Смена пароля прошла успешно";
    }
  }

  const [ActiveComponent, setActiveComponent] = useState(1);

  const renderComponent = () => {
    switch (ActiveComponent) {
      case 1:
        return <Catalog/>;
      case 2:
          return <Basket/>;
    }
  };

  return (
    <div className="App">
      <header className="MainHeader">
        <div className="ButtonContainer">
          <button onClick={() => setActiveComponent(1)}>Каталог</button>
          <button onClick={() => setActiveComponent(2)}>Корзина</button>
          
          {!isAccount && (
            <button onClick={() => setOpenState(true)}>Войти</button>
          )}

          {isAccount && (
            <button onClick={() => setOfficeState(true)}>Кабинет</button>
          )}

          {isOpen && (
            <div className="modal">
              <div className="accountmodal">
                <span className="close" onClick={() => setOpenState(false)}>&times;</span>
                <label>Логин: </label> <input className="LoginInput" type="text"/>
                <label>Пароль: </label> <input className="PassInput" type="text"/>
                <label>Регистрация</label><input type="checkbox" checked={isReg} onChange={setRegState} />
                <button onClick={Account}>Подтвердить</button>
                <h4 className='AccountOut'></h4>
              </div>
            </div>
          )}

            {isOffice && (
            <div className="modal">
              <div className="accountmodal">
                <span className="close" onClick={() => setOfficeState(false)}>&times;</span>
                <p>Пользователь: {localStorage.getItem("currentUser")}</p>
                <label>Изменить пароль: </label> <input className="ChangePassInput" type="text"/>
                <button onClick={AccountChangePass}>Подтвердить</button>
                <button onClick={() => {
                   setAccountState(false);
                   setOfficeState(false);
                   localStorage.setItem("currentUser", "null")
                }}>Выйти</button>
                <h4 className='PassOut'></h4>
              </div>
            </div>
          )}
        </div>
      </header>

      {renderComponent()}

      <footer>
        <br/>
        <br/>
        <br/>
      </footer>
    </div>
  );
}

export default App;
