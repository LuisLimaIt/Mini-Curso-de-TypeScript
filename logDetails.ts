//Type Alias
type Uid = number | String

function logDetails(uid: Uid, item: string) {
    console.log(`A product with ${uid} has a a title as ${item}.`)
}

function logInfo(uid: Uid, user: string) {
    console.log(`An user with ${uid} has a a name as ${user}.`)
}

type Platform = 'Windows' | 'Linux' | 'Mac OS' | 'ios'

function renderPlatform(platform: Platform) {
    return platform
};

renderPlatform('ios');

logDetails(28, "Luis");
logDetails("28", "Luis");

logInfo(123, "Luis");
logInfo("123", "Luis");