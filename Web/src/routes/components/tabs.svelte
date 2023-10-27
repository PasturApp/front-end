<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    export let items;
    export let activeItem;
</script>

<div class="tabs">
    <ul>
        {#each items as item}
            <li on:click={() => dispatch('tabChange', item)}>
                <div class:active={item === activeItem}>{item}</div>
            </li>
        {/each}
    </ul>
</div>

<style lang="css">
li {
    @apply border-2 border-solid rounded-2xl mx-4 w-56 text-center cursor-pointer;
    border-color: var(--verde_primario);
    font-family: var(--letra_titulo);
    color: var(--verde_primario);
}
div {
    font-family: var(--letra_titulo);
    color: var(--verde_primario);
}
ul {
    @apply flex justify-center p-0;
}
.active {
    @apply rounded-2xl p-0 m-0;
    background-color: var(--verde_primario);
    color: var(--blanco_fondo);
}
</style>