window.jQuery=function(nodeOrSelector) {
    let nodes = {}
    nodes.addClass = function () {
    }
    nodes.html = function () {
    }
    return nodes
}
window.jQuery.ajax=function({url,method,body,successFn,failFn,headers}){
    //如何去写一个promise
    return new Promise(function(resolve,reject){
        let request=new XMLHttpRequest()
        request.open(method,url)
        for(let key in headers){
            let value=headers[key]
            request.setRequestHeader(key,value)
        }
        request.onreadystatechange=()=>{
            if(request.readyState===4){
                if(request.status>=200&&request.status<300){
                    resolve.call(undefined,request.responseText)
                }else if(request.status>=400){
                    reject.call(undefined,request)
                }
            }
        }
        request.send(body)
    })

}

window.$=window.jQuery
function f1(){}
function f2(){}
myButton.addEventListener('click',(e)=> {
    window.jQuery.ajax({
        url: '/xxx',
        method: 'get',
        headers:{
            'content-type':'application/x-www-form-urlencoded',
            'frank':'18'
        },
        successFn: (x) => {
            f1.call(undefined,x)
            f2.call(undefined,x)
            },
        failFn: (a) => {
            console.log(a)
            console.log(a.status)
        }
    })
})

