<script lang="ts">
  import { onMount } from 'svelte';

  onMount(() => {
  const _paq = (window._paq = window._paq || []);

  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);

  const u = 'https://bwhat.matomo.cloud/';
  _paq.push(['setTrackerUrl', u + 'matomo.php']);
  _paq.push(['setSiteId', '1']);

  const d = document;
  const g = d.createElement('script');
  const s = d.getElementsByTagName('script')[0];

  g.async = true;
  g.src = 'https://cdn.matomo.cloud/bwhat.matomo.cloud/matomo.js';
  s.parentNode?.insertBefore(g, s);
});
</script>

<style>
    
</style>