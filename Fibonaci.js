

const Fibo =(nums)=>{
    if(nums === 0) return 0
    if(nums === 1) return 1
    return Fibo(nums-2) + Fibo(nums-1)
}
console.log(Fibo(2))