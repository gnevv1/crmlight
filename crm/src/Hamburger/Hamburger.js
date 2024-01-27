import React, { useState, useEffect } from "react";

const Hamburger = () => {

    return (
        <div>
            <div>

                <ul class="list-group mx-5">
                    <li class="list-group-item">
                        <div class="mb-3 w-50">
                            <label for="exampleInputEmail1" class="form-label">Имя</label>
                            <input type="text" class="form-control profile" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div id="emailHelp" class="form-text"></div>
                        </div>
                        <div class="mb-3 w-50">
                            <label for="exampleInputPassword1" class="form-label">Фамилия</label>
                            <input type="text" class="form-control profile" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        </div>
                        <div class="mb-3 w-50">
                            <label for="exampleInputPassword1" class="form-label">Отчество</label>
                            <input type="text" class="form-control profile" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        </div>
                        <div class="mb-3 w-50">
                            <label for="exampleInputPassword1" class="form-label">Фотография</label>
                            <p></p>
                            <button type="button" class="btn btn-info">Добавить фото </button>
                        </div>
                        <div class="mb-3 w-50">
                            <label for="exampleInputPassword1" class="form-label">Электронная почта</label>
                            <input type="text" class="form-control profile" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        </div>
                        <div class="mb-3 w-50">
                            <label for="exampleInputPassword1" class="form-label"> Номер телефона</label>
                            <input type="text" class="form-control profile" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" >Regular link</a></li>
                                <li><a class="dropdown-item active" aria-current="true">Active link</a></li>
                                <li><a class="dropdown-item">Another link</a></li>
                            </ul>
                        </div>
                        <div class="mb-3 w-50">
                            <label for="exampleInputPassword1" class="form-label">Дата рождения</label>
                            <input type="text" class="form-control profile" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        </div>
                        <div class="mb-3 w-50">
                            <label for="exampleInputPassword1" class="form-label">Сайт</label>
                            <input type="text" class="form-control profile" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        </div>
                        <div class="mb-3 w-50">
                            <label for="exampleInputPassword1" class="form-label">Мессенджер</label>
                            <input type="text" class="form-control profile" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        </div>
                        <button type="button" class="btn3 btn-primary btn-sm">Изменить данные клиента</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Hamburger;
