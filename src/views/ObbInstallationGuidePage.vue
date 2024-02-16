<template>
  <v-container>
    <v-row no-gutters>
      <v-col no-gutters class="document">
        <h1>APK安装包+OBB数据包游戏安装教程</h1>
        <p>部分游戏除APK安装包外, 还有OBB格式的数据包。</p>
        <p>
          如下图所示,
          当一个游戏的安装包下方还有1~2个同区服的"OBB数据包文件"栏目,
          则该游戏需要放置<b>所有OBB数据包文件</b>才可正常运行。不完整或错误放置OBB数据包将导致游戏无法启动。
        </p>
        <br />
        <img src="/images/obb1.png" width="400" />
        <br />
        <ol>
          <li>
            您需要下载页面所示的安装包和<b>所有OBB数据包文件</b>,
            以及网站首页提供的ZArchiver。
          </li>
          <li>
            正常安装APK格式的安装包后, 打开游戏, 等游戏卡住后,
            退出游戏并清理后台。
          </li>
          <li>
            安装ZArchiver。接下来的步骤中, 请使用ZArchiver,
            而非系统自带的文件管理器。
          </li>
          <li>
            打开ZArchiver, 找到你所下载的OBB格式数据包。(如通过浏览器下载,
            则应在<code>/storage/emulated/0/Download/</code>,
            或<code>/sdcard/Download/</code>的目录下。一部分设备也可能会不显示<code>/storage/emulated/0/</code>,
            直接将该目录显示为手机文件根目录, 即<code>/</code>)。
          </li>
          <li>
            观察你所下载的OBB数据包的文件名, 其格式应该为:
            <code>{main/patch}.一串数字.<b>英文.英文.英文</b>.obb</code><br />
            如: <code>main.1012740.com.rayark.pluto.obb</code><br />
            我们需要的是这段<b>英文.英文.英文</b>。在如上的例子中,
            这段文字是<code>com.rayark.pluto</code>。记住它。
          </li>
          <li>
            将下载的<b>所有OBB数据包</b>移动到该路径:
            <code>/storage/emulated/0/Android/obb/刚刚找到的文字片段/</code
            >。<br />
            在如上的例子中,
            我们要将OBB文件放置于<code>/storage/emulated/0/Android/obb/com.rayark.pluto/</code>目录下。<br />
            放置后的数据包文件目录应该为:
            <code
              >/storage/emulated/0/Android/obb/com.rayark.pluto/main.1012740.com.rayark.pluto.obb</code
            >。
            <b>不要修改OBB数据包的文件名。</b>
          </li>
          <li>
            在复制时,
            ZArchiver可能会要求您提供<code>/Android/obb/</code>目录的访问权限。点击确认后,
            可能会进入系统默认管理器, 继续全部选择确认即可。
          </li>
          <li>OBB数据包放置完成后, 游戏就能够正常打开。</li>
          <li>
            更新游戏时, 正常覆盖安装APK安装包,
            然后必须使用ZArchiver删除旧的OBB文件, 并重新下载OBB数据包,
            重复上述步骤, 以将最新的数据包放置于正确的目录。
          </li>
        </ol>
      </v-col>
    </v-row>
  </v-container>
</template>
