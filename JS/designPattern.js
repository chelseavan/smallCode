// 单例模式的精髓
var getSingle = function(fn) {
    var result    // result在闭包中
    return function() {
        return result || (result = fn.apply(this, arguments))
    }
}
var inputFun = function() {
    // logic
    return
}
var singleInputFun = getSingle(inputFun)  // 得到singleInputFun这个可生成单例的函数
// 某个时候触发他，如点击事件，这就是惰性单例
var singleResult = singleInputFun()
// 此后再触发他的时候，result已经有了，形成单例
