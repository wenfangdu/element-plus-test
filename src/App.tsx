import { defineComponent, Fragment } from 'vue'
import { ElButton, ElMessage, ElCard } from 'element-plus'
import { Check } from '@element-plus/icons-vue'
import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import logo from './assets/logo.svg'
import './App.css'

export default defineComponent({
  name: 'App',
  setup() {
    const fruits = [
      { id: 1, name: '苹果', color: '红色' },
      { id: 2, name: '香蕉', color: '黄色' },
      { id: 3, name: '葡萄', color: '紫色' },
      { id: 4, name: '橙子', color: '橙色' },
    ]

    const showMessage = () => {
      ElMessage({
        message: 'Element Plus 集成成功！',
        type: 'success',
      })
    }

    return () => (
      <Fragment>
        <header>
          <img alt="Vue logo" class="logo" src={logo} width="125" height="125" />

          <div class="wrapper">
            <HelloWorld msg="You did it!" />
            <ElButton type="primary" onClick={showMessage}>
              <el-icon>
                <Check />
              </el-icon>
              点击测试
            </ElButton>
          </div>
        </header>

        <main>
          {/* <TheWelcome /> */}
          <div style={{ padding: '20px' }}>
            <h2>水果列表</h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '20px',
              }}
            >
              {fruits.map((fruit) => (
                <ElCard shadow="hover">
                  {{
                    default: () => (
                      <div>
                        <h3>{fruit.name}</h3>
                        <p>颜色：{fruit.color}</p>
                      </div>
                    ),
                  }}
                </ElCard>
              ))}
            </div>
          </div>
        </main>
      </Fragment>
    )
  },
})
