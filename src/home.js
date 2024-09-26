export const loadHomeContent = function loadHomeContent() {
    const contentDiv = document.getElementById('content');
    
    const heroImageDiv = document.createElement('div');
    heroImageDiv.id = 'hero-image';
    
    const heroContainerDiv = document.createElement('div');
    heroContainerDiv.id = 'hero-container';
    
    const burgerIconDiv = document.createElement('div');
    burgerIconDiv.classList.add('burger-icon');
    
    const heading = document.createElement('h2');
    heading.appendChild(document.createTextNode('Taste the Bliss,'));
    heading.appendChild(document.createElement('br'));
    heading.appendChild(document.createTextNode('One Bite at a Time!'));
    
    const paragraph = document.createElement('p');
    paragraph.appendChild(document.createTextNode('At Burger Bliss, we believe every bite should be a moment of pure joy. Our burgers are crafted with 100% fresh ingredients, sizzling to perfection.'));
    paragraph.appendChild(document.createElement('br'));
    paragraph.appendChild(document.createTextNode("Check out our menu! We've got something to satisfy every burger lover's dream."));
    
    heroContainerDiv.appendChild(burgerIconDiv);
    heroContainerDiv.appendChild(heading);
    heroContainerDiv.appendChild(paragraph);
    
    heroImageDiv.appendChild(heroContainerDiv);
    contentDiv.appendChild(heroImageDiv);
    
    document.body.appendChild(contentDiv);
}