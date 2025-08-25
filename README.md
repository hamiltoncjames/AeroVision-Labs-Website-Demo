# AeroVision Labs - AI Model Marketplace Demo

A production-quality demo website for a drone-AI model marketplace. This is a client-side only application that simulates a complete marketplace experience with mock authentication, payments, and AI model browsing.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the demo.

## 🎯 Demo Features

### For Visitors
- **Mock Account Creation**: Create accounts with email + name (stored locally)
- **Mock Payment Details**: Add payment cards (last4, brand, expiry - no real PCI)
- **Model Browsing**: Filter, search, and sort through 24+ AI models
- **Shopping Cart**: Add models to cart and proceed through checkout
- **Contribution System**: Submit ideas and earn discount credits
- **Pricing Options**: $30–$150 per model OR $100/month "All Models" subscription

### Key Functionality
- **Dynamic Background**: Animated SVG glyphs with parallax effects
- **Global Loader**: Animated glyphs coalescing into brand mark
- **Responsive Design**: Fully responsive across all devices
- **Client-side Persistence**: All data stored in localStorage
- **Mock Flows**: Complete user journey simulation

## 🏗️ Architecture

### Tech Stack
- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: Framer Motion
- **Icons**: lucide-react
- **Forms**: React Hook Form + Zod validation
- **State Management**: Zustand with localStorage persistence
- **No Backend**: Everything runs client-side

### Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── (routes)/          # All application routes
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   ├── Loader.tsx        # Global preloader
│   └── SymbolFieldBackground.tsx # Animated background
├── lib/                  # Core utilities
│   ├── data.ts          # Hardcoded seed data
│   ├── store.ts         # Zustand stores
│   ├── utils.ts         # Utility functions
│   └── persist.ts       # localStorage abstraction
└── utils/               # Additional utilities
```

## 💾 Data Persistence

### How Demo Persistence Works
All user data is stored locally in the browser using `localStorage`:

- **User Accounts**: Email, name, points, subscription status
- **Payment Methods**: Card brand, last4, expiry (mock data only)
- **Shopping Cart**: Model IDs and quantities
- **Order History**: Purchase history with mock license keys
- **Contributions**: User submissions and earned points

### Storage Schema
```typescript
// Each store uses a versioned schema
interface StorageSchema {
  version: string
  user?: User
  cart?: CartItem[]
  orders?: Order[]
  payment?: PaymentCard
  contributions?: Contribution[]
}
```

### Data Migration
The persistence system includes versioning for future migrations:
- Current version: `1.0.0`
- Automatic migration detection
- Graceful fallback to defaults

## 🎨 Customization Guide

### Renaming the Brand

1. **Update Brand Name**:
   ```typescript
   // src/lib/data.ts
   export const siteConfig = {
     name: "Your New Brand Name",
     // ... other config
   }
   ```

2. **Update Logo/Brand Mark**:
   ```typescript
   // src/components/Loader.tsx
   <div className="text-4xl font-bold gradient-text">Y•N</div>
   ```

3. **Update Colors**:
   ```javascript
   // tailwind.config.js
   colors: {
     brand: {
       blue: "#YOUR_BLUE",
       lime: "#YOUR_LIME",
       charcoal: "#YOUR_CHARCOAL",
       offwhite: "#YOUR_OFFWHITE",
     }
   }
   ```

### Replacing Seed Data

1. **Models**: Update `src/lib/data.ts` - `models` array
2. **Bundles**: Update `src/lib/data.ts` - `bundles` array  
3. **Pricing**: Update prices in models and subscription plans
4. **Categories**: Modify category types in Model interface

### Adding New Features

1. **New Pages**: Add to `src/app/` following existing patterns
2. **New Components**: Add to `src/components/` with proper TypeScript types
3. **New Stores**: Add to `src/lib/store.ts` with localStorage persistence
4. **New Routes**: Update navigation in `Header.tsx`

## 🔧 Configuration

### Environment Variables
```bash
# Demo mode toggle (shows demo notices)
NEXT_PUBLIC_DEMO=true

# Custom configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Image Domains
Configure external image domains in `next.config.js`:
```javascript
images: {
  domains: ['images.unsplash.com', 'via.placeholder.com'],
}
```

## 🎭 Mock Implementation Notes

### Authentication
- **No Real Auth**: Email + name only for demo purposes
- **Local Storage**: User data persists in browser
- **Mock Login**: Simulated with modals and toasts

### Payments
- **No Real PCI**: Only stores last4, brand, expiry
- **Mock Processing**: Simulated payment flow
- **Demo Cards**: Accept any card number for testing

### AI Models
- **No Real Models**: All data is hardcoded
- **Mock Downloads**: Simulated with license key generation
- **Demo Images**: Using Unsplash placeholders

### License Keys
- **Generated**: UUID-based mock keys (e.g., "AVL-ABC123DEF")
- **Downloadable**: Creates .txt files with license information
- **Demo Only**: Not valid for actual use

## 🚀 Production Considerations

### What to Replace for Production
1. **Authentication**: Integrate real auth provider (Auth0, Firebase, etc.)
2. **Payments**: Integrate Stripe, PayPal, or other payment processor
3. **File Storage**: Replace placeholder images with real model assets
4. **Database**: Replace localStorage with real database
5. **API Routes**: Add Next.js API routes for server-side logic
6. **Security**: Implement proper CORS, rate limiting, validation

### Performance Optimizations
- **Image Optimization**: Use `next/image` for all images
- **Code Splitting**: Leverage Next.js automatic code splitting
- **Caching**: Implement proper caching strategies
- **CDN**: Use CDN for static assets

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

All components adapt to screen size with Tailwind's responsive utilities.

## ♿ Accessibility

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: ARIA labels and descriptions
- **Focus Management**: Visible focus indicators
- **Reduced Motion**: Respects `prefers-reduced-motion`

## 🧪 Testing

### Manual Testing Checklist
- [ ] Account creation and login
- [ ] Model browsing and filtering
- [ ] Shopping cart functionality
- [ ] Checkout process
- [ ] Payment method management
- [ ] Order history and downloads
- [ ] Contribution system
- [ ] Subscription management
- [ ] Responsive design
- [ ] Accessibility features

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This demo is provided as-is for demonstration purposes. The code is available for educational and development use.

## 🤝 Contributing

This is a demo project, but suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions about this demo:
- **Demo Purpose**: This is a demonstration of a drone AI model marketplace
- **No Real Services**: All functionality is simulated
- **Educational Use**: Intended for learning and development

---

**Note**: This is a demo website. All transactions, user accounts, and data are simulated and stored locally in your browser. No real payments or authentication are processed. 
