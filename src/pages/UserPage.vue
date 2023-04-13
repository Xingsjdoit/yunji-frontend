<template>
  <template v-if="user">
    <van-cell title="昵称" is-link to="/user/edit" :value="user?.username"/>

    <van-cell title="头像"  >
      <img style="height: 48px" :src="user.avatarUrl"/>
    </van-cell>
    <van-cell title="修改信息" is-link to="/user/update" />
    <van-cell title="我创建的队伍" is-link to="/user/team/create" />
    <van-cell title="我加入的队伍" is-link to="/user/team/join" />
    <van-cell title="退出登录" @click="userLogout" />
  </template>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios";
import {Toast} from "vant";
import {getCurrentUser} from "../services/user";


const user = ref();

const router = useRouter();

onMounted(async () => {
  user.value = await getCurrentUser();
})

const toEdit = (editKey: string, editName: string, currentValue: string) => {
  router.push({
    path: '/user/edit',
    query: {
      editKey,
      editName,
      currentValue,
    }
  })
}

const userLogout = async ()=>{
  await myAxios.post("/user/outLogin");
  await router.push({
    path: '/user/login'
  })
}

</script>

<style scoped>

</style>
