// 工具数据配置：增删工具请直接编辑本文件
// 未上线工具：url 填 unavailable.html，status 用 pending
window.TOOLS_DATA = {
  "sections": [
    {
      "id": "urban",
      "title": "城 市 研 究",
      "type": "tools",
      "tools": [
        {
          "abbr": "StocKase",
          "name": "存量楼宇活化案例库",
          "url": "http://10.253.6.206:5173/",
          "icon": "images/icon/026-offices.svg",
          "status": "warning",
          "statusText": "需内网访问"
        },
        {
          "abbr": "UrbanCheck",
          "name": "公服设施体检与城市区位分析",
          "url": "http://10.253.6.206:5180/",
          "icon": "images/icon/map (1).svg",
          "status": "pending",
          "statusText": "需内网访问"
        },
        {
          "abbr": "RegionShot",
          "name": "城市区域场地模型生成",
          "url": "unavailable.html",
          "icon": "images/icon/Urban Planning.svg",
          "status": "pending",
          "statusText": "尚未开放"
        }
      ]
    },
    {
      "id": "architecture",
      "title": "建 筑 创 作",
      "type": "tools",
      "tools": [
        {
          "abbr": "ProtoMass",
          "name": "建筑体量原型演绎工具",
          "url": "unavailable.html",
          "icon": "images/icon/geometry.svg",
          "status": "pending",
          "statusText": "尚未开放"
        },
        {
          "abbr": "OvalAgent",
          "name": "体育建筑智能设计助手",
          "url": "https://aiovaltool.com/",
          "icon": "images/icon/stadium.svg",
          "status": "active",
          "statusText": "正常访问"
        }
      ]
    },
    {
      "id": "external",
      "title": "外 部 资 源",
      "type": "tools",
      "tools": [
        {
          "abbr": "ChatGPT",
          "name": "OpenAI的聊天机器人",
          "url": "https://openai.com",
          "icon": "images/icon/openai-copy.svg",
          "status": "active",
          "statusText": "正常访问"
        },
        {
          "abbr": "Aliyun",
          "name": "阿里云控制台",
          "url": "https://home.console.aliyun.com",
          "icon": "images/icon/阿里云官方-中文LOGO.svg",
          "status": "active",
          "statusText": "正常访问"
        },
        {
          "abbr": "Rhino",
          "name": "犀牛开发者",
          "url": "https://developer.rhino3d.com/",
          "icon": "images/icon/rhinoceros.svg",
          "status": "active",
          "statusText": "正常访问"
        }
      ]
    }
  ]
};
