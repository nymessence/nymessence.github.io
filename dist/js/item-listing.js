function addItem(title, imageLink, listingLink) {
  const itemCard = document.createElement('div');
  itemCard.className = 'item-card';

  const itemTitle = document.createElement('h2');
  itemTitle.className = 'item-title';
  itemTitle.textContent = title;

  const imageContainer = document.createElement('div');
  imageContainer.className = 'item-image-container';

  const itemImage = document.createElement('img');
  itemImage.className = 'item-image';
  itemImage.src = imageLink;
  itemImage.alt = title;

  const buyButton = document.createElement('a');
  buyButton.className = 'buy-button';
  buyButton.href = listingLink;
  buyButton.textContent = 'Buy Now';

  imageContainer.appendChild(itemImage);
  itemCard.appendChild(itemTitle);
  itemCard.appendChild(imageContainer);
  itemCard.appendChild(buyButton);

  // Find the container and append the card to it
  const container = document.querySelector('.item-list-container');
  if (container) {
    container.appendChild(itemCard);
  } else {
    // Fallback: If the container isn't found, add to body
    console.error('Container with class "item-list-container" not found. Appending to body instead.');
    document.body.appendChild(itemCard);
  }
}
