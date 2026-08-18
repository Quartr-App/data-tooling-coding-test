# Coding Challenge | Data Tooling | Full Stack Developer (~60 min)

## Objectives

The primary goals of this coding challenge are:

1. **Backend:** Build endpoints that fetch and combine data from an external data source.
2. **Data Manipulation:** Perform basic data manipulation on the fetched data.
3. **Frontend:** Present the resulting data client side, dynamically.

> [!TIP]
> During the coding challenge, you are encouraged to articulate your thought process out loud. This helps us better understand your approach, decision-making, and problem-solving skills.
>
> You are allowed to use any tools that you deem necessary to solve the coding challenge.

## Getting Started

This repository contains a scaffolded backend and frontend so you can focus on the tasks. The only prerequisite is [Bun](https://bun.sh/).

Backend ([Elysia](https://elysiajs.com/), runs on <http://localhost:3000>):

```bash
cd backend && bun install && bun dev
```

Frontend ([React](https://react.dev/learn) + [Vite](https://vite.dev/), runs on <http://localhost:5173>):

```bash
cd frontend && bun install && bun dev
```

## Tasks

### Backend

1. **External Data Fetch**
   - Create a root endpoint (GET /) in the server.
   - This endpoint should fetch data from <https://jsonplaceholder.typicode.com/users/1> and return the response (unmodified).

2. **Dynamic Data Aggregation**
   - Develop an endpoint (GET /users/:id/posts) that accepts a user ID as a URL parameter, fetches the user data and their posts from the JSONPlaceholder API (<https://jsonplaceholder.typicode.com/users/:id> and <https://jsonplaceholder.typicode.com/posts?userId=:id>), and returns them as a single JSON object.
   - **Note**: user IDs go from 1 through 10

3. **Data Manipulation**
   - Add a boolean field `hasEvenId` to each post indicating whether the post's ID is an even number.

4. **Comment Counts**
   - Add a numeric field `commentCount` to each post with the number of comments on that post. Comments are available from <https://jsonplaceholder.typicode.com/comments?postId=:id>.

### Frontend

5. **Frontend Implementation**
   - Fetch the data from your backend and display the user and their posts, including the fields you added.
   - Add a control to switch between users 1 through 10; the view should update with the selected user's data.

6. **Search & Sort**
   - Add a text input that filters the displayed posts by title.
   - Add a toggle to sort the posts by `commentCount`.

7. **Bonus - Styling**
   - Apply basic styling of your choice to enhance the presentation of data.

## Review (15-20 min)

After you complete the challenge, we will review your code together. During the review, please be prepared to:

- Explain your solution and the choice of libraries.
- Discuss any challenges you encountered.
- Demonstrate your problem-solving approach and ability to write clean, maintainable code.
- Describe how you would test the endpoints and handle potential improvements or extensions to your solution if additional time was provided.

**Good luck!**
