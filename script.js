const facts = [
    "Honey never spoils.",
    "Octopuses have three hearts.",
    "Bananas are berries, but strawberries aren't.",
    "A group of flamingos is called a flamboyance.",
    "The Eiffel Tower can be 15 cm taller during the summer."
];

function generateFact() {
    const fact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('factDisplay').innerText = fact;
}

window.onload = () => {
    generateFact(); // Generate a fact when the page loads
}
