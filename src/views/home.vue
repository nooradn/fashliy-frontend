<template>
  <div class="home-container">
    <header class="home-header">
      <div class="home-container01">
        <img
          alt="logo"
          src="/playground_assets/logotext-fill.svg"
          class="home-image"
        />
        <div class="home-nav">
          <navigation-links rootClassName="rootClassName1"></navigation-links>
        </div>
        <div class="home-btn-group">
          <router-link to="/login-page" class="home-navlink button">
            <span class="home-text"><span>Masuk</span></span>
          </router-link>
          <router-link to="/login-page" class="home-navlink1 button">
            <span class="home-text002">Daftar</span>
          </router-link>
        </div>
      </div>
    </header>
    <div class="home-hero">
      <div class="home-container02">
        <h1 class="home-text003">
          <span>
            Belajar Ilmu Agama lebih
            <span v-html="rawoje2"></span>
          </span>
          <span class="home-text005">mudah</span>
          <span>
            dan
            <span v-html="rawlmd5"></span>
          </span>
          <span class="home-text007">terarah.</span>
        </h1>
        <div class="home-btn-group1">
          <router-link to="/login-page" class="home-navlink2 button">
            Mulai Belajar
          </router-link>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/group%20211-500w.png"
        class="home-image01"
      />
    </div>
    <div class="home-features">
      <h1 class="home-text008">
        <span>
          Materi Belajar
          <span v-html="rawj8pr"></span>
        </span>
        <span class="home-text010">Unggulan</span>
        <br />
        <span></span>
      </h1>
      <span class="home-text012">
        <span>Pelajari materi unggulan dari kami dengan kualitas terbaik.</span>
      </span>
      <div class="home-container03">
        <div class="home-feature-card">
          <img
            alt="image"
            src="/playground_assets/image%205%20%5Btraced%5D.svg"
            class="home-image02"
          />
          <h2 class="home-text014">Tafsir</h2>
          <span class="home-text015">Lorem Ipsum</span>
        </div>
        <div class="home-feature-card1">
          <img
            alt="image"
            src="/playground_assets/image%204%20%5Btraced%5D.svg"
            class="home-image03"
          />
          <h2 class="home-text016">Hadits</h2>
          <span class="home-text017">Lorem Ipsum</span>
        </div>
        <div class="home-feature-card2">
          <img
            alt="image"
            src="/playground_assets/image%207%20%5Btraced%5D.svg"
            class="home-image04"
          />
          <h2 class="home-text018">Fiqih</h2>
          <span class="home-text019">Lorem Ipsum</span>
        </div>
      </div>
      <div class="home-container04">
        <div class="home-feature-card3">
          <img
            alt="image"
            src="/playground_assets/image%202%20%5Btraced%5D.svg"
            class="home-image05"
          />
          <h2 class="home-text020">Akidah Akhlak</h2>
        </div>
        <div class="home-feature-card4">
          <img
            alt="image"
            src="/playground_assets/image%208%20%5Btraced%5D.svg"
            class="home-image06"
          />
          <h2 class="home-text021">Bahasa Arab</h2>
        </div>
        <div class="home-feature-card5">
          <img
            alt="image"
            src="/playground_assets/image%209%20%5Btraced%5D.svg"
            class="home-image07"
          />
          <h2 class="home-text022">
            <span class="home-text023">
              Sejarah
              <span v-html="raw6rze"></span>
            </span>
            <br />
            <span class="home-text025">Kebudayaan Islam</span>
          </h2>
        </div>
        <div class="home-feature-card6">
          <img
            alt="image"
            src="/playground_assets/image%2010%20%5Btraced%5D.svg"
            class="home-image08"
          />
          <h2 class="home-text026">
            <span class="home-text027">
              Kajian-Kajian
              <span v-html="raw7any"></span>
            </span>
            <br />
            <span class="home-text029">Islam</span>
          </h2>
        </div>
      </div>
      <div class="home-container05">
        <span class="home-text030">Icons made by</span>
        <a
          href="https://www.freepik.com"
          target="_blank"
          rel="noreferrer noopener"
          class="home-link"
        >
          Freepik
        </a>
        <span class="home-text031">
          from
          <span v-html="raw6dd5"></span>
        </span>
        <a
          href="https://www.flaticon.com/"
          target="_blank"
          rel="noreferrer noopener"
          class="home-link1"
        >
          Flaticon
        </a>
      </div>
    </div>
    <div class="home-container06">
      <div class="home-container07">
        <h1 class="home-text032">
          <span>
            Video Materi
            <span v-html="rawooa6"></span>
          </span>
          <span class="home-text034">Berkualitas</span>
          <br />
          <span></span>
        </h1>
        <span class="home-text036">
          <span>Kami berkomitmen untuk selalu memberikan kualitas terbaik.</span>
          <br />
          <span>Berikut beberapa contoh video.</span>
        </span>
      </div>
      <div id="video-gallery" class="home-gallery">
        <gallery-card1 rootClassName="rootClassName10"></gallery-card1>
        <gallery-card1 rootClassName="rootClassName"></gallery-card1>
        <gallery-card1 rootClassName="rootClassName9"></gallery-card1>
        <gallery-card1 rootClassName="rootClassName8"></gallery-card1>
        <gallery-card1 rootClassName="rootClassName7"></gallery-card1>
        <gallery-card1 rootClassName="rootClassName6"></gallery-card1>
      </div>
    </div>
    <div class="home-pricing">
      <div class="home-container08">
        <h1 class="home-text039">
          <span>
            Paket Hemat,
            <span v-html="rawy8u2"></span>
          </span>
          <span class="home-text041">Bersahabat!</span>
          <br />
          <span></span>
        </h1>
        <span class="home-text043">
          <span>Lorem ipsum dolor sit amet todo amectus dolor.</span>
        </span>
      </div>
      <div class="home-container09">
        <div class="home-pricing-card">
          <span class="home-text045">Santri baru</span>
          <div class="home-container10">
            <span class="home-text046">Gratis</span>
          </div>
          <div class="home-container11">
            <span class="home-text047"><span>✔ Free trial 7 Hari</span></span>
            <span class="home-text049"><span>✔ Akses Terbatas</span></span>
            <span class="home-text051"><span>✔ Berisi Iklan</span></span>
          </div>
          <router-link to="/register-page" class="home-navlink3 button">
            <span class="home-text053"><span>Coba Sekarang</span></span>
          </router-link>
        </div>
        <div class="home-pricing-card1">
          <span class="home-text055"><span>Santri Expert</span></span>
          <div class="home-container12">
            <span class="home-text057"><span>Rp.</span></span>
            <span class="home-text059">199</span>
            <span class="home-text060">K</span>
          </div>
          <span class="home-text061"><span>PER TAHUN</span></span>
          <div class="home-container13">
            <span class="home-text063"><span>✔ Pembayaran Tahunan</span></span>
            <span class="home-text065"><span>✔ Akses Konten Premium</span></span>
            <span class="home-text067"><span>✔ Tanpa Iklan</span></span>
            <span class="home-text069"><span>✔ Pelayanan Prioritas</span></span>
          </div>
          <router-link to="/register-page" class="home-navlink4 button">
            <span class="home-text071"><span>Daftar Sekarang</span></span>
          </router-link>
        </div>
        <div class="home-pricing-card2">
          <span class="home-text073">
            Santri Pro
            <span v-html="rawt6an"></span>
          </span>
          <div class="home-container14">
            <span class="home-text074"><span>Rp.</span></span>
            <span class="home-text076">99</span>
            <span class="home-text077">K</span>
          </div>
          <span class="home-text078"><span>PER BULAN</span></span>
          <div class="home-container15">
            <span class="home-text080"><span>✔ Pembayaran Bulanan</span></span>
            <span class="home-text082"><span>✔ Akses Konten Premium</span></span>
            <span class="home-text084"><span>✔ Tanpa Iklan</span></span>
            <span class="home-text086"><span>✔ Pelayanan Prioritas</span></span>
          </div>
          <router-link to="/register-page" class="home-navlink5 button">
            <span class="home-text088">Daftar Sekarang</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="home-banner">
      <h1 class="home-text089">Tunggu Apa Lagi?</h1>
      <span class="home-text090">
        <span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
            dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.
            Integer in dignissim tortor. Sed non volutpat turpis. Mauris luctus
            rutrum mi ut rhoncus. Integer in dignissim ortor.
            <span v-html="rawgafv"></span>
          </span>
          <span><span v-html="rawi26m"></span></span>
        </span>
      </span>
      <router-link to="/register-page" class="home-navlink6 button">
        <span class="home-text094"><span>Daftar Sekarang</span></span>
      </router-link>
    </div>
    <div class="home-container16">
      <footer class="home-footer">
        <img
          alt="logo"
          src="/playground_assets/logotext-fill.svg"
          class="home-image09"
        />
        <div class="home-container17">
          <span class="home-text096">Tentang</span>
          <span class="home-text097">Katalog</span>
          <span class="home-text098">Karir</span>
          <span class="home-text099">Kebijakan Privasi</span>
          <span class="home-text100">Bantuan</span>
        </div>
        <span class="home-text101">© 2021 Fashliy, Hak Cipta Dilindungi.</span>
      </footer>
    </div>
  </div>
