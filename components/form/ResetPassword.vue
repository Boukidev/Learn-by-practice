<template>
    <div class="w-1/3 mx-auto">
        <form class="p-6 flex flex-col text-slate-700 rounded-xl">
            <div class="mb-6 relative">
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

            <div class="mb-6 relative">
                <label
                    for="confirm-password"
                    class="absolute px-1 left-0 bottom-8 font-semibold bg-white scale-75 input-text"
                >
                    Confirm Password
                </label>
                <input
                    v-if="showConfirmPassword"
                    type="text"
                    name="confirm-password"
                    id="confirm-password"
                    class="w-full p-2 border-2 border-slate-700 rounded-lg outline-none transition duration-200"
                    v-model="confirmPasswordValue"
                    required
                />
                <input
                    v-else
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    class="w-full p-2 border-2 border-slate-700 rounded-lg outline-none transition duration-200"
                    v-model="confirmPasswordValue"
                    required
                />
                <span class="absolute right-2 top-3 cursor-pointer" @click="showConfirmPassword = !showConfirmPassword">
                    <img v-if="showConfirmPassword" src="assets/svg/eye.svg" alt="show password icon" class="w-5" />
                    <img v-else src="assets/svg/eye-slash.svg" alt="hide password icon" class="w-5" />
                </span>
            </div>

            <ul class="pl-4 text-sm/5 text-slate-700">
                <li>Password must be at least 8 characters</li>
                <li>Password must include at least one uppercase letter</li>
                <li>Password must include at least one lowercase letter</li>
                <li>Password must include at least one number</li>
                <li>Password must include at least one special character</li>
            </ul>

            <button
                type="submit"
                class="w-full mt-8 p-2 bg-slate-700/80 rounded-lg text-white font-semibold hover:bg-slate-800 transition duration-200"
            >
                Reset Password
            </button>
        </form>
    </div>
</template>

<script lang="ts" setup>
    const showPassword = ref(false);
    const showConfirmPassword = ref(false);
    const passwordValue = ref("");
    const confirmPasswordValue = ref("");
</script>
