import React from "react";

import "../Styles/Menu.css";

import logo from '../pictures/THUNDERpic.png';
import clients from '../pictures/ONLINEpic.png';
// import item from '../pictures/item.png';
import account from '../pictures/account.png';

import deal from '../pictures/DEALpic.png';
import analitics from '../pictures/Screenshot_1.png';
import money_statics from '../pictures/image.png';

function Menu() {

  function changeBackground(item) {

    item.target.style.background = 'url(image.gif)'
   

  }

  return (
    
    <div className="container col-2">

<div class="container text-center">
  <div class="row row-cols-1">
    <div class="col">  <div className="logo-container">
        <div className="logo_pack">
          <a href="/">
            <div className="Menu_icon5">
              <img src={logo} alt="Logo" className="logo" width={100} height={100}></img>
            </div>
          </a>
          <h2 className="crm_title1">LIGHTNING CRM</h2>
        </div>
      </div>
      </div>
      <ul className="Menu_liste">
    <div class="col"><div className="container-fluid1">
            <li className="Menu_item">
              <a className="navbar-brand" href="/clients">
                <div className="Menu_iconONL">
                  <img src={clients} width={48}></img>
                </div>
                <span>Клиенты</span>
              </a>
            </li>
          </div></div>
    <div class="col"><div className="container-fluid1">
            <li className="Menu_item">
              <a className="navbar-brand" href="/tasks">
                <div className="Menu_iconBAG">
                  <img src={money_statics} width={48}></img>
                </div>
                <span>Задачи</span>
              </a>
            </li>
          </div></div>
    <div class="col"><div className="container-fluid1">
            <li className="Menu_item">
              <a className="navbar-brand" href="/deals">
                <div className="Menu_iconAGR">
                  <img src={deal} width={48}></img>
                </div>

                <span>Сделки</span>
              </a>
            </li>
          </div> </div>
    <div class="col"><div className="container-fluid1">
            <li className="Menu_item">
              <a className="navbar-brand" href="/clients">
                <div className="Menu_iconBAR">
                  <img src={analitics} width={48}></img>
                </div>

                <span>Аналитика</span>
              </a>
            </li>
          </div> </div>
          </ul>
    <div class="col"> <div className="profile-container">
        <a href="/profile">
         
          <img src={account} className="account"></img>
          
        </a>
      </div></div>
  </div>
</div>

    

   
     



     

     
    </div>




  );
}



export default Menu;