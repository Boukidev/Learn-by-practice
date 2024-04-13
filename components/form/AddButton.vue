<template>
    <button class="add-task" @click="emit('openForm')">
        <img src="assets/svg/add-task.svg" alt="Add task icon" />
    </button>
</template>

<script lang="ts" setup>
    const emit = defineEmits<{
        (e: "openForm"): void;
    }>();
</script>

<style lang="scss" scoped>
    .add-task {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
    }
</style>
