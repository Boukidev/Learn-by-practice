<template>
    <div class="task-item">
        <input type="checkbox" name="task-check" id="task-check" v-model="completed" />
        <label for="task-check" :class="[completed ? 'completed' : '']">{{ props.text }}</label>
        <button title="Delete task" class="close-btn" @click="emit('deleteTask')">
            <img src="assets/svg/close.svg" alt="Close icon" />
        </button>
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps<{
        text: string;
    }>();

    const emit = defineEmits<{
        (e: "deleteTask"): void;
    }>();

    const completed = defineModel<boolean>();
</script>

<style lang="scss" scoped>
    .task-item {
        width: 48%;
        margin-bottom: 0.5rem;
        padding: 0.5rem 0;
        display: flex;
        align-items: center;
        gap: 1rem;
        border-bottom: 1px solid $dark;
    }

    .completed {
        text-decoration: line-through;
    }

    input[type="checkbox"] {
        height: 15px;
        width: 15px;
        border: 2px solid $primary;
        border-radius: 3px;
        cursor: pointer;
        /* Cacher le contour par défaut */
        appearance: none;
        -webkit-appearance: none;
        outline: none;
    }

    input[type="checkbox"]:checked {
        background-color: $primary;
    }

    label {
        flex-grow: 1;
    }

    .close-btn {
        height: 15px;
        width: 15px;
        padding: 1px;
        background-color: #ff0000;
        border-radius: 50%;
    }
</style>
