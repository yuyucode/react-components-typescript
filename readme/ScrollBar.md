# ScrollBar 滚动条

TS接口： `ScrollBarProps`

|参数|类型|默认值|可填值|必填|说明|
|:---:|:---:|:---:|:---:|:---:|:---:|
|containerWrapper|`MutableRefObject<HTMLElement│any>`| `null`|`元素的ref`|是|展示的内容容器的ref|
|containerScroll|`MutableRefObject<HTMLElement│any>`| `null`|`元素的ref`|是|滚动的内容容器的ref|
|containerWrapperStyle|`Partial<IContainerWrapperStyle>`| `#afafaf`|`任何符合css颜色类型字符串`|否|滚动条容器的背景颜色|
|containerScrollStyle|`Partial<IContainerScrollStyle>`| `#03080e`|`任何符合css颜色类型字符串`|否|滚动条的背景颜色|

### 函数组件使用

```tsx
import React, {MutableRefObject} from 'react'
import {useRef} from "react";
import {ScrollBar} from "@/components/react-components-typescript";

const Home = () => {
    // 显示滚动内容的容器ref
    const refs1: MutableRefObject<HTMLElement | any> = useRef()
    
    // 滚动内容的ref
    const refs2: MutableRefObject<HTMLElement | any> = useRef()
    return (
        <div>
            <h1 className={`button-theme-1`}
                style={{
                    color: "red"
                }}>首页</h1>
            <div style={{
                width: 200,
                height: 200,
                position: "relative",
                border: "1px solid red",
                overflow: "hidden"
            }} ref={refs1}>
                <div ref={refs2}>
                    <div>我问问瑞文任务
                    </div>

                    <div>A architecto atque blanditiis consectetur consequuntur cumque ea eos excepturi facilis, illo
                        ipsam
                        itaque minus non pariatur quis ratione sed sequi ut voluptatem voluptates. Distinctio esse
                        explicabo
                        quidem totam vitae.
                    </div>
                    <div>Nisi, optio, quia. Accusantium aliquam animi deleniti dicta eligendi, et impedit, laboriosam
                        laudantium
                        nesciunt nisi quod repudiandae sint veritatis. Dolor, dolore ex laboriosam minima natus officia
                        porro quo
                        saepe sit!
                    </div>
                    <div>Laudantium nisi ratione vero. Asperiores consectetur corporis eius facere facilis fugit, ipsum
                        itaque
                        minus nesciunt nihil reprehenderit repudiandae sit soluta tempore, totam veritatis voluptatibus.
                        Aspernatur atque corporis itaque odit soluta?
                    </div>
                    <div>Accusamus delectus enim exercitationem fugiat iste unde voluptas voluptate. Accusantium
                        incidunt,
                        laborum magni quas reprehenderit sequi totam ut veritatis? Atque consectetur ducimus et magni
                        odio
                        officiis perferendis temporibus voluptas voluptatem?
                    </div>
                    <div>Ad consequuntur dignissimos eaque ex in molestias numquam sapiente sint sunt vero? Adipisci at
                        commodi
                        culpa distinctio dolor eius fugiat fugit impedit itaque magnam minima modi mollitia, numquam quo
                        veniam?
                    </div>
                    <div>Assumenda dicta distinctio fugiat hic mollitia placeat quidem vero? Ea facere illum laborum?
                        Architecto
                        dicta, doloribus eius error eum illum ipsa itaque minus modi nam necessitatibus, neque
                        perspiciatis
                        veritatis. Voluptatem!
                    </div>
                    <div>Ad animi cumque dolore explicabo incidunt minus obcaecati ratione reprehenderit, temporibus
                        velit. A,
                        quibusdam reiciendis. Animi commodi dolore ipsa labore natus omnis perspiciatis quia reiciendis,
                        sed
                        tempore temporibus veniam vero?
                    </div>
                    <div>Eaque, earum eius eligendi, eveniet facilis impedit inventore iure minus mollitia nam nostrum
                        officiis
                        quia rerum saepe temporibus totam vero! Amet consequuntur dolorem iusto vel vero? Alias
                        dignissimos
                        mollitia ratione?
                    </div>
                    <div>Aspernatur dignissimos iste nobis nostrum odio perspiciatis, quam sed voluptates. Aut, corporis
                        debitis
                        dolorum hic quidem soluta sunt voluptate. Harum, incidunt ipsum nam officiis provident quaerat
                        rerum
                        soluta? Itaque, mollitia!
                    </div>
                    <div>A adipisci blanditiis consequatur culpa debitis dignissimos eius enim eum eveniet,
                        exercitationem
                        incidunt maiores minus modi molestias nesciunt repellat sapiente sequi vero. Adipisci aliquid ex
                        illum
                        nostrum possimus provident voluptatem!
                    </div>
                    <div>Aut, dolores earum fugiat fugit inventore necessitatibus obcaecati praesentium provident
                        quibusdam
                        rerum! Ab amet beatae consequatur delectus dolor dolore ducimus in iure iusto, magni, nulla
                        placeat rerum
                        sed, ut veniam.
                    </div>
                    <div>Ab aperiam, atque distinctio doloribus ea eaque eligendi eos esse id in incidunt laudantium,
                        minima
                        nihil nobis odio pariatur perspiciatis provident quis reiciendis repudiandae soluta tempora vel
                        voluptatum. Dolore, possimus.
                    </div>
                </div>
                
                {/* 使用ScrollBar */}
                <ScrollBar containerWrapper={refs1} containerScroll={refs2}/>
            </div>
        </div>
    );
}


export default Home

```

