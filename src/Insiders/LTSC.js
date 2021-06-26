"use strict";

const OfficeC2RAPI = require("../OfficeC2RAPI");

const getBranch = "Insiders_LTSC" + "      ";
const getFFN = "2e148de9-61c8-4051-b103-4af54baffbb4";

const getLastUpdated = "200310-1438";
const getBuild = "16.0.10351.20054";

new OfficeC2RAPI().print(getBranch, getFFN, getLastUpdated, getBuild);
