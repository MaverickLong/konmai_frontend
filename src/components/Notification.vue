<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  mounted() {
    setTimeout(() => {
      if (
        this.$cookies.get("firstTimeUser") == undefined ||
        this.$cookies.get("firstTimeUser") != "true"
      ) {
        this.dialog = true;
        this.$cookies.set("firstTimeUser", "true", 315360000);
      }
    }, 1);
  },
  methods: {
    notify() {
      this.dialog = true;
    },
  },
};
</script>

<template>
  <v-dialog v-model="dialog" width="75%">
    <v-card>
      <v-card-text>
        <h3>请务必仔细阅读本说明后再使用下载站。</h3>
        <p>
          <b>
            任何使用说明内已提及的事项, 请不要私信下载站提问, 我们将不予作答。
          </b>
        </p>
        <p>本通知仅出现一次, 如需重新查看请点击首页"使用说明"链接。</p>
        <ol>
          <li>
            本站不是任何游戏的官方,
            也无法解答任何游玩上的问题。本站唯一的用途是提供游戏的下载与安装教程。
          </li>
          <li>
            如无特别说明,
            本站游戏包<b>仅适用于安卓/鸿蒙设备</b>。点击对应游戏卡片后,
            点击卡片内的对应版本链接即可下载。
          </li>
          <li>
            苹果设备用户无法使用本站安装包资源,
            但可以打开左边栏进入工具页面<router-link to="tools"
              >或点此</router-link
            >查看外服Apple ID注册教程, 使用外服账号获取海外版本游戏。
          </li>
          <li>
            下载后文件后缀为APKS的安装包, 请<router-link
              to="apks-installation-guide"
              >点击这里</router-link
            >查看APKS安装教程。
          </li>
          <li>
            部分游戏除APK安装包外,
            还有OBB格式的数据包。这类游戏的下载链接下方会有1~2个写着"OBB数据包"的栏目,
            请一同下载, 并<router-link to="obb-installation-guide"
              >点击这里</router-link
            >查看APK+OBB安装教程。 如您不确定下载的游戏是否有OBB安装包,
            也请阅读链接中的教程。
          </li>
        </ol>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="dialog = false">关闭</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