### 类组件使用

```tsx
import React, {createRef, MutableRefObject, PureComponent} from 'react'
import {ScrollBar} from "@/components/react-components-typescript";

export default class Home extends PureComponent {
    private refs1: MutableRefObject<HTMLElement|any>;
    private refs2: MutableRefObject<HTMLElement|any>;

    constructor(props:any) {
        super(props);
        this.refs1 = React.createRef()
        this.refs2 = React.createRef();
    }

    render() {
        return (
            <div>
                <h1 className={`button-theme-1`} style={{
                    color: "red"
                }}>首页</h1>
                <div style={{
                    width: 200,
                    height: 200,
                    position: "relative",
                    border: "1px solid red",
                    overflow: "hidden"
                }} ref={this.refs1}>
                    <div ref={this.refs2}>
                        <div>我问问瑞文任务
                        </div>

                        <div>A architecto atque blanditiis consectetur consequuntur cumque ea eos excepturi facilis,
                            illo ipsam
                            itaque minus non pariatur quis ratione sed sequi ut voluptatem voluptates. Distinctio esse
                            explicabo
                            quidem totam vitae.
                        </div>
                        <div>Nisi, optio, quia. Accusantium aliquam animi deleniti dicta eligendi, et impedit,
                            laboriosam laudantium
                            nesciunt nisi quod repudiandae sint veritatis. Dolor, dolore ex laboriosam minima natus
                            officia porro quo
                            saepe sit!
                        </div>
                        <div>Laudantium nisi ratione vero. Asperiores consectetur corporis eius facere facilis fugit,
                            ipsum itaque
                            minus nesciunt nihil reprehenderit repudiandae sit soluta tempore, totam veritatis
                            voluptatibus.
                            Aspernatur atque corporis itaque odit soluta?
                        </div>
                        <div>Accusamus delectus enim exercitationem fugiat iste unde voluptas voluptate. Accusantium
                            incidunt,
                            laborum magni quas reprehenderit sequi totam ut veritatis? Atque consectetur ducimus et
                            magni odio
                            officiis perferendis temporibus voluptas voluptatem?
                        </div>
                        <div>Ad consequuntur dignissimos eaque ex in molestias numquam sapiente sint sunt vero? Adipisci
                            at commodi
                            culpa distinctio dolor eius fugiat fugit impedit itaque magnam minima modi mollitia, numquam
                            quo veniam?
                        </div>
                        <div>Assumenda dicta distinctio fugiat hic mollitia placeat quidem vero? Ea facere illum
                            laborum? Architecto
                            dicta, doloribus eius error eum illum ipsa itaque minus modi nam necessitatibus, neque
                            perspiciatis
                            veritatis. Voluptatem!
                        </div>
                        <div>Ad animi cumque dolore explicabo incidunt minus obcaecati ratione reprehenderit, temporibus
                            velit. A,
                            quibusdam reiciendis. Animi commodi dolore ipsa labore natus omnis perspiciatis quia
                            reiciendis, sed
                            tempore temporibus veniam vero?
                        </div>
                        <div>Eaque, earum eius eligendi, eveniet facilis impedit inventore iure minus mollitia nam
                            nostrum officiis
                            quia rerum saepe temporibus totam vero! Amet consequuntur dolorem iusto vel vero? Alias
                            dignissimos
                            mollitia ratione?
                        </div>
                        <div>Aspernatur dignissimos iste nobis nostrum odio perspiciatis, quam sed voluptates. Aut,
                            corporis debitis
                            dolorum hic quidem soluta sunt voluptate. Harum, incidunt ipsum nam officiis provident
                            quaerat rerum
                            soluta? Itaque, mollitia!
                        </div>
                        <div>A adipisci blanditiis consequatur culpa debitis dignissimos eius enim eum eveniet,
                            exercitationem
                            incidunt maiores minus modi molestias nesciunt repellat sapiente sequi vero. Adipisci
                            aliquid ex illum
                            nostrum possimus provident voluptatem!
                        </div>
                        <div>Aut, dolores earum fugiat fugit inventore necessitatibus obcaecati praesentium provident
                            quibusdam
                            rerum! Ab amet beatae consequatur delectus dolor dolore ducimus in iure iusto, magni, nulla
                            placeat rerum
                            sed, ut veniam.
                        </div>
                        <div>Ab aperiam, atque distinctio doloribus ea eaque eligendi eos esse id in incidunt
                            laudantium, minima
                            nihil nobis odio pariatur perspiciatis provident quis reiciendis repudiandae soluta tempora
                            vel
                            voluptatum. Dolore, possimus.
                        </div>
                    </div>
                    <ScrollBar containerWrapper={this.refs1} containerScroll={this.refs2}/>
                </div>

            </div>
        );
    }
}
```