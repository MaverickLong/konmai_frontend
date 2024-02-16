<script>
export default {
  methods: {
    notify() {
      this.$refs.notif.notify();
    },
  },
};
</script>
<template>
  <v-container>
    <Notification ref="notif" />
    <AlphabetBar />
    <v-row no-gutters>
      <v-col no-gutters class="document">
        <p>
          意见反馈/更新/收录请求请前往
          <a
            rel="nofollow noopener noreferrer"
            target="_blank"
            href="https://space.bilibili.com/1227019768"
            >Bilibili: Konmai 音游下载站</a
          >
        </p>
        <p>
          <a class="clickable" @click="notify()">点此打开下载站使用说明</a>
        </p>
        <p>游戏列表较长, 可以通过右侧首字母选择栏跳转至对应游戏。</p>
        <p>各类工具/介绍/信息等在侧边栏, 点击左上角按钮可打开。</p>
        <p><router-link to="/donate"> 捐助 Konmai 下载站 </router-link></p>
      </v-col>
    </v-row>
    <v-row v-if="json['pinned'].length > 0">
      <span id="pinned"></span>
      <div style="position: absolute; color: grey; font-size: 70%; margin-top: 0.5em;">置顶 / 推广游戏: </div>
      <v-col
        cols="6"
        md="3"
        style="margin-top: 1em;"
        v-for="gameName in json['pinned']"
      >
        <span>
          <GameCard v-bind:game-name="gameName"></GameCard>
        </span>
      </v-col>
    </v-row>
    <v-row v-for="i in 26">
      <span v-bind:id="String.fromCharCode(i + 64).toLowerCase()"></span>
      <div
        style="position: absolute; margin-top: 1em"
        v-if="
          Object.keys(json['packages']).filter((key) =>
            key.toUpperCase().startsWith(String.fromCharCode(i + 64))
          ).length != 0
        "
      >
        {{ String.fromCharCode(i + 64) }}
      </div>
      <v-col
        cols="6"
        md="3"
        v-for="gameName in Object.keys(json['packages']).filter((key) =>
          key.toUpperCase().startsWith(String.fromCharCode(i + 64))
        )"
      >
        <span v-bind:id="gameName.toLowerCase()">
          <GameCard v-bind:game-name="gameName" />
        </span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import GameCard from "../components/GameCard.vue";
import AlphabetBar from "@/components/AlphabetBar.vue";
import json from "../config.json";
import Notification from "../components/Notification.vue";
</script>
