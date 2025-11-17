<script lang="ts">
  import VillageFormElementNumber from "$lib/components/VillageFormElementNumber.svelte";
  import VillageFormElementText from "$lib/components/VillageFormElementText.svelte";
  import VillageFormElementCoordinates from "$lib/components/VillageFormElementCoordinates.svelte";
  import Button from "$lib/components/Button.svelte";
  import { addVillage } from "$lib/database.svelte";

  let villageName = $state("");
  let villageCoordinatesX = $state(0);
  let villageCoordinatesY = $state(0);

  let woodProduction = $state<number>(0);
  let clayProduction = $state<number>(0);
  let ironProduction = $state<number>(0);
  let cropProduction = $state<number>(0);

  let warehouseCapacity = $state(0);
  let granaryCapacity = $state(0);

  let woodConsumption = $state<number>(0);
  let clayConsumption = $state<number>(0);
  let ironConsumption = $state<number>(0);
  let cropConsumption = $state<number>(0);
  
  function isStateValid(): boolean {
    console.log("Button Pressed!");
    return true;
  }
  
  function onSubmit(): void {
    if (isStateValid()) {
      addVillage({
        name: villageName,
        coordinates: {x: villageCoordinatesX, y: villageCoordinatesY},
        production: {wood: woodProduction, clay: clayProduction, iron: ironProduction, crop: cropProduction},
        consumption: {wood: woodConsumption, clay: clayConsumption, iron: ironConsumption, crop: cropConsumption},
        granaryCapacity: granaryCapacity,
        warehouseCapacity: warehouseCapacity
      });
    } else {
      console.log("Wrong");
    }
  }
</script>

<div class="form_container">
  <div class="span-2">
    <VillageFormElementText element_name="Village Name" bind:value={villageName} />
  </div>

  <div class="coordinates-container span-2">
    <VillageFormElementNumber element_name="X Coordinate" bind:value={villageCoordinatesX} --width="120px"/>
    <VillageFormElementNumber element_name="Y Coordinate" bind:value={villageCoordinatesY} --width="120px"/>
  </div>

  <div>
    <VillageFormElementNumber element_name="Wood Production" bind:value={woodProduction} />
  </div>
  <div>
    <VillageFormElementNumber element_name="Clay Production" bind:value={clayProduction}/>
  </div>
  <div>
    <VillageFormElementNumber element_name="Iron Production" bind:value={ironProduction}/>
  </div>
  <div>
    <VillageFormElementNumber element_name="Crop Production" bind:value={cropProduction}/>
  </div>

  <div>
    <VillageFormElementNumber element_name="Wood Consumption" bind:value={woodConsumption}/>
  </div>
  <div>
    <VillageFormElementNumber element_name="Clay Consumption" bind:value={clayConsumption}/>
  </div>
  <div>
    <VillageFormElementNumber element_name="Iron Consumption" bind:value={ironConsumption}/>
  </div>
  <div>
    <VillageFormElementNumber element_name="Crop Consumption" bind:value={cropConsumption}/>
  </div>
  
  <div class="span-2">
    <VillageFormElementNumber element_name="Warehouse Capacity" bind:value={warehouseCapacity}/>
  </div>
  <div class="span-2">
    <VillageFormElementNumber element_name="Granary Capacity" bind:value={granaryCapacity}/>
  </div>
  
  <div class="span-2"></div>
  <div></div>

  <div>
    <Button button_text="Submit" onclick={onSubmit}/>
  </div>
</div>

<style>
  .form_container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  .span-4 {
    grid-column: span 4;
    width: 100%;
  }

  .span-2 {
    grid-column: span 2;
  }

  .coordinates-container {
    display: flex;
    gap: 20px;
  }

  .coordinates-container > :global(*) {
    flex: 1;
  }

  /* This makes the components fill their container divs. */
  :global(.form_container > div > *) {
    width: 100%;
  }
</style>
