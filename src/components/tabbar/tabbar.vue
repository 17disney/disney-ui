<template>
  <a class="ds-tab__item" @click="$parent.$emit('input', id)" :class="{ 'is-selected': $parent.value === id }">
    <div class="ds-tab__item--icon">
      <slot name="icon"></slot>
    </div>
    <div class="ds-tab__item--label">
      <slot></slot>
    </div>
  </a>
</template>

<script>
export default {

}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
