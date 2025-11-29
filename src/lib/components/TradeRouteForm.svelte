<script lang="ts">
  import { database } from "$lib/database.svelte";
  import FormElementCombobox from "$lib/components/FormElementCombobox.svelte";
  import VillageFormElementNumber from "$lib/components/VillageFormElementNumber.svelte";
  
  let comboboxVillages = $derived(database.villages.map(village => ({ id: village.id, name: village.name })));
  
  let startVillageId = $state<number>();
  let targetVillageId = $state<number>();
  
  let wood = $state(0);
  let clay = $state(0);
  let iron = $state(0);
  let crop = $state(0);
</script>

<div class="container">
  <FormElementCombobox 
      listElements={comboboxVillages} 
      elementName="Start Village"
      bind:value="{startVillageId}"
  />
  <FormElementCombobox
      listElements={comboboxVillages}
      elementName="Target Village"
      bind:value="{targetVillageId}"
  />
  <VillageFormElementNumber elementName="Wood" bind:value={wood} />
  <VillageFormElementNumber elementName="Clay" bind:value={clay} />
  <VillageFormElementNumber elementName="Iron" bind:value={iron} />
  <VillageFormElementNumber elementName="Crop" bind:value={crop} />
</div>

<style>
  .container {
    background: aquamarine;
  }
</style>