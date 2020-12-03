<template>
  <div>
    <ItemForm v-if="getActiveItem"
      :item="getActiveItem" title="Create Item" @submitForm="editItem" />
  </div>
</template>

<script lang="ts">
import ItemForm from '@/components/Items/ItemForm.vue';
import { Component, Vue } from 'vue-property-decorator';
import { mapActions, mapGetters } from 'vuex';

@Component({
  data() {
    return {
      item: null,
    };
  },
  created() {
    this.$store.dispatch('ItemModule/setActiveItemId', this.$route.params.id);
  },
  computed: {
    ...mapGetters('ItemModule', {
      getActiveItem: 'getActiveItem',
    }),
  },
  components: {
    ItemForm,
  },
  methods: {
    ...mapActions('ItemModule', {
      editItem: 'editItem',
    }),
  },
})
export default class EditItem extends Vue {}
</script>
