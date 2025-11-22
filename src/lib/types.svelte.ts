export interface villageModel {
  villageName: string
  xCoordinate: number
  yCoordinate: number
  woodProduction: number | null
  clayProduction: number | null
  ironProduction: number | null
  cropProduction: number | null
  woodCapacity: number | null
  clayCapacity: number | null
  ironCapacity: number | null
  cropCapacity: number | null
  woodConsumption: number | null
  clayConsumption: number | null
  ironConsumption: number | null
  cropConsumption: number | null
  merchantCount: number | null
}

export interface village {
  name: string
  xCoordinate: number
  yCoordinate: number
}

export interface domesticTradeRoute {
  startVillage: village
  targetVillage: village
  resources: Resources
  // todo: departure/arrival
}

export interface villageResourceResourceRow {
  villageName: string
  resourceAmount: Resources | null
  merchantCount: number | null
}

export interface villageResourcesProductionRow {
  villageName: string
  resourceProduction: Resources | null
}

export interface Resources {
  wood: number | null
  clay: number | null
  iron: number | null
  crop: number | null
}

export interface Village {
  id: number
  name: string
  coordinates: Coordinates
  production: Resources
  consumption: Resources
  warehouseCapacity: number
  granaryCapacity: number
  merchantCount: number
}

export interface Coordinates {
  x: number
  y: number
}

export interface DomesticTradeRoute {
  id: number
  startVillageId: number
  targetVillageId: number
  resources: Resources
  startTimes: number[] // Seconds after 00:00 AM; 0 - 86400; 
}
