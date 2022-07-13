<template>
  <div>
    <div class="topwrapper">
      <h1 class="blackline bold">C3 Open Campus 2022</h1>
      <div class="date">
        Jul <span class="thu">16</span><span class="blank">_</span> ‣
        <span class="fri ss01">17</span><span class="blank">_</span>
      </div>
      <div class="scroll cv05" @click="scroll">scroll</div>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdJawn0Vyhm7bzLpo4QehjAoSld1AwgXSyNZIIatdIJNElrxQ/viewform"
        target="_blank"
        title="展示会参加申込"
        class="link ovice"
      >
        <img class="icon-img" src="@/assets/ovice.webp" type="image/webp" />
        <div class="hide">
          <span class="fs14">« </span>
          <span class="up">展示会参加申込</span>
        </div>
      </a>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdKmF9kHCJQNp-oVhKxrIaOjvYl6q-3P6GfmolNs7nuULYYYA/viewform"
        target="_blank"
        title="アンケート"
        class="link googleform"
      >
        <img src="../../static/googleform.png" alt="img" />
        <div class="hide">
          <span class="fs14">« </span><span class="up">アンケート実施中！</span>
        </div>
      </a>
      <div class="bgimg"></div>
    </div>
  </div>
</template>

<style scoped>
.topwrapper {
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  height: 100dvh;
  position: relative;
  padding: 20vh 6vw 0 6vw;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  --size: max(calc(calc(5vw + 10vh) / 3), 30px);
  --size-l: calc(calc(5vw + 5vh) / 2.4);
}

.topwrapper,
.topwrapper * {
  text-align: center;
  text-decoration: none;
}

.blackline {
  font-size: max(6.8vw, 44px);
  font-size: calc(var(--size-l) * 120 / 60);
  letter-spacing: 0.2vw;
  color: white;
  display: inline;
  background: -moz-linear-gradient(top, transparent 50%, #3b8070cf 50%);
  background: -webkit-linear-gradient(top, transparent 50%, #3b8070cf 50%);
  background: linear-gradient(to bottom, transparent 50%, #3b8070cf 50%);
}

.date {
  color: white;
  font-size: 5vw;
  font-size: calc(var(--size-l) * 80 / 60);
  line-height: 5vw;
  line-height: calc(var(--size-l) * 80 / 60);
  letter-spacing: 0.08em;
  margin-top: 14vh;
  margin-top: calc(var(--size-l) * 120 / 60);
}

.date span {
  position: relative;
}

.thu::after {
  content: "Sat";
  transform: rotate(90deg);
  position: absolute;
  top: 3vw;
  top: calc(var(--size-l) * 40 / 60);
  left: 6.1vw;
  left: calc(var(--size-l) * 100 / 60);
  font-size: 0.3em;
  font-size: calc(var(--size-l) * 24 / 60);
  line-height: 0.3em;
  line-height: calc(var(--size-l) * 24 / 60);
  letter-spacing: 0.1em;
  letter-spacing: calc(var(--size-l) * 2.4 / 60);
}

.fri::after {
  content: "Sun";
  transform: rotate(90deg);
  position: absolute;
  top: 3vw;
  top: calc(var(--size-l) * 40 / 60);
  left: 6.6vw;
  left: calc(var(--size-l) * 108.2 / 60);
  font-size: 0.3em;
  font-size: calc(var(--size-l) * 24 / 60);
  line-height: 0.3em;
  line-height: calc(var(--size-l) * 24 / 60);
  letter-spacing: 0.2em;
  letter-spacing: calc(var(--size-l) * 4.8 / 60);
}

.blank {
  opacity: 0;
}

.ss01 {
  font-feature-settings: "ss01";
}

.cv05 {
  font-feature-settings: "cv05";
}

.topwrapper a {
  position: absolute;
  right: 0;
  bottom: 0;
}

.link {
  color: black;
  font-size: calc(var(--size) / 2.5);
  background: #fafafa;
  text-align: left;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  width: calc(7 * var(--size));
  height: calc(var(--size) + 10px);
  border-radius: var(--size);
  display: flex;
  overflow: hidden;
  transition: 0.4s ease-out;
  align-items: center;
  justify-content: center;
}

.link:hover {
  padding-right: calc(var(--size) * 2 / 15);
  box-shadow: 4px 4px 8px -2px rgba(0, 0, 0, 0.5);
}

.link * {
  text-align: left;
  transition: 0s;
}
.link div {
  margin-left: 10px;
}

.ovice {
  transform: translate(
    calc(var(--size) - 9vw),
    calc(var(--size) * (-170) / 60)
  );
}

.googleform {
  transform: translate(calc(var(--size) - 9vw), calc(var(--size) * (-80) / 60));
}

.link img {
  height: calc(var(--size) * 0.6);
  width: auto;
}

.fs14 {
  font-size: 28px;
  font-size: calc(var(--size) * 1.4 / 3);
  transform: translate(0, -0.6px);
  display: inline-block;
}

.up {
  transform: translate(0, -1px);
  display: inline-block;
  margin-left: 4px;
}

.scroll {
  color: white;
  font-size: max(1.5vw, 20px);
  font-size: calc(var(--size) * 24 / 60);
  letter-spacing: 0.04em;
  position: absolute;
  bottom: 10vh;
  left: 50%;
  transform: translateX(-50%);
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;
}

.scroll::before {
  content: "";
  background: transparent;
  height: 10vh;
  width: 60%;
  position: absolute;
  left: 20%;
  top: 100%;
}

.scroll::after {
  content: "";
  background: -moz-linear-gradient(
    bottom,
    white 25%,
    transparent 25%,
    transparent 75%,
    white 75%
  );
  background: -webkit-linear-gradient(
    bottom,
    white 25%,
    transparent 25%,
    transparent 75%,
    white 75%
  );
  background: linear-gradient(
    to top,
    white 25%,
    transparent 25%,
    transparent 75%,
    white 75%
  );
  background-size: auto 400%;
  background-position: center bottom;
  height: 10vh;
  width: 2%;
  position: absolute;
  left: 49%;
  top: 100%;
  transition: 0.5s;
}

.scroll:hover::after {
  background-position: center top;
}

.bgimg {
  background-image: url("/topimgPC.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  height: 100dvh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;
}

@media screen and (max-aspect-ratio: 1/1) {
  .bgimg {
    background-image: url("/topimgSP.png");
    width: 100vw;
    height: 100%;
  }
  .link {
    left: 50%;
    transform: translate(-50%, 0);
  }
  .ovice {
    top: calc(64% - 2vw);
  }

  .googleform {
    top: 70%;
  }
}
</style>

<script>
export default {
  methods: {
    scroll() {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
      });
    }
  }
};
</script>
