myButton.addEventListener('click',(e)=> {
    $.ajax({
        url: '/xxx',
        method: 'get',
    }).then(
        (responseText)=>{
            console.log(responseText)
            return responseText
        },
        (request)=>{
            console.log(request)
            return '已经处理'
        }
    ).then(
        (上一次的处理结果)=>{console.log(上一次的处理结果)},
        (request)=>{console.log(request)}
    )
})
//添加promise规范