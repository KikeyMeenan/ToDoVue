<template>
  <ItemForm title="Create Item" @submitForm="createItem" />
</template>

<script lang="ts">
import ItemForm from '@/components/Items/ItemForm.vue';
import { Component, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex';

@Component({
  components: {
    ItemForm,
  },
  methods: {
    ...mapActions('ItemModule', {
      createItem: 'createItem',
    }),
  },
})
export default class CreateItem extends Vue {}
</script>
