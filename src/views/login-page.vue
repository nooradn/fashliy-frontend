<template>
  <div class="login-page-container">
    <div class="login-page-container1">
      <div class="login-page-container2">
        <div class="login-page-container3">
          <img
            src="/playground_assets/logotext-fill-1200h.png"
            alt="image"
            class="login-page-image"
          />
          <div class="login-page-container4">
            <span class="login-page-text">Alamat Email</span>
            <form class="login-page-form"></form>
          </div>
          <div class="login-page-container5">
            <span class="login-page-text1">Password</span>
            <form class="login-page-form1"></form>
            <span class="login-page-text2">Lupa Password</span>
          </div>
          <router-link to="/video-course" class="login-page-navlink">
            <div class="login-page-container6">
              <span class="login-page-text3">Masuk</span>
            </div>
          </router-link>
          <div class="login-page-container7">
            <span class="login-page-text4">Daftar</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  metaInfo: {
    title: 'login-page - New Project',
    meta: [
      {
        property: 'og:title',
        content: 'login-page - New Project',
      },
    ],
  },
}
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
.login-page-container1 {
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
.login-page-container2 {
  flex: 0 0 auto;
  width: var(--dl-size-size-xxlarge);
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 20px;
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}
.login-page-container3 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: center;
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: column;
  justify-content: center;
}
.login-page-image {
  width: 130px;
  margin-top: 0px;
  object-fit: cover;
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: var(--dl-space-space-unit);
}
.login-page-container4 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.login-page-text {
  font-size: 0.7rem;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 700;
  margin-bottom: var(--dl-space-space-halfunit);
}
.login-page-form {
  width: 200px;
  height: 30px;
  border-color: var(--dl-color-primary-teal-primary);
  border-width: 1px;
  border-radius: 20px;
}
.login-page-container5 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.login-page-text1 {
  font-size: 0.7rem;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 700;
  margin-bottom: var(--dl-space-space-halfunit);
}
.login-page-form1 {
  width: 200px;
  height: 30px;
  border-color: var(--dl-color-primary-teal-primary);
  border-width: 1px;
  border-radius: 20px;
}
.login-page-text2 {
  color: var(--dl-color-primary-teal-primary);
  font-size: 7px;
  align-self: flex-end;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 700;
  margin-bottom: var(--dl-space-space-halfunit);
}
.login-page-navlink {
  display: contents;
}
.login-page-container6 {
  flex: 0 0 auto;
  width: 200px;
  height: 30px;
  display: flex;
  margin-top: var(--dl-space-space-halfunit);
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
.login-page-container7 {
  flex: 0 0 auto;
  width: 200px;
  height: 30px;
  display: flex;
  margin-top: var(--dl-space-space-halfunit);
  align-items: center;
  border-color: var(--dl-color-primary-teal-primary);
  border-style: solid;
  border-width: 1px;
  border-radius: 20px;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}
.login-page-text4 {
  color: var(--dl-color-primary-teal-primary);
  font-weight: 700;
}
@media(max-width: 479px) {
  .login-page-container2 {
    width: auto;
  }
  .login-page-container3 {
    margin-left: var(--dl-space-space-twounits);
    margin-right: var(--dl-space-space-twounits);
  }
  .login-page-image {
    margin-bottom: var(--dl-space-space-twounits);
  }
  .login-page-text {
    font-size: 12px;
  }
  .login-page-form {
    width: 250px;
    height: 40px;
  }
  .login-page-container5 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .login-page-text1 {
    font-size: 12px;
  }
  .login-page-form1 {
    width: 250px;
    height: 40px;
  }
  .login-page-text2 {
    font-size: 10px;
  }
  .login-page-container6 {
    width: 250px;
    height: 40px;
  }
  .login-page-container7 {
    width: 250px;
    height: 40px;
  }
}
</style>
