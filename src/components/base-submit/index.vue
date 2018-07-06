// TODO INSERT A COMMENT REFERENCE TO EXTERNAL URL IF POSSIBLE

<template>
  <button type="submit" class="base-submit" :class="className" @click="onClick" :disabled="isDisabled"><slot>BaseSubmit</slot></button>
</template>

<script>
  export default {
    name: 'BaseSubmit',
    props: {
      className: {
        type: String,
        default: '',
      },
      onClick: {
        type: Function,
        default: () => () => null
      },
      isDisabled: {
        type: Boolean,
        default: false,
      },
    },
  }
</script>

<style scoped>
  .base-submit {
    font-size: 12px;
    font-family: Arial, sans-serif;
    border: 1px solid rgba(0,0,0,1);
    background-color: rgba(0,0,0,0.1);
    padding: 12px;
  }
  .base-submit--alt {
    border: 1px solid rgba(255,0,0,1);
    background-color: rgba(255,0,0,0.1);
  }
  .base-submit[disabled] {
    opacity: 0.3;
  }
</style>
