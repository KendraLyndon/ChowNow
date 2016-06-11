https://galvanize-eats-15d5c.firebaseapp.com/

# Your Mission

Using the provided wireframes and mockups, in conjuction with the following tasks
and details, Galvanize Eats should be built to these specifications to the best
of your ability.

## HOMEPAGE

__#1 User sees a homepage__

As a company, I need to make the page aesthetically pleasing so that the user will associate our product with quality.

1. Add a primary header with the name of the company, "Galvanize Eats"
2. Make the header semi-transparent so the image shows through
3. Add a transition effect to the "Place an Order" button that indicates when a user has hovered over it

__NOTES:__

1. Use [Font Awesome](http://fontawesome.io/icons/) to display site icons
2. You can find the background image in the media folder in the assessment repo
3. _optional_ Open Sans Google Font

__#2 User can navigate to the orders page__

```
As a user
When I go to the home page
And I click the Place an Order button
Then I see an order page
```

## ORDERS PAGE

Menu items can be retrieved via API call to  https://galvanize-eats-api.herokuapp.com/menu

1. Menu items should be constrained so that any vertical overflow is hidden behind a scroll
2. Both buttons should lighten by 10% when hovered over

__#1 User sees a menu__

```
When I go to the orders page
Then I see a menu
And the menu items are categorized by type
And the menu has headers for each type
And the headers cannot be selected and added to the shopping cart
```

__#2 User can add items to shopping cart__

```
When I select a menu item
And I select a quantity
And I click the Add Item button
Then I see my menu items added to the shopping cart on the right
And I cannot order more than 20 of each item
```

__#3 User sees subtotal, tax and grand total__

```
When I add items to the shopping cart
Then the subtotal for my items is updated
And the tax for my items is updated using a rate of 8.3%
And the Grand Total of my shopping cart is updated
And all numbers are rounded to two decimals
```

__#4 As a company, I need to know ordering information about my user__

1. Form input for the user's name should use a form label
2. Form input for the user's phone number should use a form label
3. Form input for the user's address should use a form label

__#5 As a user, I need to be able to submit my order to the company__

When the user submits their order, your app should make a POST request to
https://galvanize-eats-api.herokuapp.com/orders.

_Your POST request should include:_

1. All of the ordered items and their prices
2. All of the customer information

```
When I click Deliver It!
Then my order is submitted to the company
And I see a pop up containing the response from submitting my order
```

__#6 The world should be able to see your app__

1. Using Firebase, deploy your app.
2. Add a README to your project with the link to your deployed app.
3. Submit a __pull request__
