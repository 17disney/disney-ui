const attType = [
  {
    name: '上海迪士尼度假区',
    id: 'destination',
    icon: '',
    showTab: false
  },
  {
    name: '周围景点',
    id: 'entertainment-venue',
    icon: '',
    showTab: false
  },

  {
    name: '主题园区',
    id: 'land',
    icon: '',
    showTab: false
  },
  {
    name: '游乐项目',
    id: 'attraction',
    icon: 'attractions',
    showTab: true
  },
  {
    name: '娱乐演出',
    id: 'entertainment',
    icon: 'entertainment',
    showTab: true
  },

  {
    name: '餐饮',
    id: 'restaurant',
    icon: 'dining',
    showTab: true
  },
  {
    name: '商店',
    id: 'merchandisefacility',
    icon: 'in-park-shopping',
    showTab: true
  },
  {
    name: '洗手间',
    id: 'fadsgfad',
    icon: 'restrooms',
    showTab: true
  },
  {
    name: '迪士尼乐拍通',
    id: 'fadsgfad3sadf2',
    icon: 'photo-pass-plus',
    showTab: true
  },
  {
    name: '主题活动',
    id: 'event',
    icon: 'tours-events',
    showTab: true
  },
  {
    name: '游客服务',
    id: 'evenadsfsfdt',
    icon: 'information',
    showTab: true
  },
  {
    name: '酒店',
    id: 'resort',
    icon: 'resorts',
    showTab: true
  },
  {
    name: '休闲活动',
    id: 'playsfd',
    icon: 'disneyland-recreation',
    showTab: true
  },
  {
    name: '主题乐园',
    id: 'theme-park',
    icon: '',
    showTab: false
  }
  // {
  //   name: 'The BOATHOUSE™',
  //   id: 'restaurant',
  //   icon: '',
  //   showTab: false
  // }
]

const attHotList = [
  {
    id: 'attSoaringOverHorizon;entityType=Attraction;destination=shdr',
    aid: 'attSoaringOverHorizon',
    name: '翱翔•飞越地平线'
  },
  {
    id: 'attRoaringRapids;entityType=Attraction;destination=shdr',
    aid: 'attRoaringRapids',
    name: '雷鸣山漂流'
  },
  {
    id: 'attTronLightcyclePowerRun;entityType=Attraction;destination=shdr',
    aid: 'attTronLightcyclePowerRun',
    name: '创极速光轮'
  },
  {
    id: 'attBuzzLightyearPlanetRescue;entityType=Attraction;destination=shdr',
    aid: 'attBuzzLightyearPlanetRescue',
    name: '巴斯光年星际营救'
  },
  {
    id: 'attSevenDwarfsMineTrain;entityType=Attraction;destination=shdr',
    aid: 'attSevenDwarfsMineTrain',
    name: '七个小矮人矿山车'
  },
  {
    id: 'attAdventuresWinniePooh;entityType=Attraction;destination=shdr',
    aid: 'attAdventuresWinniePooh',
    name: '小熊维尼历险记'
  },
  {
    id: 'attPeterPansFlight;entityType=Attraction;destination=shdr',
    aid: 'attPeterPansFlight',
    name: '小飞侠天空奇遇'
  }
]

exports.attHotList = attHotList

exports.attType = attType
exports.attTypeTab = {
  list: attType.filter(_ => _.showTab),
  selectedId: 'attraction',
  selectedIndex: 0
}

exports.attTypeIcon = (function() {
  let list = []
  attType.forEach(_ => {
    list[_.id] = _.icon
  })
  return list
})()
