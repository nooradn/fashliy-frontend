<template>
  <div class="video-course-dark-container">
    <div class="video-course-dark-menubar">
      <div class="video-course-dark-container01">
        <router-link to="/" class="video-course-dark-navlink">
          <img
            alt="image"
            src="/playground_assets/logotext-fill.svg"
            class="video-course-dark-image"
          />
        </router-link>
      </div>
      <div class="video-course-dark-container02">
        <span class="video-course-dark-text">Bab 1: Muqoddimah</span>
        <div class="video-course-dark-container03">
          <span class="video-course-dark-text01">Materi 1</span>
          <svg viewBox="0 0 1024 1024" class="video-course-dark-icon">
            <path
              d="M426 726l384-384-60-62-324 324-152-152-60 60zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
            ></path>
          </svg>
        </div>
        <div class="video-course-dark-container04">
          <span class="video-course-dark-text02">Materi 2</span>
          <svg viewBox="0 0 1024 1024" class="video-course-dark-icon2">
            <path
              d="M426 726l384-384-60-62-324 324-152-152-60 60zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
            ></path>
          </svg>
        </div>
        <div class="video-course-dark-container05">
          <span class="video-course-dark-text03">Materi 3</span>
          <svg viewBox="0 0 1024 1024" class="video-course-dark-icon4">
            <path
              d="M426 726l384-384-60-62-324 324-152-152-60 60zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
            ></path>
          </svg>
        </div>
        <div class="video-course-dark-container06">
          <span class="video-course-dark-text04">Materi 4</span>
        </div>
        <div class="video-course-dark-container07">
          <span class="video-course-dark-text05">Materi 5</span>
        </div>
        <span class="video-course-dark-text06">Bab 2: Lorem Ipsum</span>
        <div class="video-course-dark-container08">
          <span class="video-course-dark-text07">Materi xx</span>
        </div>
        <div class="video-course-dark-container09">
          <span class="video-course-dark-text08">Materi xx</span>
        </div>
        <div class="video-course-dark-container10">
          <span class="video-course-dark-text09">Materi xx</span>
        </div>
        <div class="video-course-dark-container11">
          <span class="video-course-dark-text10">Materi xx</span>
        </div>
        <div class="video-course-dark-container12">
          <span class="video-course-dark-text11">Materi xx</span>
        </div>
        <span class="video-course-dark-text12">Bab 3: Lorem Ipsum</span>
        <div class="video-course-dark-container13">
          <span class="video-course-dark-text13">Materi xx</span>
        </div>
        <div class="video-course-dark-container14">
          <span class="video-course-dark-text14">Materi xx</span>
        </div>
        <div class="video-course-dark-container15">
          <span class="video-course-dark-text15">Materi xx</span>
        </div>
        <div class="video-course-dark-container16">
          <span class="video-course-dark-text16">Materi xx</span>
        </div>
        <div class="video-course-dark-container17">
          <span class="video-course-dark-text17">Materi xx</span>
        </div>
        <div class="video-course-dark-container18">
          <span class="video-course-dark-text18">Materi xx</span>
        </div>
      </div>
    </div>
    <div class="video-course-dark-video-content">
      <div class="video-course-dark-container19">
        <div class="video-course-dark-container20">
          <span class="video-course-dark-text19">Bahasa Arab Materi Empat</span>
          <span class="video-course-dark-text20">
            Lorem ipsum dolor sit amet holo hampa jojo
          </span>
        </div>
        <div class="video-course-dark-container21">
          <button class="video-course-dark-button button">
            <img
              alt="image"
              src="/playground_assets/navigate_next.svg"
              class="video-course-dark-image1"
            />
            <span class="video-course-dark-text21">Mundur</span>
          </button>
          <button class="video-course-dark-button1 button">
            <span class="video-course-dark-text22">Lanjut</span>
            <svg viewBox="0 0 1024 1024" class="video-course-dark-icon6">
              <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="video-course-dark-container22">
        <iframe
          src="https://www.youtube.com/embed/cHsC2X1ZlZ8"
          class="video-course-dark-iframe"
        ></iframe>
      </div>
      <span class="video-course-dark-text23">Faidah / Catatan</span>
      <span class="video-course-dark-text24">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl fames
        aliquet blandit fermentum in. Congue nisl porttitor suscipit
        pellentesque maecenas. Nibh enim mi turpis bibendum pellentesque cursus.
        Ipsum lectus laoreet amet, porta feugiat nibh a sapien vitae. Dictum
        tortor mauris diam lobortis a nulla. Libero eget justo quis sed. Massa
        odio netus cursus vestibulum nascetur proin. At auctor eu nibh amet
        donec mi ac ut. Vitae cursus sed tincidunt non. Sit purus in nunc,
        egestas sit nullam.
      </span>
    </div>
  </div>
