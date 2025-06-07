
# TikTok Clone - Frontend/Backend Integration

**Note:** The implementation of this practical 4 resides in the `practical1-tiktok` directory. This documentation serves as a reference guide.
## 📌 Overview
This project demonstrates the complete integration between a Next.js frontend and Express.js backend for a TikTok-style application, implementing user authentication, video management, and social interaction features.

## 🛠️ Prerequisites
- Node.js v16+
- Next.js frontend application
- Express.js backend server
- Basic knowledge of:
  - React hooks
  - JWT authentication
  - REST APIs

## 🚀 Installation
```bash
npm install axios jwt-decode react-hot-toast
```

## 🏗️ Implementation

### 1. API Client Setup
**File:** `src/lib/api-client.js`
```javascript
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor for auth tokens
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
```

### 2. Authentication System
**Core Components:**
- `src/contexts/AuthContext.jsx` - Global auth state
- `src/components/auth/AuthModal.jsx` - Unified auth dialog
- `src/hooks/useAuth.js` - Custom auth hook

**Environment Variables:**
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

## 🎥 Key Features

### Video Management
- Upload interface with preview
- Infinite-scroll video feed
- Like/comment functionality

### Social Features
- User profiles
- Follow/unfollow system
- Personalized content feeds

### Authentication
- JWT-based login/logout
- Protected routes
- Session persistence

## 📂 Project Structure
```
src/
├── app/                # Next.js page routes
├── components/         # Reusable UI components
│   ├── auth/           # Authentication components
│   ├── video/          # Video components
│   └── ui/             # General UI elements
├── contexts/           # React contexts
├── hooks/              # Custom hooks
└── services/           # API service layer
```

## 🧪 Testing Guide

### Authentication Tests
1. Register new users
2. Verify login/logout flow
3. Test protected routes

### Video Tests
1. Upload multiple videos
2. Validate like/comment persistence
3. Check feed loading states

### Social Tests
1. Create follow relationships
2. Verify personalized feeds
3. Test profile viewing

## 🔧 Troubleshooting

| Issue | Solution |
|-------|----------|
| CORS errors | Configure backend CORS middleware |
| 401 Errors | Verify token validity |
| Video upload fails | Check file size limits |
| Stale data | Implement SWR caching |

## 📚 Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Axios HTTP Client](https://axios-http.com)
- [JWT Authentication](https://jwt.io)

---

