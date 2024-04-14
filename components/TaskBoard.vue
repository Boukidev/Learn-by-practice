<template>
    <div class="task-board">
        <task-item
            v-for="(task, index) in props.tasks"
            :key="index"
            :text="task.title"
            :completed="task.completed"
            @delete-task="console.log('Task deleted !')"
        />
    </div>
</template>

<script lang="ts" setup>
    import type { Task } from "@/types/task";

    const props = defineProps<{
        tasks: Task[] | null;
    }>();
</script>

<style lang="scss" scoped>
    .task-board {
        width: 100%;
        padding: 0 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>
~/types/task
