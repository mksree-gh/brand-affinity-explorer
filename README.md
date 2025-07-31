# Brand Affinity Explorer

<div align="center">

![Brand Affinity Explorer Demo](./screenshot.gif)

**An interactive dashboard for sales teams to understand customer brand preferences at a glance**

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_Site-blue?style=for-the-badge)](https://mksree-gh.github.io/brand-affinity-explorer/)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://choosealicense.com/licenses/mit/)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)

</div>

## 📖 Overview

**Brand Affinity Explorer** transforms complex customer behavior data into actionable insights for sales teams. When a customer walks into your store, this tool provides an instant visual profile of their brand preferences, helping sales associates tailor their approach for maximum impact.

### 🎯 The Problem We Solve

Sales teams often struggle to quickly understand customer preferences, leading to:
- Generic recommendations that don't resonate
- Missed opportunities for upselling premium brands
- Inconsistent customer experiences across different staff members

### 💡 Our Solution

A real-time, visual dashboard that shows:
- **Which brands** each customer has the strongest affinity for
- **How different metrics** contribute to brand preference calculations
- **Customizable weightings** that reflect your business strategy

## 🏪 Real-World Use Cases

| Business Type | Key Metrics | Sales Strategy |
|---------------|-------------|----------------|
| **Luxury Retail** | High spend, low frequency | Focus on exclusivity and premium experiences |
| **Fast Fashion** | High frequency, recent visits | Emphasize trends and quick turnover items |
| **Electronics** | Advocacy, repeat purchases | Leverage brand loyalty and technical expertise |

## 🛠️ Technical Architecture

### Tech Stack
- **Frontend Framework:** React 18 with functional components and hooks
- **Build System:** Vite for fast development and optimized production builds
- **Styling:** Tailwind CSS for utility-first styling and consistent design
- **Icons:** Lucide React for scalable, consistent iconography
- **Deployment:** GitHub Pages with automated CI/CD

### Architecture Highlights
- **Component-based React structure** with `BrandAffinityDemo.jsx` as the main component
- **Dynamic bubble positioning algorithm** that handles collision detection and optimal spacing
- **Memoized calculations** using `useMemo` for performance optimization
- **State management** with React hooks for weights, user selection, and UI controls
- **Automatic color generation** system with shade variations for visual distinction

### Data Structure
The application uses a sophisticated mock data system:

```javascript
// User profile example
{
    id: 1,
    name: 'Sophia Chen',
    description: 'Luxury fashion enthusiast with premium taste',
    lastPurchaseDate: '2025-07-25',
    purchasePower3Months: 13500,
    location: 'Shanghai, China',
    interactions: {
        'Gucci': { 
            frequency: 85, recency: 95, spend: 90, 
            repeat: 80, advocacy: 75, preference: 95 
        }
        // ... more brand interactions
    }
}
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18.0.0 or higher
- **npm** v8.0.0 or higher

### Quick Start

```bash
# Clone the repository
git clone https://github.com/mksree-gh/brand-affinity-explorer.git

# Navigate to project directory
cd brand-affinity-explorer

# Install dependencies
npm install

# Start development server
npm run dev
```

Your application will be available at `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Deploy to GitHub Pages |
| `npm run lint` | Run ESLint for code quality checks |

## 🔧 Configuration

### Customizing Brand Categories
Edit the brand data in `src/data/mockData.js` to match your product catalog:

```javascript
const categoryColors = {
    'Luxury Fashion': '#8B5CF6',
    'Fast Fashion': '#3B82F6',
    'Casual Wear': '#10B981',
    'Retail': '#F59E0B',
    'Groceries': '#EC4899',
    'Electronics': '#6366F1',
    'Niche': '#84CC16',
    'Beauty': '#22C55E',
    'Sportswear': '#F97316',
    'Footwear': '#EAB308'
};

const brands = [
    { name: 'Gucci', category: 'Luxury Fashion' },
    { name: 'Zara', category: 'Fast Fashion' },
    { name: 'Apple', category: 'Electronics' },
    // Add your brands here...
];
```

### Adjusting Calculation Logic
The affinity calculation algorithm is located in `src/components/BrandAffinityDemo.jsx`:

```javascript
const score = (
    (metrics.frequency * weights.frequency) +
    (metrics.recency * weights.recency) +
    (metrics.spend * weights.spend) +
    (metrics.repeat * weights.repeat) +
    (metrics.advocacy * weights.advocacy) +
    (metrics.preference * weights.preference)
) / 100;
```

Each metric is scored 0-100 and weighted according to your business priorities.

## 📊 Understanding the Metrics

| Metric | Default Weight | Description | Business Impact |
|--------|---------------|-------------|-----------------|
| **Frequency** | 30% | How often customer shops this brand | Indicates habit formation and loyalty |
| **Recency** | 10% | How recently they purchased | Shows current interest and engagement |
| **Spend** | 15% | Average amount spent per visit | Reflects value perception and budget allocation |
| **Repeat Purchases** | 20% | Likelihood to return to same brand | Measures satisfaction and brand stickiness |
| **Advocacy** | 10% | Willingness to recommend | Indicates emotional connection and trust |
| **Preference** | 15% | Comparative ranking vs other brands | Shows relative positioning in customer's mind |

### Scoring System
- **Scale**: Each metric is scored from 0-100
- **Calculation**: `(metric1 × weight1 + metric2 × weight2 + ...) ÷ 100`
- **Visual Size**: Bubble size ranges from 20px (minimum) to 200px based on final score
- **Real-time Updates**: All scores recalculate instantly when weights change

---

<div align="center">

**Made with ❤️ for sales teams**


</div>
