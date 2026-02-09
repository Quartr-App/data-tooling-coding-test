# Coding Challenge | Data Tooling | Full Stack Developer (~60 min)

## Objectives

The primary goals of this coding challenge are:

1. **Backend Setup:** Create a backend service to fetch data from an external data source.
2. **Data Manipulation:** Perform basic data manipulation on the fetched data.
3. **Frontend Implementation:** Present the resulting data client side.

> [!TIP]  
> During the coding challenge, you are encouraged to articulate your thought process out loud. This helps us better understand your approach, decision-making, and problem-solving skills.
>
> You are allowed to use any tools that you deem necessary to solve the coding challenge.

## Instructions

### Tech Stack

- **Backend:** [Elysia JS](https://elysiajs.com/)
- **Frontend:** React (or Next.js with React)

### Tasks

1. **Project Initialization:**
   - Set up your backend service
   - Configure necessary dependencies and development tools.

2. **External Data Fetch**
   - Create a root endpoint (GET /) in your server.
   - This endpoint should fetch data from <https://jsonplaceholder.typicode.com/users/1> and return the response (unmodified).

3. **Dynamic Data Aggregation Endpoint:**
   - Develop an endpoint (GET /users/:id/posts) that accepts a user ID as a URL parameter, fetches the user data and their posts from the JSONPlaceholder API (<https://jsonplaceholder.typicode.com/users/:id> and <https://jsonplaceholder.typicode.com/posts?userId=:id>), and returns them as a single JSON object.

4. **Data Manipulation:**
   - Add a boolean field `hasEvenId` to each post indicating whether the post's ID is an even number.

5. **Frontend Initialization:**
   - Create a frontend using the specified option.
   - Configure necessary dependecies and packages.

6. **Frontend Implementation:**
   - Fetch and display the manipulated data dynamically from the backend

7. **Bonus - Styling**
   - Apply basic styling of your choice to enhance the presentation of data.

## Review (15-20 min)

After you complete the challenge, we will review your code together. During the review, please be prepared to:

- Explain your solution and the choice of libraries.
- Discuss any challenges you encountered.
- Demonstrate your problem-solving approach and ability to write clean, maintainable code.
- Describe how you would test the endpoints and handle potential improvements or extensions to your solution if additional time was provided.

**Good luck!**
