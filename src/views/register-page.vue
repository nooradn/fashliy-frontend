<template>
  <div class="register-page-container">
    <div class="register-page-bg">
      <div class="register-page-pdd">
        <div class="register-page-ctt">
          <router-link to="/home" class="register-page-navlink">
            <img
              alt="image"
              src="/playground_assets/logotext-fill-1200h.png"
              class="register-page-image"
            />
          </router-link>
          <div class="register-page-container01">
            <div class="register-page-container02">
              <div class="register-page-container03">
                <span class="register-page-text">Nama Lengkap</span>
                <input
                  type="text"
                  required="true"
                  placeholder="Tulis email disini..."
                  class="register-page-textinput input"
                />
              </div>
              <div class="register-page-container04">
                <span class="register-page-text01">Tanggal Lahir</span>
                <input
                  type="date"
                  required="true"
                  placeholder="Tulis email disini..."
                  class="register-page-textinput1 input"
                />
              </div>
              <div class="register-page-container05">
                <span class="register-page-text02">Alamat / Domisili</span>
                <input
                  type="text"
                  required="true"
                  placeholder="Ketik password disini..."
                  class="register-page-textinput2 input"
                />
              </div>
              <div class="register-page-container06">
                <span class="register-page-text03">Asal Sekolah / Instansi</span>
                <input
                  type="text"
                  required="true"
                  placeholder="Ketik asal sekolahmu..."
                  class="register-page-textinput3 input"
                />
              </div>
              <div class="register-page-container07">
                <span class="register-page-text04">Nomor HP / WhatsApp</span>
                <input
                  type="text"
                  required="true"
                  placeholder="Ketik nomor hpmu disini..."
                  class="register-page-textinput4 input"
                />
              </div>
            </div>
            <div class="register-page-container08">
              <div class="register-page-container09">
                <span class="register-page-text05">Buat Username</span>
                <input
                  type="text"
                  required="true"
                  placeholder="Buat username yang unik..."
                  class="register-page-textinput5 input"
                />
              </div>
              <div class="register-page-container10">
                <span class="register-page-text06">Alamat Email</span>
                <input
                  type="email"
                  required="true"
                  placeholder="Masukkan email disini..."
                  class="register-page-textinput6 input"
                />
              </div>
              <div class="register-page-container11">
                <span class="register-page-text07">Password</span>
                <input
                  type="password"
                  required="true"
                  placeholder="Ketik password disini..."
                  class="register-page-textinput7 input"
                />
              </div>
              <div class="register-page-container12">
                <span class="register-page-text08">Konfirmasi Password</span>
                <input
                  type="password"
                  required="true"
                  placeholder="Ulangi password..."
                  class="register-page-textinput8 input"
                />
              </div>
              <div class="register-page-container13">
                <input
                  type="checkbox"
                  required="true"
                  id="register"
                  name="register"
                  class="register-page-checkbox"
                />
                <span class="register-page-text09">
                  <span>
                    Saya telah menyetujui
                    <span v-html="rawy647"></span>
                  </span>
                  <span class="register-page-text11">kebijakan penggunaan</span>
                  <span class="register-page-text12">
                    <span v-html="rawlr37"></span>
                  </span>
                  <span>
                    dan
                    <span v-html="rawbuez"></span>
                  </span>
                  <span class="register-page-text14">kebijakan privasi</span>
                  <span class="register-page-text15">
                    <span v-html="rawad1m"></span>
                  </span>
                  <span>atas platform Fashliy.</span>
                </span>
              </div>
            </div>
          </div>
          <router-link to="/video-course" class="register-page-navlink1">
            <div class="register-page-container14">
              <span class="register-page-text17">Daftar</span>
            </div>
          </router-link>
          <router-link to="/login-page" class="register-page-navlink2">
            <div class="register-page-container15">
              <span class="register-page-text18">Masuk</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  props: {},

  data() {
    return {
      rawy647: ' ',
      rawlr37: ' ',
      rawbuez: ' ',
      rawad1m: ' ',
    }
  },
}
</script>

