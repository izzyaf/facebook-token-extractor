chrome.runtime.onConnect.addListener(function (port) {
    port.onMessage.addListener(function (msg) {
        if (msg.action === "END_EXTRACTION") {
            document.getElementById("result").value = JSON.stringify({
                token: response.token,
                cookie: response.cookie
            }, null, 2)
        }
    });
});

document.getElementById('extract').addEventListener('click', function () {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
            console.log(response.farewell);
        });
    });
    // chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    //     const port = chrome.tabs.connect(tabs[0].id);
    //
    //     port.postMessage({
    //         action: 'BEGIN_EXTRACTION'
    //     })
    // });
});


