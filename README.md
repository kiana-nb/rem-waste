This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Approach and Implementation

### Understanding the Industry
Since I was unfamiliar with the skip hire industry, my first step was to research how the system works, what skip hire entails, and how users typically interact with such services. This provided me with the necessary context to make informed design and functionality decisions.

### Enhancing User Experience
While analyzing the existing setup, I identified a significant improvement opportunity: the absence of a filtering system. Implementing a filtering feature would greatly enhance user experience by enabling users to quickly find the most relevant skip options based on their specific needs.

### Technology Stack
I opted to build the project using **Next.js** for server-side rendering and performance benefits, **TypeScript** for type safety, and **Tailwind** CSS for efficient styling and responsiveness.

### Data Fetching & Rendering
To begin, I focused on fetching the provided data and displaying it in a structured manner. Each skip option was rendered as an individual **card component**, ensuring modularity and reusability. Since data fetching plays a crucial role in performance and user experience, I implemented **server-side fetching** to optimize loading times and improve responsiveness.

### Layout & Navigation Enhancements
To create a better user flow, I separated the **layout** from the main page logic. I also introduced a **footer** that includes navigation buttons for moving between pages, as well as a section to display the user's selected skip option.

### Implementing Selection Functionality
To allow users to select a skip, I converted the **card component into a client component**, enabling interactivity. I used **Next.js search params** to store the selected skip’s ID in the URL, ensuring that the selection persists across the application.

### Filtering System Implementation
Next, I implemented a **filtering system** to refine the displayed skip options based on key attributes:

- Size

- Whether it allows heavy waste

- Whether it is allowed to be placed on the road

To maintain a clean state and ensure filters were easily shareable, I passed filter values as **URL search params** and used them to filter the fetched data dynamically.

### Loading States & Skeleton UI
Since data updates (such as applying filters) caused a slight delay, I introduced **loading indicators** to improve UX. I implemented:

- **React Skeleton UI** for a smoother transition while fetching data

- **Next.js loading states** to handle server-side transitions

- **React Suspense Boundary** for better control over loading experiences

### UI/UX Improvements
With the core functionality in place, I explored **Dribbble** to gather inspiration for modern hiring page designs. Based on my research, I refined the **card design** to enhance its visual appeal and readability.








## Getting Started

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

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
