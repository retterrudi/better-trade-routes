<script lang="ts">
  import type { villageModel } from "$lib/types.svelte";
  import ResourceIndicator from "$lib/components/ResourceIndicator.svelte";
  const mockData: villageModel[] = [
    {
      villageName: "Capital",
      xCoordinate: 50,
      yCoordinate: -25,
      woodProduction: 1250,
      clayProduction: 1100,
      ironProduction: 980,
      cropProduction: 450,
      woodCapacity: 80000,
      clayCapacity: 80000,
      ironCapacity: 80000,
      cropCapacity: 80000,
      woodConsumption: null,
      clayConsumption: null,
      ironConsumption: null,
      cropConsumption: null,
      merchantCount: null
    },
    {
      villageName: "Feeder Village",
      xCoordinate: 52,
      yCoordinate: -26,
      woodProduction: 350,
      clayProduction: 380,
      ironProduction: 410,
      cropProduction: 1500,
      woodCapacity: 80000,
      clayCapacity: 80000,
      ironCapacity: 80000,
      cropCapacity: 80000,
      woodConsumption: null,
      clayConsumption: null,
      ironConsumption: null,
      cropConsumption: null,
      merchantCount: null
    },
    {
      villageName: "New Settlement",
      xCoordinate: 48,
      yCoordinate: -23,
      woodProduction: 80,
      clayProduction: 95,
      ironProduction: 75,
      cropProduction: 50,
      woodCapacity: 1000,
      clayCapacity: 1000,
      ironCapacity: 1000,
      cropCapacity: 1000,
      woodConsumption: null,
      clayConsumption: null,
      ironConsumption: null,
      cropConsumption: null,
      merchantCount: null
    }
  ]
  
  let { tableData = mockData }: { tableData?: villageModel[]} = $props();
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
    </tr>
  </thead>
  <tbody>
  {#each tableData as tableDataRow}
    <tr>
      <td>{tableDataRow.villageName}</td>   
      <td>{tableDataRow.xCoordinate}/{tableDataRow.yCoordinate}</td>
      <td><ResourceIndicator production={tableDataRow.woodProduction} capacity={tableDataRow.woodCapacity}/></td>
      <td><ResourceIndicator production={tableDataRow.clayProduction} capacity={tableDataRow.clayCapacity}/></td>
      <td><ResourceIndicator production={tableDataRow.ironProduction} capacity={tableDataRow.ironCapacity}/></td>
      <td><ResourceIndicator production={tableDataRow.clayProduction} capacity={tableDataRow.cropCapacity}/></td>
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