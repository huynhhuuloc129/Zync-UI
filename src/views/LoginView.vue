<template>
    <form action="" class="flex justify-center h-screen p-8 ">
        
        <div class="flex flex-col m-auto p-20 bg-violet-800 rounded-lg text-white">
            <h1 class="text-center uppercase font-bold text-2xl">Login</h1>

            <div>
                <label for="login-username">Username: </label>
                <input class="p-2 bg-md" id="login-username" type="text" placeholder="Username">
            </div>
    
            <div>
                <label for="login-password">Password: </label>
                <input class="p-2 bg-md" id="login-password" type="password" placeholder="Password">
            </div>

            <button class="bg-amber-900 cursor-pointer border-solid rounded-md text-white p-2 mt-2 font-bold">Login</button>
            <a href="http://localhost:5173/register" class="cursor-pointer underline text-end">Register?</a>
        </div>
    </form>
</template>

<script setup lang="ts"></script>
