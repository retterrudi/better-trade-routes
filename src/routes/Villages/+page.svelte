<script lang="ts">
  import VillagesTable from "$lib/components/VillagesTable.svelte";
  import VillageForm from "$lib/components/VillageForm.svelte";
  import { database } from "$lib/database.svelte";
  
  let length = $derived(database.villages.length);
  
</script>

<VillagesTable />

<div style="margin-bottom: 20px"></div>

<div>
  <VillageForm />
</div>

<div>
  Test

  {"The length of villages table is: " + length.toString()}
</div>
