const https = require('https');

https.get('https://mrodevicemgr.edog.officeapps.live.com/mrodevicemgrsvc/api/v2/C2RReleaseData?audienceFFN=f4f024c8-d611-4748-a7e0-02b6e754c0fe', (res) => {
    res.on('data', (d) => {
        let obj = JSON.parse(d);
        let id = obj.FFN;
        let ver = obj.AvailableBuild;

        console.log(`Microsoft_DC      : ${id} : ${ver}`);
    });
});
