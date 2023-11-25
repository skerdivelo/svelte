import { writable } from "svelte/store";

export const todos = writable([
    {
        title: "cose da fare",
        done: false
    },
    {
        title: "cose da fare 2",
        done: false
    }
]);