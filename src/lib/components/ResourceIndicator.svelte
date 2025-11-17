<script lang="ts">
    let {production, capacity}: {production: number | null, capacity: number | null} = $props();
</script>

<div style="flex-direction: column; flex: true; margin-left: auto; margin-right: auto">
  <div style="text-align: right">{production ? production : ''}</div>
  <div style="text-align: right"><span>{capacity ? capacity : ''}</span></div>
</div>