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
        <div class="home-menu-burger teleport-menu-burger">
          <svg viewBox="0 0 1024 1024" class="home-icon">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path>
          </svg>
        </div>
        <div class="teleport-menu-mobile home-menu-mobile">
          <div class="home-nav1">
            <div class="home-container02">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                class="home-image01"
              />
              <div class="teleport-menu-close">
                <svg viewBox="0 0 1024 1024" class="home-icon02">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  ></path>
                </svg>
              </div>
            </div>
            <navigation-links rootClassName="rootClassName"></navigation-links>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" class="home-icon04">
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path></svg
            ><svg viewBox="0 0 877.7142857142857 1024" class="home-icon06">
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              ></path></svg
            ><svg viewBox="0 0 602.2582857142856 1024" class="home-icon08">
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </header>
    <div class="home-hero">
      <div class="home-container03">
        <h1 class="home-text003">
          <span>
            Belajar Ilmu Agama lebih
            <span v-html="raw404t"></span>
          </span>
          <span class="home-text005">mudah</span>
          <span>
            dan
            <span v-html="rawyds0"></span>
          </span>
          <span class="home-text007">terarah.</span>
        </h1>
        <div class="home-btn-group1">
          <button class="home-button button">Mulai Belajar</button>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/group%20211-500w.png"
        class="home-image02"
      />
    </div>
    <div class="home-features">
      <h1 class="home-text008">
        <span>
          Materi Belajar
          <span v-html="rawwv5e"></span>
        </span>
        <span class="home-text010">Unggulan</span>
        <br />
        <span></span>
      </h1>
      <span class="home-text012">
        <span>Pelajari materi unggulan dari kami dengan kualitas terbaik.</span>
      </span>
      <div class="home-container04">
        <div class="home-feature-card">
          <img
            src="/playground_assets/image%205%20%5Btraced%5D.svg"
            alt="image"
            class="home-image03"
          />
          <h2 class="home-text014">Tafsir</h2>
          <span class="home-text015">Lorem Ipsum</span>
        </div>
        <div class="home-feature-card1">
          <img
            src="/playground_assets/image%204%20%5Btraced%5D.svg"
            alt="image"
            class="home-image04"
          />
          <h2 class="home-text016">Hadits</h2>
          <span class="home-text017">Lorem Ipsum</span>
        </div>
        <div class="home-feature-card2">
          <img
            src="/playground_assets/image%207%20%5Btraced%5D.svg"
            alt="image"
            class="home-image05"
          />
          <h2 class="home-text018">Fiqih</h2>
          <span class="home-text019">Lorem Ipsum</span>
        </div>
      </div>
      <div class="home-container05">
        <div class="home-feature-card3">
          <img
            src="/playground_assets/image%202%20%5Btraced%5D.svg"
            alt="image"
            class="home-image06"
          />
          <h2 class="home-text020">Akidah Akhlak</h2>
        </div>
        <div class="home-feature-card4">
          <img
            src="/playground_assets/image%208%20%5Btraced%5D.svg"
            alt="image"
            class="home-image07"
          />
          <h2 class="home-text021">Bahasa Arab</h2>
        </div>
        <div class="home-feature-card5">
          <img
            src="/playground_assets/image%209%20%5Btraced%5D.svg"
            alt="image"
            class="home-image08"
          />
          <h2 class="home-text022">
            <span class="home-text023">
              Sejarah
              <span v-html="rawv5eu"></span>
            </span>
            <br />
            <span class="home-text025">Kebudayaan Islam</span>
          </h2>
        </div>
        <div class="home-feature-card6">
          <img
            src="/playground_assets/image%2010%20%5Btraced%5D.svg"
            alt="image"
            class="home-image09"
          />
          <h2 class="home-text026">
            <span class="home-text027">
              Kajian-Kajian
              <span v-html="rawkq0s"></span>
            </span>
            <br />
            <span class="home-text029">Islam</span>
          </h2>
        </div>
      </div>
      <div class="home-container06">
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
          <span v-html="rawxs45"></span>
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
    <div class="home-container07">
      <div class="home-container08">
        <h1 class="home-text032">
          <span>
            Video Materi
            <span v-html="rawaum3"></span>
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
      <div class="home-gallery">
        <gallery-card1 rootClassName="rootClassName10"></gallery-card1>
        <gallery-card1 rootClassName="rootClassName"></gallery-card1>
        <gallery-card1 rootClassName="rootClassName9"></gallery-card1>
        <gallery-card1 rootClassName="rootClassName8"></gallery-card1>
        <gallery-card1 rootClassName="rootClassName7"></gallery-card1>
        <gallery-card1 rootClassName="rootClassName6"></gallery-card1>
      </div>
    </div>
    <div class="home-pricing">
      <div class="home-container09">
        <h1 class="home-text039">
          <span>
            Paket Hemat,
            <span v-html="rawr656"></span>
          </span>
          <span class="home-text041">Bersahabat!</span>
          <br />
          <span></span>
        </h1>
        <span class="home-text043">
          <span>Lorem ipsum dolor sit amet todo amectus dolor.</span>
        </span>
      </div>
      <div class="home-container10">
        <div class="home-pricing-card">
          <span class="home-text045">Santri baru</span>
          <div class="home-container11">
            <span class="home-text046">Gratis</span>
          </div>
          <div class="home-container12">
            <span class="home-text047">
              <span>✔ Full access to designtool</span>
            </span>
            <span class="home-text049"><span>✔ Publish with Teleport</span></span>
            <span class="home-text051"><span>✔ Subdomain publish</span></span>
            <span class="home-text053"><span>✔ Download code</span></span>
          </div>
          <button class="home-button1 button">
            <span class="home-text055"><span>Daftar Sekarang</span></span>
          </button>
        </div>
        <div class="home-pricing-card1">
          <span class="home-text057"><span>Santri Pro</span></span>
          <div class="home-container13">
            <span class="home-text059"><span>Rp.</span></span>
            <span class="home-text061">29</span>
            <span class="home-text062"><span>ribu</span></span>
          </div>
          <span class="home-text064"><span>PER BULAN</span></span>
          <div class="home-container14">
            <span class="home-text066">
              <span>✔ All features of Santri Baru</span>
            </span>
            <span class="home-text068">
              <span>✔ Connect to custom domain</span>
            </span>
            <span class="home-text070"><span>✔ Private projects</span></span>
            <span class="home-text072">
              <span>✔ No project limitations</span>
            </span>
            <span class="home-text074"><span>✔ Unlimited Users</span></span>
          </div>
          <button class="home-button2 button">
            <span class="home-text076"><span>Coba Gratis 7 Hari</span></span>
          </button>
        </div>
        <div class="home-pricing-card2">
          <span class="home-text078">
            Santri Expert
            <span v-html="rawafou"></span>
          </span>
          <div class="home-container15">
            <span class="home-text079"><span>Rp.</span></span>
            <span class="home-text081">299</span>
            <span class="home-text082"><span>ribu</span></span>
          </div>
          <span class="home-text084"><span>PER TAHUN</span></span>
          <div class="home-container16">
            <span class="home-text086">
              <span>✔ All features of Santri Pro</span>
            </span>
            <span class="home-text088"><span>✔ Priority support</span></span>
            <span class="home-text090"><span>✔ Premium analytics</span></span>
            <span class="home-text092"><span>✔ Version history</span></span>
          </div>
          <button class="home-button3 button">
            <span class="home-text094">Coba Gratis 7 Hari</span>
          </button>
        </div>
      </div>
    </div>
    <div class="home-banner">
      <h1 class="home-text095">Tunggu Apa Lagi?</h1>
      <span class="home-text096">
        <span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
            dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.
            Integer in dignissim tortor. Sed non volutpat turpis. Mauris luctus
            rutrum mi ut rhoncus. Integer in dignissim ortor.
            <span v-html="rawx3bv"></span>
          </span>
          <span><span v-html="rawh78r"></span></span>
        </span>
      </span>
      <router-link to="/login-page" class="home-navlink2 button">
        <span class="home-text100"><span>Daftar Sekarang</span></span>
      </router-link>
    </div>
    <div class="home-container17">
      <footer class="home-footer">
        <img
          alt="logo"
          src="/playground_assets/logotext-fill.svg"
          class="home-image10"
        />
        <div class="home-container18">
          <span class="home-text102">Tentang</span>
          <span class="home-text103">Katalog</span>
          <span class="home-text104">Karir</span>
          <span class="home-text105">Kebijakan Privasi</span>
          <span class="home-text106">Bantuan</span>
        </div>
        <span class="home-text107">© 2021 Fashliy, Hak Cipta Dilindungi.</span>
      </footer>
    </div>
  </div>
