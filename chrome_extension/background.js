// 监听扩展安装完成
chrome.runtime.onInstalled.addListener(function() {
  // 存储数据
  chrome.storage.sync.set({ msg: 'Hello, World!'}, function() {
    // 读取数据
    chrome.storage.sync.get(['msg'], function(result) {
      // 打印数据
      console.log(result.msg)
    })
  })
})
