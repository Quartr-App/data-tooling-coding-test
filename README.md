# Coding Test: Data Tooling Full Stack Developer (~60 min)

## Description

In this challenge, you are required to create a RESTful API using Node.js that interacts with the JSONPlaceholder API (https://jsonplaceholder.typicode.com/).
The general idea is that you should be able fetch both a user and their posts, then with that information add on some data. Ultimately the processed response should be shown/rendered on the client side.

## Options:

1. Node.js backend + React / Next.js frontend
2. Next.js full stack application

Feel free to select any other dependencies in addtion to the ones mentioned and feel free to reason for why you would want that.

Tasks:

1. Project Setup:
   Initialize a new Node.js project. Set up Express.js and install necessary dependencies. Configure nodemon (or equivalent) for automatic server restarts during development.

2. Fetch Data From External Data Source:
   Create a new GET endpoint in root (/) that fetches data from https://jsonplaceholder.typicode.com/users/1 and return response.

3. API Development:
   Create a new endpoint GET /users/:id/posts in your application. This endpoint should accept a user id as a URL parameter, fetch the related user and their posts from the JSONPlaceholder API (https://jsonplaceholder.typicode.com/users/:id and https://jsonplaceholder.typicode.com/posts?userId=:id), and return them as a single JSON object.

4. Data Manipulation:
   For each post fetched, add a new boolean field `hasEvenId` indicating whether the post's id is an even number. Use Array methods for this transformation.

5. Client Rendering:
   Render the data response on the client in whatever way you deem suitable.

6. Error Handling:
   Implement error handling for your API. Ensure your application responds appropriately to potential issues like invalid user IDs, inability to connect to the JSONPlaceholder API, and other unexpected errors.

# Review (15 minutes)

After you complete the challenge, we will review your code together. During the review, we would like you to explain your solution, your choice of libraries, and any challenges you encountered. We are interested in your approach to problem-solving, your understanding of Node.js and TypeScript, and your ability to write clean, maintainable code. We will also discuss how you would test this endpoint and how you might handle potential improvements or extensions to your solution. Please be prepared to discuss and possibly demonstrate these elements.

Good luck!
