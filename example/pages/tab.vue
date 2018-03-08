<style lang="stylus" rel="stylesheet/stylus">
</style>

<template>
  <cube-page type="tab-view" title="Tab" desc="">
    <div slot="content">

      <ds-navbar class="page-part" v-model="selected">
        <ds-tab-item id="1">选项一</ds-tab-item>
        <ds-tab-item id="2">选项二</ds-tab-item>
        <ds-tab-item id="3">选项三</ds-tab-item>
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

    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
import CubePage from 'example/components/cube-page.vue'

export default {
  data() {
    return {
      selected: '1'
    }
  },
  mounted() {

  },
  methods: {

  },
  components: {
    CubePage
  }
}
</script>