</template>

<script>
import NavigationLinks from './navigation-links'
import GalleryCard1 from './gallery-card1'

export default {
  name: 'Home',
  props: {},
  components: {
    NavigationLinks,
    GalleryCard1,
  },

  data() {
    return {
      rawoje2: ' ',
      rawlmd5: ' ',
      rawj8pr: ' ',
      raw6rze: ' ',
      raw7any: ' ',
      raw6dd5: ' ',
      rawooa6: ' ',
      rawy8u2: ' ',
      rawt6an: ' ',
      rawgafv: ' ',
      rawi26m: ' ',
    }
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.home-header {
  width: 100%;
  height: 70px;
  display: flex;
  position: relative;
  max-width: 100%;
  max-height: var(--dl-size-size-xlarge);
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-sixunits);
  padding-right: var(--dl-space-space-sixunits);
  padding-bottom: var(--dl-space-space-unit);
  justify-content: center;
  background-color: #3EAEB5;
}
.home-container01 {
  width: 1280px;
  height: 100%;
  display: flex;
  align-self: stretch;
  align-items: center;
  justify-content: space-between;
}
.home-image {
  height: 2.5rem;
}
.home-nav {
  display: flex;
}
.home-btn-group {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-navlink {
  opacity: 1;
  transition: 0.3s;
  margin-left: 10px;
  border-color: var(--dl-color-gray-white);
  border-width: 1px;
  padding-left: var(--dl-space-space-twounits);
  border-radius: 50px;
  padding-right: var(--dl-space-space-twounits);
  text-decoration: none;
  background-color: transparent;
}
.home-navlink:hover {
  opacity: 1;
  background-color: rgba(255, 255, 255, 0.25);
}
.home-text {
  color: var(--dl-color-gray-white);
  font-weight: 700;
}
.home-navlink1 {
  transition: 0.3s;
  margin-left: 10px;
  border-color: var(--dl-color-gray-white);
  border-width: 1px;
  padding-left: var(--dl-space-space-twounits);
  border-radius: 50px;
  padding-right: var(--dl-space-space-twounits);
  text-decoration: none;
  background-color: var(--dl-color-gray-white);
}
.home-navlink1:hover {
  background-color: #ffffff;
}
.home-text002 {
  color: var(--dl-color-primary-teal-primary);
  font-weight: 700;
}
.home-hero {
  width: 100%;
  height: 500px;
  display: flex;
  position: relative;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  padding-top: var(--dl-space-space-twounits);
  padding-left: 10rem;
  padding-right: 10rem;
  flex-direction: row;
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: space-between;
}
.home-container02 {
  display: flex;
  padding-right: var(--dl-space-space-threeunits);
  flex-direction: column;
}
.home-text003 {
  width: 454px;
  font-size: 3em;
  max-width: 450px;
  align-self: flex-start;
  margin-bottom: 45px;
}
.home-text005 {
  color: var(--dl-color-primary-teal-primary);
}
.home-text007 {
  color: var(--dl-color-primary-teal-primary);
}
.home-btn-group1 {
  display: flex;
  align-items: center;
  flex-direction: row;
}
.home-navlink2 {
  color: var(--dl-color-gray-white);
  font-size: 1.2rem;
  transition: 0.3s;
  font-weight: 700;
  padding-top: var(--dl-space-space-unit);
  border-width: 0px;
  padding-left: var(--dl-space-space-twounits);
  border-radius: 50px;
  padding-right: var(--dl-space-space-twounits);
  padding-bottom: var(--dl-space-space-unit);
  text-decoration: none;
  background-color: var(--dl-color-primary-teal-primary);
}
.home-navlink2:hover {
  color: var(--dl-color-gray-white);
  background-color: var(--dl-color-gray-black);
}
.home-image01 {
  width: 469px;
  height: 266px;
  object-fit: cover;
  border-radius: var(--dl-radius-radius-radius8);
}
.home-features {
  width: 100%;
  display: flex;
  position: relative;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  padding-top: var(--dl-space-space-fiveunits);
  padding-left: var(--dl-space-space-sixunits);
  padding-right: var(--dl-space-space-sixunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-fiveunits);
}
.home-text008 {
  font-size: 46px;
  margin-bottom: var(--dl-space-space-unit);
}
.home-text010 {
  color: var(--dl-color-primary-teal-primary);
}
.home-text012 {
  color: var(--dl-color-gray-700);
  font-size: 1.15rem;
  text-align: center;
  padding-bottom: var(--dl-space-space-twounits);
}
.home-container03 {
  flex: 0 0 auto;
  width: 80%;
  display: flex;
  align-items: stretch;
  flex-direction: row;
  justify-content: flex-start;
}
.home-feature-card {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-fourunits);
  padding-right: var(--dl-space-space-fourunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-twounits);
}
.home-image02 {
  width: 100px;
  object-fit: cover;
}
.home-text014 {
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  margin-bottom: var(--dl-space-space-unit);
}
.home-text015 {
  color: var(--dl-color-gray-700);
  font-size: 15px;
  text-align: center;
}
.home-feature-card1 {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-fourunits);
  padding-right: var(--dl-space-space-fourunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-twounits);
}
.home-image03 {
  width: 100px;
  object-fit: cover;
}
.home-text016 {
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  margin-bottom: var(--dl-space-space-unit);
}
.home-text017 {
  color: var(--dl-color-gray-700);
  font-size: 15px;
  text-align: center;
}
.home-feature-card2 {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-fourunits);
  padding-right: var(--dl-space-space-fourunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-twounits);
}
.home-image04 {
  width: 100px;
  object-fit: cover;
}
.home-text018 {
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  margin-bottom: var(--dl-space-space-unit);
}
.home-text019 {
  color: var(--dl-color-gray-700);
  font-size: 15px;
  text-align: center;
}
.home-container04 {
  flex: 0 0 auto;
  width: 90%;
  display: flex;
  margin-top: var(--dl-space-space-threeunits);
  align-items: flex-start;
  justify-content: center;
}
.home-feature-card3 {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-unit);
  justify-content: center;
}
.home-image05 {
  height: 70px;
  object-fit: cover;
  margin-bottom: var(--dl-space-space-unit);
}
.home-text020 {
  font-size: 1.3em;
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  margin-bottom: var(--dl-space-space-unit);
}
.home-feature-card4 {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-unit);
  justify-content: center;
}
.home-image06 {
  height: 70px;
  object-fit: cover;
  margin-bottom: var(--dl-space-space-unit);
}
.home-text021 {
  font-size: 1.3em;
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  margin-bottom: var(--dl-space-space-unit);
}
.home-feature-card5 {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-unit);
  justify-content: center;
}
.home-image07 {
  height: 70px;
  object-fit: cover;
  margin-bottom: var(--dl-space-space-unit);
}
.home-text022 {
  font-size: 1.3em;
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  margin-bottom: var(--dl-space-space-unit);
}
.home-text023 {
  font-style: normal;
}
.home-text025 {
  font-style: normal;
}
.home-feature-card6 {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-unit);
  justify-content: center;
}
.home-image08 {
  height: 70px;
  object-fit: cover;
  margin-bottom: var(--dl-space-space-unit);
}
.home-text026 {
  font-size: 1.3em;
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  margin-bottom: var(--dl-space-space-unit);
}
.home-text027 {
  font-style: normal;
}
.home-text029 {
  font-style: normal;
}
.home-container05 {
  display: flex;
  align-items: center;
  flex-direction: row;
}
.home-text030 {
  opacity: 0.2;
  margin-top: var(--dl-space-space-twounits);
}
.home-link {
  opacity: 0.2;
  margin-top: var(--dl-space-space-twounits);
  font-weight: 700;
  margin-left: var(--dl-space-space-halfunit);
  margin-right: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.home-text031 {
  opacity: 0.2;
  margin-top: var(--dl-space-space-twounits);
}
.home-link1 {
  opacity: 0.2;
  margin-top: var(--dl-space-space-twounits);
  font-weight: 700;
  margin-left: var(--dl-space-space-halfunit);
  margin-right: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.home-container06 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-fiveunits);
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-container07 {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-text032 {
  font-size: 46px;
  margin-bottom: var(--dl-space-space-unit);
}
.home-text034 {
  color: var(--dl-color-primary-teal-primary);
}
.home-text036 {
  color: var(--dl-color-gray-700);
  font-size: 1.15rem;
  text-align: center;
  padding-bottom: var(--dl-space-space-twounits);
}
.home-gallery {
  display: grid;
  grid-gap: var(--dl-space-space-unit);
  max-width: var(--dl-size-size-maxwidth);
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  padding-bottom: var(--dl-space-space-unit);
  grid-template-columns: 1fr 1fr 1fr;
}
.home-pricing {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-fourunits);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-threeunits);
  justify-content: center;
}
.home-container08 {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-text039 {
  font-size: 46px;
  margin-bottom: var(--dl-space-space-unit);
}
.home-text041 {
  color: var(--dl-color-primary-teal-primary);
}
.home-text043 {
  color: var(--dl-color-gray-700);
  font-size: 1.15rem;
  text-align: center;
  padding-bottom: var(--dl-space-space-twounits);
}
.home-container09 {
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  padding-top: var(--dl-space-space-threeunits);
  padding-left: var(--dl-space-space-sixunits);
  padding-right: var(--dl-space-space-sixunits);
  padding-bottom: var(--dl-space-space-sixunits);
  background-size: cover;
  justify-content: center;
}
.home-pricing-card {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  max-width: var(--dl-size-size-maxwidth);
  box-shadow: 5px 5px 20px 5px #d4d4d4;
  min-height: 450px;
  transition: 0.3s;
  align-items: center;
  margin-left: var(--dl-space-space-unit);
  padding-top: var(--dl-space-space-twounits);
  margin-right: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-twounits);
  border-radius: 25px;
  padding-right: var(--dl-space-space-twounits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: space-between;
  background-color: var(--dl-color-gray-white);
}
.home-pricing-card:hover {
  transform: scale(1.02);
}
.home-text045 {
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 900;
  margin-bottom: var(--dl-space-space-twounits);
  text-transform: capitalize;
}
.home-container10 {
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: row;
}
.home-text046 {
  color: var(--dl-color-primary-teal-primary);
  font-size: 3rem;
  font-weight: 700;
}
.home-container11 {
  display: flex;
  align-items: flex-start;
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: column;
}
.home-text047 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-text049 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-text051 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-navlink3 {
  color: var(--dl-color-primary-teal-primary);
  font-size: 16px;
  margin-top: var(--dl-space-space-unit);
  padding-top: var(--dl-space-space-unit);
  border-color: var(--dl-color-primary-teal-primary);
  border-width: 2px;
  padding-left: var(--dl-space-space-twounits);
  border-radius: 20px;
  margin-bottom: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-twounits);
  padding-bottom: var(--dl-space-space-unit);
  text-decoration: none;
  background-color: var(--dl-color-gray-white);
}
.home-text053 {
  font-weight: 700;
}
.home-pricing-card1 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-twounits);
  max-width: var(--dl-size-size-maxwidth);
  box-shadow: 5px 5px 20px 5px #d4d4d4;
  min-height: 450px;
  transition: 0.3s;
  align-items: center;
  margin-left: var(--dl-space-space-unit);
  border-color: var(--dl-color-primary-teal-primary);
  border-width: 5px;
  margin-right: var(--dl-space-space-unit);
  border-radius: 25px;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.home-pricing-card1:hover {
  transform: scale(1.02);
}
.home-text055 {
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 900;
  margin-bottom: var(--dl-space-space-twounits);
  text-transform: capitalize;
}
.home-container12 {
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
}
.home-text057 {
  font-size: 1.15rem;
  margin-top: var(--dl-space-space-unit);
}
.home-text059 {
  color: var(--dl-color-primary-teal-primary);
  font-size: 4rem;
  font-weight: 700;
}
.home-text060 {
  color: var(--dl-color-primary-teal-primary);
  font-size: 2rem;
  margin-top: var(--dl-space-space-unit);
  font-weight: 700;
}
.home-text061 {
  color: var(--dl-color-gray-500);
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: var(--dl-space-space-twounits);
}
.home-container13 {
  display: flex;
  align-items: flex-start;
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: column;
}
.home-text063 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-text065 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-text067 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-text069 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-navlink4 {
  color: var(--dl-color-gray-white);
  font-size: 16px;
  margin-top: var(--dl-space-space-unit);
  padding-top: var(--dl-space-space-unit);
  border-color: var(--dl-color-primary-teal-primary);
  border-width: 2px;
  padding-left: var(--dl-space-space-twounits);
  border-radius: 20px;
  margin-bottom: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-twounits);
  padding-bottom: var(--dl-space-space-unit);
  text-decoration: none;
  background-color: var(--dl-color-primary-teal-primary);
}
.home-text071 {
  font-weight: 700;
}
.home-pricing-card2 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  max-width: var(--dl-size-size-maxwidth);
  box-shadow: 5px 5px 20px 5px #d4d4d4;
  min-height: 450px;
  transition: 0.3s;
  align-items: center;
  margin-left: var(--dl-space-space-unit);
  padding-top: var(--dl-space-space-twounits);
  margin-right: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-twounits);
  border-radius: 25px;
  padding-right: var(--dl-space-space-twounits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-twounits);
  background-color: var(--dl-color-gray-white);
}
.home-pricing-card2:hover {
  transform: scale(1.02);
}
.home-text073 {
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 900;
  margin-bottom: var(--dl-space-space-twounits);
  text-transform: capitalize;
}
.home-container14 {
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
}
.home-text074 {
  font-size: 1.15rem;
  margin-top: var(--dl-space-space-unit);
}
.home-text076 {
  color: var(--dl-color-primary-teal-primary);
  font-size: 4rem;
  font-weight: 700;
}
.home-text077 {
  color: var(--dl-color-primary-teal-primary);
  font-size: 2rem;
  margin-top: var(--dl-space-space-unit);
  font-weight: 700;
}
.home-text078 {
  color: var(--dl-color-gray-500);
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: var(--dl-space-space-twounits);
}
.home-container15 {
  display: flex;
  align-items: flex-start;
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: column;
}
.home-text080 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-text082 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-text084 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-text086 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-navlink5 {
  color: var(--dl-color-primary-teal-primary);
  font-size: 16px;
  margin-top: var(--dl-space-space-unit);
  padding-top: var(--dl-space-space-unit);
  border-color: var(--dl-color-primary-teal-primary);
  border-width: 2px;
  padding-left: var(--dl-space-space-twounits);
  border-radius: 20px;
  margin-bottom: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-twounits);
  padding-bottom: var(--dl-space-space-unit);
  text-decoration: none;
  background-color: var(--dl-color-gray-white);
}
.home-text088 {
  font-weight: 700;
}
.home-banner {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-fiveunits);
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--dl-color-primary-teal-primary);
}
.home-text089 {
  color: var(--dl-color-gray-white);
  font-size: 3rem;
  text-align: center;
}
.home-text090 {
  color: var(--dl-color-gray-white);
  opacity: 0.5;
  max-width: 720px;
  margin-top: var(--dl-space-space-twounits);
  text-align: center;
  margin-bottom: var(--dl-space-space-twounits);
}
.home-navlink6 {
  color: var(--dl-color-primary-teal-primary);
  font-size: 16px;
  margin-top: var(--dl-space-space-unit);
  padding-top: var(--dl-space-space-unit);
  border-color: var(--dl-color-primary-teal-primary);
  border-width: 2px;
  padding-left: var(--dl-space-space-twounits);
  border-radius: 20px;
  margin-bottom: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-twounits);
  padding-bottom: var(--dl-space-space-unit);
  text-decoration: none;
  background-color: var(--dl-color-gray-white);
}
.home-text094 {
  font-weight: 700;
}
.home-container16 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-twounits);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #1B2533;
}
.home-footer {
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: space-between;
}
.home-image09 {
  width: 199px;
  object-fit: cover;
}
.home-container17 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.home-text096 {
  color: var(--dl-color-gray-white);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
}
.home-text097 {
  color: var(--dl-color-gray-white);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
}
.home-text098 {
  color: var(--dl-color-gray-white);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
}
.home-text099 {
  color: var(--dl-color-gray-white);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
}
.home-text100 {
  color: var(--dl-color-gray-white);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
}
.home-text101 {
  color: var(--dl-color-gray-white);
}
@media(max-width: 991px) {
  .home-hero {
    flex-direction: column;
  }
  .home-container02 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }
  .home-text003 {
    text-align: center;
  }
  .home-text008 {
    text-align: center;
  }
  .home-text012 {
    text-align: center;
  }
  .home-text032 {
    text-align: center;
  }
  .home-text036 {
    text-align: center;
  }
  .home-gallery {
    grid-template-columns: 1fr 1fr;
  }
  .home-text039 {
    text-align: center;
  }
  .home-text043 {
    text-align: center;
  }
  .home-pricing-card {
    width: 100%;
    padding: var(--dl-space-space-twounits);
    max-width: 100%;
    align-items: center;
  }
  .home-pricing-card1 {
    width: 100%;
    max-width: 100%;
    align-items: center;
  }
  .home-pricing-card2 {
    width: 100%;
    max-width: 100%;
    align-items: center;
  }
  .home-text090 {
    max-width: 100%;
  }
}
@media(max-width: 767px) {
  .home-header {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-container01 {
    align-self: stretch;
    justify-content: space-between;
  }
  .home-nav {
    display: none;
  }
  .home-btn-group {
    align-items: flex-start;
  }
  .home-hero {
    height: auto;
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-container02 {
    align-self: center;
  }
  .home-text003 {
    margin-top: var(--dl-space-space-oneandhalfunits);
  }
  .home-features {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-text008 {
    text-align: center;
  }
  .home-text032 {
    text-align: center;
  }
  .home-gallery {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-text039 {
    text-align: center;
  }
  .home-container09 {
    flex-flow: column;
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-pricing-card {
    width: 100%;
    max-width: 450px;
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
  }
  .home-pricing-card1 {
    width: 100%;
    max-width: 450px;
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
  }
  .home-pricing-card2 {
    width: 100%;
    max-width: 450px;
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
  }
  .home-banner {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-text090 {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .home-footer {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-text096 {
    text-align: center;
    margin-left: var(--dl-space-space-unit);
    margin-right: var(--dl-space-space-unit);
  }
  .home-text097 {
    text-align: center;
    margin-left: var(--dl-space-space-unit);
    margin-right: var(--dl-space-space-unit);
  }
  .home-text098 {
    text-align: center;
    margin-left: var(--dl-space-space-unit);
    margin-right: var(--dl-space-space-unit);
  }
  .home-text099 {
    text-align: center;
    margin-left: var(--dl-space-space-unit);
    margin-right: var(--dl-space-space-unit);
  }
  .home-text100 {
    text-align: center;
    margin-left: var(--dl-space-space-unit);
    margin-right: var(--dl-space-space-unit);
  }
  .home-text101 {
    text-align: center;
    margin-left: var(--dl-space-space-unit);
    margin-right: var(--dl-space-space-unit);
  }
}
@media(max-width: 479px) {
  .home-header {
    padding: var(--dl-space-space-unit);
  }
  .home-nav {
    display: none;
    align-items: flex-start;
  }
  .home-hero {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-container02 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-text003 {
    margin-left: var(--dl-space-space-unit);
    margin-right: var(--dl-space-space-unit);
  }
  .home-btn-group1 {
    flex-direction: column;
  }
  .home-features {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-container03 {
    flex: 1;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }
  .home-container04 {
    flex-wrap: wrap;
  }
  .home-gallery {
    flex: 1;
    width: auto;
    max-width: auto;
    align-self: center;
    max-height: auto;
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-container09 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-pricing-card2 {
    margin-bottom: 0px;
  }
  .home-banner {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-footer {
    padding: var(--dl-space-space-unit);
    flex-direction: column;
  }
  .home-image09 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-text096 {
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-text097 {
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-text098 {
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-text099 {
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-text100 {
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-text101 {
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
}
</style>
