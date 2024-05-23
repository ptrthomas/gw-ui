const { Given } = require("@cucumber/cucumber")
import world from "../../../../ui/util/gw/world"
import { ReadTestDataFiles } from "../../../../ui/util/gw/ReadTestDataFiles";

const readTestDataFiles = new ReadTestDataFiles()

Given(/^the user loads the data (.*) from json (.*)/, async (t, stepArguments) => {
    const identifier = stepArguments[0].replace(/["]/g, "")
    const jsonFileName = stepArguments[1].replace(/["]/g, "")
    console.log(identifier ,jsonFileName)
    world.dataMap.clear()
    world.dataMap = await readTestDataFiles.loadTestData(identifier, jsonFileName)
});