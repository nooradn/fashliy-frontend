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
          <button class="home-button button">
            <span class="home-text"><span>Masuk</span></span>
          </button>
          <button class="home-button1 button">
            <span class="home-text02">Daftar</span>
          </button>
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
                class="home-image1"
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
        <h1 class="home-text03">
          <span>
            Belajar Ilmu Agama lebih
            <span v-html="raw8d31"></span>
          </span>
          <span class="home-text05">mudah</span>
          <span>
            dan
            <span v-html="rawvf0h"></span>
          </span>
          <span class="home-text07">terarah.</span>
        </h1>
        <div class="home-btn-group1">
          <button class="home-button2 button">Mulai Belajar</button>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/group%20211-500w.png"
        class="home-image2"
      />
    </div>
    <div class="home-features">
      <h1 class="home-text08">
        <span>
          Materi Belajar
          <span v-html="rawnqn0"></span>
        </span>
        <span class="home-text10">Unggulan</span>
        <br />
        <span></span>
      </h1>
      <span class="home-text12">
        <span>Pelajari materi unggulan dari kami dengan kualitas terbaik.</span>
      </span>
      <div class="home-container04">
        <div class="home-feature-card">
          <svg viewBox="0 0 1024 1024" class="home-icon10">
            <path
              d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"
            ></path>
          </svg>
          <h2 class="home-text14">Aqidah</h2>
          <span class="home-text15">Lorem Ipsum</span>
        </div>
        <div class="home-feature-card1">
          <svg viewBox="0 0 1024 1024" class="home-icon12">
            <path
              d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"
            ></path>
          </svg>
          <h2 class="home-text16">Bahasa Arab</h2>
          <span class="home-text17">Lorem Ipsum</span>
        </div>
        <div class="home-feature-card2">
          <svg viewBox="0 0 1024 1024" class="home-icon14">
            <path
              d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"
            ></path>
          </svg>
          <h2 class="home-text18">Fiqih</h2>
          <span class="home-text19">Lorem Ipsum</span>
        </div>
      </div>
    </div>
    <div class="home-container05">
      <div class="home-container06">
        <h1 class="home-text20">
          <span>
            Video Materi
            <span v-html="rawbgn0"></span>
          </span>
          <span class="home-text22">Berkualitas</span>
          <br />
          <span></span>
        </h1>
        <span class="home-text24">
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
      <div class="home-container07">
        <h1 class="home-text27">
          <span>
            Paket Hemat,
            <span v-html="raw0y8i"></span>
          </span>
          <span class="home-text29">Bersahabat!</span>
          <br />
          <span></span>
        </h1>
        <span class="home-text31">
          <span>Lorem ipsum dolor sit amet todo amectus dolor.</span>
        </span>
      </div>
      <div class="home-container08">
        <div class="home-pricing-card">
          <span class="home-text33">Santri baru</span>
          <div class="home-container09">
            <span class="home-text34">Gratis</span>
          </div>
          <div class="home-container10">
            <span class="home-text35">
              <span>✔ Full access to designtool</span>
            </span>
            <span class="home-text37"><span>✔ Publish with Teleport</span></span>
            <span class="home-text39"><span>✔ Subdomain publish</span></span>
            <span class="home-text41"><span>✔ Download code</span></span>
          </div>
          <button class="home-button3 button">
            <span class="home-text43"><span>Daftar Sekarang</span></span>
          </button>
        </div>
        <div class="home-pricing-card1">
          <span class="home-text45">Santri Pro</span>
          <div class="home-container11">
            <span class="home-text46"><span>Rp.</span></span>
            <span class="home-text48">49</span>
            <span class="home-text49"><span>ribu</span></span>
          </div>
          <span class="home-text51">
            <span>Per akun, per bulan</span>
            <span></span>
          </span>
          <div class="home-container12">
            <span class="home-text54"><span>✔ All features of FREE</span></span>
            <span class="home-text56">
              <span>✔ Connect to custom domain</span>
            </span>
            <span class="home-text58"><span>✔ Private projects</span></span>
            <span class="home-text60"><span>✔ No project limitations</span></span>
            <span class="home-text62"><span>✔ Unlimited Users</span></span>
          </div>
          <button class="home-button4 button">
            <span class="home-text64"><span>Daftar Sekarang</span></span>
          </button>
        </div>
        <div class="home-pricing-card2">
          <span class="home-text66">Santri Expert</span>
          <div class="home-container13">
            <span class="home-text67"><span>Rp.</span></span>
            <span class="home-text69">99</span>
            <span class="home-text70"><span>ribu</span></span>
          </div>
          <span class="home-text72">
            <span>Billed annualy or $32 month-to-month.</span>
            <span></span>
          </span>
          <div class="home-container14">
            <span class="home-text75"><span>✔ All features of Pro</span></span>
            <span class="home-text77"><span>✔ Priority support</span></span>
            <span class="home-text79"><span>✔ Premium analytics</span></span>
            <span class="home-text81"><span>✔ Version history</span></span>
          </div>
          <button class="home-button5 button">
            <span class="home-text83"><span>Daftar Sekarang</span></span>
          </button>
        </div>
      </div>
    </div>
    <div class="home-banner">
      <h1 class="home-text85">Tunggu Apa Lagi?</h1>
      <span class="home-text86">
        <span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
            dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.
            Integer in dignissim tortor. Sed non volutpat turpis. Mauris luctus
            rutrum mi ut rhoncus. Integer in dignissim ortor.
            <span v-html="rawfiy8"></span>
          </span>
          <span><span v-html="rawfvpb"></span></span>
        </span>
      </span>
      <button class="home-button6 button">
        <span class="home-text90"><span>Daftar Sekarang</span></span>
      </button>
    </div>
    <div class="home-container15">
      <footer class="home-footer">
        <img
          alt="logo"
          src="/playground_assets/logotext-fill.svg"
          class="home-image3"
        />
        <div class="home-container16">
          <span class="home-text92">Tentang</span>
          <span class="home-text93">Katalog</span>
          <span class="home-text94">Karir</span>
          <span class="home-text95">Kebijakan Privasi</span>
          <span class="home-text96">Bantuan</span>
        </div>
        <span class="home-text97">© 2021 Fashliy, Hak Cipta Dilindungi.</span>
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
      raw8d31: ' ',
      rawvf0h: ' ',
      rawnqn0: ' ',
      rawbgn0: ' ',
      raw0y8i: ' ',
      rawfiy8: ' ',
      rawfvpb: ' ',
    }
  },

  metaInfo: {
    title: 'New Project',
    meta: [
      {
        property: 'og:title',
        content: 'New Project',
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
.home-button {
  opacity: 0.8;
  transition: 0.3s;
  margin-left: 10px;
  border-color: var(--dl-color-gray-white);
  border-width: 1px;
  padding-left: var(--dl-space-space-twounits);
  border-radius: 50px;
  padding-right: var(--dl-space-space-twounits);
  background-color: transparent;
}
.home-button:hover {
  opacity: 1;
  background-color: rgba(255, 255, 255, 0.25);
}
.home-text {
  color: var(--dl-color-gray-white);
  font-weight: 700;
}
.home-button1 {
  transition: 0.3s;
  margin-left: 10px;
  border-color: rgba(255, 255, 255, 0.9);
  border-width: 1px;
  padding-left: var(--dl-space-space-twounits);
  border-radius: 50px;
  padding-right: var(--dl-space-space-twounits);
  background-color: rgba(255, 255, 255, 0.8);
}
.home-button1:hover {
  background-color: #ffffff;
}
.home-text02 {
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
.home-image1 {
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
.home-text03 {
  width: 454px;
  font-size: 3em;
  max-width: 450px;
  align-self: flex-start;
  margin-bottom: 45px;
}
.home-text05 {
  color: var(--dl-color-primary-teal-primary);
}
.home-text07 {
  color: var(--dl-color-primary-teal-primary);
}
.home-btn-group1 {
  display: flex;
  align-items: center;
  flex-direction: row;
}
.home-button2 {
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
.home-button2:hover {
  color: var(--dl-color-gray-white);
  background-color: var(--dl-color-gray-black);
}
.home-image2 {
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
.home-text08 {
  font-size: 46px;
  margin-bottom: var(--dl-space-space-unit);
}
.home-text10 {
  color: var(--dl-color-primary-teal-primary);
}
.home-text12 {
  color: var(--dl-color-gray-700);
  font-size: 1.15rem;
  text-align: center;
  padding-bottom: var(--dl-space-space-twounits);
}
.home-container04 {
  flex: 0 0 auto;
  width: 100%;
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
.home-icon10 {
  fill: var(--dl-color-primary-teal-primary);
  flex: 1;
  width: var(--dl-size-size-medium);
  height: var(--dl-size-size-medium);
}
.home-text14 {
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  margin-bottom: var(--dl-space-space-unit);
}
.home-text15 {
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
.home-icon12 {
  fill: var(--dl-color-primary-teal-primary);
  flex: 1;
  width: var(--dl-size-size-medium);
  height: var(--dl-size-size-medium);
}
.home-text16 {
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  margin-bottom: var(--dl-space-space-unit);
}
.home-text17 {
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
.home-icon14 {
  fill: var(--dl-color-primary-teal-primary);
  flex: 1;
  width: var(--dl-size-size-medium);
  height: var(--dl-size-size-medium);
}
.home-text18 {
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  margin-bottom: var(--dl-space-space-unit);
}
.home-text19 {
  color: var(--dl-color-gray-700);
  font-size: 15px;
  text-align: center;
}
.home-container05 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-fiveunits);
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-container06 {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-text20 {
  font-size: 46px;
  margin-bottom: var(--dl-space-space-unit);
}
.home-text22 {
  color: var(--dl-color-primary-teal-primary);
}
.home-text24 {
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
  padding-left: var(--dl-space-space-fourunits);
  padding-right: var(--dl-space-space-fourunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-threeunits);
  justify-content: center;
}
.home-container07 {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-text27 {
  font-size: 46px;
  margin-bottom: var(--dl-space-space-unit);
}
.home-text29 {
  color: var(--dl-color-primary-teal-primary);
}
.home-text31 {
  color: var(--dl-color-gray-700);
  font-size: 1.15rem;
  text-align: center;
  padding-bottom: var(--dl-space-space-twounits);
}
.home-container08 {
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
.home-text33 {
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 900;
  margin-bottom: var(--dl-space-space-twounits);
  text-transform: capitalize;
}
.home-container09 {
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: row;
}
.home-text34 {
  color: var(--dl-color-primary-teal-primary);
  font-size: 3rem;
  font-weight: 700;
}
.home-container10 {
  display: flex;
  align-items: flex-start;
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: column;
}
.home-text35 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-text37 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-text39 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-text41 {
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
.home-text43 {
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
.home-text45 {
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
.home-text46 {
  font-size: 1.15rem;
  margin-top: var(--dl-space-space-twounits);
  font-weight: 300;
}
.home-text48 {
  color: var(--dl-color-primary-teal-primary);
  font-size: 4rem;
  font-weight: 700;
}
.home-text49 {
  font-size: 1.15rem;
  margin-top: var(--dl-space-space-twounits);
  font-weight: 300;
}
.home-text51 {
  color: var(--dl-color-gray-500);
  font-size: 0.75rem;
  margin-bottom: var(--dl-space-space-twounits);
}
.home-container12 {
  display: flex;
  align-items: flex-start;
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: column;
}
.home-text54 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-text56 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-text58 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-text60 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-text62 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-button4 {
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
.home-text64 {
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
.home-text66 {
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 900;
  margin-bottom: var(--dl-space-space-twounits);
  text-transform: capitalize;
}
.home-container13 {
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: row;
}
.home-text67 {
  font-size: 1.15rem;
  margin-top: var(--dl-space-space-twounits);
  font-weight: 300;
}
.home-text69 {
  color: var(--dl-color-primary-teal-primary);
  font-size: 4rem;
  font-weight: 700;
}
.home-text70 {
  font-size: 1.15rem;
  margin-top: var(--dl-space-space-twounits);
  font-weight: 300;
}
.home-text72 {
  color: var(--dl-color-gray-500);
  font-size: 0.75rem;
  margin-bottom: var(--dl-space-space-twounits);
}
.home-container14 {
  display: flex;
  align-items: flex-start;
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: column;
}
.home-text75 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-text77 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-text79 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-text81 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-button5 {
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
.home-text83 {
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
.home-text85 {
  color: var(--dl-color-gray-white);
  font-size: 3rem;
  text-align: center;
}
.home-text86 {
  color: var(--dl-color-gray-white);
  opacity: 0.5;
  max-width: 720px;
  margin-top: var(--dl-space-space-twounits);
  text-align: center;
  margin-bottom: var(--dl-space-space-twounits);
}
.home-button6 {
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
.home-text90 {
  font-weight: 700;
}
.home-container15 {
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
.home-image3 {
  width: 199px;
  height: 60px;
  object-fit: cover;
}
.home-container16 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.home-text92 {
  color: var(--dl-color-gray-white);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
}
.home-text93 {
  color: var(--dl-color-gray-white);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
}
.home-text94 {
  color: var(--dl-color-gray-white);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
}
.home-text95 {
  color: var(--dl-color-gray-white);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
}
.home-text96 {
  color: var(--dl-color-gray-white);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
}
.home-text97 {
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
  .home-text03 {
    text-align: center;
  }
  .home-text08 {
    text-align: center;
  }
  .home-text12 {
    text-align: center;
  }
  .home-text20 {
    text-align: center;
  }
  .home-text24 {
    text-align: center;
  }
  .home-gallery {
    grid-template-columns: 1fr 1fr;
  }
  .home-text27 {
    text-align: center;
  }
  .home-text31 {
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
  .home-text86 {
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
  .home-text03 {
    margin-top: var(--dl-space-space-oneandhalfunits);
  }
  .home-features {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-text08 {
    text-align: center;
  }
  .home-text20 {
    text-align: center;
  }
  .home-gallery {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-text27 {
    text-align: center;
  }
  .home-container08 {
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
  .home-text86 {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .home-footer {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-text92 {
    text-align: center;
    margin-left: var(--dl-space-space-unit);
    margin-right: var(--dl-space-space-unit);
  }
  .home-text93 {
    text-align: center;
    margin-left: var(--dl-space-space-unit);
    margin-right: var(--dl-space-space-unit);
  }
  .home-text94 {
    text-align: center;
    margin-left: var(--dl-space-space-unit);
    margin-right: var(--dl-space-space-unit);
  }
  .home-text95 {
    text-align: center;
    margin-left: var(--dl-space-space-unit);
    margin-right: var(--dl-space-space-unit);
  }
  .home-text96 {
    text-align: center;
    margin-left: var(--dl-space-space-unit);
    margin-right: var(--dl-space-space-unit);
  }
  .home-text97 {
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
  .home-container08 {
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
  .home-image3 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-text92 {
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-text93 {
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-text94 {
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-text95 {
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-text96 {
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-text97 {
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
}
</style>
