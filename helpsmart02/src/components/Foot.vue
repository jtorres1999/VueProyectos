<template>
  <div class="purchase">
        <div class="text" >CONTRATA CON HELPSMART
      </div>
      </div>   
    <footer>
      <div class="main-content">
        <div class="left box">
          <h2>Nosotros</h2>
          <div class="content">
            <br>
            <p>Empresa dedica al desarrollo de Software de sensores aplicados al sector salud  ....</p> 
            <div>
              <br>
              <ul class="socialIcons">
              <li class="facebook"><a href=""><i class="fa fa-fw fa-facebook"></i>Facebook</a></li>
              <li class="twitter"><a href=""><i class="fa fa-fw fa-twitter"></i>Twitter</a></li>
              <li class="instagram"><a href=""><i class="fa fa-fw fa-instagram"></i>Instagram</a></li>
              <li class="Youtube"><a href=""><i class="fa fa-fw fa-youtube"></i>Youtube</a></li>
              </ul>
            </div>
            
          </div>
        </div>

        <div class="center box">
          <h2>  Productos</h2>
          <div class="content">
            <div class="place">
              <br>
              <span class="text">Sensor de Temperatura</span>
            </div>
            <div class="phone">
              <br>
              <span class="text">Sentor de Humedad</span>
            </div>
            <div class="email">
              <br>
              <span class="text">Multisensor para planta electrica</span>
            </div>
          </div>
        </div>

        <div class="right box">
          <h2>Contacto</h2>
          <div class="content">
            <form action="#">
              <div class="email">
                <div class="text">Nombre *</div>
                <input type="text" required>
              </div>
              <div class="email">
                <div class="text">Celular *</div>
                <input type="tel" required>
              </div>
              <div class="email">
                <div class="text">Email *</div>
                <input type="email" required>
              </div>
              <div class="msg">
                <div class="text">Mensaje *</div>
                <textarea rows="2" cols="25" required></textarea>
              </div>
             
            <p>
              <button  type="submit" class="boton ">ENVIAR</button> 
            </p>
          
            </form>
          </div>
        </div>
      </div>
      <div class="bottom text-center">
        <span class="credit">Desarrollado por 
          <a target="_blank" href="https://www.helpmedica.com">HELPMEDICA</a> | </span>
        <span>2021</span>
      </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Montserrat);
.purchase {
  background-color: #2463a7;
  border-color: #ffc107;
  border-radius: 0;
  color: #212529;
  display: block;
  font-family: "Montserrat", sans-serif;
  font-size: 30px;
  font-weight: 300;
  max-width: 100%;
  padding: 40px;
  text-align: center;
  width: 100%;
   transition: all 1.5s ease;
}
.purchase:hover{
  background-color: #6ab23c;
}
/**REDES SOCIALES */
l.socialIcons {
  padding: 0;
  text-align: center;
}

.socialIcons li {
  background-color: yellow;
  list-style: none;
  display: inline-block;
  margin: 4px;
  border-radius: 2em;
  overflow: hidden;
}

.socialIcons li a {
  display: block;
  padding: 0.5em;
  min-width: 1.28571429em;
  max-width: 1.28571429em;
  height: 1.28571429em;
  white-space: nowrap;
  line-height: 1.5em; 
  transition: 0.5s;
  text-decoration: none;
  font-family: arial;
  color: #fff;
}

.socialIcons li i {
  margin-right: 0.5em;
}

.socialIcons li:hover a {
  max-width: 200px;
  padding-right: 1em;
  
}

.socialIcons .facebook {
  background-color: #3b5998;
  box-shadow: 0 0 16px #3b5998;
}

.socialIcons .twitter {
  background-color: #00aced;
  box-shadow: 0 0 16px #00aced;
}

.socialIcons .instagram {
  background-color: #cd486b;
  box-shadow: 0 0 16px #cd486b;
}

