# ARMS - Alumni Report Management System

ARMS is a comprehensive, modern web application designed to connect students, alumni, and administrators of an educational institution. It provides a centralized platform for managing alumni data, fostering mentorship, organizing events, and sharing opportunities within the community.

Built with a modern tech stack, this platform leverages Next.js for a fast, server-rendered React experience, ShadCN for beautifully designed and accessible UI components, and Genkit for powerful AI-driven features like career guidance.

## ✨ Key Features

- **Role-Based Access Control**: Separate, tailored dashboards for Students, Alumni, and Administrators with secure login.
- **Alumni Directory**: A searchable and filterable database of alumni, allowing users to connect based on graduation year, major, company, and location.
- **Event Management**: Create and display events like reunions, webinars, and networking nights.
- **Job Board**: A dedicated space for alumni to post job openings and for students and fellow alumni to find career opportunities.
- **Mentorship Program**: A module to connect students with experienced alumni for career guidance and support.
- **AI-Powered Career Guidance**: An integrated chatbot that leverages Genkit and Google's Gemini models to provide students with personalized career advice.
- **Donations Portal**: A feature to manage and encourage donations and fundraising campaigns.
- **Profile Management**: Users can view and request updates to their profiles, which can be approved by an administrator.

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/your-repository-name.git
    cd your-repository-name
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of your project and add the following environment variables. You will need to create a Supabase project and a Google AI API key.

    ```env
    # Supabase credentials for authentication and database
    NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

    # Google AI (Gemini) API Key for Genkit
    GEMINI_API_KEY=your_gemini_api_key
    ```

4.  **Run the development server:**
    ```sh
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Available Scripts

In the project directory, you can run:

-   `npm run dev`: Runs the app in development mode.
-   `npm run build`: Builds the app for production.
-   `npm run start`: Starts a production server.
-   `npm run lint`: Runs the linter to check for code quality issues.
-   `npm run typecheck`: Runs the TypeScript compiler to check for type errors.
-   `npm run genkit:dev`: Starts the Genkit development server for AI flows.

## 💻 Tech Stack

This project is built with a modern, robust, and scalable technology stack:

-   **Framework**: [Next.js](https://nextjs.org/) (React Framework)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [ShadCN/UI](https://ui.shadcn.com/)
-   **AI Integration**: [Genkit](https://firebase.google.com/docs/genkit) with Google Gemini
-   **Authentication & Database**: [Supabase](https://supabase.io/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Linting**: [ESLint](https://eslint.org/)
-   **Form Management**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) for validation

## ☁️ Deployment

This application is ready to be deployed on platforms that support Next.js, such as [Vercel](https://vercel.com/) or [Firebase App Hosting](https://firebase.google.com/docs/app-hosting).

When deploying, remember to configure the environment variables mentioned in the "Getting Started" section in your hosting provider's settings.
