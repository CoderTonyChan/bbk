# UI
PS 图片打开可能有点慢

## 商品详情页和课程详情页
App功能点上基本都齐全 个人觉得这类App核心体验在**购买**和**观看视频** 主要建议优化**商品详情页**和**课程详情页**

**商品详情页**主要是模仿淘宝的 可以花点时间优化

**课程详情页**可以参考视频类软件优化

## 首页
首页奇怪的间隔
![6689CAA3-3FB5-4DBB-B5C5-D5BFAB76EF65](https://user-images.githubusercontent.com/16996753/61770901-f7238f00-ae20-11e9-9ea4-5450023b9590.jpeg)

## 分类页面
微信打开的**Web端**  点击下方的按钮之后 无法继续拖动 **iOS端** 分类页面 **滚动条不太美观**
![3BB73E79-AD2A-47B8-B697-9563E26839F1](https://user-images.githubusercontent.com/16996753/61770907-f854bc00-ae20-11e9-934d-340077bb6576.png)

## 发现页面
帖子评论 选择图片有问题
而且会闪退

![C868D4F1-10D7-4A02-BA68-09E40E544BD0](https://user-images.githubusercontent.com/16996753/61770912-f8ed5280-ae20-11e9-8f26-8915a5affbe7.jpeg)

**cell高度计算不正确 也可能是cell重用问题 界面最好能左右滑动**
![F7F46CE8-C8F8-438F-994E-3A77D504D385](https://user-images.githubusercontent.com/16996753/61770914-f985e900-ae20-11e9-9e0c-d84bbebb02c2.png)

## GoodsList页面
MJRreshFooter 显示位置不正确 而去可以隐藏 MJRefreshHeader也过量使用 切换销量等没必要出现动画 一个**loading**就好类
![D087972E-8B23-4310-BF15-7F3AB83B070D](https://user-images.githubusercontent.com/16996753/61770899-f68af880-ae20-11e9-9dc2-b2ca8b53b373.jpeg)

猜你喜欢 没内容可以隐藏
![798E7F17-53BD-4640-ADD2-3B9BD164D312](https://user-images.githubusercontent.com/16996753/61770902-f7238f00-ae20-11e9-9e79-a801ffa5675f.jpeg)

## 商品详情页
已经购买的课程 也不能在商品详情页播放视频
每次都要点击几次播放按键才能顺利播放
课程名称显示不全
![D0C307F9-C655-48B5-AC42-EE285CAE546D](https://user-images.githubusercontent.com/16996753/61770904-f7bc2580-ae20-11e9-8a9a-07cbe979426c.jpeg)

## 搜索页
分类页的搜索可以和首页的动作一样 没提示很难知道搜什么
搜索页的分类比较难用 建议换成默认搜索全部 然后可以左右滑动（类bilibili）
![1D5E40EB-B0FF-4C04-919A-AE686AFC8C4D](https://user-images.githubusercontent.com/16996753/61771491-91380700-ae22-11e9-8ea7-657e428ae1f5.jpeg)


比如下图我是搜不到任何东西
![B26F6EF5-5D51-443B-9F39-362758818DF1](https://user-images.githubusercontent.com/16996753/61770915-f985e900-ae20-11e9-855e-bc7ce98f7b12.png)

## 分类页
getCatalog.do 请求比较大 单请求60KB 测试平均打开需要**880ms**

## 键盘
键盘提出的界面 点击非键盘位置 建议都收下键盘 在搜索页最明显 

## 反馈页面
反馈页面的音乐功能不好用 我用粤语和国语都识别不了 建议砍掉 这是键盘的功能 iOS自带语音输入
![03C98DCE-476C-422A-AEA6-02454DDE2F36](https://user-images.githubusercontent.com/16996753/61770916-fa1e7f80-ae20-11e9-8702-881d695e50ea.png)
