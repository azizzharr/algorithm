const arr = [12,3,4,5324,52,432]


const sum = arr.reduce((ans,item)=>{
    return item+ans

})

const max = arr.reduce((ans,item)=>{
    if(ans>item){
        return ans
    }
    else{
        return item
    }

})

const min = arr.reduce((ans,item)=>{
    if(ans<item){
        return ans
    }
    else{
        return item
    }

})

console.log(sum)
console.log(max)
console.log(min)


