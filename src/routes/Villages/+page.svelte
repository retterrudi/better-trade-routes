<script lang="ts">
  import VillagesTable from "$lib/components/VillagesTable.svelte";
  import VillageInputForm from "$lib/components/VillageInputForm.svelte";
  import { database } from "$lib/database.svelte";
  
  let length = $derived(database.villages.length);
  
</script>

<VillagesTable />

<div style="margin-bottom: 20px"></div>

<div>
  <VillageInputForm />
</div>

<div>
  Test

  {"The length of villages table is: " + length.toString()}
</div>
