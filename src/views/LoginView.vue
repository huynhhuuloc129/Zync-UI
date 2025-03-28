<template>
  <form action="" class="flex justify-center h-screen p-8">
    <div class="flex flex-col m-auto p-20 bg-violet-800 rounded-lg text-white">
      <h1 class="text-center uppercase font-bold text-2xl">Login</h1>

      <div>
        <label for="login-username">Username: </label>
        <input class="p-2 bg-md" id="login-username" type="text" placeholder="Username" />
      </div>

      <div>
        <label for="login-password">Password:</label>
        <input class="p-2 bg-md" id="login-password" type="password" placeholder="Password" />
      </div>

      <button
        class="bg-amber-900 cursor-pointer border-solid rounded-md text-white p-2 mt-2 font-bold"
      >
        Login
      </button>

      <div class="text-end flex content-end mb-5">
        <div>No account?&nbsp</div>
        <a href="http://localhost:5173/register" class="cursor-pointer underline text-end"
          >Register</a
        >
      </div>
      <GoogleLogin :callback="callback" shape="pill" />
    </div>
  </form>
</template>
<script setup lang="ts">
import { decodeCredential } from 'vue3-google-login'
import { useRouter } from 'vue-router'
import { useCookies } from 'vue3-cookies'

const router = useRouter()
const cookies = useCookies()

const callback = async (response: any) => {
  console.log('Handle the response', decodeCredential(response.credential))

  var responseCallback: any = decodeCredential(response.credential)

  try {
    let resp = {
      username: responseCallback.email,
      password: responseCallback.email,
      email: responseCallback.email,
      name: responseCallback.name,
      avatar: responseCallback.picture,
    }

    cookies.cookies.set('Token', resp.toString())

    // Swal.fire({
    //     title: "Success!",
    //     text: "Login success.",
    //     icon: "success",
    //     confirmButtonText: "OK",
    //     timer: 1500
    // });

    setTimeout(async () => {
      router.push({ name: 'home' })
    }, 1500)
  } catch (err: any) {
    console.log(err)
  }
}
</script>
