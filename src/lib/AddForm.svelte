<script>
    import { todos } from './store'
    let nuovoTodo

    function AddTodo(){
        todos.update((old)=> {
            old.push({
                title: nuovoTodo,
                done: false
            })
        return old
        })
    }
</script>


<input type="text" bind:value={nuovoTodo} placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs"/>
<button on:click={AddTodo} class="btn btn-neutral">Add</button>