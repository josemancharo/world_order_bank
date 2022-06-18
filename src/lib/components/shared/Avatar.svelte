<script>
    import { ImageLoader } from "carbon-components-svelte";

    export let src;
</script>

<img class="img-avatar" alt="avatar" src={src}/>

<style>
    .img-avatar {
        margin: 10px;
        vertical-align: middle;
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
</style>
