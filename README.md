# SAC-2025

SAC 2025 is an event that encapsules a whole week of conferences and workshops about technology and innovation.

# Setting up environment

1. Install dependencies
```bash
npm install
```
2. Create a .env file in the root of the project and add the following variables
```bash
DATABASE_URL=postgres://postgres:example_db@localhost:5432/sac_db
```
3. Create database container
```bash
docker compose up -d
```
4. Run migrations
```bash
npx drizzle-kit migrate
```
5. Once the database is all setup, run the following command to seed demo data
```bash
npx tsx src/db/index.ts
```
6. Start the server
```bash
npm run dev
```
