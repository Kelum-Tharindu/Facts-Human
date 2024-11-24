const facts = [
    "Every human has a unique set of fingerprints, even identical twins.",
    "The human brain is incredibly powerful, capable of processing information as fast as 268 miles per hour.",
    "The human body is made up of about 60% water.",
    "Humans are born with approximately 270 bones, but many fuse together as we grow, resulting in 206 bones in adulthood.",
    "The average human has about 10,000 taste buds, which are replaced every two weeks.",
    "The average human heart beats around 100,000 times a day.",
    "Human hair grows about 6 inches per year on average.",
    "The human skin completely regenerates approximately every 27 days.",
    "Humans blink around 15-20 times per minute, which helps to keep the eyes moist and free of debris.",
    "The human brain can recognize and process over 50,000 words in a lifetime."
];

function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').textContent = facts[randomIndex];
}
