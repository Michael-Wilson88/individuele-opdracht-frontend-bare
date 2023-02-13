// Define an array of items in your collection
const items = [
    { name: 'Item 1', sortAttribute: 'Sort Attribute 1', category: 'Category 1', picture: 'picture1.jpg' },
    { name: 'Item 2', sortAttribute: 'Sort Attribute 2', category: 'Category 2', picture: ' picture2.jpg' },
    // Add more items here
];

// Define a function to sort the items in ascending or descending order
function sortItems(sortType) {
    if (sortType === 'asc') {
        items.sort((a, b) => a.sortAttribute - b.sortAttribute);
    } else if (sortType === 'desc') {
        items.sort((a, b) => b.sortAttribute - a.sortAttribute);
    }
}

// Define a function to render the items
function renderItems() {
    const itemsPerPage = 5;
    let currentPage = 1;
    let startIndex = (currentPage - 1) * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;
    let visibleItems = items.slice(startIndex, endIndex);

    // Render the items to the HTML table or cards/tiles
    // ...
}

// Attach an event listener to the sort buttons to call the sortItems function
const sortAscBtn = document.querySelector('#sort-asc');
sortAscBtn.addEventListener('click', () => sortItems('asc'));

const sortDescBtn = document.querySelector('#sort-desc');
sortDescBtn.addEventListener('click', () => sortItems('desc'));

// Initialize the application by rendering the items for the first time
renderItems();
