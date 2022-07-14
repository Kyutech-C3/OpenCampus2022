<template>
  <div ref="target" class="wrap">
    <transition name="fade">
      <div v-show="visible" class="wrap">
        <div class="titleWrap">
          <div class="titleContent">About C3</div>
        </div>
        <div class="main">
          <div class="mainContent">
            CompositeComputerClub(通称C3)はコンピューターを用いて制作している部活です！！ゲーム制作、3Dモデリング、イラストや音楽制作、Webアプリやサービス開発など活動内容は多岐にわたり、日々好きなことを自由に制作を行っています!!<br /><br />
            また、初心者や既存の部員も楽しく制作活動ができる環境を作っています！C3ではオープンキャンパスや工大祭などの学内イベントで作品を展示したり学外のイベントに参加している部員もいます。そして、部内でも作品を見せ合う環境を作っており、作るだけではなく作品を見せれる環境作りを行っております！！このようにC3はコンピューターを用いて作品を作ってもらい作品を見せあえる部活になっております！<br /><br />
            そして、C3では多くの部員が色んな思いを持ち活動しております。もし、九工大情報工学部に入学することがあれば是非とも見学して、『〇〇を作ってみたい』という気持ちになって入部してもらえると嬉しいです！<br /><br />
            当サイトも部員が作成したもので、ここでは部員が作った創作物を体験することができます。C3に興味がある方、そうではない方でも是非観ていって下さい。<br /><br />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const elementY = this.$refs.target.getBoundingClientRect().top;
      const y = window.pageYOffset;
      if (!this.visible) {
        this.visible = elementY < window.innerHeight;
      } else if (elementY > window.innerHeight) {
        this.visible = !this.visible;
      }
    }
  }
};
</script>

<style scoped>
/* animation */
.fade-enter-active,
.fade-leave-active {
  transition: all 3s ease;
}
.fade-enter,
.fade-leave-to {
  transform: translateY(10%);
  opacity: 0;
}

/* style */
.wrap {
  background-color: #fafafa;
}
.titleWrap {
  position: relative;
  padding: 5vh 0 2vh 0;
}
.titleContent {
  padding: 0 0.1em;
  color: #3b8070;
  font-size: clamp(60px, 15vw, 288px);
  font-weight: bold;
  width: 100%;
  height: max(18vw, 70px);
  z-index: 10;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: inline;
  background: -moz-linear-gradient(top, transparent 50%, #ffff22b3 50%);
  background: -webkit-linear-gradient(top, transparent 50%, #ffff22b3 50%);
  background: linear-gradient(to bottom, transparent 50%, #ffff22b3 50%);
}
.main {
  background-color: #fafafa;
}
.mainContent {
  background-color: #fafafa;
  text-align: left;
  color: #4a4a4a;
  font-size: clamp(16px, 2vw, 39px);
  line-height: max(4vw, 20px);
  text-align: justify;
  text-justify: auto;
}
.mainContent::selection {
  background: #4565863d;
}
/* スマホ以上 */
@media screen and (min-width: 481px) {
  .titleContent {
    margin: 0 auto 0 8%;
  }
  .main {
    padding: 0 8% 10vh 0;
    margin: 0 auto 0 18vw;
  }
}
/* スマホ幅 */
@media screen and (max-width: 480px) {
  .titleContent {
    margin: 0 auto 0 20px;
  }
  .main {
    padding: 0 0 10vh 0;
    margin: 0 auto;
    display: flex;
  }
  .mainContent {
    margin: 0 30px;
    display: inline-block;
  }
}
</style>
