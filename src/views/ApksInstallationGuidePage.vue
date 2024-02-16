<template>
  <v-container>
    <v-row no-gutters>
      <v-col no-gutters class="document">
        <h1>APKS格式安装包 安装教程</h1>
        <p>
          如您使用的是鸿蒙系统, 则无需参考以下内容,
          如普通安装包一样正常安装即可。
        </p>
        <p>
          如您使用的是MIUI, 则需要在设置-开发人员选项中,
          关闭MIUI优化。请自行搜索如何进行此操作。
        </p>
        <ol>
          <li>如需安装APKS格式的安装包, 请下载并安装本站首页的ZArchiver。</li>
          <li>
            在ZArchiver中找到你所下载的.apks文件(如通过浏览器下载,
            则应在<code>/storage/emulated/0/Download/</code>目录,
            或<code>/sdcard/Download/</code>目录下)。
          </li>
          <li>
            在ZArchiver内双击.apks文件, 选择安装。 在安装前,
            你可能被要求授予ZArchiver文件访问和应用安装权限。
            如安装时未弹出授予应用安装权限的窗口且安装失败,
            请在系统设置中的应用权限设置内手动为ZArchiver添加安装应用/安装未知应用的权限。
          </li>
          <li>
            如您已安装旧版游戏, 并希望更新游戏, 则按照同样的步骤安装即可,
            旧版游戏会被自动覆盖安装。
          </li>
        </ol>
      </v-col>
    </v-row>
  </v-container>
</template>
