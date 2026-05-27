// 工具数据配置：增删工具请直接编辑本文件
// 未上线工具：url 填 unavailable.html，status 用 pending
window.TOOLS_DATA = {
  "sections": [
    {
      "id": "urban",
      "title": "城市研究 Urban Reseach",
      "type": "tools",
      "tools": [
        {
          "abbr": "StocKase",
          "name": "存量楼宇活化案例库",
          "url": "http://10.253.6.206:5173/",
          "icon": "images/026-offices.svg",
          "status": "warning",
          "statusText": "需内网访问"
        },
        {
          "abbr": "UrbanCheck",
          "name": "公服数据展示与城市区位分析",
          "url": "unavailable.html",
          "icon": "images/map (1).svg",
          "status": "pending",
          "statusText": "尚未开放"
        },
        {
          "abbr": "RegionShot",
          "name": "城市区域场地模型生成",
          "url": "unavailable.html",
          "icon": "images/Urban Planning.svg",
          "status": "pending",
          "statusText": "尚未开放"
        }
      ]
    },
    {
      "id": "architecture",
      "title": "建筑创作 Architectural Design",
      "type": "tools",
      "tools": [
        {
          "abbr": "ProtoMass",
          "name": "建筑体量原型演绎工具",
          "url": "unavailable.html",
          "icon": "images/geometry.svg",
          "status": "pending",
          "statusText": "尚未开放"
        },
        {
          "abbr": "OvalAgent",
          "name": "体育建筑智能设计助手",
          "url": "https://aiovaltool.com/",
          "icon": "images/stadium.svg",
          "status": "active",
          "statusText": "正常访问"
        }
      ]
    },
    {
      "id": "external",
      "title": "外部资源",
      "type": "external",
      "links": [
        {
          "name": "OpenAI",
          "url": "https://openai.com",
          "description": "人工智能研究公司"
        },
        {
          "name": "阿里云控制台",
          "url": "https://home.console.aliyun.com",
          "description": "云计算管理平台"
        }
      ]
    }
  ]
};
