import { defineComponent, Fragment } from 'vue'
import { ElButton, ElMessage } from 'element-plus'
import { Check } from '@element-plus/icons-vue'
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import logo from './assets/logo.svg'
import './App.css'

export default defineComponent({
  name: 'App',
  setup() {
    const showMessage = () => {
      ElMessage({
        message: 'Element Plus 集成成功！',
        type: 'success',
      })
    }

    return () => (
      <Fragment>
        <header>
          <img
            alt="Vue logo"
            class="logo"
            src={logo}
            width="125"
            height="125"
          />

          <div class="wrapper">
            <HelloWorld msg="You did it!" />
            <ElButton type="primary" onClick={showMessage}>
              <el-icon><Check /></el-icon>
              点击测试
            </ElButton>
          </div>
        </header>

        <main>
          <TheWelcome />
        </main>
      </Fragment>
    )
  }
})
