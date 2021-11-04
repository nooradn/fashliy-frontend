<template>
  <div class="login-page-container">
    <div class="login-page-bg">
      <div class="login-page-pdd">
        <div class="login-page-ctt">
          <router-link to="/" class="login-page-navlink">
            <img
              alt="image"
              src="/playground_assets/logotext-fill-1200h.png"
              class="login-page-image"
            />
          </router-link>
          <div class="login-page-container1">
            <span class="login-page-text">Alamat Email</span>
            <input
              type="email"
              required="true"
              placeholder="Tulis email disini..."
              class="login-page-textinput input"
            />
          </div>
          <div class="login-page-container2">
            <span class="login-page-text1">Password</span>
            <input
              type="password"
              required="true"
              placeholder="Ketik password disini..."
              class="login-page-textinput1 input"
            />
            <span class="login-page-text2">Lupa Password</span>
          </div>
          <router-link to="/video-course-dark" class="login-page-navlink1">
            <div class="login-page-container3">
              <span class="login-page-text3">Masuk</span>
            </div>
          </router-link>
          <router-link to="/register-page" class="login-page-navlink2">
            <div class="login-page-container4">
              <span class="login-page-text4">Daftar</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios").default;
const config = require("../config.js").default;

export default {
  name: "LoginPage",

  props: {},
  data() {
    return {
      password: ``,
      email: ``,
    };
  },
  methods: {
    login() {
      console.log(config.urls.userLogin())
      axios
        .post(config.urls.userLogin(), {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          localStorage.setItem(config.localStorage.jwtToken, res.data.data.token)
          if (res.status == 200) {
            this.$router.push(`/video-course`)
          }
        })
        .catch((err) => {
          console.log(err.response);
          localStorage.removeItem(config.localStorage.jwtToken) // if the request fails, remove any possible user token if possible
          alert(err);
        });
    },
  },
};
</script>

<style scoped>
.login-page-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.login-page-bg {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-primary-teal-primary);
}
.login-page-pdd {
  flex: 0 0 auto;
  height: 100%;
  display: flex;
  box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.5);
  align-items: center;
  border-radius: 20px;
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}
.login-page-ctt {
  flex: 0 0 auto;
  width: 400px;
  display: flex;
  padding: var(--dl-space-space-twounits);
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.login-page-navlink {
  display: contents;
}
.login-page-image {
  width: 130px;
  margin-top: 0px;
  object-fit: cover;
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: var(--dl-space-space-twounits);
  text-decoration: none;
}
.login-page-container1 {
  width: 100%;
  display: flex;
  margin-top: var(--dl-space-space-halfunit);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-halfunit);
  flex-direction: column;
  justify-content: center;
}
.login-page-text {
  font-size: 1rem;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 700;
  margin-bottom: var(--dl-space-space-halfunit);
}
.login-page-textinput {
  width: 100%;
  font-size: 16px;
  align-self: stretch;
  padding-top: 1rem;
  border-color: var(--dl-color-primary-teal-primary);
  padding-left: 2rem;
  border-radius: 20px;
  padding-right: 2rem;
  padding-bottom: 1rem;
}
.login-page-container2 {
  width: 100%;
  display: flex;
  margin-top: var(--dl-space-space-halfunit);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: column;
  justify-content: center;
}
.login-page-text1 {
  font-size: 1rem;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 700;
  margin-bottom: var(--dl-space-space-halfunit);
}
.login-page-textinput1 {
  width: 100%;
  font-size: 16px;
  align-self: stretch;
  padding-top: 1rem;
  border-color: var(--dl-color-primary-teal-primary);
  padding-left: 2rem;
  border-radius: 20px;
  padding-right: 2rem;
  padding-bottom: 1rem;
}
.login-page-text2 {
  color: var(--dl-color-primary-teal-primary);
  font-size: 12px;
  align-self: flex-end;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 700;
  margin-bottom: var(--dl-space-space-halfunit);
}
.login-page-navlink1 {
  display: contents;
}
.login-page-container3 {
  flex: 0 0 auto;
  width: 100%;
  height: 3rem;
  margin: var(--dl-space-space-halfunit);
  display: flex;
  align-items: center;
  border-color: var(--dl-color-primary-teal-primary);
  border-style: solid;
  border-width: 1px;
  border-radius: 20px;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  background-color: var(--dl-color-primary-teal-primary);
}
.login-page-text3 {
  color: var(--dl-color-gray-white);
  font-weight: 700;
}
.login-page-navlink2 {
  display: contents;
}
.login-page-container4 {
  flex: 0 0 auto;
  width: 100%;
  height: 3rem;
  margin: var(--dl-space-space-halfunit);
  display: flex;
  align-items: center;
  border-color: var(--dl-color-primary-teal-primary);
  border-style: solid;
  border-width: 1px;
  border-radius: 20px;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  background-color: var(--dl-color-gray-white);
}
.login-page-text4 {
  color: var(--dl-color-primary-teal-primary);
  font-weight: 700;
}
@media(max-width: 479px) {
  .login-page-pdd {
    width: auto;
  }
  .login-page-ctt {
    margin-left: var(--dl-space-space-twounits);
    margin-right: var(--dl-space-space-twounits);
  }
  .login-page-image {
    margin-bottom: var(--dl-space-space-twounits);
  }
  .login-page-text {
    font-size: 12px;
  }
  .login-page-container2 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .login-page-text1 {
    font-size: 12px;
  }
  .login-page-text2 {
    font-size: 10px;
  }
  .login-page-container3 {
    width: 250px;
    height: 40px;
  }
  .login-page-container4 {
    width: 250px;
    height: 40px;
  }
}
</style>
