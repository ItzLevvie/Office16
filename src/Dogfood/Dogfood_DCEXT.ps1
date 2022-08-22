$ErrorActionPreference = "SilentlyContinue"
$ProgressPreference = "SilentlyContinue"

$2ab5268943adb02deab6c57086967ccc = "https://mrodevicemgr.officeapps.live.com/mrodevicemgrsvc/api/v2/C2RReleaseData/c4a7726f-06ea-48e2-a13a-9d78849eb706"

$b1f4eece49f945094e88e00f7f517b7e = 0
while ($b1f4eece49f945094e88e00f7f517b7e -lt 32) {
    try {
        $dae2ece03db6f62535fde064d8919fad = (Invoke-RestMethod -Uri $2ab5268943adb02deab6c57086967ccc)
        $7f2f1372c2f5b1e36b1b2ff35d125f75 = $dae2ece03db6f62535fde064d8919fad.FFN
        $53699a09d32a48433b00c9f6e5afddd6 = $dae2ece03db6f62535fde064d8919fad.AvailableBuild
        $5aa9dcd1aaa43904e410a6b8b9416fa9 = $dae2ece03db6f62535fde064d8919fad.TimestampUtc.Substring(8, 2) + $dae2ece03db6f62535fde064d8919fad.TimestampUtc.Substring(0, 2) + $dae2ece03db6f62535fde064d8919fad.TimestampUtc.Substring(3, 2) + "-" + $dae2ece03db6f62535fde064d8919fad.TimestampUtc.Substring(11, 2) + $dae2ece03db6f62535fde064d8919fad.TimestampUtc.Substring(14, 2)
        if ($dae2ece03db6f62535fde064d8919fad) {
            Write-Output "Dogfood_DCEXT       : $7f2f1372c2f5b1e36b1b2ff35d125f75 ($5aa9dcd1aaa43904e410a6b8b9416fa9) : $53699a09d32a48433b00c9f6e5afddd6"
        }
        break
    } catch {
        $b1f4eece49f945094e88e00f7f517b7e++
    }
}

Remove-Variable * -ErrorAction SilentlyContinue
