<template>
  <div>
    <div id="sc0">
      <div id="header">
        <img id="imgheader" src="img/ks12.png" alt="KomService">
      </div>
      <div class="navmenu">
        <div class="fixblock">
          <div class="block-body">
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
    </div>
    
    <router-view/>

    <div id="footer">
      <div class="footer_content">
        <div class="footer_link">
          <ul>
            <li style="margin-left:85px;"><a class="scq" href="http://komservice.net/#sc0">Головна</a></li>
            <li><a class="scw" href="http://komservice.net/#sc2">Абоненту</a></li>
            <li><a class="sce" href="http://komservice.net/#sc3">Тарифи</a></li>
            <li><a class="scr" href="http://komservice.net/#sc4">Телебачення</a></li>
            <li><a class="sct" href="http://komservice.net/#sc5">Контакти</a></li>               
            <li style="margin-left:75px;"><a href="http://info.komservice.net/cgi-bin/stat.pl">Сторінка статистики</a></li>
            <li><a href="http://komservice.net/?idget=101">Оплата послуг</a></li>
            <li><a href="http://komservice.net/?idget=102">Пристрої та матеріали</a></li>
            <li style="margin-left:65px;"><a href="http://komservice.net/?idget=103">Допомога абоненту</a></li>
            <li><a href="http://komservice.net/?idget=104">Акції</a></li>
            <li><a href="http://komservice.net/?idget=105">Договір оферти</a></li>
          </ul>
        </div>
      </div>
      <div class="soc">
        <a class="img_fb" href="https://www.facebook.com/komserviceovruch"><img src="img/FB.png" alt=""></a>
        <a class="img_tw" href="https://www.twitter.com/komservice"><img src="img/Twitter.png" alt=""></a>
      </div>
      <div id="footer_avt"><a href="http://www.komservice.net">www.komservice.net</a></div>
    </div>
  </div>
</template>

<style>
* {
	    padding: 0;
	    margin: 0px auto;
	  -webkit-box-sizing: border-box;
	  -moz-box-sizing: border-box;
	  box-sizing: border-box;
}

html, body {
	margin: 0;
	padding: 0;
	font-family: Tahoma, Verdana, sans-serif;
	color: #696969;
	height:100%;
}

#header {
	margin: auto;
	width:800px;
	height:161px;
}

#sc0 {
	min-width: 800px;
	width: 100%;
	background-image:  url(../public/img/fon.png);
	background-repeat: no-repeat;
	background-position: center;
	background-color: #676673;

}

.content {
	min-height: 800px;
	width: 800px;
	padding: 8px 0 60px 0;
}

.navmenu {
	width: 100%;
	height: 38px;
}

.fixblock{
	width: 100%;
	background-color: #676673;
}

.navkn {
	width: 800px;
	margin: 0px auto;
}

nav ul {
	    list-style: none;
	    overflow: hidden;
}

nav li a {
	    border-right: 1px solid #676673;
	    color: #806f66;
	    float: left;
	    font-size: 14px;
	    font-weight: bold;
	    padding: 11px;
	    text-align: center;
	    text-decoration: none;
	    text-transform: uppercase;
	    width: 160px;

}
	 	
#scq {
	background-color: #bdb8ad
}
#scw {
	background-color: #9cd0a1	
}
#sce {
	background-color: #EACD84	
}
#scr {
	background-color: #90BAC5	
}
#sct {
	background-color: #E8B48A
}

#footer {
	min-width: 800px;
	min-height: 133px;
	height: 220px;
	background-color: #676673;
}

.footer_content {
  width: 600px;
  margin: 0 auto;
  padding-top: 20px;
}

.footer_link  ul {
	list-style: none;
	overflow: hidden;
	position: relative;
}

.footer_link  ul li {
margin-left: 20px;
margin-right: 20px;
}

.footer_link ul, x:-moz-any-link {width: 600px;}
noindex:-o-prefocus, .footer_link ul {width: 598px;}

.footer_link li a {
	background: #676673;
	color: #d9d9d9;
	float: left;
	font-size: 12px;
	margin: 10px;
	text-decoration: none;
	text-transform: uppercase;
}

.footer_link .scq {color: #bdb8ad;font-weight: bold;}
.footer_link .scw {color: #9cd0a1;font-weight: bold;}
.footer_link .sce {color: #EACD84;font-weight: bold;}
.footer_link .scr {color: #90BAC5;font-weight: bold;}
.footer_link .sct {color: #E8B48A;font-weight: bold;}

#footer_avt {
	position: relative;
	float: right;
	width: 140px;
}

#footer_avt a {
	color: #d9d9d9;
	font-size: 11px;
}


</style>