.socialIcons .pinterest {
  background-color: #c92228;
  box-shadow: 0 0 16px #c92228;
}
/** */



/**COLOR DE LAS LETRAS */
*{
  margin: 0;
  padding: 0;
  color: #ffffff;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}
.content1{
  position: relative;
  margin: 130px auto;
  text-align: center;
  padding: 0 20px;
}
/**LETRA ARRIBA */
.content1 .text{
  font-size: 2.5rem;
  font-weight: 600;
  color: #0b5014;
}
.content1 .p{
  font-size: 2.1875rem;
  font-weight: 600;
  color: #2463A7;
}
/**COLOR DEL FOOTER */
footer{
  
  bottom: 0px;
  width: 100%;
  background: #333333;
  padding: 0 2PX;
}
.main-content{
  display: flex;
}
.main-content .box{
  flex-basis: 50%;
  padding: 10px 20px;
}
.box h2{
  font-size: 1.125rem;
  font-weight: 600;
  text-transform: uppercase;
}
.box .content{
  margin: 20px 0 0 0;
  position: relative;
}
.box .content:before{
  position: absolute;
  content: '';
  top: -10px;
  height: 2px;
  width: 100%;
  background: #1a1a1a;
}
.box .content:after{
  position: absolute;
  content: '';
  height: 2px;
  width: 35%;
  background: #2463a7;
  top: -10px;
}
.left .content p{
  text-align: justify;
}
.left .content .social{
  margin: 20px 0 0 0;
}
.left .content .social a{
  padding: 0 2px;
}
/**VAINITAS COLOR */
.left .content .social a span{
  height: 40px;
  width: 40px;
  background: #2463a7;
  line-height: 40px;
  text-align: center;
  font-size: 18px;
  border-radius: 5px;
  transition: 0.3s;
}
.left .content .social a span:hover{
  background: #2463a7;
}
.center .content .fas{
  font-size: 1.4375rem;
  background: #1a1a1a;
  height: 45px;
  width: 45px;
  line-height: 45px;
  text-align: center;
  border-radius: 50%;
  transition: 0.3s;
  cursor: pointer;
}
.center .content .fas:hover{
  background: #f12020;
}
.separ{
  margin: 0 24px;;
}
.center .content .text{
  font-size: 1.0625rem;
  font-weight: 500;
  padding-left: 10px;
}
.center .content .phone{
  margin: 15px 0;
}
.right form .text{
  font-size: 1.0625rem;
  margin-bottom: 2px;
  color: #717272;
}
.right form .msg{
  margin-top: 10px;
}
.right form input, .right form textarea{
  width: 100%;
  font-size: 1.0625rem;
  background: #0d2835;
  padding-left: 10px;
  border: 1px solid #0d2830;
}
.right form input:focus,
.right form textarea:focus{
  outline-color: #dee9f0;
}
.right form input{
  height: 35px;
}
.right form .btn{
  margin-top: 10px;
}
/**COLOR DEL BOTON */
.right form .btn button{
  height: 40px;
  width: 100%;
  border: none;
  outline: none;
  background: #6ab23c;
  font-size: 1.0625rem;
  font-weight: 900;
  cursor: pointer;
  transition: .3s;
}
.right form .btn button:hover{
  background: rgb(53, 243, 6);
}
.bottom {
  padding: 5px;
  font-size: 0.9375rem;
  background: #151515;
}
.bottom  span{
  color: #656565;
}
.bottom  a{
  color: #0f0bf8;
  text-decoration: none;
}
.bottom  a:hover{
  text-decoration: underline;
}
@media screen and (max-width: 900px) {
  footer{
    position: relative;
    bottom: 0px;
  }
  .main-content{
    flex-wrap: wrap;
    flex-direction: column;
  }
  .main-content .box{
    margin: 5px 0;
  }
}
/*****Eliminar border por defecto de un botton */
input{
  border: none;
  outline: none;
  }
textarea{
outline: none;
outline:none;
}
</style>