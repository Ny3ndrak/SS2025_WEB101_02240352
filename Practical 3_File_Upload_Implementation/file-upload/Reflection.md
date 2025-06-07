
# Reflection: File Upload Implementation

## Documentation

### Key Concepts Applied
1. **Multipart Form Handling**  
   Used Formidable to parse multipart/form-data in Next.js API routes
2. **Client-Side Validation**  
   Implemented file type/size checks before upload
3. **Progress Tracking**  
   Created custom progress events using Axios interceptors
4. **Drag-and-Drop Interface**  
   Leveraged react-dropzone for intuitive file selection

## Reflection

### Key Learnings
- Next.js API routes are powerful for handling backend logic
- FormData requires special handling compared to JSON payloads
- Progress events need careful state management in React

### Challenges Faced

1. **File Validation**  
   Initially allowed incorrect file types. Fixed by implementing proper regex pattern matching.

2. **Progress Tracking**   
   Progress bars would sometimes freeze. Solved by:
   - Adding proper cleanup in useEffect
   - Implementing request cancellation

3. **Large File Handling**  
   Files >10MB would timeout. Implemented:
   - Better error messages
   - Client-side size validation
   - Server-side configuration adjustments

### Solutions Implemented
- Created reusable upload component
- Added comprehensive error states
- Optimized server configuration for file handling

