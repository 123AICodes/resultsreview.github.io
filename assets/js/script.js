const records = [
	{
		"category": "Reaction",
		"score": 80,
		"icon": "./assets/images/icon-reaction.svg"
	},
	{
		"category": "Memory",
		"score": 92,
		"icon": "./assets/images/icon-memory.svg"
	},
	{
		"category": "Verbal",
		"score": 61,
		"icon": "./assets/images/icon-verbal.svg"
	},
	{
		"category": "Visual",
		"score": 72,
		"icon": "./assets/images/icon-visual.svg"
	}
];


// Function to render the array of objects on the webpage
function renderArrayObjects() {
	const objectListElement = document.getElementById("objectList");

	records.forEach((record) => {
		const categoryDiv = document.createElement("div");
		const flexDiv = document.createElement("div");
		const iconImg = document.createElement("img");
		const categoryText = document.createElement("p");
		const scoreText = document.createElement("p");

		categoryDiv.classList.add("category");
		flexDiv.classList.add("flex");
		iconImg.id = "category-svg";
		categoryText.classList.add("category-name");;
		scoreText.classList.add("score");

		iconImg.src = record.icon;
		iconImg.alt = record.category;
		categoryText.textContent = record.category;

		flexDiv.appendChild(iconImg);
		flexDiv.append(categoryText)

		scoreText.innerHTML = `<b id="bold">${record.score}</b> / <span>100</span>`;

		categoryDiv.appendChild(flexDiv);
		categoryDiv.appendChild(scoreText);

		objectListElement.appendChild(categoryDiv);
	});
}

// Call the function when the page loads
window.addEventListener("load", renderArrayObjects);
