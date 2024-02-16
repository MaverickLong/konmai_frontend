<script>
export default {
  data() {
    return {
      drawer: document.documentElement.clientWidth > 719,
      permanent: document.documentElement.clientWidth > 719,
    };
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        window.fullWidth = document.documentElement.clientWidth;
        this.permanent = document.documentElement.clientWidth > 719;
      })();
    };
  },
};
</script>

<template>
  <v-app-bar density="comfortable" color="white" order="-1" elevation="0">
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Konmai Academy</v-toolbar-title>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" elevation="0" :permanent="permanent">
    <v-list lines="false">
      <v-list-item>
        <router-link to="/"> 游戏下载 </router-link>
      </v-list-item>
      <v-list-item>
        <router-link to="/updates"> 更新日志 </router-link>
      </v-list-item>
      <v-list-item>
        <router-link to="/about"> 关于本站 </router-link>
      </v-list-item>
      <v-list-item>
        <router-link to="/rules-of-inclusion"> 游戏收录规则 </router-link>
      </v-list-item>
      <v-list-item>
        <router-link to="/license"> 开源与许可证 </router-link>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup></script>
