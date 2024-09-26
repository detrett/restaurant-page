export const loadAboutContent = function loadAboutContent() {
    
    // Create the main section
    const aboutSection = document.createElement('section');
    aboutSection.id = 'about-container';

    // Create the title
    const aboutTitle = document.createElement('h1');
    aboutTitle.className = 'about-title';
    aboutTitle.textContent = 'About Us';

    // Create the text container
    const aboutText = document.createElement('div');
    aboutText.className = 'about-text';

    // Create the paragraphs
    const para1 = document.createElement('p');
    para1.textContent = "Welcome to Burger Bliss! We’re not just passionate about burgers, we’re obsessed with crafting the perfect bite! Founded in 2023, our mission is simple: to bring people together over delicious, handcrafted burgers made with love and the freshest ingredients.";

    const para2 = document.createElement('p');
    para2.textContent = "We believe in quality, creativity, and a little bit of fun. From our signature beef patties to our plant-based alternatives, every item on our menu is designed to satisfy cravings and spark joy. Whether you're a classic cheeseburger fan or an adventurous foodie, you'll find something to love at Burger Bliss.";

    const para3 = document.createElement('p');
    para3.textContent = "Our journey started in a small food truck, and thanks to our amazing community of burger lovers, we’ve grown into the beloved spot we are today. Come join us, and taste the difference in every bite!";

    // Append paragraphs to the text container
    aboutText.appendChild(para1);
    aboutText.appendChild(para2);
    aboutText.appendChild(para3);

    // Append title and text container to the section
    aboutSection.appendChild(aboutTitle);
    aboutSection.appendChild(aboutText);

    // Append the section to the document (assuming a target container exists, e.g., contentDiv)
    document.getElementById('content').appendChild(aboutSection);
}
