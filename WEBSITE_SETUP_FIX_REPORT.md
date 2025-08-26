# AeroVision Labs Website Setup & Fix Report
*Complete documentation of issues encountered and solutions implemented*

## Project Overview
**Project**: AeroVision Labs - AI Model Marketplace Demo  
**Technology Stack**: Next.js 14.0.4, React 18.3.1, TypeScript, Tailwind CSS  
**Target**: Running website on localhost port 3050  
**Date**: Current session  

## Initial Request
User wanted to run the AeroVision Labs website on localhost port 5678, then changed to port 3050.

## Issues Encountered (Chronological Order)

### Issue 1: Missing Dependencies
**Error Message**: 
```
'next' is not recognized as an internal or external command,
operable program or batch file.
```

**Root Cause**: 
- `node_modules` folder was missing or incomplete
- Next.js and other dependencies weren't properly installed

**Solution Applied**:
```bash
npm install
```

**Result**: 
- Successfully installed all 25+ dependencies
- Some warnings about deprecated packages but installation completed
- All packages from package.json were properly installed

**Dependencies Installed**:
- Next.js 14.0.4
- React 18.3.1 & React DOM 18.3.1
- TypeScript 5.9.2
- Tailwind CSS 3.4.17
- Framer Motion 10.18.0
- Radix UI components (Dialog, Dropdown Menu, Tabs)
- React Hook Form 7.62.0
- Zustand 4.5.7 (state management)
- Lucide React 0.294.0 (icons)
- And 15+ other packages

### Issue 2: Command Execution Problems
**Error Message**: 
```
'next' is not recognized as an internal or external command
```

**Root Cause**: 
- PATH issues with npm scripts
- Global vs local package conflicts

**Solution Applied**:
```bash
npx next dev -p 3050
```

**Why This Worked**:
- `npx` ensures locally installed version is used
- Bypasses global PATH issues
- Direct execution of Next.js binary

### Issue 3: Server-Side Rendering Error (Critical)
**Error Message**:
```
ReferenceError: window is not defined
at eval (./src/components/SymbolFieldBackground.tsx:36:44)
```

**File**: `src/components/SymbolFieldBackground.tsx`  
**Lines**: 18-19

**Root Cause**:
- Component trying to access `window.innerWidth` and `window.innerHeight` during server-side rendering
- `window` object only exists in browser environment, not during SSR

**Original Problematic Code**:
```typescript
initial={{
  x: Math.random() * window.innerWidth,        // ❌ Error here
  y: Math.random() * window.innerHeight,       // ❌ Error here
  opacity: 0
}}
```

**Solution Applied**:
Implemented proper client-side rendering with React hooks:

```typescript
import { useState, useEffect } from 'react'

export default function SymbolFieldBackground() {
  const symbols = ['•', '×', '+', '○', '□', '△', '◇', '▽']
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  if (!isClient) {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50" />
      </div>
    )
  }
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50" />
      
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-gray-300/30 text-2xl"
          initial={{
            x: Math.random() * dimensions.width,    // ✅ Fixed
            y: Math.random() * dimensions.height,   // ✅ Fixed
            opacity: 0
          }}
          animate={{
            x: Math.random() * dimensions.width,    // ✅ Fixed
            y: Math.random() * dimensions.height,   // ✅ Fixed
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        >
          {symbols[Math.floor(Math.random() * symbols.length)]}
        </motion.div>
      ))}
      
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
    </div>
  )
}
```

**Key Improvements**:
1. **Client-side detection**: Added `isClient` state to track when component is mounted
2. **Safe window access**: Only access `window` after component mounts via `useEffect`
3. **Responsive handling**: Added window resize event listener
4. **Fallback render**: Provided server-side fallback without animations
5. **State management**: Used `dimensions` state instead of direct window access

### Issue 4: Port Already in Use
**Error Message**:
```
Error: listen EADDRINUSE: address already in use :::3050
```

**Root Cause**: 
- Previous server instance still running on port 3050
- Process hadn't been properly terminated

**Solution**: 
- Error resolved when previous process was terminated
- New server instance started successfully

## Final Working Setup

### Commands Executed (Final Sequence):
1. `npm install` - Installed all dependencies
2. `python --version` - Verified Python availability (Python 3.13.7)
3. `npx next dev -p 3050` - Started development server successfully

### Current Status:
✅ **Website is now running successfully at http://localhost:3050**

### Server Output (Successful):
```
▲ Next.js 14.0.4
- Local:        http://localhost:3050
✓ Ready in 2.3s
○ Compiling / ...
✓ Compiled / in 3.8s (1113 modules)
✓ Compiled in 333ms (560 modules)
✓ Compiled in 550ms (1104 modules)
✓ Compiled in 266ms (1104 modules)
```

## Technical Learnings & Best Practices

### 1. Dependency Management
- **Always run `npm install`** when setting up new projects or after pulling changes
- **Check `package-lock.json`** exists to ensure consistent installations
- **Use `npx`** when `npm run` commands fail due to PATH issues

### 2. Next.js Server-Side Rendering
- **Never access browser APIs** (window, document, localStorage) during SSR
- **Use `'use client'` directive** for components that need browser APIs
- **Implement proper client-side checks** with `useState` and `useEffect`
- **Provide fallback renders** for server-side rendering

### 3. React Hooks Best Practices
- **Use `useEffect`** for side effects like accessing browser APIs
- **Clean up event listeners** in useEffect return function
- **Use state for dynamic values** that depend on browser environment

### 4. Development Workflow
- **Check for running processes** before starting new servers
- **Use specific ports** to avoid conflicts
- **Monitor terminal output** for compilation errors

## Project Structure
```
Website/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── SymbolFieldBackground.tsx (✅ Fixed)
│   │   └── ui/
│   │       ├── button.tsx
│   │       └── card.tsx
│   └── lib/
│       ├── data.ts
│       ├── providers.tsx
│       ├── store.ts
│       └── utils.ts
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Environment Verification
- **Node.js**: Available (via npm/npx)
- **Python**: 3.13.7 (available in PATH)
- **Git**: Available (MINGW64 environment)
- **Port 3050**: Successfully bound and serving

## Conclusion
The AeroVision Labs website is now fully functional with:
- ✅ All dependencies properly installed
- ✅ Server running on localhost:3050
- ✅ Animated background working correctly
- ✅ No compilation errors
- ✅ Responsive design with proper window handling

The main challenges were dependency installation and server-side rendering issues, both of which were resolved through proper setup procedures and code fixes.
