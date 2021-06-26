"use strict";

const OfficeC2RAPI = require("../OfficeC2RAPI");

const getBranch = "Production_MEC" + "     ";
const getFFN = "55336b82-a18d-4dd6-b5f6-9e5095c314a6";

const getLastUpdated = "210612-1504";
const getBuild = "16.0.13929.20408";

new OfficeC2RAPI().print(getBranch, getFFN, getLastUpdated, getBuild);