</template>

<script>
const axios = require("axios").default;
const config = require("../config.js").default;

export default {
  name: "VideoCourseDark",
  beforeCreate() {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem(config.localStorage.jwtToken)}`;
    axios
      .get(config.urls.userInfo())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response.status == 401) {
          this.$router.push(`/login-page`);
        }
      });
  },
  metaInfo: {
    title: "video-course-dark - Fashliy - Islamic Learning Platform",
    meta: [
      {
        property: "og:title",
        content: "video-course-dark - Fashliy - Islamic Learning Platform",
      },
    ],
  },
};
</script>

<style scoped>
.video-course-dark-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
  background-color: #232333;
}
.video-course-dark-menubar {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #31313e;
}
.video-course-dark-container01 {
  flex: 0 0 auto;
  width: 100%;
  height: 70px;
  display: flex;
  align-self: stretch;
  align-items: center;
  justify-content: center;
  background-color: #3b3b48;
}
.video-course-dark-navlink {
  display: contents;
}
.video-course-dark-image {
  width: 100px;
  margin: var(--dl-space-space-unit);
  object-fit: cover;
  text-decoration: none;
}
.video-course-dark-container02 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  position: relative;
  align-self: stretch;
  align-items: flex-start;
  padding-top: 0px;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-unit);
  justify-content: center;
}
.video-course-dark-text {
  color: var(--dl-color-gray-white);
  margin-top: var(--dl-space-space-unit);
  font-weight: 700;
  margin-bottom: 0px;
}
.video-course-dark-container03 {
  flex: 0 0 auto;
  height: 40px;
  display: flex;
  opacity: 0.2;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  margin-top: var(--dl-space-space-halfunit);
  align-items: center;
  border-color: var(--dl-color-gray-white);
  border-style: solid;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-halfunit);
  flex-direction: row;
  justify-content: space-between;
}
.video-course-dark-text01 {
  color: var(--dl-color-gray-white);
  font-size: 16px;
}
.video-course-dark-icon {
  fill: var(--dl-color-gray-white);
  width: 24px;
  align-self: center;
}
.video-course-dark-container04 {
  flex: 0 0 auto;
  height: 40px;
  display: flex;
  opacity: 0.2;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  margin-top: var(--dl-space-space-halfunit);
  align-items: center;
  border-color: var(--dl-color-gray-white);
  border-style: solid;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-halfunit);
  flex-direction: row;
  justify-content: space-between;
}
.video-course-dark-text02 {
  color: var(--dl-color-gray-white);
  font-size: 16px;
}
.video-course-dark-icon2 {
  fill: var(--dl-color-gray-white);
  width: 24px;
  align-self: center;
}
.video-course-dark-container05 {
  flex: 0 0 auto;
  height: 40px;
  display: flex;
  opacity: 0.2;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  margin-top: var(--dl-space-space-halfunit);
  align-items: center;
  border-color: var(--dl-color-gray-white);
  border-style: solid;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-halfunit);
  flex-direction: row;
  justify-content: space-between;
}
.video-course-dark-text03 {
  color: var(--dl-color-gray-white);
  font-size: 16px;
}
.video-course-dark-icon4 {
  fill: var(--dl-color-gray-white);
  width: 24px;
  align-self: center;
}
.video-course-dark-container06 {
  flex: 0 0 auto;
  height: 40px;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  margin-top: var(--dl-space-space-halfunit);
  align-items: center;
  border-color: var(--dl-color-gray-white);
  border-style: solid;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-halfunit);
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--dl-color-gray-white);
}
.video-course-dark-text04 {
  color: var(--dl-color-primary-teal-primary);
  font-size: 16px;
  font-weight: 700;
}
.video-course-dark-container07 {
  flex: 0 0 auto;
  height: 40px;
  display: flex;
  opacity: 0.2;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  margin-top: var(--dl-space-space-halfunit);
  align-items: center;
  border-color: var(--dl-color-gray-white);
  border-style: solid;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-halfunit);
  flex-direction: row;
  justify-content: space-between;
}
.video-course-dark-text05 {
  color: var(--dl-color-gray-white);
  font-size: 16px;
}
.video-course-dark-text06 {
  color: var(--dl-color-gray-white);
  margin-top: var(--dl-space-space-unit);
  font-weight: 700;
  margin-bottom: 0px;
}
.video-course-dark-container08 {
  flex: 0 0 auto;
  height: 40px;
  display: flex;
  opacity: 0.2;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  margin-top: var(--dl-space-space-halfunit);
  align-items: center;
  border-color: var(--dl-color-gray-white);
  border-style: solid;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-halfunit);
  flex-direction: row;
  justify-content: space-between;
}
.video-course-dark-text07 {
  color: var(--dl-color-gray-white);
  font-size: 16px;
}
.video-course-dark-container09 {
  flex: 0 0 auto;
  height: 40px;
  display: flex;
  opacity: 0.2;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  margin-top: var(--dl-space-space-halfunit);
  align-items: center;
  border-color: var(--dl-color-gray-white);
  border-style: solid;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-halfunit);
  flex-direction: row;
  justify-content: space-between;
}
.video-course-dark-text08 {
  color: var(--dl-color-gray-white);
  font-size: 16px;
}
.video-course-dark-container10 {
  flex: 0 0 auto;
  height: 40px;
  display: flex;
  opacity: 0.2;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  margin-top: var(--dl-space-space-halfunit);
  align-items: center;
  border-color: var(--dl-color-gray-white);
  border-style: solid;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-halfunit);
  flex-direction: row;
  justify-content: space-between;
}
.video-course-dark-text09 {
  color: var(--dl-color-gray-white);
  font-size: 16px;
}
.video-course-dark-container11 {
  flex: 0 0 auto;
  height: 40px;
  display: flex;
  opacity: 0.2;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  margin-top: var(--dl-space-space-halfunit);
  align-items: center;
  border-color: var(--dl-color-gray-white);
  border-style: solid;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-halfunit);
  flex-direction: row;
  justify-content: space-between;
}
.video-course-dark-text10 {
  color: var(--dl-color-gray-white);
  font-size: 16px;
}
.video-course-dark-container12 {
  flex: 0 0 auto;
  height: 40px;
  display: flex;
  opacity: 0.2;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  margin-top: var(--dl-space-space-halfunit);
  align-items: center;
  border-color: var(--dl-color-gray-white);
  border-style: solid;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-halfunit);
  flex-direction: row;
  justify-content: space-between;
}
.video-course-dark-text11 {
  color: var(--dl-color-gray-white);
  font-size: 16px;
}
.video-course-dark-text12 {
  color: var(--dl-color-gray-white);
  margin-top: var(--dl-space-space-unit);
  font-weight: 700;
  margin-bottom: 0px;
}
.video-course-dark-container13 {
  flex: 0 0 auto;
  height: 40px;
  display: flex;
  opacity: 0.2;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  margin-top: var(--dl-space-space-halfunit);
  align-items: center;
  border-color: var(--dl-color-gray-white);
  border-style: solid;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-halfunit);
  flex-direction: row;
  justify-content: space-between;
}
.video-course-dark-text13 {
  color: var(--dl-color-gray-white);
  font-size: 16px;
}
.video-course-dark-container14 {
  flex: 0 0 auto;
  height: 40px;
  display: flex;
  opacity: 0.2;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  margin-top: var(--dl-space-space-halfunit);
  align-items: center;
  border-color: var(--dl-color-gray-white);
  border-style: solid;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-halfunit);
  flex-direction: row;
  justify-content: space-between;
}
.video-course-dark-text14 {
  color: var(--dl-color-gray-white);
  font-size: 16px;
}
.video-course-dark-container15 {
  flex: 0 0 auto;
  height: 40px;
  display: flex;
  opacity: 0.2;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  margin-top: var(--dl-space-space-halfunit);
  align-items: center;
  border-color: var(--dl-color-gray-white);
  border-style: solid;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-halfunit);
  flex-direction: row;
  justify-content: space-between;
}
.video-course-dark-text15 {
  color: var(--dl-color-gray-white);
  font-size: 16px;
}
.video-course-dark-container16 {
  flex: 0 0 auto;
  height: 40px;
  display: flex;
  opacity: 0.2;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  margin-top: var(--dl-space-space-halfunit);
  align-items: center;
  border-color: var(--dl-color-gray-white);
  border-style: solid;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-halfunit);
  flex-direction: row;
  justify-content: space-between;
}
.video-course-dark-text16 {
  color: var(--dl-color-gray-white);
  font-size: 16px;
}
.video-course-dark-container17 {
  flex: 0 0 auto;
  height: 40px;
  display: flex;
  opacity: 0.2;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  margin-top: var(--dl-space-space-halfunit);
  align-items: center;
  border-color: var(--dl-color-gray-white);
  border-style: solid;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-halfunit);
  flex-direction: row;
  justify-content: space-between;
}
.video-course-dark-text17 {
  color: var(--dl-color-gray-white);
  font-size: 16px;
}
.video-course-dark-container18 {
  flex: 0 0 auto;
  height: 40px;
  display: flex;
  opacity: 0.2;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  margin-top: var(--dl-space-space-halfunit);
  align-items: center;
  border-color: var(--dl-color-gray-white);
  border-style: solid;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-halfunit);
  flex-direction: row;
  justify-content: space-between;
}
.video-course-dark-text18 {
  color: var(--dl-color-gray-white);
  font-size: 16px;
}
.video-course-dark-video-content {
  flex: 5;
  width: 80%;
  height: 100%;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  padding-top: var(--dl-space-space-oneandhalfunits);
  padding-left: var(--dl-space-space-fiveunits);
  padding-right: var(--dl-space-space-fiveunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-oneandhalfunits);
  justify-content: flex-start;
}
.video-course-dark-container19 {
  width: 100%;
  display: flex;
  align-self: flex-start;
  align-items: center;
  margin-bottom: var(--dl-space-space-twounits);
  justify-content: space-between;
}
.video-course-dark-container20 {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: stretch;
  flex-direction: column;
  justify-content: space-between;
}
.video-course-dark-text19 {
  color: var(--dl-color-gray-white);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: var(--dl-space-space-halfunit);
}
.video-course-dark-text20 {
  color: var(--dl-color-gray-white);
  opacity: 0.5;
}
.video-course-dark-container21 {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
}
.video-course-dark-button {
  color: var(--dl-color-primary-teal-primary);
  display: flex;
  font-size: 18px;
  align-self: center;
  transition: 0.3s;
  align-items: center;
  font-weight: 700;
  margin-left: var(--dl-space-space-unit);
  padding-top: var(--dl-space-space-halfunit);
  border-color: var(--dl-color-primary-teal-primary);
  border-width: 1px;
  margin-right: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-unit);
  border-radius: 50px;
  padding-right: var(--dl-space-space-twounits);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-halfunit);
  background-color: var(--dl-color-gray-white);
}
.video-course-dark-button:hover {
  color: var(--dl-color-gray-white);
  background-color: var(--dl-color-gray-black);
}
.video-course-dark-image1 {
  width: 24px;
  object-fit: cover;
}
.video-course-dark-text21 {
  margin-left: var(--dl-space-space-halfunit);
  margin-right: 0px;
}
.video-course-dark-button1 {
  color: var(--dl-color-gray-white);
  display: flex;
  font-size: 18px;
  align-self: center;
  transition: 0.3s;
  align-items: center;
  font-weight: 700;
  padding-top: var(--dl-space-space-halfunit);
  border-width: 0px;
  padding-left: var(--dl-space-space-twounits);
  border-radius: 50px;
  padding-right: var(--dl-space-space-unit);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-halfunit);
  background-color: var(--dl-color-primary-teal-primary);
}
.video-course-dark-button1:hover {
  color: var(--dl-color-gray-white);
  background-color: var(--dl-color-gray-black);
}
.video-course-dark-text22 {
  margin-right: var(--dl-space-space-halfunit);
}
.video-course-dark-icon6 {
  fill: var(--dl-color-gray-white);
  width: 24px;
  height: 24px;
}
.video-course-dark-container22 {
  width: 100%;
  height: 100%;
  display: flex;
  align-self: stretch;
  align-items: stretch;
  flex-direction: column;
  justify-content: space-between;
}
.video-course-dark-iframe {
  width: 100%;
  height: 620px;
  padding-bottom: var(--dl-space-space-threeunits);
}
.video-course-dark-text23 {
  color: var(--dl-color-gray-white);
  font-size: 21px;
  font-weight: 700;
  margin-bottom: var(--dl-space-space-unit);
}
.video-course-dark-text24 {
  color: var(--dl-color-gray-white);
  opacity: 0.5;
}
</style>
