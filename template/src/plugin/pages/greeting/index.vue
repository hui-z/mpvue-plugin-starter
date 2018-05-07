<template>
  <div class="container" @click="clickHandle('test click', $event)">
    <card :text="motto"></card>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  mpType: 'component',
  data () {
    return {
      motto: 'Hello World from plugin'
    }
  },

  components: {
    card
  },

  methods: {
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  }
}
</script>

<style scoped>
</style>
