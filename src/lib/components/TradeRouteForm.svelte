<script lang="ts">
  import { addDomesticTradeRoute, database} from "$lib/database.svelte";
  import FormElementCombobox from "$lib/components/FormElementCombobox.svelte";
  import VillageFormElementNumber from "$lib/components/VillageFormElementNumber.svelte";
  import FormElementTime from "$lib/components/FormElementTime.svelte";
  import Button from "$lib/components/Button.svelte";
  
  let comboboxVillages = $derived(database.villages.map(village => ({ id: village.id, name: village.name })));
  
  let startVillageId = $state<number>();
  let targetVillageId = $state<number>();
  
  let wood = $state(0);
  let clay = $state(0);
  let iron = $state(0);
  let crop = $state(0);
  
  let startTime = $state<string>();
  
  let addTradeRouteSuccess = $state<Result<number>>();
  $inspect(addTradeRouteSuccess);
  
  let showError = $derived(addTradeRouteSuccess != undefined && !addTradeRouteSuccess.success)
  $inspect(showError);
  
  function handleButtonOnClick() {
    addTradeRouteSuccess = addDomesticTradeRoute({
      startVillageId: startVillageId,
      targetVillageId: targetVillageId,
      resources: {
        wood: wood,
        clay: clay,
        iron: iron,
        crop: crop
      },
      startTime: startTime
    })
  }
</script>

{#if addTradeRouteSuccess && !addTradeRouteSuccess.success}
  <p>{addTradeRouteSuccess.error.message}</p>
{/if}

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
  
  <FormElementTime elementName="Start Time" bind:value={startTime} />
  <Button buttonText="Submit" onclick={handleButtonOnClick} />
</div>

<style>
  .container {
    background: aquamarine;
  }
</style>