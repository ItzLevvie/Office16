"use strict";

const OfficeC2RAPI = require("../OfficeC2RAPI");

const getBranch = "Insiders_FRDC" + "      ";
const getFFN = "b8f9b850-328d-4355-9145-c59439a0c4cf";

const getLastUpdated = "210612-1800";
const getBuild = "16.0.13801.20738";

new OfficeC2RAPI().print(getBranch, getFFN, getLastUpdated, getBuild);
