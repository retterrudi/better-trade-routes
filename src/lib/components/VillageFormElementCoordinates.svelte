<script lang="ts">
  let {element_name = "Element Name", value = $bindable()}: { element_name: string, value: string } = $props();
</script>

<div class="input-field-container">
  <span class="label">{element_name}</span>
  <input 
      type="text" 
      placeholder="(xx/yy) or (xx|yy)"
      pattern="\(\d\d?\d?(/|\|)\d\d?\d?\)"
      bind:value="{value}"
  />
</div>

<style>
  /*@property --label-size {*/
  /*  syntax: "<length>";*/
  /*  inherits: false;*/
  /*  initial-value: 16px;*/
  /*}*/
  
  /*@property --text-size {*/
  /*  syntax: "<length>";*/
  /*  inherits: false;*/
  /*  initial-value: 24px;*/
  /*}*/
  
  div.input-field-container {
    position: relative;
    background: mistyrose;
    margin-bottom: 24px;
    height: fit-content;
    width: fit-content;
  }

  input {
    border: 2px solid #2f8a89;
    padding: 0 16px;
    border-radius: 4px;
    opacity: 1;
    font-size: var(--text-size);
    height: 52px;
    width: 100px;
  }

  span.label {
    font-size: var(--label-size);
    position: absolute;
    z-index: 2;
    padding: 0 4px;
    inset-inline-start: 14px; /* 12px + 2px (border width) */
    inset-block-start: calc(-1 * var(--label-size) / 2); /* height / 2 */
    background: white;
    border-radius: 4px;
  }
</style>