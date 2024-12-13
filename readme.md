Audit Trail System
An Audit Trail System that helps in tracking and logging changes made to data or user actions over time. This system
provides a transparent record of activities for compliance, security, and troubleshooting purposes.

Features
Logging User Actions: Track user interactions with the system, such as data modifications, additions, and deletions.
Data Changes Tracking: Record changes made to specific data, including the before and after values.
Real-Time Monitoring: Collect audit logs in real-time for immediate monitoring and alerting.
Security and Compliance: Ensure all activities are logged securely, meeting regulatory compliance standards.
Customizable: Easily configurable to track specific events based on the business requirements.
Technologies Used
TypeScript: Type-safe development for robust and maintainable code.
Node.js: JavaScript runtime for executing server-side logic.
Express.js: Web framework for handling HTTP requests.
MongoDB: Database for storing audit logs.
ts-node: TypeScript execution engine for running TypeScript files directly.
Getting Started
Prerequisites
Node.js (v18.0 or above)
npm or yarn
MongoDB (for production use, or you can use a local instance)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/audit-trail-system.git
cd audit-trail-system
Install dependencies:

bash
Copy code
npm install
Configure your environment (optional):

Set up a .env file or configure environment variables for database connection and other settings.

Example .env file:

env
Copy code
MONGO_URI=mongodb://localhost:27017/audit-trail
Run the application in development mode:

bash
Copy code
npm start
This will start the server and listen for requests on port 3000 (default).

API Documentation
POST /log: Logs a new user action or data change.

Request body:
json
Copy code
{
"userId": "string",
"action": "string",
"data": "object",
"changes": "object",
"timestamp": "ISO 8601 date-time string"
}
Response:
json
Copy code
{
"status": "success",
"message": "Log entry created successfully"
}
GET /logs: Retrieves all audit logs.

Query parameters (optional):
userId: Filter logs by a specific user.
startDate, endDate: Filter logs by date range.
Response:
json
Copy code
[
{
"userId": "string",
"action": "string",
"data": "object",
"changes": "object",
"timestamp": "ISO 8601 date-time string"
},
...
]
Example Usage
To log a new event:

bash
Copy code
curl -X POST http://localhost:3000/log \
-H "Content-Type: application/json" \
-d '{
"userId": "12345",
"action": "UPDATE",
"data": {"name": "John Doe", "age": 30},
"changes": {"age": 31},
"timestamp": "2024-12-14T10:00:00Z"
}'
Testing
Run the tests for the system:

bash
Copy code
npm test
Deployment
To deploy the system in production:

Set up environment variables (e.g., for MongoDB URI).
Deploy to your preferred hosting provider (e.g., AWS, Heroku, etc.).
Set up a CI/CD pipeline to automate testing and deployment.
Contributing
Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes and commit (git commit -am 'Add new feature').
Push to the branch (git push origin feature/your-feature).
Open a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.
