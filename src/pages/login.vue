<script setup lang="ts">
import { FormInstance, FormRules } from 'element-plus';
import { useRouter, useRoute } from 'vue-router'

import { onMounted } from 'vue';
import { ref } from 'vue';
import { reactive } from 'vue';
    const validatePass = (rule: any, value: any, callback: any) => {
        if (value === '') {
            callback(new Error('请输入密码'))
        } else {
            if (formData.checkPass !== '') {
                console.log(111,formRef);
                if (!formRef.value) return
                formRef.value.validateField('checkPass', () => null)
            }
            callback()
        }
    }
    const validatePass2 = (rule: any, value: any, callback: any) => {
        if (value === '') {
            callback(new Error('请再次输入密码确认'))
        } else if (value !== formData.pass) {
            callback(new Error("两次密码不同"))
        } else {
            callback()
        }
    }

    let formRef = ref<FormInstance>()
    let router = useRouter()
    onMounted(()=>{
        console.log(formRef);
    })
    interface FromData {
        account: string,
        pass: string,
        checkPass: string,
    }
    let formData = reactive<FromData>({
        pass: '',
        account: '',
        checkPass: ''
    })
    const rules = reactive<FormRules>({
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        account: [{ required:true, trigger: 'blur', message: '请输入用户名'}],
    })
    let submitForm = (payload:any)=>{
    router.push({
        name: 'dashboard'
    })
    }
</script>
<template>
    <div class="login">
        <el-form
            ref="formRef"
            :model="formData"
            status-icon
            :rules="rules"
            size="large"
            label-width="0"
            class="demo-FromData"
        >
            <div class="logo">
                物流平台
            </div>
            <el-form-item prop="account">
                <el-input v-model="formData.account" type="text" autocomplete="off" placeholder="请输入用户名">
                    <template #prepend>
                        <Icon-custom :size="20" icon="User"></Icon-custom>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item prop="pass">
                <el-input v-model="formData.pass" type="password" autocomplete="off" placeholder="输入密码">
                    <template #prepend>
                        <Icon-custom :size="20" icon="Lock"></Icon-custom>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
                <el-input
                    v-model="formData.checkPass"
                    type="password"
                    autocomplete="off"
                    placeholder="确认密码" 
                >
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="submitBtn" type="primary" @click="submitForm(formRef)">login</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<style lang="scss" scoped>
    .login{
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center; 
    }
    .demo-FromData{
        width: 480px;
        .logo{
            padding: 24px;
            text-align: center;
            font-size: 24px;
            font-weight: 100;
        }
        .submitBtn{
            width: 100%;
        }
    }
</style>
