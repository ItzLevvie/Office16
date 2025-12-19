param (
    [Parameter(Mandatory = $true)]
    [ValidateSet("Dogfood", "Microsoft", "Insiders", "Production", IgnoreCase = $false)]
    [string]$Audience,

    [Parameter(Mandatory = $true)]
    [ValidateSet("DevMain", "CC", "DCEXT", "FRDC", "DC", "LTSC2024", "LTSC2021", "LTSC", "MEC", IgnoreCase = $false)]
    [string]$Channel
)

$ErrorActionPreference = "SilentlyContinue"
$ProgressPreference = "SilentlyContinue"


if ($Audience -eq "Dogfood") {
    if ($Channel -eq "DevMain") {
        $friendlyName = "Dogfood_DevMain    "
        $Id = "ea4a4090-de26-49d7-93c1-91bff9e53fc3"
    }
    if ($Channel -eq "CC") {
        $friendlyName = "Dogfood_CC         "
        $Id = "f3260cf1-a92c-4c75-b02e-d64c0a86a968"
    }
    if ($Channel -eq "DCEXT") {
        $friendlyName = "Dogfood_DCEXT      "
        $Id = "c4a7726f-06ea-48e2-a13a-9d78849eb706"
    }
    if ($Channel -eq "FRDC") {
        $friendlyName = "Dogfood_FRDC       "
        $Id = "834504cc-dc55-4c6d-9e71-e024d0253f6d"
    }
}

if ($Audience -eq "Microsoft") {
    if ($Channel -eq "CC") {
        $friendlyName = "Microsoft_CC       "
        $Id = "5462eee5-1e97-495b-9370-853cd873bb07"
    }
    if ($Channel -eq "DevMain") {
        $friendlyName = "Microsoft_DevMain  "
        $Id = "b61285dd-d9f7-41f2-9757-8f61cba4e9c8"
    }
    if ($Channel -eq "DC") {
        $friendlyName = "Microsoft_DC       "
        $Id = "f4f024c8-d611-4748-a7e0-02b6e754c0fe"
    }
    if ($Channel -eq "FRDC") {
        $friendlyName = "Microsoft_FRDC     "
        $Id = "9a3b7ff2-58ed-40fd-add5-1e5158059d1c"
    }
    if ($Channel -eq "LTSC2024") {
        $friendlyName = "Microsoft_LTSC2024 "
        $Id = "c02d8fe6-5242-4da8-972f-82ee55e00671"
    }
    if ($Channel -eq "LTSC2021") {
        $friendlyName = "Microsoft_LTSC2021 "
        $Id = "86752282-5841-4120-ac80-db03ae6b5fdb"
    }
    if ($Channel -eq "LTSC") {
        $friendlyName = "Microsoft_LTSC     "
        $Id = "1d2d2ea6-1680-4c56-ac58-a441c8c24ff9"
    }
}

if ($Audience -eq "Insiders") {
    if ($Channel -eq "DevMain") {
        $friendlyName = "Insiders_DevMain   "
        $Id = "5440fd1f-7ecb-4221-8110-145efaa6372f"
    }
    if ($Channel -eq "CC") {
        $friendlyName = "Insiders_CC        "
        $Id = "64256afe-f5d9-4f86-8936-8840a6a4f5be"
    }
    if ($Channel -eq "FRDC") {
        $friendlyName = "Insiders_FRDC      "
        $Id = "b8f9b850-328d-4355-9145-c59439a0c4cf"
    }
    if ($Channel -eq "LTSC") {
        $friendlyName = "Insiders_LTSC      "
        $Id = "2e148de9-61c8-4051-b103-4af54baffbb4"
    }
}

if ($Audience -eq "Production") {
    if ($Channel -eq "CC") {
        $friendlyName = "Production_CC      "
        $Id = "492350f6-3a01-4f97-b9c0-c7c6ddf67d60"
    }
    if ($Channel -eq "MEC") {
        $friendlyName = "Production_MEC     "
        $Id = "55336b82-a18d-4dd6-b5f6-9e5095c314a6"
    }
    if ($Channel -eq "DC") {
        $friendlyName = "Production_DC      "
        $Id = "7ffbc6bf-bc32-4f92-8982-f9dd17fd3114"
    }
    if ($Channel -eq "LTSC2024") {
        $friendlyName = "Production_LTSC2024"
        $Id = "7983bac0-e531-40cf-be00-fd24fe66619c"
    }
    if ($Channel -eq "LTSC2021") {
        $friendlyName = "Production_LTSC2021"
        $Id = "5030841d-c919-4594-8d2d-84ae4f96e58e"
    }
    if ($Channel -eq "LTSC") {
        $friendlyName = "Production_LTSC    "
        $Id = "f2e724c1-748f-4b47-8fb8-8e0d210e9208"
    }
}

#
$maxAttempts = 0
while ($maxAttempts -lt 32) {
    try {
        $AvailableBuild = (Invoke-RestMethod -Uri "https://mrodevicemgr.officeapps.live.com/mrodevicemgrsvc/api/v2/C2RReleaseData/$Id").AvailableBuild
        if ($AvailableBuild) {
            Write-Output "$friendlyName : $Id : $AvailableBuild"
        }
        break
    }
    catch {
        $maxAttempts++
    }
}
