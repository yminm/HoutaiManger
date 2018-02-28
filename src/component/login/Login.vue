<template>
    <div class="login">
        <section>
            <el-form :model="ruleForm2" status-icon  :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="账号" prop="uname">
                    <el-input type="text" v-model="ruleForm2.uname" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="upwd">
                    <el-input type="password" v-model="ruleForm2.upwd" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="success" @click="submitForm('ruleForm2')">提交</el-button>
                    <el-button type="info" plain class="reset" @click="resetForm('ruleForm2')">重置</el-button>
                </el-form-item>
            </el-form>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        // 校验函数, rule可以拿到被校验字段的信息与校验规则, value可以拿到字段的值// 如果校验通过必须调用callback, 不通过不要调用       
    //   var validatePass = (rule, value, callback) => {
    //     if (value === '') {
    //       callback(new Error('请输入账号'));
    //     } else {
    //       if (this.ruleForm2.checkPass !== '') {
    //         this.$refs.ruleForm2.validateField('checkPass');
    //       }
    //       callback();
    //     }
    //   };
  
      return {
        ruleForm2: {
          uname: '',
          upwd: ''
        },
        rules2: {
          uname: [ { required: true, message: '请输入用户名', trigger: 'blur' } ],
        // 当鼠标离开的时候触发 前面这个函数
        //   uname: [ { validator: validatePass, trigger: 'blur' } ],
          upwd: [ { required: true, message: '请输入密码', trigger: 'blur' } ]
        }
      };
    },
    methods: {
        open() {
        this.$message('这是一条消息提示');
      },
        login(){
            this.$http.post(this.$api.login,this.ruleForm2).then((res)=> {
                if(res.data.status==0){
                    // alert方法 参数 1文本内容 2 标题 3 配置对象 callback
                    this.$alert("登录成功",'提示',{
                        callback: ()=>{
                            this.$router.push({ name: 'admin'})
                        }
                    });
                }else{
                    this.$alert(res.data.message)
                }
            })
        },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.login();
          } else {
            this.$alert('账号或密码错误');
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

// scoped 这个样式只在当前组件生效
<style scoped lang="less">

    .login {
        background-color: skyblue;
        height: 100%;
        section {
            width: 400px;
            height: 250px;
            margin: 0 auto;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            border: 3px solid #fff;
            border-radius: 5px;
            form{
                position: absolute;
                width: 325px;
                top: 45px;
                .reset{
                    margin-left: 50px!important;
                }
            }
        }
    }


</style>