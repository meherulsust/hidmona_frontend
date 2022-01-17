## Getting Started

### Install dependencies

```bash
yarn install
```

### Configure ENV

Create `.env.local` file by copying `.env.example` and update these variables

```bash
NEXTAUTH_SECRET="${randomString}"
```

### Start dev server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Using Mock APIs

Open a new terminal and run

```bash
yarn mock:api
```

Use any credentials you want for login

### Using Storybook

Open a new terminal and run

```bash
yarn storybook
```
