function asyncloop(...ary) {
    cb = ary.pop()
    prams = ary.shift()
    let i = 0
    count = ary.length
    loop(ary,i,count,prams)
    function loop(ary,i,count,prams) {
        ary[i](...prams,(...res)=>{
            i++
            if(i < count){
                loop(ary,i,count,res)
            }else{
                cb(res)
            }
        })
    }
}
module.exports = asyncloop
