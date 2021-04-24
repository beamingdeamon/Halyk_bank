<template>
  <div class="home">
    <div class="MainBox">
      <section class="section">
        <div class="container">
          <div class="user signinBx">
            <div class="imgBx">
              <!-- <img src="../assets/ResponsiveLogRegisterFormAssets/photo1.jpg" /> -->
            </div>
            <div class="formBx">
              <form>
                <h2>Sign In</h2>
                <input type="text" placeholder="Login" v-model="login" />
                <input type="password" v-model="password" placeholder="Password" />
                <input type="submit" value="Login" @click.prevent="SignUp" />
                <div class="signup">
                  Don`t have an account?
                  <div @click="toggleForm">Sign Up.</div>
                </div>
              </form>
            </div>
          </div>
          <div class="user signupBx">
            <div class="formBx">
              <form>
                <h2>Create an Account</h2>
                <input type="text" placeholder="Login" v-model="login" />
                <input type="password" v-model="password" placeholder="Create Password" />
                <input type="submit" value="Sign Up" @click.prevent="SignIn" />
                <div class="signup">
                  Already have an account?
                  <div @click="toggleForm">Sign In.</div>
                </div>
              </form>
            </div>
            <div class="imgBx">
              <!-- <img src="../assets/ResponsiveLogRegisterFormAssets/photo2.jpg" /> -->
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
  name: "Login",
    data(){
    return{
      login: '',
      password: ''
    }
  },
  mounted() {
  },
  methods: {
    toggleForm() {
      var container = document.querySelector(".container");
      container.classList.toggle("active");
    },
    SignIn(){
        if(this.password.trim().length > 0 && this.login.trim().length > 0){
          axios.post('/API', {
            login: 'LOGIN',
            password: 'PASSWORD'
          })
          .then(function (response) {
            if(response.data.success == true){
              Swal.fire(
                'Success!',
                'Успех!',
                'Вы вошли в свой аккаунт'
              )
              this.$store.commit('login', response.data.name)
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Ошибка!',
                text: 'Такого пользователя не существует!',
              })
            }
          })
          .catch(function (error) {
            Swal.fire({
              icon: 'error',
              title: 'Ошибка!',
              text: 'Непредвиденная ошибка!',
            })
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'Введите пароль и логин!',
          })
        }
    },
    SignUp(){
        if(this.password.trim().length > 0 && this.login.trim().length > 0){
          axios.post('/API', {
            login: 'LOGIN',
            password: 'PASSWORD'
          })
          .then(function (response) {
            if(response.data.success == true){
              Swal.fire(
                'Success!',
                'Успех!',
                'Вы вошли в свой аккаунт'
              )
              this.$store.commit('login', response.data.name)
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Ошибка!',
                text: 'Такого пользователя не существует!',
              })
            }
          })
          .catch(function (error) {
            Swal.fire({
              icon: 'error',
              title: 'Ошибка!',
              text: 'Непредвиденная ошибка!',
            })
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'Введите пароль и логин!',
          })
        }
    }
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-align: left;
  transition: all ease 0.5s;
}
.home {
  justify-content: flex-start;
}
.title {
  text-align: center;
}
.section {
  position: relative;
  min-height: 100vh;
  background: rgb(180, 180, 180);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.section .container {
  position: relative;
  width: 800px;
  height: 500px;
  background: #fff;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.section .container .user {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
}
.section .container .user .imgBx {
  position: relative;
  width: 50%;
  height: 100%;
  background: rgb(248, 130, 130);
}
.section .container .user .imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.section .container .user .formBx {
  position: relative;
  width: 50%;
  height: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}
.section .container .user .formBx form h2 {
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  width: 100%;
  margin-bottom: 10px;
  color: #555;
}
.section .container .user .formBx form input {
  position: relative;
  width: 100%;
  padding: 10px;
  background: #f5f5f5;
  color: #333;
  border: none;
  outline: none;
  box-shadow: none;
  margin: 8px 0;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 300;
}
.section .container .user .formBx form input[type="submit"] {
  text-align: center;
  max-width: 100px;
  background: #677eff;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
}
.section .container .user .formBx form .signup {
  position: relative;
  margin-top: 20px;
  font-size: 14px;
  letter-spacing: 1px;
  color: #555;
  text-transform: uppercase;
  font-weight: 300;
}
.section .container .user .formBx form .signup div {
  font-weight: 600;
  text-decoration: none;
  width: auto;
  color: #677eff;
  display: inline-block;
  cursor: pointer;
}
.section .container .signupBx {
  pointer-events: none;
}
.section .container.active .signupBx {
  pointer-events: initial;
}

.section .container .signupBx .formBx {
  left: 100%;
}
.section .container.active .signupBx .formBx {
  left: 0;
}
.section .container .signupBx .imgBx {
  transform: translateX(-200%);
}
.section .container.active .signupBx .imgBx {
  transform: translateX(0);
}

.section .container .signinBx .formBx {
  left: 0;
}
.section .container.active .signinBx .formBx {
  left: 100%;
}
.section .container .signinBx .imgBx {
  transform: translateX(0);
}
.section .container.active .signinBx .imgBx {
  transform: translateX(-200%);
}

@media (max-width: 5000px) {
  section .container {
    max-width: 400px;
  }
  section .container .imgBx {
    display: none;
  }
  .section .container .signinBx .formBx {
    width: 100%;
  }
  .section .container .signupBx .formBx {
    width: 100%;
  }
}
</style>