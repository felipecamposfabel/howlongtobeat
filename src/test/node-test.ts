import { HowLongToBeatService } from "../main/howlongtobeat";

async function testHowLongToBeatService() {
    const hltbService = new HowLongToBeatService();

    try {
        // Example: Call the search method
        const searchResults = await hltbService.search("resident evil", "Mobile");
        console.log("Search Results:", searchResults);

        // Example: Call the detail method
        const gameId = "108881"; // Replace with an actual game ID
        const detailResult = await hltbService.detail(gameId);
        console.log("Detail Result:", detailResult);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Execute the test function
testHowLongToBeatService();
