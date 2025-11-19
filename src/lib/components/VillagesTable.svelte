<script lang="ts">
  
  import ResourceIndicator from "$lib/components/ResourceIndicator.svelte";
  import { database } from "$lib/database.svelte";
  
</script>

<table>
  <thead>
    <tr>
      <th>Village Name</th>
      <th>Coords</th>
      <th>Wood</th>
      <th>Clay</th>
      <th>Iron</th>
      <th>Crop</th>
      <th>Warehouse Capacity</th>
      <th>Granary Capacity</th>
      <th>Wood</th>
      <th>Clay</th>
      <th>Iron</th>
      <th>Crop</th>
      <th>Merchant Count</th>
    </tr>
  </thead>
  <tbody>
  {#each database.villages as village}
    <tr>
      <td>{village.name}</td>   
      <td>{village.coordinates.x}/{village.coordinates.y}</td>
      <td>{village.production.wood}</td>
      <td>{village.production.clay}</td>
      <td>{village.production.iron}</td>
      <td>{village.production.crop}</td>
      <td>{village.warehouseCapacity}</td>
      <td>{village.granaryCapacity}</td>
      <td>{village.consumption.wood}</td>
      <td>{village.consumption.clay}</td>
      <td>{village.consumption.iron}</td>
      <td>{village.consumption.crop}</td>
    </tr>
  {/each}
  </tbody>
</table>

<style>
  td {
  }
  
  tr {
      border-radius: 8px;
      margin: 16px;
      background: aquamarine;
  }
  
  th {
    text-align: left;
  }
</style>