<style scoped>
.register-page-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.register-page-bg {
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
.register-page-pdd {
  flex: 0 0 auto;
  height: 100%;
  display: flex;
  box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.5);
  align-items: center;
  border-radius: 20px;
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}
.register-page-ctt {
  flex: 0 0 auto;
  width: 800px;
  display: flex;
  padding: var(--dl-space-space-twounits);
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.register-page-navlink {
  display: contents;
}
.register-page-image {
  width: 130px;
  margin-top: 0px;
  object-fit: cover;
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.register-page-container01 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
}
.register-page-container02 {
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  flex-direction: column;
  justify-content: center;
}
.register-page-container03 {
  width: 100%;
  display: flex;
  margin-top: var(--dl-space-space-halfunit);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-halfunit);
  flex-direction: column;
  justify-content: center;
}
.register-page-text {
  font-size: 1rem;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 700;
  margin-bottom: var(--dl-space-space-halfunit);
}
.register-page-textinput {
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
.register-page-container04 {
  width: 100%;
  display: flex;
  margin-top: var(--dl-space-space-halfunit);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-halfunit);
  flex-direction: column;
  justify-content: center;
}
.register-page-text01 {
  font-size: 1rem;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 700;
  margin-bottom: var(--dl-space-space-halfunit);
}
.register-page-textinput1 {
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
.register-page-container05 {
  width: 100%;
  display: flex;
  margin-top: var(--dl-space-space-halfunit);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: column;
  justify-content: center;
}
.register-page-text02 {
  font-size: 1rem;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 700;
  margin-bottom: var(--dl-space-space-halfunit);
}
.register-page-textinput2 {
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
.register-page-container06 {
  width: 100%;
  display: flex;
  margin-top: var(--dl-space-space-halfunit);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: column;
  justify-content: center;
}
.register-page-text03 {
  font-size: 1rem;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 700;
  margin-bottom: var(--dl-space-space-halfunit);
}
.register-page-textinput3 {
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
.register-page-container07 {
  width: 100%;
  display: flex;
  margin-top: var(--dl-space-space-halfunit);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: column;
  justify-content: center;
}
.register-page-text04 {
  font-size: 1rem;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 700;
  margin-bottom: var(--dl-space-space-halfunit);
}
.register-page-textinput4 {
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
.register-page-container08 {
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  flex-direction: column;
  justify-content: center;
}
.register-page-container09 {
  width: 100%;
  display: flex;
  margin-top: var(--dl-space-space-halfunit);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-halfunit);
  flex-direction: column;
  justify-content: center;
}
.register-page-text05 {
  font-size: 1rem;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 700;
  margin-bottom: var(--dl-space-space-halfunit);
}
.register-page-textinput5 {
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
.register-page-container10 {
  width: 100%;
  display: flex;
  margin-top: var(--dl-space-space-halfunit);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: column;
  justify-content: center;
}
.register-page-text06 {
  font-size: 1rem;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 700;
  margin-bottom: var(--dl-space-space-halfunit);
}
.register-page-textinput6 {
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
.register-page-container11 {
  width: 100%;
  display: flex;
  margin-top: var(--dl-space-space-halfunit);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: column;
  justify-content: center;
}
.register-page-text07 {
  font-size: 1rem;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 700;
  margin-bottom: var(--dl-space-space-halfunit);
}
.register-page-textinput7 {
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
.register-page-container12 {
  width: 100%;
  display: flex;
  margin-top: var(--dl-space-space-halfunit);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: column;
  justify-content: center;
}
.register-page-text08 {
  font-size: 1rem;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 700;
  margin-bottom: var(--dl-space-space-halfunit);
}
.register-page-textinput8 {
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
.register-page-container13 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  justify-content: center;
}
.register-page-checkbox {
  width: 35px;
  height: 35px;
}
.register-page-text09 {
  font-size: 12px;
  line-height: 1.5;
  margin-left: var(--dl-space-space-unit);
}
.register-page-text11 {
  font-weight: 700;
  text-decoration: underline;
}
.register-page-text12 {
  text-decoration: underline;
}
.register-page-text14 {
  font-weight: 700;
  text-decoration: underline;
}
.register-page-text15 {
  text-decoration: underline;
}
.register-page-navlink1 {
  display: contents;
}
.register-page-container14 {
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
.register-page-text17 {
  color: var(--dl-color-gray-white);
  font-weight: 700;
}
.register-page-navlink2 {
  display: contents;
}
.register-page-container15 {
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
.register-page-text18 {
  color: var(--dl-color-primary-teal-primary);
  font-weight: 700;
}
@media(max-width: 479px) {
  .register-page-pdd {
    width: auto;
  }
  .register-page-ctt {
    margin-left: var(--dl-space-space-twounits);
    margin-right: var(--dl-space-space-twounits);
  }
  .register-page-image {
    margin-bottom: var(--dl-space-space-twounits);
  }
  .register-page-text {
    font-size: 12px;
  }
  .register-page-text01 {
    font-size: 12px;
  }
  .register-page-container05 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .register-page-text02 {
    font-size: 12px;
  }
  .register-page-container06 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .register-page-text03 {
    font-size: 12px;
  }
  .register-page-container07 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .register-page-text04 {
    font-size: 12px;
  }
  .register-page-text05 {
    font-size: 12px;
  }
  .register-page-container10 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .register-page-text06 {
    font-size: 12px;
  }
  .register-page-container11 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .register-page-text07 {
    font-size: 12px;
  }
  .register-page-container12 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .register-page-text08 {
    font-size: 12px;
  }
  .register-page-container14 {
    width: 250px;
    height: 40px;
  }
  .register-page-container15 {
    width: 250px;
    height: 40px;
  }
}
</style>
