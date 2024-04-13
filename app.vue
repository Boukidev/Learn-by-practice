<template>
    <div class="app">
        <h1 class="title-h1">todo list app</h1>

        <section class="task-board-section">
            <task-board :tasks="taskList" />
        </section>

        <add-button @open-form="showForm = true" />

        <form-add-task
            :show-form="showForm"
            v-model:title="title"
            v-model:description="description"
            @submit-form="submitForm"
            @close-form="showForm = false"
        />
    </div>
</template>

<script lang="ts" setup>
    import { AddButton, FormAddTask } from "@/components/form";
    import tasksData from "@/data/tasks.json";
    import type { Task } from "@/types/data";

    const showForm = ref<boolean>(false);
    const title = ref<string>("");
    const description = ref<string>("");

    const taskList = computed<Task[]>(() => {
        return sortedByDateCreation(tasksData);
    });

    function sortedByDateCreation(data: Task[]): Task[] {
        return data.sort((a, b) => new Date(a.dateCreation).getTime() - new Date(b.dateCreation).getTime());
    }

    function resetForm(): void {
        title.value = "";
        description.value = "";
    }

    function submitForm() {
        alert(`title: ${title.value} \n description: ${description.value}`);
        resetForm();
        showForm.value = false;
    }
</script>
