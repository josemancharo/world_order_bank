<script lang="ts">
    import { Link } from "carbon-components-svelte";
    import { navigate } from "svelte-routing";

    export let href;
    export let title;
</script>

<Link on:click={() => navigate(href)} style="display: block; padding-top: 5px; cursor: pointer;"
    >{title}</Link
>
