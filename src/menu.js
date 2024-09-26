export const loadMenuContent = function loadMenuContent() {
    const contentDiv = document.getElementById('content');

    const mainSection = document.createElement('section');
    mainSection.classList.add('main');

    const mainTitle = document.createElement('h1');
    mainTitle.textContent = 'Burgers';
    mainSection.appendChild(mainTitle);

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const burgerItems = [
        {
            imgClass: 'item-1',
            name: 'Cheese Bliss',
            desc: '200g beef patty with lettuce, triple cheddar, tomato, pickles, and bliss sauce.'
        },
        {
            imgClass: 'item-2',
            name: 'Tower O\' Bliss',
            desc: '2 x 200g beef patties with lettuce, cheddar, tomato, red onion, and bliss sauce.'
        },
        {
            imgClass: 'item-3',
            name: 'Blue Bliss',
            desc: '200g beef patty with lettuce, blue cheese, caramelized onions and truffle mayo.'
        },
        {
            imgClass: 'item-4',
            name: 'BBQ Bliss',
            desc: '200g beef patty with lettuce, cheddar, bacon, tomato, crispy onion rings, and bbq sauce.'
        },
        {
            imgClass: 'item-5',
            name: 'Chicken Bliss',
            desc: '200g chicken breast with lettuce, cheddar, chicken bacon, red onion, and sour cream.'
        },
        {
            imgClass: 'item-6',
            name: 'Veggie Bliss',
            desc: '200g chickpea patty with lettuce, tomato, red onion, swiss cheese, and homemade paneer.'
        }
    ];

    // Create burger cards
    burgerItems.forEach(item => {
        const menuCard = document.createElement('div');
        menuCard.classList.add('menu-card');

        const itemImg = document.createElement('div');
        itemImg.classList.add('item-img', item.imgClass);

        const itemName = document.createElement('h2');
        itemName.classList.add('item-name');
        itemName.textContent = item.name;

        const itemDesc = document.createElement('p');
        itemDesc.classList.add('item-desc');
        itemDesc.textContent = item.desc;

        menuCard.appendChild(itemImg);
        menuCard.appendChild(itemName);
        menuCard.appendChild(itemDesc);

        menuContainer.appendChild(menuCard);
    });

    mainSection.appendChild(menuContainer);
    contentDiv.appendChild(mainSection);

    // Sides section
    const sidesSection = document.createElement('section');
    sidesSection.classList.add('sides');

    const sidesTitle = document.createElement('h1');
    sidesTitle.textContent = 'Sides';
    sidesSection.appendChild(sidesTitle);

    const sidesContainer = document.createElement('div');
    sidesContainer.classList.add('menu-container');

    const sideItems = [
        {
            imgClass: 'item-7',
            name: 'Regular Fries',
            desc: 'Potato stripes cut and fried, with a sprinkle of salt, all handmade.'
        },
        {
            imgClass: 'item-8',
            name: 'Sweet Potato',
            desc: 'Sweet potato stripes cut and fried, with a sprinkle of salt and rosemary, all handmade.'
        },
        {
            imgClass: 'item-9',
            name: 'Curly Fries',
            desc: 'Curly handmade cuts of potato with a sprinkle of salt.'
        }
    ];

    // Create side cards
    sideItems.forEach(item => {
        const menuCard = document.createElement('div');
        menuCard.classList.add('menu-card');

        const itemImg = document.createElement('div');
        itemImg.classList.add('item-img', item.imgClass);

        const itemName = document.createElement('h2');
        itemName.classList.add('item-name');
        itemName.textContent = item.name;

        const itemDesc = document.createElement('p');
        itemDesc.classList.add('item-desc');
        itemDesc.textContent = item.desc;

        menuCard.appendChild(itemImg);
        menuCard.appendChild(itemName);
        menuCard.appendChild(itemDesc);

        sidesContainer.appendChild(menuCard);
    });

    sidesSection.appendChild(sidesContainer);
    contentDiv.appendChild(sidesSection);

    // Desserts section
    const dessertsSection = document.createElement('section');
    dessertsSection.classList.add('desserts');

    const dessertsTitle = document.createElement('h1');
    dessertsTitle.textContent = 'Desserts';
    dessertsSection.appendChild(dessertsTitle);

    const dessertsContainer = document.createElement('div');
    dessertsContainer.classList.add('menu-container', 'dessert');

    const dessertItems = [
        {
            imgClass: 'item-10',
            name: 'Brownie',
            desc: 'Homemade chocolate brownie with a scoop of nocciola ice cream.'
        },
        {
            imgClass: 'item-11',
            name: 'Cheesecake',
            desc: 'Homemade strawberry cheesecake with whipped cream on top.'
        }
    ];

    // Create dessert cards
    dessertItems.forEach(item => {
        const menuCard = document.createElement('div');
        menuCard.classList.add('menu-card');

        const itemImg = document.createElement('div');
        itemImg.classList.add('item-img', item.imgClass);

        const itemName = document.createElement('h2');
        itemName.classList.add('item-name');
        itemName.textContent = item.name;

        const itemDesc = document.createElement('p');
        itemDesc.classList.add('item-desc');
        itemDesc.textContent = item.desc;

        menuCard.appendChild(itemImg);
        menuCard.appendChild(itemName);
        menuCard.appendChild(itemDesc);

        dessertsContainer.appendChild(menuCard);
    });

    dessertsSection.appendChild(dessertsContainer);
    contentDiv.appendChild(dessertsSection);
}    