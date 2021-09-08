<template>
  <div class="cont" >
    <br>
    <hr class="sep" />
    

    <iframe class=""
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.1523107611906!2d-75.5175225857154!3d10.409475268707075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef625901e085323%3A0x39fdd17ca4c870d!2sHELPMEDICA%20SAS!5e0!3m2!1ses!2sco!4v1630448214597!5m2!1ses!2sco"
      width="100%"
      height="480px"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
    ></iframe
    ><br />
    <div class="contact-wrapper animated bounceInUp">
      <div class="contact-form">
        <form action="">
          <p>
            <label>NOMBRE</label>
            <input type="text" name="fullname" />
          </p>
          <p>
            <label>APELLIDO</label>
            <input type="text" name="affair" />
          </p>
          <p>
            <label>TU CORREO</label>
            <input type="email" name="email" />
          </p>
          <p>
            <label>CELULAR</label>
            <input type="tel" name="phone" />
          </p>
          <p class="block">
            <label>Message</label>
            <textarea name="message" rows="2"></textarea>
          </p>
          <div class="d-grid gap-2" id="enviar">
            <p>
              <button  type="button" class="btn">ENVIAR</button>
              
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};

</script>

<style scaped>
.cont{
  position: relative;
  top: 10px;
  width: 100%;
}
.contact-wrapper {
  box-shadow: 0 0 20px 0 rgb(212, 212, 212);
}

.contact-wrapper > * {
  padding: 3em;
}

.contact-form {
  background: rgb(212, 212, 212);
}

.contact-form form {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.contact-form form label {
  display: block;
}

.contact-form form p {
  margin: 0;
  padding: 1em;
}

.contact-form form .block {
  grid-column: 1 / 2;
}

.contact-form form button,
.contact-form form input,
.contact-form form textarea {
  width: 100%;
  padding: 0.7em;
  border: none;
  background: none;
  outline: 0;
  color: rgb(0, 0, 0);
  border-bottom: 1px solid #000000;
}

.contact-form form button:hover,
.contact-form form button:focus {
  background: #40e940;
  color: #000000;
  transition: background-color 1s ease-out;
  outline: 0;
}
.btn {
  display: inline-block;
  font-weight: 400;
  height: 70px;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.sep {
  background-color: rgb(0, 255, 21);
}
p {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
hr{
  border: 2px solid green;
}


</style>
  