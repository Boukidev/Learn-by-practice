<template>
    <div class="w-full flex justify-center items-center">
        <form class="w-1/3 p-6 bg-slate-200 rounded-md shadow-md shadow-slate-300">
            <div class="flex flex-col">
                <label for="email" class="mb-1 text-lg font-semibold text-slate-700">E-mail</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    class="mb-4 p-2 border border-slate-300 focus:outline-none focus:border-slate-500 rounded-md transition-all duration-300"
                    placeholder="Enter your e-mail"
                    autocomplete="off"
                    required
                />
            </div>

            <div class="flex flex-col relative">
                <label for="password" class="mb-1 text-lg font-semibold text-slate-700">Password</label>
                <input
                    v-if="showPassword"
                    type="text"
                    name="password"
                    id="password"
                    class="mb-4 p-2 border border-slate-300 focus:outline-none focus:border-slate-500 rounded-md transition-all duration-300"
                    placeholder="Enter your password"
                    required
                />
                <input
                    v-else
                    type="password"
                    name="password"
                    id="password"
                    class="mb-4 p-2 border border-slate-300 focus:outline-none focus:border-slate-500 rounded-md transition-all duration-300"
                    placeholder="Enter your password"
                    required
                />
                <span
                    class="absolute top-1/2 right-3 -translate-y-1 cursor-pointer"
                    @click="showPassword = !showPassword"
                >
                    <img v-if="showPassword" src="assets/svg/eye.svg" alt="show password icon" class="w-5" />
                    <img v-else src="assets/svg/eye-slash.svg" alt="hide password icon" class="w-5" />
                </span>
            </div>
        </form>
    </div>
</template>

<script lang="ts" setup>
    import { ref } from "vue";

    const showPassword = ref(false);
</script>
