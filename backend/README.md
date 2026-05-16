# Portfolio Backend API

Backend server for the portfolio website using Express.js and MongoDB.

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the backend directory:

```bash
cp .env.example .env
```

Edit `.env` and add your MongoDB URI:

```
PORT=8000
MONGODB_URI=mongodb+srv://username:password@cluster-name.mongodb.net/simonportfolio?retryWrites=true&w=majority
NODE_ENV=development
```

**Get your MongoDB URI from MongoDB Atlas:**

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Click "Connect" on your cluster
3. Choose "Drivers" → "Node.js"
4. Copy the connection string and replace username:password with your credentials
5. Paste into `.env` file

### 3. Start the Server

**Development mode (with hot reload):**

```bash
npm run dev
```

**Production mode:**

```bash
npm start
```

The server will run on `http://localhost:8000`

## API Endpoints

### Skills

- `GET /api/skills` - Get all skills
- `GET /api/skills/:id` - Get single skill
- `POST /api/skills` - Create new skill

### Experience

- `GET /api/experiences` - Get all experiences
- `GET /api/experiences/:id` - Get single experience
- `POST /api/experiences` - Create new experience

### Education

- `GET /api/education` - Get all education records
- `GET /api/education/:id` - Get single education record
- `POST /api/education` - Create new education record

### Projects

- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create new project

### Certifications

- `GET /api/certifications` - Get all certifications
- `GET /api/certifications/:id` - Get single certification
- `POST /api/certifications` - Create new certification

### Other Activities

- `GET /api/activities` - Get all activities
- `GET /api/activities/:id` - Get single activity
- `POST /api/activities` - Create new activity

### Health Check

- `GET /api/health` - Check if server is running

## Database Collections

The MongoDB database includes these collections:

- **skills** - Technical skills with proficiency levels
- **experiences** - Work experience records
- **education** - Educational background
- **projects** - Portfolio projects
- **certifications** - Certifications and courses
- **other_activities** - Additional activities

## Frontend Integration

The frontend is configured to fetch data from `http://localhost:8000` in development mode.

Update your component files to use the API instead of hardcoded data:

```javascript
const [skills, setSkills] = useState([]);

useEffect(() => {
  fetch("http://localhost:8000/api/skills")
    .then((res) => res.json())
    .then((data) => setSkills(data))
    .catch((err) => console.error("Error fetching skills:", err));
}, []);
```

## Next Steps

1. Install dependencies: `npm install`
2. Set up `.env` file with your MongoDB URI
3. Start the backend: `npm run dev`
4. Test endpoints using Postman or Thunder Client
5. Update frontend components to fetch from API
6. Add authentication if needed for admin operations

## Troubleshooting

**MongoDB Connection Error:**

- Verify your MongoDB URI in `.env`
- Check if your IP is whitelisted in MongoDB Atlas
- Ensure database name is correct

**CORS Errors:**

- Frontend and backend URLs are configured in `server.js`
- Update `cors` options if running on different ports

**Port Already in Use:**

- Change `PORT` in `.env` to another port (e.g., 8001)
