import type { DomesticTradeRoute, Resources, Village } from "$lib/types.svelte";


const databaseState = $state({
  villages: [
    {
      id: 0,
      name: "Village Number 1",
      coordinates: { x: 1, y: -2 },
      production: { wood: 12, clay: 14, iron: 18, crop: 24 },
      consumption: { wood: 0, clay: 0, iron: 0, crop: 0 },
      warehouseCapacity: 800,
      granaryCapacity: 1200,
      merchantCount: 3
    },
    {
      id: 1,
      name: "Village Number 2",
      coordinates: { x: -1, y: 2 },
      production: { wood: 21, clay: 41, iron: 81, crop: 42 },
      consumption: { wood: 20, clay: 30, iron: 40, crop: 50 },
      warehouseCapacity: 1200,
      granaryCapacity: 800,
      merchantCount: 6
    }
  ] as Village[],
  domestic_trade_routes: [
    {
      id: 0,
      startingVillageId: 0,
      targetVillageId: 1,
      resources: { wood: 100, clay: 101, iron: 102, crop: 103 },
      time: [ 0, 1 * 3_600, 2 * 3600, 3 * 3600, 4 * 3600, 5 * 3600, 6 * 3600]
    }
  ] as DomesticTradeRoute[]
});

export const database = databaseState;

export function addVillage(newVillage: Omit<Village, 'id'>): void {
  const newId = databaseState.villages.length > 0
    ? Math.max(...databaseState.villages.map(v => v.id)) + 1
    : 1;
  
  const villageWithId: Village = { ...newVillage, id: newId };
  
  databaseState.villages = [...databaseState.villages, villageWithId];
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

export function addDomesticTradeRoute(newTradeRoute: Omit<DomesticTradeRoute, 'id'>): Result<number> {
  const newId = databaseState.domestic_trade_routes.length > 0
    ? Math.max(...databaseState.domestic_trade_routes.map(v => v.id)) + 1
    : 1;
  
  if (!database.villages.find(v => v.id === newTradeRoute.startVillageId)) {
    return {
      success: false,
      error: {
        kind: 'INVALID_START_VILLAGE',
        message: 'The start village was not found.',
      }
    }
  }
  
  if (!database.villages.find(v => v.id === newTradeRoute.targetVillageId)) {
    return {
      success: false,
      error: {
        kind: 'INVALID_TARGET_VILLAGE',
        message: 'The target village was not found.',
      }
    }
  }
  
  const routeWithId: DomesticTradeRoute = { ...newTradeRoute, id: newId};
  
  databaseState.domestic_trade_routes = [...databaseState.domestic_trade_routes, routeWithId];
  
  return { 
    success: true, 
    data: 1 // For now affected rows
  };
}

export type Result<T> = SuccessResult<T> | FailureResult;

export type SuccessResult<T> = {
  success: true;
  data: T;
}

export type FailureResult = {
  success: false;
  error: DatabaseError;
}

export type DatabaseError = InvalidStartVillage | InvalidTargetVillage | InvalidResourceAmount | InvalidTime

export interface InvalidStartVillage {
  kind: 'INVALID_START_VILLAGE';
  message: string;
}

export interface InvalidTargetVillage {
  kind: 'INVALID_TARGET_VILLAGE';
  message: string;
}

export interface InvalidResourceAmount {
  kind: 'INVALID_RESOURCE_AMOUNT';
  message: string;
  field: string;
}

export interface InvalidTime {
  kind: 'INVALID_TIME';
  message: string;
}
