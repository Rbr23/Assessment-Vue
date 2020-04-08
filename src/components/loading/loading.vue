<template>
    <div>
      <div v-if="condition">
          <v-progress-circular
      indeterminate
      color="primary"
    ></v-progress-circular>
     </div>
    </div>
</template>
<script>
export default {
    name: 'loading',
    props: {
        condition: { type:Boolean, required: true },
    }
}
</script>