</template>

<script>
import NavigationLinks from '../components/navigation-links'
import GalleryCard1 from '../components/gallery-card1'

export default {
  name: 'Home',
  components: {
    NavigationLinks,
    GalleryCard1,
  },

  data() {
    return {
      raw404t: ' ',
      rawyds0: ' ',
      rawwv5e: ' ',
      rawv5eu: ' ',
      rawkq0s: ' ',
      rawxs45: ' ',
      rawaum3: ' ',
      rawr656: ' ',
      rawafou: ' ',
      rawx3bv: ' ',
      rawh78r: ' ',
    }
  },

  metaInfo: {
    title: 'Fashliy - Islamic Learning Platform',
    meta: [
      {
        property: 'og:title',
        content: 'Fashliy - Islamic Learning Platform',
      },
    ],
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
  opacity: 0.8;
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
  border-color: rgba(255, 255, 255, 0.9);
  border-width: 1px;
  padding-left: var(--dl-space-space-twounits);
  border-radius: 50px;
  padding-right: var(--dl-space-space-twounits);
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0.8);
}
.home-navlink1:hover {
  background-color: #ffffff;
}
.home-text002 {
  color: var(--dl-color-primary-teal-primary);
  font-weight: 700;
}
.home-menu-burger {
  display: none;
}
.home-icon {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  display: none;
}
.home-nav1 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-container02 {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.home-image01 {
  height: 2rem;
}
.home-icon02 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.home-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.home-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.home-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
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
.home-container03 {
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
.home-button {
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
  background-color: var(--dl-color-primary-teal-primary);
}
.home-button:hover {
  color: var(--dl-color-gray-white);
  background-color: var(--dl-color-gray-black);
}
.home-image02 {
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
.home-container04 {
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
.home-image03 {
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
.home-image04 {
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
.home-image05 {
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
.home-container05 {
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
.home-image06 {
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
.home-image07 {
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
.home-image08 {
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
.home-image09 {
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
.home-container06 {
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
.home-container07 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-fiveunits);
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-container08 {
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
.home-container09 {
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
.home-container10 {
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
.home-container11 {
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
.home-container12 {
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
.home-text053 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-button1 {
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
  background-color: var(--dl-color-gray-white);
}
.home-text055 {
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
.home-text057 {
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 900;
  margin-bottom: var(--dl-space-space-twounits);
  text-transform: capitalize;
}
.home-container13 {
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
}
.home-text059 {
  font-size: 1.15rem;
  margin-top: var(--dl-space-space-twounits);
  font-weight: 300;
}
.home-text061 {
  color: var(--dl-color-primary-teal-primary);
  font-size: 4rem;
  font-weight: 700;
}
.home-text062 {
  font-size: 1.15rem;
  margin-top: var(--dl-space-space-twounits);
  font-weight: 300;
}
.home-text064 {
  color: var(--dl-color-gray-500);
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: var(--dl-space-space-twounits);
}
.home-container14 {
  display: flex;
  align-items: flex-start;
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: column;
}
.home-text066 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-text068 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-text070 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-text072 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-text074 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-button2 {
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
  background-color: var(--dl-color-primary-teal-primary);
}
.home-text076 {
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
.home-text078 {
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 900;
  margin-bottom: var(--dl-space-space-twounits);
  text-transform: capitalize;
}
.home-container15 {
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
}
.home-text079 {
  font-size: 1.15rem;
  margin-top: var(--dl-space-space-twounits);
  font-weight: 300;
}
.home-text081 {
  color: var(--dl-color-primary-teal-primary);
  font-size: 4rem;
  font-weight: 700;
}
.home-text082 {
  font-size: 1.15rem;
  margin-top: var(--dl-space-space-twounits);
  font-weight: 300;
}
.home-text084 {
  color: var(--dl-color-gray-500);
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: var(--dl-space-space-twounits);
}
.home-container16 {
  display: flex;
  align-items: flex-start;
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: column;
}
.home-text086 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-text088 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-text090 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-text092 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-button3 {
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
  background-color: var(--dl-color-gray-white);
}
.home-text094 {
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
.home-text095 {
  color: var(--dl-color-gray-white);
  font-size: 3rem;
  text-align: center;
}
.home-text096 {
  color: var(--dl-color-gray-white);
  opacity: 0.5;
  max-width: 720px;
  margin-top: var(--dl-space-space-twounits);
  text-align: center;
  margin-bottom: var(--dl-space-space-twounits);
}
.home-navlink2 {
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
.home-text100 {
  font-weight: 700;
}
.home-container17 {
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
.home-image10 {
  width: 199px;
  object-fit: cover;
}
.home-container18 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.home-text102 {
  color: var(--dl-color-gray-white);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
}
.home-text103 {
  color: var(--dl-color-gray-white);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
}
.home-text104 {
  color: var(--dl-color-gray-white);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
}
.home-text105 {
  color: var(--dl-color-gray-white);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
}
.home-text106 {
  color: var(--dl-color-gray-white);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
}
.home-text107 {
  color: var(--dl-color-gray-white);
}
@media(max-width: 991px) {
  .home-icon {
    display: flex;
  }
  .home-hero {
    flex-direction: column;
  }
  .home-container03 {
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
  .home-text096 {
    max-width: 100%;
  }
}
@media(max-width: 767px) {
  .home-header {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-nav {
    display: none;
  }
  .home-btn-group {
    display: none;
  }
  .home-menu-burger {
    display: flex;
  }
  .home-hero {
    height: auto;
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-container03 {
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
  .home-container10 {
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
  .home-text096 {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .home-footer {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-text102 {
    text-align: center;
    margin-left: var(--dl-space-space-unit);
    margin-right: var(--dl-space-space-unit);
  }
  .home-text103 {
    text-align: center;
    margin-left: var(--dl-space-space-unit);
    margin-right: var(--dl-space-space-unit);
  }
  .home-text104 {
    text-align: center;
    margin-left: var(--dl-space-space-unit);
    margin-right: var(--dl-space-space-unit);
  }
  .home-text105 {
    text-align: center;
    margin-left: var(--dl-space-space-unit);
    margin-right: var(--dl-space-space-unit);
  }
  .home-text106 {
    text-align: center;
    margin-left: var(--dl-space-space-unit);
    margin-right: var(--dl-space-space-unit);
  }
  .home-text107 {
    text-align: center;
    margin-left: var(--dl-space-space-unit);
    margin-right: var(--dl-space-space-unit);
  }
}
@media(max-width: 479px) {
  .home-header {
    padding: var(--dl-space-space-unit);
  }
  .home-menu-mobile {
    padding: 16px;
  }
  .home-hero {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-container03 {
    margin-bottom: var(--dl-space-space-unit);
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
  .home-container04 {
    flex: 1;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }
  .home-gallery {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-container10 {
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
  .home-image10 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-text102 {
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-text103 {
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-text104 {
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-text105 {
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-text106 {
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-text107 {
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
}
</style>
