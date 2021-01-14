# Switch 开关按钮

TS提示接口： `SwitchProps`

|参数|类型|默认值|可填值|必填|说明|
|:---:|:---:|:---:|:---:|:---:|:---:|
|onChange|`function`| `null`|`function(e){}`|是|点击开关按钮触发的事件，返回新的状态参数|
|value|`boolean`| `false`|`false│true`|是|按钮默认状态|
|borderColor|`string`| `#afafaf`|`任何符合css颜色类型字符串`|否|滑动容器的边框颜色|
|buttonColor|`string`| `#03080e`|`任何符合css颜色类型字符串`|否|圆形按钮的背景颜色|

### 函数组件使用

```tsx
import React, {useState} from 'react'
import {Switch} from 'react-components-typescript'

export function test(props: any) {
    const [theme, setTheme] = useState(false);
    return (
        <div>
            <h1>开关按钮</h1>
            <Switch value={theme}
                    borderColor="red"
                    buttonColor="black"
                    onChange={(e) => {
                        setTheme(e);
                    }}
            />
        </div>
    )
}
```

### 类组件使用

```tsx
import {PureComponent} from 'react'
import {Switch} from 'react-components-typescript'

export default class Test extends PureComponent {
    constructor(props) {
        super(props);
    }

    state = {
        theme: false
    }

    render() {
        return (
            <div>
                <h1>开关按钮</h1>
                <Switch value={this.state.theme}
                        borderColor="red"
                        buttonColor="black"
                        onChange={(e) => {
                            this.setState({
                                theme: e
                            });
                        }}
                />
            </div>
        )
    }
}
```