const https = require('https');

https.get('https://mrodevicemgr.edog.officeapps.live.com/mrodevicemgrsvc/api/v2/C2RReleaseData?audienceFFN=1d2d2ea6-1680-4c56-ac58-a441c8c24ff9', (res) => {
    res.on('data', (d) => {
        let obj = JSON.parse(d);
        let id = obj.FFN;
        let ver = obj.AvailableBuild;

        console.log(`Microsoft_LTSC    : ${id} : ${ver}`);
    });
});
