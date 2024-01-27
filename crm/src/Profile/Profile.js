import React, { useState, useEffect } from "react";
import avatar from './avatar.png';
import "./Profile.css"

const Profile = () => {

  return (

    <div class="container col text-center">
  <div class="row row-cols-2">
    <div class="col-sm-4"><div className="avatar">
      
      <img src={avatar} className="face" width="240px" height="240px"></img>
      
      <button type="button" class="btn2 btn-secondary btn-sm">Изменить фото профиля</button>

      <button type="button" class="btn1 btn-secondary btn-sm">История переписок</button>

      
     
     
    </div></div>
   
    
    <div class="col-sm-30"><div>
        
        <ul class="list-group">
          <li class="list-group-item"><div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Имя</label>
                            <input type="text" class="form-control profile" placeholder="Введите ваш логин" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div id="emailHelp" class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Фамилия</label>
                            <input type="text" class="form-control profile" placeholder="Введите ваш пароль" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Должность</label>
                            <input type="text" class="form-control profile" placeholder="Введите ваш пароль" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Отчество</label>
                            <input type="text" class="form-control profile" placeholder="Введите ваш пароль" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Электронная почта</label>
                            <input type="text" class="form-control profile" placeholder="Введите вашу электронную почту" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label"> Номер телефона</label>
                            <input type="text" class="form-control profile" placeholder="Введите ваш номер телефона" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    </div>
                    <button type="button" class="btn3 btn-primary btn-sm">Изменить данные профиля</button>
              </li>
       
         
          </ul>
        </div></div>
  </div>
</div>
   
      
    
  )
}

export default Profile