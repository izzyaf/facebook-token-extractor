document.getElementById('extract').addEventListener('click', function () {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(
            tabs[0].id,
            {action: "BEGIN_EXTRACTION"},
            function (response) {
                const payload = {
                    token: response.token,
                };

                chrome.cookies.getAll({}, function (cookies) {
                    payload.cookie = cookies.reduce((total, current) => {
                        total[current.name] = current.value;

                        return total
                    }, {});

                    fillInResult(document.getElementById("result"), JSON.stringify(payload, null, 2));
                });
            });
    });
});

function fillInResult(target, value) {
    target.value = value;
    const notifier = document.getElementById('notifier');
    notifier.textContent = 'Copied to clipboard!';

    target.select();
    document.execCommand("copy");
}
