var optimismLevel = parseInt(prompt("How optimistic are you about the Sharks next year?", "Please enter a number from 1 to 5"));

// if (optimismLevel == 5) {
// 	console.log("Great! Me too!  Especially with how far we got in the post season last year");
// } else if (optimismLevel == 4) {
// 	console.log("Every team is always improving, so the Sharks need to keep up with their continued improvement");
// } else if (optimismLevel == 3) {
// 	console.log("Where's your team spirit?? LET'S GO SHARKS!");
// } else if (optimismLevel == 2) {
// 	console.log("Go to a game at the tank, you'll have a higher level of optimism after that.  CHOMPCHOMP!");
// } else if (optimismLevel == 1) {
// 	console.log("Get out. We don't need your negativity in our lives.");
// } else {
// 	console.log("Not a valid input, please try again");
// }

switch (optimismLevel) {
	case 5:
		alert("Great! Me too!  Especially with how far we got in the post season last year");
		break;
	case 4:
		console.log("Every team is always improving, so the Sharks need to keep up with their continued improvement");
		break;
	case 3:
		console.log("Where's your team spirit?? LET'S GO SHARKS!");
		break;
	case 2:
		console.log("Go to a game at the tank, you'll have a higher level of optimism after that.  CHOMPCHOMP!");
		break;
	case 1:
		console.log("Get out. We don't need your negativity in our lives.");
		break;
	default:
		console.log("Not a valid input, please try again");
}