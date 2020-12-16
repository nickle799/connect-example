window.addEventListener('DOMContentLoaded', function() {
    var bridge = new bhconnect.AppBridge();
    bridge.register({
        uuid: window.name,
        title: document.title,
        url: window.location.href,
    });
    bridge.addEventListener('GO_HOME', function(data) {
        window.location.href = "/iframe.html";
    });
    bridge.addEventListener('GO_BACK', function(data) {
        window.history.back();
    });
});
