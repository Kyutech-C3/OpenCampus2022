<template>
  <div class="footer2">
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSdJawn0Vyhm7bzLpo4QehjAoSld1AwgXSyNZIIatdIJNElrxQ/viewform"
      target="_blank"
      class="link"
      id="ovice"
      title="C3 展覧会申込"
    >
      <img class="icon" src="@/assets/ovice.webp" type="image/webp" />
      <span class="title">&laquo; 展示会参加申込</span>
    </a>
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSdKmF9kHCJQNp-oVhKxrIaOjvYl6q-3P6GfmolNs7nuULYYYA/viewform"
      target="_blank"
      class="link"
      id="survey"
      title="アンケート"
    >
      <font-awesome-icon :icon="['fas', 'file-alt']" class="icon" />
      <span class="title">&laquo; アンケート実施中！</span>
    </a>
  </div>
</template>

<style scoped>
.footer2 {
  display: flex;
  width: 100%;
  height: 158px;
  background-color: rgb(233, 233, 233);
}
.link {
  display: flex;
  text-decoration: none;
  align-items: center;
  width: 70%;
  color: rgb(116, 116, 116);
}
.link:hover {
  opacity: 0.5;
  transition: 0.3s;
}
#ovice {
  justify-content: flex-end;
}
#survey {
  margin-left: 60px;
}
.title {
  margin-left: 30px;
  font-size: 32px;
}
#ovice .icon {
  height: 40px;
  weight: auto;
  color: red;
}
#survey .icon {
  font-size: 40px;
  color: #7347b8;
}
@media screen and (max-width: 1000px) {
  .footer2 {
    flex-direction: column;
    justify-content: center;
    height: 200px;
  }
  #ovice,
  #survey {
    width: 100%;
  }
  #ovice {
    margin-right: 0;
    justify-content: center;
    padding-right: 0;
  }
  #survey {
    margin-top: 30px;
    margin-left: 0;
    padding-left: 0;
    justify-content: center;
  }
}
@media screen and (max-width: 650px) {
  .footer2 {
    height: 180px;
  }
  .title {
    font-size: 25px;
    margin-left: 10px;
  }
  #ovice .icon {
    height: 30px;
  }
  #survey .icon {
    font-size: 30px;
  }
}
@media screen and (max-width: 481px) {
  .footer2 {
    height: 120px;
  }
  .title {
    font-size: 15px;
    margin-left: 10px;
  }
  #ovice,
  #survey {
    padding: 10px;
    margin: 0;
  }
  #ovice .icon {
    height: 20px;
  }
  #survey .icon {
    font-size: 20px;
  }
}
</style>
