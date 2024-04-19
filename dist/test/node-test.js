"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const howlongtobeat_1 = require("../main/howlongtobeat");
function testHowLongToBeatService() {
    return __awaiter(this, void 0, void 0, function* () {
        const hltbService = new howlongtobeat_1.HowLongToBeatService();
        try {
            // Example: Call the search method
            const searchResults = yield hltbService.search("resident evil 4");
            console.log("Search Results:", searchResults);
            // Example: Call the detail method
            const gameId = "108881"; // Replace with an actual game ID
            const detailResult = yield hltbService.detail(gameId);
            console.log("Detail Result:", detailResult);
        }
        catch (error) {
            console.error("Error:", error);
        }
    });
}
// Execute the test function
testHowLongToBeatService();
//# sourceMappingURL=node-test.js.map