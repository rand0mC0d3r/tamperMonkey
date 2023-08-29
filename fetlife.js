// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://fetlife.com/home
// @icon         https://www.google.com/s2/favicons?sz=64&domain=fetlife.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
    const style = document.createElement('style');
    style.innerHTML = '.mt-2 { width: 150px !important; height: 150px !important; }';
    document.head.appendChild(style);
})();
