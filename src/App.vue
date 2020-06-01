<template>
  <div>
      <div id="sc0">
        <div id="header">
          <img id="imgheader" src="img/ks12.png" alt="KomService">
        </div>
      <div class="navmenu">
        <div class="fixblock">
            <div class="navkn">
              <nav>
                <div id="description">
                  <ul>
                    <li><router-link id="scq" to="/">Головна</router-link></li>
                    <li><router-link id="scw" to="/cost">Абоненту</router-link></li>
                    <li><router-link id="sce" to="/service">Тарифи</router-link></li>
                    <li><router-link id="scr" to="/pay">Оплата</router-link></li>
                    <li><router-link id="sct" to="/about">Контакти</router-link></li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

    <router-view/>

    <div class="footer">
          <ul id="footer_menu">
            <li><a class="scq" href="http://komservice.net/#sc0">Головна</a></li>
            <li><a class="scw" href="http://komservice.net/#sc2">Абоненту</a></li>
            <li><a class="sce" href="http://komservice.net/#sc3">Тарифи</a></li>
            <li><a class="scr" href="http://komservice.net/#sc4">Телебачення</a></li>
            <li><a class="sct" href="http://komservice.net/#sc5">Контакти</a></li>
          </ul>
         <ul id="footer_menu_2" class="link_color">
            <li><a href="http://info.komservice.net/cgi-bin/stat.pl">Сторінка статистики</a></li>
            <li><a href="http://komservice.net/?idget=101">Оплата послуг</a></li>
            <li><a href="http://komservice.net/?idget=102">Пристрої та матеріали</a></li>
            <li><a href="http://komservice.net/?idget=103">Допомога абоненту</a></li>
            <li><a href="http://komservice.net/?idget=104">Акції</a></li>
            <li><a href="http://komservice.net/?idget=105">Договір оферти</a></li>
          </ul>
        <div class="soc">
          <a class="img_fb" href="https://www.facebook.com/komserviceovruch"><img src="img/FB.png" alt=""></a>
          <a class="img_tw" href="https://www.twitter.com/komservice"><img src="img/Twitter.png" alt=""></a>
        </div>
        <div id="footer_avt">
          <a href="http://www.komservice.net">www.komservice.net</a>
        </div>
    </div>
  </div>
</template>
