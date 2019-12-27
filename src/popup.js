function beginExtraction() {
    chrome.runtime.onConnect.addListener(function (port) {
        port.onMessage.addListener(function (msg) {
            console.log('msg', msg)
            if (msg.action == "END_EXTRACTION") {

                document.getElementById("result").value = JSON.stringify({
                    token: response.token,
                    cookie: response.cookie
                }, null, 2)
            }
        });
    });
}

document.getElementById('extract').addEventListener('click', beginExtraction);
