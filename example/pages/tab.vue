<style lang="stylus" rel="stylesheet/stylus">
.tab-view .content > * {
  margin: 10px 0;
}
</style>

<template>
  <cube-page type="tab-view" title="Tab" desc="">
    <template slot="content">
      <p>Default tab</p>
      <ds-navbar v-model="selected">
        <ds-tab-item id="1">选项一</ds-tab-item>
        <ds-tab-item id="2">选项二</ds-tab-item>
        <ds-tab-item id="3">选项三</ds-tab-item>
      </ds-navbar>

      <!-- <p>Scroll tab</p>

      <ds-navbar>
        <ds-tab-scroll ref="scroll" :list="attTypeTab.list" v-model="attTypeTab.selectedId">
          <ds-tab-item :key="item.id" :id="item.id" v-for="item in attTypeTab.list">{{item.name}}</ds-tab-item>
        </ds-tab-scroll>
      </ds-navbar> -->

      <p>ATT tab</p>
      <ds-navbar :wheel="true">
        <ds-tab-scroll :list="attTypeTab.list" :picker="true" @change="change" ref="scroll" :options="options" v-model="selectedId">
          <ds-tab-item :key="item.id" :id="item.id" v-for="item in attTypeTab.list">{{item.name}}</ds-tab-item>
        </ds-tab-scroll>
        <div slot="focus-icon">
          <ds-icon :name="selectedIcon"></ds-icon>
        </div>

      </ds-navbar>

      <!-- <div>
        <ds-cell class="page-part" title="当前选中">{{ selected }}</ds-cell>
      </div> -->

      <!-- <ds-tab-container v-model="selected">
        <ds-tab-container-item id="1">
          <ds-cell v-for="n in 10" :title="'内容 ' + n" />
        </ds-tab-container-item>
        <ds-tab-container-item id="2">
          <ds-cell v-for="n in 4" :title="'测试 ' + n" />
        </ds-tab-container-item>
        <ds-tab-container-item id="3">
          <ds-cell v-for="n in 6" :title="'选项 ' + n" />
        </ds-tab-container-item>
      </ds-tab-container> -->

    </template>
  </cube-page>
</template>

<script type="text/ecmascript-6">
import CubePage from 'example/components/cube-page.vue'
import { attTypeTab } from '../data/park'

export default {
  data() {
    return {
      selected: '1',
      attTypeTab,
      options: {
        probeType: 2
        // wheel: {
        //   // selectedIndex: this.pickerSelectedIndex[i],
        //   /** 默认值就是下面配置的两个，为了展示二者的作用，这里再配置一下 */
        //   wheelWrapperClass: 'scroll-wrapper',
        //   wheelItemClass: 'da-tab__item'
        // }
      }
    }
  },
  computed: {
    selectedId() {
      return attTypeTab['list'][attTypeTab.selectedIndex]['id']
    },
    selectedIcon() {
      return attTypeTab['list'][attTypeTab.selectedIndex]['icon']
    }
  },
  mounted() {

  },
  methods: {

    change: function (newVal, oldVal) {
      this.attTypeTab.selectedIndex = newVal
    }

  },
  components: {
    CubePage
  }
}
</script>
