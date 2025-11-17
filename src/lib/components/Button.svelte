<script lang="ts">
  const { button_text, onclick }: { button_text: string, onclick: () => void } = $props(); 
</script>

<button onclick={onclick}>
  {button_text}
</button>
