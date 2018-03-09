<style lang="stylus" rel="stylesheet/stylus">
@require '../../common/stylus/variable.styl';
@require '../../common/stylus/mixin.styl';

.ds-tab-scroll {
  position: relative;
  width: 100%;

  .scroll-wrapper {
    overflow: hidden;
    position: relative;
  }

  &.is-picker {
    .scroll-content {
      // margin-left: 50%;
    }
  }

  .scroll-content {
    .ds-tab__item {
      float: left;
      display: inline-block;
    }
  }

  .scroll-mark {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    position: absolute;
    left: 50%;
    bottom: -20px;
    margin-left: -20px;
    background: #FFF;
    // box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  }


}
</style>

<template>
  <div class="ds-tab-scroll" :class="{'is-picker': picker}">
    <div class="scroll-wrapper" ref="scroll">
      <div class="scroll-content" ref="tabList">
        <slot></slot>
      </div>
    </div>
    <slot name="focus"></slot>
  </div>
</template>
<script type="text/ecmascript-6">
// import BScroll from 'better-scroll'
import BScroll from '../../../../better-scroll/src'
import propsync from '../../common/mixins/propsync'

const COMPONENT_NAME = 'ds-tab-scroll'
const EVENT_CHANGE = 'change'

export default {
  name: COMPONENT_NAME,
  props: {
    value: {
      // propsync: true
    },
    list: {
      type: Array
    },
    picker: {
      type: Boolean
    },
    options: {
      type: Object
    }
  },

  mounted() {
    this.$nextTick(() => {
      this._initTabListWidth()
      this.initScroll()
    })
  },

  data() {
    return {
      viewWidth: 0,
      tabWidth: 0,
      tabListX: [],
      tabListK: []
    }
  },

  methods: {
    initScroll() {
      if (!this.$refs.scroll) {
        return
      }
      let options = {
        scrollX: true,
        scrollY: false
      }
      if (this.picker) {
        options.probeType = 3
        options.horWheel = {
          tabListPosition: this.tabListX
        }
        // options.startX = -this.viewWidth / 2
      }
      Object.assign(options, this.options)
      this.scroll = new BScroll(this.$refs.scroll,
        options
      )

      this.scroll.on('scrollEnd', (con) => {
        let { x } = con
        // this._activeItem(x)
        // this.$emit(EVENT_CHANGE, this.scroll.getSelectedIndex())
      })
      this.scroll.on('scroll', (con) => {
        let { index } = con
        this.$emit(EVENT_CHANGE, index)
        // this.$emit(EVENT_CHANGE, this.scroll.getSelectedIndex())
      })
    },

    _initTabListWidth() {
      // const tabList = this.$refs.tabList
      // const items = tabList.children
      // let width = 0
      // let tabListX = []
      // let tabListK = []
      // let startK = 0
      // for (let i = 0; i < items.length; i++) {
      //   width += items[i].clientWidth
      //   if (i === 0) startK = -(width / 2)
      //   tabListX[i] = width
      //   tabListK[i] = startK + width
      // }

      // let viewWidth = this.$refs.scroll.clientWidth
      // tabList.style.width = (width + 1) + viewWidth + 'px'
      // this.viewWidth = viewWidth
      // this.tabWidth = width
      // this.tabListX = tabListX
      // this.tabListK = tabListK
    }
  }
}
</script>
