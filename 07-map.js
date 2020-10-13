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

const accessList = user.map((item)=>{
    const newItem = {...item}
    if(item.age>=25){
       newItem.access = 'kiret'
    }else{
         newItem.access = 'kirbeit'
    }
    return newItem
})

console.log(accessList)