const https = require('https');

https.get('https://mrodevicemgr.edog.officeapps.live.com/mrodevicemgrsvc/api/v2/C2RReleaseData?audienceFFN=492350f6-3a01-4f97-b9c0-c7c6ddf67d60', (res) => {
    res.on('data', (d) => {
        let obj = JSON.parse(d);
        let id = obj.FFN;
        let ver = obj.AvailableBuild;

        console.log(`Production_CC     : ${id} : ${ver}`);
    });
});
