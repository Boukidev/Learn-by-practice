<template>
    <div class="w-full h-screen flex flex-col items-center">
        <p class="text-slate-700 text-center text-lg w-1/2 mb-4">
            The <span class="font-bold">Auth UI</span> is a series of learning-by-project programs created by me
            <a
                href="http://github.com/boukidev"
                target="_blank"
                rel="noopener noreferrer"
                class="underline text-slate-700 font-semibold"
            >
                Boukidev
            </a>
            To explore different development subjects and gain practical experience in building a user authentication
            system with Nuxt.js 3 and Tailwind CSS, in this project, we will learn to implement user authentication and
            authorization features.
        </p>
        <div class="flex gap-4">
            <nuxt-link
                to="/login"
                class="py-2 px-6 bg-slate-700/80 rounded-lg text-white font-semibold hover:bg-slate-800 transition duration-200"
            >
                Login
            </nuxt-link>
            <nuxt-link
                to="/register"
                class="py-2 px-6 bg-slate-700/80 rounded-lg text-white font-semibold hover:bg-slate-800 transition duration-200"
            >
                Register
            </nuxt-link>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
