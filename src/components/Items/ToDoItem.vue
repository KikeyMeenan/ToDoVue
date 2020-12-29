<template>
  <div class="item-listing">
    <div class="item-listing__info">
      {{ item.name }}
      <span v-if="item.assignedToUserId">
        assigned to: {{ item.assignedToUserId }}
      </span>
    </div>
    <div class="item-listing__buttons">
      <custom-button class="action-button" :type="item.complete ? 'success' : 'warning'">
        <font-awesome-icon class="action-button__icon" :icon="item.complete ? 'check' : 'times'" />
      </custom-button>
      <custom-button class="action-button" @click="editItem(item.id)">
        <font-awesome-icon class="action-button__icon" icon="edit" />
      </custom-button>
      <custom-button class="action-button" type="danger">
        <font-awesome-icon class="action-button__icon" icon="trash-alt" />
      </custom-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Item } from '@/types/ToDoTypes';
import CustomButton from '@/components/CustomButton.vue';

@Component({
  components: {
    CustomButton,
  },
  methods: {
    editItem(id: number) {
      this.$router.push({ name: 'EditItem', params: { id: id.toString() } });
    },
  },
})
export default class ToDoItem extends Vue {
  @Prop() private item!: Item
}
</script>

<style scoped lang="scss">
.item-listing {
  margin: 20px;
  border-bottom: 1px solid #ccc;
  display: flex;

  &__info {
    flex-grow: 1;
  }

  &__buttons {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 200px;
    display: flex;
    justify-content: flex-end;
  }
}

.action-button {
  &__icon {
    width: 16px;
  }
}
</style>
