### 1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
---
- Here is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**:
1. **getElementById** only selects an element with an **unique id**. It takes an id name as parameter and returns only a **single element**.
2. **getElementsByClassName** selects all the elements with **same class name**. It takes a className as parameter and returns a **HTMLCollection** of elements with the same class name. **HTMLCollection** is an **array like object** and it is **Dynamic** but doesn't support **for each** loop.
3. **querySelector** selects only **the first element** from the matching items of same className or tagName. It also can select an element with an unique id. It can take id name, className, tagName or any valid CSS selector as parameter and returns a **single element** like **getElementById**.
4. **querySelectorAll** selects all the matching elements from same className or tagName. It also can take id name, className, tagName or any valid CSS selector as parameter and returns a **NodeList** of matching elements. **NodeList** also an **array like object**. But it is **Static** and support **for each** loop.
### 2. How do you **create and insert a new element into the DOM**?
---
- For creating and insert a new element into the DOM:
1. we have to create a new element by using. **document.createElement(tagName);**. We can declare a variable and store the new element there. Such as: 
```const newElement = document.createElement('p');```
2. After that we have to insert the innerText or innerHTML by using **newElement.innerText = 'Hello';**. Like:
``` newElement.innerText = 'Hello World! I'm learning Javascript.'; ```
3. Then we have to **append** the newElement into a parent element in the DOM.
```document.body.append(newElement);```
### 3. What is **Event Bubbling** and how does it work?
---
-**Event Bubbling** is a feature of DOM. When an event happens, DOM starts to capture the event from the root of the document. Then it comes one by one through the parent and child element and captures the event. After capturing the event, it starts to go back to the root of the element and capture all the events it finds on the path. The behavior of the DOM for capturing the event is called **Event Bubbling**.
### 4. What is **Event Delegation** in JavaScript? Why is it useful?
---
-**Event Delegation** is also a feature of DOM. If we add event for all the child element of a parent element, it would be a huge lines of code and also this will decrease the performance of the website. But if we add an event for only the parent element and delegate the event by using condition, it would be more efficient and less risky for find an error.
### 5. What is the difference between **preventDefault() and stopPropagation()** methods?
---
-**preventDefault()** is a method of controlling the default behavior of a button. it prevents the reload of the website after clicking the button.
-**stopPropagation()** is a method to prevent the behavior of **event bubbling** in the same lair.