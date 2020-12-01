<template>
  <div>
    <p>
      name: {{ item.name }},
      complete: {{ item.complete }}
      assigned to: {{ item.assignedToUserId }}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Item } from '@/types/ToDoTypes';

@Component
export default class ToDoItem extends Vue {
  @Prop() private item!: Item;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style> -->
