<template>
  <div 
    class="clear-button"
    :class="{'disabled': disabled}" 
    @click="$emit('click')"
  >
    クリア
  </div>
</template>

<script>
export default {
  name: 'TagClearButton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.clear-button {
  font-size: small;
  padding: .3rem .7rem;
  border: 1px solid;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 3px 3px 3px rgba(0,0,0,0.1);
  transition: .15s cubic-bezier(0.45, 0, 0.55, 1);
  user-select: none;
}
.clear-button:hover {
  background-color: #e9e9e9;
}

.disabled {
  opacity: .5;
  pointer-events: none;
}
</style>