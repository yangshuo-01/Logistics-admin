<script setup lang="ts">
import { FormInstance, FormRules } from 'element-plus';
import { reactive, ref } from 'vue';

    const formData = reactive({
        pass: '',
        checkPass: '',
        age: '',
    })
    const validatePass = (rule: any, value: any, callBack: any) => {
        if ( value === '') {
            callBack(new Error('请输入密码'))
        } else {
            if (formData.checkPass != '') {
                if(!formDataRef.value) return
            }
        }
    }

    const formDataRef = ref<FormInstance>()
    const rules = reactive<FormRules>({
        pass: [{validator: validatePass, trigger: 'blur'}],
        // checkPass: [{validator: validatePass2, trigger: 'blur'}],
    })
    function submitForm(){
        
    }
</script>
<template>
    <div class="login">

            <el-form
                ref="formDataRef"
                :model="formData"
                status-icon
                :rules="rules"
                label-width="120px"
                class="demo-formData"
            >
                <el-form-item label="Password" prop="pass">
                <el-input v-model="formData.pass" type="password" autocomplete="off" />
                </el-form-item>
                <el-form-item label="Confirm" prop="checkPass">
                <el-input
                    v-model="formData.checkPass"
                    type="password"
                    autocomplete="off"
                />
                </el-form-item>
                <el-form-item label="Age" prop="age">
                <el-input v-model.number="formData.age" />
                </el-form-item>
                <el-form-item>
                <el-button type="primary"
                @click.prevent="submitForm()"
                    >Submit</el-button
                >
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
        .demo-formData{
            padding: 24px;
            
        }
    }
</style>