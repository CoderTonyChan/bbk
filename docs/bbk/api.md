# 防爬和视频下载

## base接口

`sign` `ts` `cookies session`完全没用上

rid 只做了判空

getList接口

```
curl -H 'Host: x.bbkedu.com' -H 'Content-Type: application/json;charset=utf-8' -H 'Accept: application/json' -H 'Accept-Language: zh-Hans-CN;q=1, ja-JP;q=0.9' --data-binary '{"asc":0,"pageCount":"10","page":"1","pid":"0","cpFlag":"0","orderBy":0,"specialId":"230","rid":"11","memId":"11","ts":1563851156}' --compressed 'https://x.bbkedu.com//api/base/getGoodsList.do'
```


## 手机端防范

- 使用ssl pinning
- 下一步也可以选择通讯全加密 就是改造成本大

## 视频防盗链

建议用**referer** 现在浏览器打开地址都能直接播放或者直接用curl命令都能下载

建议后续使用**七牛**的**视频鉴权**

