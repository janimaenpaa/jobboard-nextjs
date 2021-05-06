# Project Plan

- Users can see job posts
- Recruiters can add job posts
- Admin can manage job posts and users

## Tech Stack

- TypeScript
- Frontend Framework: Next.js (React)
- Backend: Next.js API or Express.js(?)
- ORM: Prisma 2
- Database: PostgreSQL
- Styling components: Styled Components
- CI/CD: Github Actions
- Testing: Jest, React Testing Library, Cypress(?)
- Data fetching: SWR

## Data Models

### User

- id: ID
- firstName: string
- lastName: string
- email: string
- company: string
- isAdmin: boolean
- passwordHash: string
- created: Date
- posts: Post[]

### Post

enum Status {
'WAITING', 'APPROVED', 'REJECTED', 'SPONSORED'
}

- id: ID
- title: string
- company: string
- description: string
- requiredSkills: string
- niceToHaveSkills: string
- link: string
- deadline: Date
- published: Date
- status: Status

## MVP

### Client

- Post
- PostList
- Create Post

## V1

### Admin

- Dashboard
- Change post status
- CRUD operations on posts
- Add new admins

## V2

### Client

- User login
- User sigunp
- Manage own posts

### Admin

- Manage users




