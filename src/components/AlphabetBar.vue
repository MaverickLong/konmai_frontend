<template>
  <div v-for="i in 26">
    <router-link
      class="alphabet"
      v-bind:style="
        'z-index: 9999; color: #2c3e50 !important; bottom:' +
        (85 - (i * 70) / 26) +
        'vh'
      "
      v-bind:to="{ name: '', hash: '#' + String.fromCharCode(i + 64) }"
      >{{ String.fromCharCode(i + 64) }}</router-link
    >
  </div>
</template>
