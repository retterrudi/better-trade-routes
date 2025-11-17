import type { villageResourceResourceRow, villageResourcesProductionRow } from "../types.svelte";
import { getElementFromHtml } from "../index.svelte";

export function getResourcesResourcesFromHTML(html: string): villageResourceResourceRow[] {
  const resourcesTable = getElementFromHtml(html, '#ressources > tbody');
  if (resourcesTable) {
    const tableRows = [
      ...resourcesTable.querySelectorAll('tr.hover, tr.hl')
    ];

    return tableRows
      .map((row) => {
        const patternVillageName = /[^a-zA-Z0-9 ,.]/g;
        const patternNumbers = /\W/g;
        const patternMerchantCount = /(?<=\/\u202d*)\d+/g;

        return {
          villageName: row.querySelector('.vil')?.textContent.replace(patternVillageName, '') || '',
          resourceAmount: {
            wood: Number(row.querySelector('.lum')?.textContent.replace(patternNumbers, '')) || null,
            clay: Number(row.querySelector('.clay')?.textContent.replace(patternNumbers, '')) || null,
            iron: Number(row.querySelector('.iron')?.textContent.replace(patternNumbers, '')) || null,
            crop: Number(row.querySelector('.crop')?.textContent.replace(patternNumbers, '')) || null,
          },
          merchantCount: Number(row.querySelector(`.tra.lc`)?.textContent.match(patternMerchantCount)?.at(0)) || null,
        }
      })
      .filter((row) => row.villageName !== '');
  }

  return [];
}

export function getResourcesProductionFromHtml(html: string): villageResourcesProductionRow[] {
  const resourcesProductionTable = getElementFromHtml(html, '#production > tbody');
  
  if (resourcesProductionTable) {
    const tableRows = [
      ...resourcesProductionTable.querySelectorAll('tr.hover, tr.hl')
    ]

    return tableRows
      .map((row) => {
        const patternVillageName = /[^a-zA-Z0-9 ,.']/g;
        const patternNumbers = /\W/g;

        return {
          villageName: row.querySelector('.vil')?.textContent.replace(patternVillageName, '') || '',
          resourceProduction: {
            wood: Number(row.querySelector('.lum')?.textContent.replace(patternNumbers, '')) || null,
            clay: Number(row.querySelector('.clay')?.textContent.replace(patternNumbers, '')) || null,
            iron: Number(row.querySelector('.iron')?.textContent.replace(patternNumbers, '')) || null,
            crop: Number(row.querySelector('.crop')?.textContent.replace(patternNumbers, '')) || null,
          }
        }
      })
      .filter((row) => row.villageName !== '');
  }
  
  return [];
}