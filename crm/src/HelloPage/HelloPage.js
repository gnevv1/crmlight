import React, { useState } from "react";
import bootstrap from 'bootstrap'
import logo from '../pictures/THUNDERpic.png';

import './HelloPage.css'

function HelloPage() {
    const bootstrap = require('bootstrap')

    // button.onclick = function(event) { 
    //    ; 
    // };
    return (

        <div className="HelloPage">


            <div class="card shadow rounded">

                <div className="hello">


                    <a href='/clients' class='block'>
                        <div class='block__content'>
                            <button type="button" class="btn-close" aria-label="Close"></button>
                        </div>
                    </a>


                    <div onclick="location.href='/clients';">

                        {/* <button type="button" class="btn-close" aria-label="Close"></button> */}


                    </div>


                    <div className="logo-container">
                        <div className="logo_pack">
                            <a href="/clients">
                                <div className="Menu_icon5">
                                    <img src={logo} alt="Logo" className="logo" width={100} height={100}></img>
                                </div>
                            </a>
                            <h1 className="crm_title1">LIGHTNING CRM</h1>
                        </div>
                    </div>
                    <form className="form">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Имя</label>
                            <input type="text" class="form-control" placeholder="Введите ваше имя" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div id="emailHelp" class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Фамилия</label>
                            <input type="text" class="form-control" placeholder="Введите вашу фамилию" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div id="emailHelp" class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Логин<span className="bluespan"></span></label>
                            <input type="text" class="form-control" placeholder="Введите ваш логин" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div id="emailHelp" class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Пароль<span className="bluespan"></span></label>
                            <input type="text" class="form-control" placeholder="Введите ваш пароль" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Электронная почта<span className="bluespan">*</span></label>
                            <input type="text" class="form-control mr-2" placeholder="Введите вашу электронную почту" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label"> Номер телефона</label>
                            <input type="text" class="form-control mr-2" placeholder="Введите ваш номер телефона" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        </div>
                        <label for="exampleInputPassword1" class="form-label warining"> Данный пользователь уже зарегистрирован <a href="http://localhost:3000/clients"> войти </a> </label>
                        <button type="submit" id="btn" class="btn btn-primary" href="/startpage" > Авторизоваться</button>
                        <div id="emailHelp" class="form-text mb-3"><span className="bluespan">*</span> - поля, обязательные для ввода</div>

                    </form>
                </div>
            </div>
        </div>



    )
}




export default HelloPage