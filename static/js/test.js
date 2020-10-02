
var jsonObj = {

    success: true,
    data: [
        {
            title: 'web前端开发',
            content: '循序渐进的学习过程  ，笔记那似乎id话说嗲好嗲撒地方撒大阿斯顿撒大大是'
        },
        {
            title: '啊速度回答是',
            content: '法大师傅十分十分士大夫十分万分飞人个人  ，笔记那似乎id话说嗲好嗲撒地方撒大阿斯顿撒大大是'
        }, {
            title: '啊撒旦大苏打似的',
            content: '发生的方法是否石帆胜丰石帆胜丰  ，笔记那似乎id话说嗲好嗲撒地方撒大阿斯顿撒大大是'
        }, {
            title: '夫人refer',
            content: '大苏打萨达阿三大二发哥  ，笔记那似乎id话说嗲好嗲撒地方撒大阿斯顿撒大大是'
        },
    ],
    msg: '数据请求成功！'
}

data = jsonObj.data

/* for(let i=0 ;i<data.length ;i++){
    console.log(data[i])
} */
let pf = document.createDocumentFragment();
d = document.getElementById('d')

for (let i in data) {
    diva = document.createElement('div')
    divb = document.createElement('div')
    p = document.createElement('p')
    divc = document.createElement('div')
    divc.append(p)
    diva.append(divb)
    diva.append(divc)
    console.log(data[i])
    diva.classList.add("card")
    divb.classList.add("card-header")
    divb.innerHTML = data[i].title
    divc.classList.add("card-body")
    p.classList.add("card-text")
    p.innerHTML = data[i].content
    pf.append(diva)
}




d.append(pf)