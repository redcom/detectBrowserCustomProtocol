var resultBox = document.getElementById('installResults');
var actionLink = document.getElementById('testLink');
var as = actionLink;
as.addEventListener('click', function(event) {
    event.preventDefault();
    var url = event.target.href;
    var found = false;
    var c = window.setTimeout(function() {
        if (!found) {
            showNotInstalled();
        }
    }, 2000);

    window.addEventListener('blur', function() {
        showInstalled();
        found = true;
    }, false);

    var isMozilla = typeof InstallTrigger !== "undefined";
    var isIE10Plus = typeof navigator.msLaunchUri !== "undefined";

    openUrl(url);
    if (isMozilla) {
        execMozillaCheck();
    }
    if (isIE10Plus) {
        execIE10PlusCheck(url);
    }


    return false;

}, false);

function showInstalled() {
    resultBox.innerHTML = "The custom protocol is installed";
    as.style.display = "none";
    var iframe = document.getElementById('checkIframe');
    iframe.style.display = "none";
}

function showNotInstalled() {
    resultBox.innerHTML = " The custom protocol is not installed ";
    as.style.display = "none";
    var iframe = document.getElementById('checkIframe');
    iframe.style.display = "none";
}

function openUrl(url) {
    var ifr = document.createElement('iframe');
    ifr.id = "checkIframe";
    ifr.style.width = 0;
    ifr.style.height = 0;

    ifr.src = url;

    document.body.appendChild(ifr);
}

function execMozillaCheck() {
    var iframe = document.getElementById('checkIframe');
    try {
        iframe.contentWindow.location.href = iframe.src;
        showInstalled();
    } catch (e) {
        if (e.name == "NS_ERROR_UNKNOWN_PROTOCOL") {
            showNotInstalled();
        }
    }
}

function execIE10PlusCheck(url) {
    if (navigator.msLaunchUri) {
        navigator.msLaunchUri(url, showInstalled, showNotInstalled);
    }
}
