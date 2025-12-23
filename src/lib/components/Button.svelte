<script lang="ts">
  const { buttonText, onclick }: { buttonText: string, onclick: () => void } = $props(); 
</script>

<button onclick={onclick}>
  {buttonText}
</button>
