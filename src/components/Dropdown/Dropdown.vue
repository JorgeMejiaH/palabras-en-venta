<template>
  <div>
    <slot name="toggler" @click.stop="toggle"></slot>
    <div v-if="active">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggle() {
      this.active = !this.active;
    },
  },
};
</script>
