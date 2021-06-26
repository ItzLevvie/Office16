"use strict";

const OfficeC2RAPI = require("../OfficeC2RAPI");

const getBranch = "Production_LTSC" + "    ";
const getFFN = "f2e724c1-748f-4b47-8fb8-8e0d210e9208";

const getLastUpdated = "210615-1715";
const getBuild = "16.0.10375.20036";

new OfficeC2RAPI().print(getBranch, getFFN, getLastUpdated, getBuild);
