const https = require('https');

https.get('https://mrodevicemgr.edog.officeapps.live.com/mrodevicemgrsvc/api/v2/C2RReleaseData?audienceFFN=5440fd1f-7ecb-4221-8110-145efaa6372f', (res) => {
    res.on('data', (d) => {
        let obj = JSON.parse(d);
        let id = obj.FFN;
        let ver = obj.AvailableBuild;

        console.log(`Insiders_DevMain  : ${id} : ${ver}`);
    });
});
