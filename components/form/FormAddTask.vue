<template>
    <div class="form-add-task" v-if="props.showForm">
        <form class="form" @submit.prevent="emit('submitForm')">
            <button class="close-btn" @click="emit('closeForm')">
                <img src="assets/svg/close.svg" alt="Close icon" />
            </button>
            <div class="form--group">
                <label for="title">Enter a Task title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    v-model="title"
                    placeholder="ex: Go to the school"
                    required
                />
            </div>
            <div class="form--group">
                <label for="description">Enter a Task description</label>
                <textarea
                    name="description"
                    id="description"
                    v-model="description"
                    cols="30"
                    rows="10"
                    placeholder="ex: describe all steps i'll do before go to school"
                    required
                ></textarea>
            </div>
            <input type="submit" value="Submit" />
        </form>
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps<{
        showForm: boolean;
    }>();

    const emit = defineEmits<{
        (e: "closeForm"): void;
        (e: "submitForm"): void;
    }>();

    const title = defineModel<string>("title");
    const description = defineModel<string>("description");
</script>

<style lang="scss" scoped>
    .form-add-task {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .close-btn {
        height: 30px;
        width: 30px;
        padding: 5px;
        position: absolute;
        top: -0.75rem;
        right: -0.75rem;
        background-color: $primary;
        border-radius: 50%;
    }

    .form {
        width: 500px;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        position: absolute;
        background-color: $light;
        border-radius: 5px;

        &--group {
            margin-bottom: 1rem;
            display: flex;
            flex-direction: column;
        }
    }

    label {
        margin-bottom: 0.5rem;
    }

    input,
    textarea {
        border: 1px solid $gray;
        border-radius: 5px;
        transition: all 0.2s ease-in-out;

        &:focus {
            border: 1px solid $primary;
            box-shadow: 1px 1px 3px $primary, -1px -1px 3px $primary;
        }
    }

    textarea {
        resize: none;
    }

    input[type="submit"] {
        padding: 0.5rem;
        color: aliceblue;
        font-weight: bold;
        background-color: $primary;
        border-radius: 5px;
        border: 1px solid $primary;
        cursor: pointer;
    }
</style>
