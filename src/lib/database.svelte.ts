import type { DomesticTradeRoute, Resources, Village } from "$lib/types.svelte";


const databaseState = $state({
  villages: [
    // {
    //   id: 0,
    //   name: "Test Village",
    //   coordinates: { x: 0, y: 0 },
    //   production: { wood: 12, clay: 14, iron: 18, crop: 24 },
    //   consumption: { wood: 0, clay: 0, iron: 0, crop: 0 },
    //   warehouseCapacity: 800,
    //   granaryCapacity: 1200
    // }
  ],
  domestic_trade_routes: []
});

export let villages: Village[] = databaseState.villages;

export const domestic_trade_routes: DomesticTradeRoute[] = databaseState.domestic_trade_routes

export function addVillage(newVillage: Omit<Village, 'id'>): void {
  const newId = databaseState.villages.length > 0
    ? Math.max(...databaseState.villages.map(v => v.id)) + 1
    : 1;
  
  const villageWithId: Village = { ...newVillage, id: newId };
  
  databaseState.villages = [...databaseState.villages, villageWithId];
  console.log(villages)
}

export function updateProduction(villageId: number, newProduction: Partial<Resources>): void {
  databaseState.villages = databaseState.villages.map(village => {
    if (village.id === villageId) {
      return {
        ...village,
        production: { ...village.production, ...newProduction }
      };
    }
    return village;
  });
}
