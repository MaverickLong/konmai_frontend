# Konmai Academy 前端

这是使用Vuetify构建的纯静态Konmai音游下载站前端。由非前端技术人员边学边搓的前端, 主打一个能用就行, 请不要太苛求代码质量。

## 简单的使用方法：

初始化: yarn

构建: yarn build

调试: yarn dev

配置: 调整```src/config.json```(以下所有调整```config```的功能均需要修改该配置文件)

## 功能

### A-Z排序

游戏默认按照A-Z顺序排序。

```config["packages"]```中的顺序仍然会影响游戏在A-Z下的排序, 例如, 假如游戏Awxyz在配置文件中处于游戏Abcde的前面, 那么渲染出的前端中, Azadc依然会在前面。

这带来了一定的排序灵活性。

### '#' 链接跳转

访问```https://konmai_url#samplegame```将会直接跳转到Sample Game。

访问```https://konmai_url#a```将会跳转到网站上的字母A的索引。

该功能不区分大小写, 且会忽略游戏名中的所有空格。

目前该功能基本只用作A-Z的索引跳转, 游戏名跳转功能仅仅用于兼容上一个版本的下载站链接规则。

### 游戏图标设置

前端会自动查找public/icons目录下的<游戏名称>.webp文件, 请在对应目录放置文件。

请注意, 为了兼容性考虑, 游戏名中的 ':' 会被省略, 即游戏名为"Sample: Game"的游戏会匹配"Sample Game.webp"。

### 游戏置顶

设置配置文件的```pinned```, 输入想要置顶的游戏名称。

如果不需要置顶游戏, 直接删除```pinned```配置即可。

例：

```js
config["pinned"]: ["Sample Game"]
```

### 游戏卡片页面注释

```js
config["packages"]["<游戏名称>"]["configs"]["comments"]: "This is a comment"
```

### 自定义链接游戏卡片 (可用于TestFlight / 愚人节)

目前使用了自定义链接之后, 游戏卡片就无法再像正常游戏游戏一样匹配生成链接, 必须使用```urlForceOverride```, 请注意。

```js
config["packages"]["<游戏名称>"]["configs"]["aprilFools"] = true
config["packages"]["<游戏名称>"]["<游戏细分版本>"]["urlForceOverride"] = {"设置的链接名称", "<url>"}

"packages": {
        "Sample: Game": {
            "Sample Platform": {
                "configs": {
                    "aprilFools": true
                },
                "suffix": "apk",                    // Won't have any effect
                "packageName": "com.example.game",  // Won't have any effect
                "version": 123,                     // Unused in frontend anyways
                "versionString": "1.1.1",           // Won't have any effect
                "obb": {},                          // Won't have any effect
                "allocatedServer": [
                    "Sample Server"                 // Won't have any effect
                ],
                "urlForceOverride": {
                    "Sameple URL": "https://example.com"    // Must be set
                }
                "source": "",                       // Unused in frontend anyways
                "url": ""                           // Unused in frontend anyways
            }
        }
    }
```