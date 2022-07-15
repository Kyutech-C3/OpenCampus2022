<template>
  <div ref="target" class="wrap">
    <transition name="fade">
      <div v-show="visible" class="wrap">
        <div class="titleWrap">
          <div class="titleContent">Message</div>
        </div>
        <div class="main">
          <div class="mainContent">
            OC特設サイトにご来場ありがとうございます。C3部長を務めさせてさせていただいております。Hayaoです。今年度も一年前、二年前と同様にコロナウイルス関係でオンラインでの開催となってしまいました。しかし、新入部員にとって初めての作品を学内、学外に公開する機会となり、入部してからの短い時間での創作活動でなれない部分も多くあったと思いますが、これらを通して創作する楽しさや、完成時の達成感を得ることができたと思います。<br /><br />
            今現在、昨年度より対面での活動等が増え、慣れない環境の中創作時間を思うように取れず、自分の創作活動を行うことができない時もあったと思います。また、それらの上でOCの企画に協力していただきました。この場を借りて、感謝を申し上げます。<br /><br />
            また、サイトを訪れていただいた方々、今回の部員たちの作品はいかがでしたか？都合がよろしければアンケートの回答、並びに作品へのコメントをお願いします。皆様のお言葉が部員の励みになると思います。<br /><br />
            また、九州工業大学に入学をお考えの方々、入学後のサークル見学などでぜひC3を訪れて見てください。「〇〇を創りたい！」などの、創作意欲があればC3に入部することができます。また雰囲気を知りたいという方の見学もお待ちしております。<br /><br />
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
      // console.log({
      //   y: y,
      //   elementY: elementY
      // });
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
  width: 80%;
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
