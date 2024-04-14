<template>
    <div class="app">
        <h1 class="title-h1">todo list app</h1>

        <section class="task-board-section">
            <task-board :tasks="tasks" />
        </section>

        <add-button @open-form="showForm = true" />

        <form-add-task
            :show-form="showForm"
            v-model:title="formData.title"
            v-model:description="formData.description"
            @submit-form="submitForm"
            @close-form="showForm = false"
        />
    </div>
</template>

<script lang="ts" setup>
    import { AddButton, FormAddTask } from "@/components/form";
    import type { AddTaskInput, Task } from "./types/task";

    const tasks = ref<Task[] | null>(null);
    const showForm = ref<boolean>(false);
    const formData = ref<AddTaskInput>({
        title: "",
        description: "",
    });

    function resetForm(): void {
        formData.value.title = "";
        formData.value.description = "";
    }

    async function fetchTasks(): Promise<void> {
        const { data } = await useFetch<Task[]>("/api/tasks");
        tasks.value = data.value;
    }

    async function submitForm(): Promise<void> {
        await useFetch("/api/task", {
            method: "POST",
            body: {
                title: formData.value.title,
                description: formData.value.description,
            },
        });
        resetForm();
        showForm.value = false;
    }

    onMounted(async () => {
        await fetchTasks();
    });
</script>
