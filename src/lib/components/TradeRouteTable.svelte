<script lang="ts">
  import { database } from "$lib/database.svelte";
</script>

<h2>TradeRouteForm</h2>

<table>
  <thead>
    <tr>
      <th>Start Village</th>
      <th>Target Village</th>
      <th>Wood</th>
      <th>Clay</th>
      <th>Iron</th>
      <th>Crop</th>
      <th>Start Time</th>
    </tr>
  </thead>
  <tbody>
  {#each database.domestic_trade_routes as tradeRoute}
    <tr>
      <td>{database.villages.at(tradeRoute.startVillageId).name}</td>
      <td>{database.villages.at(tradeRoute.targetVillageId).name}</td>
      <td>{tradeRoute.resources.wood}</td>
      <td>{tradeRoute.resources.clay}</td>
      <td>{tradeRoute.resources.iron}</td>
      <td>{tradeRoute.resources.crop}</td>
      <td>{tradeRoute.startTimes}</td>
    </tr>
  {/each}
  </tbody>
</table>