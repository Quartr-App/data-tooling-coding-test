# Coding Challenge | Data Tooling | Full Stack Developer (~60 min)

## Obectives

The primary goals of this coding challenge are:

1. **Backend Setup:** Create a backend service to fetch data from an external data source.
2. **Data Manipulation:** Implement basic data manipulation on the fetched data.
3. **Client-Side Presentation:** Present the resulting data client side.

## Detailed instructions

### Tech Stack

- **Backend:** Node.js with Express
- **Frontend:** React, Next.js with React, or Vanilla JS / TS
- **Full-Stack Option:** Next.js

### Tasks

1. **Project Initialization:**
   - Set up a Node.js project with Express.
   - Configure necessary dependencies and development tools (such as Nodemon)

2. **Data retrieval endpoint:**
   - Create a root endpoint (GET /) in your Express server.
   - This endpoint should fetch data from <https://jsonplaceholder.typicode.com/users/1> and return the response.

3. **User Posts endpoint:**
   - Develop an endpoint (GET /users/:id/posts) that accepts a user ID as a URL parameter, fetches the user data and their posts from the JSONPlaceholder API (<https://jsonplaceholder.typicode.com/users/:id> and <https://jsonplaceholder.typicode.com/posts?userId=:id>), and returns them as a single JSON object.

4. **Data Transformation:**
   - Add a boolean field `hasEvenId` to each post indicating whether the post's ID is an even number.

5. **Frontend Implementation:**
   - Create a frontend interface using React, Next.js with React, or basic vanilla JavaScript.
   - Fetch and display the manipulated data from the backend.
   - **Bonus:** Apply basic styling of your choice to enhance the presentation of data.

## Review (15-20 min)

After you complete the challenge, we will review your code together. During the review, please be prepared to:

- Explain your solution and the choice of libraries.
- Discuss any challenges you encountered.
- Demonstrate your problem-solving approach and ability to write clean, maintainable code.
- Describe how you would test the endpoints and handle potential improvements or extensions to your solution if additional time was provided.

**Good luck!**
