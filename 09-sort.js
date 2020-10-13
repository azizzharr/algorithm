const user = [
    {
        name:'Asan',age:22
    },
    {
        name:'HAsan',age:23
    },
    {
        name:'san',age:24
    },
    {
        name:'basan',age:25
    },
    {
        name:'RAsan',age:26
    },
    {
        name:'PAsan',age:27
    },
    {
        name:'WAsan',age:28
    },
]

user.sort((item,itemSecond)=>{
    if(item.name > itemSecond.age){
        return 1
    } else if(item.name < itemSecond.age){
        return -1
    }else{
        return  0
    }
})

console.log(user)