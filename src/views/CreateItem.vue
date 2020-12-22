<template>
  <div>
    <ItemForm title="Create Item" @submitForm="createItem" />
    <ActionMessage />
  </div>
</template>

<script lang="ts">
import ItemForm from '@/components/Items/ItemForm.vue';
import ActionMessage from '@/components/ActionMessage/ActionMessage.vue';
import { Component, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex';

@Component({
  components: {
    ItemForm,
    ActionMessage,
  },
  methods: {
    ...mapActions('ItemModule', {
      createItem: 'createItem',
    }),
  },
})
export default class CreateItem extends Vue {}
</script>
