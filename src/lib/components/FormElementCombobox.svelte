<script lang="ts">
  type Item = {
    id: number
    name: string
  }
  
  type Props = {
    listElements: Item[];
    elementName: string;
    value?: Item['id'];
    placeholder?: string;
  }
  
  let { 
    listElements,
    elementName,
    value = $bindable(),
    placeholder = 'Select an option...'
  }: { Props } = $props();
</script>

<div class="input-field-container">
  <span class="label">{elementName}</span>
  <select bind:value>
    <option disabled selected value="{undefined}">{placeholder}</option>
    {#each listElements as element (element.id)}
      <option value="{element.id}">{element.name}</option>
    {/each}
  </select>
</div>

<style>
  div.input-field-container {
    position: relative;
    background: mistyrose;
    margin-bottom: 24px;
    height: fit-content;
    width: fit-content;
  }
  
  select {
    border: 2px solid #2f8a89;
    padding: 0 16px;
    border-radius: 4px;
    opacity: 1;
    font-size: var(--text-size);
    height: 52px;
    width: var(--width, 240px);
  }
  
  span.label {
    font-size: var(--label-size);
    position: absolute;
    z-index: 2;
    padding: 0 4px;
    inset-inline-start: 14px;
    inset-block-start: calc(-1 * var(--label-size) / 2);
    background: white;
    border-radius: 4px;
  }
</style>