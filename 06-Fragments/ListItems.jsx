//Think of a fragment as an invisible container.  Normally, if you want to return multiple elements from a React component, you have to put them inside a single parent element, like a <div>.

//The issue here is that an extra <div> is added to your HTML. While this might not seem like a big deal, it can mess up layouts, especially when you're working with HTML tables or CSS Flexbox/Grid layouts where the structure is crucial.

//fragments are a feature that let you group multiple elements without adding an extra node to the DOM

//In this case, the <li> elements from ListItems are rendered directly inside the <ul>, as they should be.

import React, { Fragment } from 'react'

function ListItems() {
  return (
    <Fragment>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </Fragment>
  );
}

function MyList() {
  return (
    <ul>
      <ListItems />
    </ul>
  );
}

export default ListItems;