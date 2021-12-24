"use strict";

const OfficeC2RAPI = require("../OfficeC2RAPI");

const getBranch = "Production_LTSC2021" + "";
const getFFN = "5030841d-c919-4594-8d2d-84ae4f96e58e";

const getLastUpdated = "211214-1415";
const getBuild = "16.0.14332.20204";

new OfficeC2RAPI().print(getBranch, getFFN, getLastUpdated, getBuild);
