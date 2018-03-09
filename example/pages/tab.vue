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

      <p>Scroll tab</p>

      <ds-navbar>
        <ds-tab-scroll ref="scroll" :list="attTypeTab.list" v-model="attTypeTab.selectedId">
          <ds-tab-item :key="item.id" :id="item.id" v-for="item in attTypeTab.list">{{item.name}}</ds-tab-item>
        </ds-tab-scroll>
      </ds-navbar>

      <p>ATT tab</p>
      <ds-navbar :wheel="true">
        <ds-tab-scroll :list="attTypeTab.list" :wheel="true" @change="change" ref="scroll" v-model="attTypeTab.selectedId">
          <ds-tab-item :key="item.id" :id="item.id" v-for="item in attTypeTab.list">{{item.name}}</ds-tab-item>
        </ds-tab-scroll>
        <div slot="focus-icon">
          <ds-icon :name="selectedIcon"></ds-icon>
        </div>
      </ds-navbar>

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
      attTypeTab
    }
  },
  computed: {
    // selectedId() {
    //   // return attTypeTab['list'][attTypeTab.selectedIndex]['id']
    // },
    selectedIcon() {
      return attTypeTab['list'][attTypeTab.selectedIndex]['icon']
    }
  },
  mounted() {

  },
  methods: {
    change: function (newVal, oldVal) {
      this.attTypeTab.selectedIndex = newVal
      this.attTypeTab.selectedId = this.attTypeTab['list'][newVal]['id']
    }
  },
  components: {
    CubePage
  }
}
</script>
