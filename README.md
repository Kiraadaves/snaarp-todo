## Snaarp Evaluation: To do App
This is a simple to-do application utilizing localStorage for backend storage. All CRUD operations are managed through React Query, implemented with custom hooks for efficient state and data handling

## Tools and Libraries used
- React/NextJS 15 (App router)
- Typescript
- TanStack Query (React Query)
- Tailwind CSS
- localStorage for data persistence
- ShadCN UI components
- AOS for animations

## Features
- Add tasks by inputing a task title in the form field and submitting with a submit button
- Each task has an id generated with uuidv4, a title, a completed status and a created at fields.
- View tasks with dates and time created
- Edit tasks
- Delete tasks
- Mark task as completed via checkbox
- Filter tasks by: All, Active and completed
- localStorage to simulate backend storage
- React Query to handle CRUD operations
- ShadCN components (card, tabs, button, input, checkbox)
- Display task summary (all tasks, active tasks and completed tasks)
- Responsive design
- Animation using AOS


## Deployed App on Vercel

You can view this app here: [Todo-App](https://snaarp-todo.vercel.app/) 

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## More Information

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Setup Instructions

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

