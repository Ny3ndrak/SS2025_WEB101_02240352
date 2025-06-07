
# Practical 5: Infinite Scroll Implementation 

## Implementation Note ℹ️
The working code is located in the `practical1-tiktok` folder. This directory only contains `README.md` and `Reflection.md` files.

## Overview 🎯
This practical adds infinite scrolling to a TikTok-like app using TanStack Query with cursor-based pagination for seamless content loading.

## Core Concepts 📚

### Pagination Methods
- **Traditional Pagination (Offset-Based) ❌**
  - Uses page numbers and item limits
  - Example request: "Show page 3 with 10 items"
  - Simple but problematic with dynamic data
  - Performance issues with large datasets

- **Modern Approach (Cursor-Based) ✅**
  - Uses unique item identifiers as reference points
  - Example request: "Show 10 items after ID 1234"
  - Better for frequently updated content
  - More efficient for infinite scroll UIs

### Technology Advantages 🚀
- **TanStack Query Features:**
  - Dedicated infinite scroll hook (`useInfiniteQuery`)
  - Automatic pagination management
  - Built-in loading/error states
  - Smart data caching
  - Easy data fetching functions

- **Intersection Observer API 👁️**
  - Detects element visibility changes
  - More efficient than scroll listeners
  - Clean implementation for loading triggers

## Development Process 🛠️

### Backend Modifications

#### Video Controller Update
```javascript
// Updated video controller logic
const getAllVideos = async (req, res) => {
  // Implementation details...
  // Uses cursor-based pagination with Prisma
  // Includes n+1 fetching pattern
  // Returns pagination metadata
};
```

#### Following Videos Controller
```javascript
// Similar updates for following videos
const getFollowingVideos = async (req, res) => {
  // Includes follower filtering
  // Same cursor-based approach
};
```

### Frontend Implementation

#### Setup Requirements 📦
1. Install required packages:
```bash
npm install @tanstack/react-query @tanstack/react-query-devtools
```

#### Query Client Configuration
```javascript
// Layout component setup
export default function RootLayout({ children }) {
  // QueryClient initialization
  // Includes default cache settings
};
```

#### API Service Updates
```javascript
// Modified video service functions
export const fetchVideos = async ({ pageParam = null }) => {
  // Handles cursor parameters
  // Manages API requests
};
```

#### Custom Intersection Hook
```javascript
// Reusable visibility detector
export const useIntersectionObserver = (callback, options) => {
  // Observer implementation
  // Configurable thresholds
};
```

#### Video Feed Component
```javascript
// Enhanced video feed with infinite scroll
export default function VideoFeed() {
  // Uses useInfiniteQuery
  // Integrates intersection observer
  // Handles all loading states
};
```

## Comparison Highlights 📊

### Backend Differences
- New query parameters (cursor/limit vs page/limit)
- Modified response structure
- Prisma cursor queries
- n+1 fetching technique

### Frontend Changes
- New infinite query hook
- Intersection observer integration
- Cursor navigation handling
- Enhanced loading states

## References 📖
- TanStack Query docs
- Infinite query guides
- MDN Intersection Observer
- Prisma pagination
- Next.js App Router docs

```