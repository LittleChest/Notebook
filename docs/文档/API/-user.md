# /user

| 属性      | 值    |
| --------- | ----- |
| protected | false |
| public    | true  |

获取客户端与用户信息。

## 用法

| 类型     | 接受值 |
| -------- | ------ |
| 请求方法 | GET    |

## 返回

| 状态码 | 类型             | 描述                   |
| ------ | ---------------- | ---------------------- |
| 200    | application/json | 返回客户端与用户信息。 |
| 500    | 无               | 发生内部错误。         |

## JSON 结构

| 属性     | 类型           | 描述                                                                |
| -------- | -------------- | ------------------------------------------------------------------- |
| ip       | string         | 客户端 IPv4 或 IPv6 地址。                                          |
| asn      | number         | IP 地址对应的自治系统编号（ASN）。                                  |
| asorg    | string         | IP 地址对应的自治系统组织名称。                                     |
| colo     | string         | 已连接的 [Cloudflare 数据中心](https://www.cloudflarestatus.com/)。 |
| pseudo   | string 或 null | 当客户端使用 IPv6 时，Cloudflare 生成的 Pseudo IPv4 地址。          |
| id       | string 或 null | 当客户端已登入时，用户的 GitHub ID。                                |
| username | string 或 null | 当客户端已登入时，用户的 GitHub 用户名。                            |
| name     | string 或 null | 当客户端已登入时，用户的 GitHub 名称。                              |
| trusted  | boolean        | 用户是否为受信任用户。未登入时此值始终为 `false`。                  |

### 示例

200：

```json
{
  "ip": "2606:4700:4700::1",
  "asn": 13335,
  "asorg": "Cloudflare, Inc.",
  "colo": "TPE",
  "pseudo": "240.16.0.1",
  "id": 81231195,
  "username": "LittleChest",
  "name": "喵喵箱",
  "trusted": false
}
```
