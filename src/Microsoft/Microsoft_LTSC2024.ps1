$ErrorActionPreference = "SilentlyContinue"
$ProgressPreference = "SilentlyContinue"

$2ab5268943adb02deab6c57086967ccc = "https://mrodevicemgr.officeapps.live.com/mrodevicemgrsvc/api/v2/C2RReleaseData/c02d8fe6-5242-4da8-972f-82ee55e00671"

$b1f4eece49f945094e88e00f7f517b7e = 0
while ($b1f4eece49f945094e88e00f7f517b7e -lt 32) {
    try {
        $dae2ece03db6f62535fde064d8919fad = (Invoke-RestMethod -Uri $2ab5268943adb02deab6c57086967ccc)
        $7f2f1372c2f5b1e36b1b2ff35d125f75 = $dae2ece03db6f62535fde064d8919fad.FFN
        $53699a09d32a48433b00c9f6e5afddd6 = $dae2ece03db6f62535fde064d8919fad.AvailableBuild
        if ($dae2ece03db6f62535fde064d8919fad) {
            Write-Output "Microsoft_LTSC2024  : $7f2f1372c2f5b1e36b1b2ff35d125f75 : $53699a09d32a48433b00c9f6e5afddd6"
        }
        break
    } catch {
        $b1f4eece49f945094e88e00f7f517b7e++
    }
}

Remove-Variable * -ErrorAction SilentlyContinue
