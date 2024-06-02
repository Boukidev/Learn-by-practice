<template>
    <div class="w-1/3 mx-auto">
        <form class="p-6 flex flex-col text-slate-700 rounded-xl">
            <div class="mb-6 relative">
                <label
                    for="email"
                    class="absolute mx-1 px-1 left-0 bottom-8 font-semibold bg-white scale-75 input-text"
                >
                    E-mail
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    class="w-full p-2 border-2 border-slate-700 rounded-lg outline-none transition duration-200"
                    v-model="emailValue"
                    autocomplete="off"
                    required
                />
            </div>

            <div class="relative">
                <label for="password" class="absolute px-1 left-0 bottom-8 font-semibold bg-white scale-75 input-text">
                    Password
                </label>
                <input
                    v-if="showPassword"
                    type="text"
                    name="password"
                    id="password"
                    class="w-full p-2 border-2 border-slate-700 rounded-lg outline-none transition duration-200"
                    v-model="passwordValue"
                    required
                />
                <input
                    v-else
                    type="password"
                    name="password"
                    id="password"
                    class="w-full p-2 border-2 border-slate-700 rounded-lg outline-none transition duration-200"
                    v-model="passwordValue"
                    required
                />
                <span class="absolute right-2 top-3 cursor-pointer" @click="showPassword = !showPassword">
                    <img v-if="showPassword" src="assets/svg/eye.svg" alt="show password icon" class="w-5" />
                    <img v-else src="assets/svg/eye-slash.svg" alt="hide password icon" class="w-5" />
                </span>
            </div>

            <nuxt-link to="/reset-password" class="flex justify-end text-slate-700 text-sm/8 hover:underline">
                forgot your password ?
            </nuxt-link>

            <button
                type="submit"
                class="w-full mt-8 p-2 bg-slate-700/80 rounded-lg text-white font-semibold hover:bg-slate-800 transition duration-200"
            >
                Login
            </button>
        </form>

        <div>
            <p class="text-slate-700 text-center">
                Don't have an account ?
                <nuxt-link to="/register" class="text-slate-700 hover:underline">Register now</nuxt-link>
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const showPassword = ref(false);
    const emailValue = ref("");
    const passwordValue = ref("");
</script>
