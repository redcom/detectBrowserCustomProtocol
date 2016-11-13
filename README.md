#Detection of browser custom protocol

Browsers from today support opening installed programs from user computer.

For example, one can open skype and initiate a call if this program is installed on user computer. This is done using a feature implemented in modern browsers named custom protocols.

Usually **http**, **https**, **ftp**, **file**, are protocols that browser knows natively how to do with them when someone opens them.

I made this piece of javascript to test if the browser supports the protocol presented in an html document.

The example tries to open skype and alerts if it is not possible.