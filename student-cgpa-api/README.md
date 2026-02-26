# Student CGPA API

## Objective
Build a REST API using Express.js that manages student CGPA records stored in an in-memory JSON array. The API includes standard and dynamic GET routes, follows REST principles, and returns proper HTTP status codes.

## List of Implemented Routes
1. `GET /students` - Return all students.
2. `GET /students/topper` - Return the student with the highest CGPA.
3. `GET /students/average` - Return the average CGPA of all students.
4. `GET /students/count` - Return the total count of students.
5. `GET /students/:id` - Return a specific student by their ID.
6. `GET /students/branch/:branchName` - Return all students from a specific branch.

## Sample API URLs
- **All Students:** `GET http://localhost:3000/students`
- **Topper:** `GET http://localhost:3000/students/topper`
- **Average CGPA:** `GET http://localhost:3000/students/average`
- **Student Count:** `GET http://localhost:3000/students/count`
- **Student by ID:** `GET http://localhost:3000/students/3`
- **Students by Branch:** `GET http://localhost:3000/students/branch/CSE`

## Steps to Run Locally
1. Clone the repository: `git clone <your-github-repo-url>`
2. Navigate into the folder: `cd student-cgpa-api`
3. Install dependencies: `npm install`
4. Start the server: `npm start`
5. The API will be available at `http://localhost:3000`

## Links
- **GitHub Repo:** `<your-github-repo-link>`
- **Postman Documentation:** [View Documentation](https://riturajjha938-2713999.postman.co/workspace/Rituraj-Jha's-Workspace~0968e471-3fad-4cbf-8411-627587488008/request/50841147-d14bee1a-6114-4eb1-8b30-34c3c885c286?action=share&creator=50841147&ctx=documentation)
- **Render Deployment:** `<your-render-deployment-link>`
