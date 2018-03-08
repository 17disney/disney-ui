import TabItem from './tab-item.vue'
import TabScroll from './tab-scroll.vue'

TabItem.install = function(Vue) {
  Vue.component(TabItem.name, TabItem)
  Vue.component(TabScroll.name, TabScroll)
}

export default TabItem
