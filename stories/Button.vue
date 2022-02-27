<template>
  <button type="button">{{ label }}</button>
</template>

<script lang="ts">
// import './button.css';
import { reactive, computed } from 'vue';
import { defineComponent } from "vue";

export default defineComponent({
  name: 'my-button',
  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value: string) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },
});
</script>
