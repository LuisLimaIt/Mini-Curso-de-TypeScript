"use strict";
function logDetails(uid, item) {
    console.log("A product with " + uid + " has a a title as " + item + ".");
}
function logInfo(uid, user) {
    console.log("An user with " + uid + " has a a name as " + user + ".");
}
function renderPlatform(platform) {
    return platform;
}
;
renderPlatform('ios');
logDetails(28, "Luis");
logDetails("28", "Luis");
logInfo(123, "Luis");
logInfo("123", "Luis");
