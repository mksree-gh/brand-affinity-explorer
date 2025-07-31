// src/data/mockData.js
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

const getShade = (hex, intensity = 0.2) => {
    const f = parseInt(hex.slice(1), 16);
    const t = intensity < 0 ? 0 : 255;
    const p = intensity < 0 ? intensity * -1 : intensity;
    const R = f >> 16;
    const G = (f >> 8) & 0x00FF;
    const B = f & 0x0000FF;
    const toHex = x => Math.round((t - x) * p + x).toString(16).padStart(2, '0');
    return `#${toHex(R)}${toHex(G)}${toHex(B)}`;
};

export const generateMockData = () => {
    const brands = [
        { name: 'Gucci', category: 'Luxury Fashion' },
        { name: 'Zara', category: 'Fast Fashion' },
        { name: 'H&M', category: 'Fast Fashion' },
        { name: 'Uniqlo', category: 'Casual Wear' },
        { name: 'Target', category: 'Retail' },
        { name: 'Walmart', category: 'Retail' },
        { name: 'Reliance Fresh', category: 'Groceries' },
        { name: 'Apple', category: 'Electronics' },
        { name: 'Samsung', category: 'Electronics' },
        { name: 'Lenskart', category: 'Niche' },
        { name: 'Forest Essentials', category: 'Beauty' },
        { name: 'Nike', category: 'Sportswear' },
        { name: 'Adidas', category: 'Sportswear' },
        { name: 'Puma', category: 'Footwear' }
    ].map((b, i) => ({
        ...b,
        color: getShade(categoryColors[b.category], 0.2 + (i % 3) * 0.2)
    }));

    const users = [
        {
            id: 1,
            name: 'Sophia Chen',
            description: 'Luxury fashion enthusiast with premium taste',
            lastPurchaseDate: '2025-07-25',
            purchasePower3Months: 13500,
            location: 'Shanghai, China',
            interactions: {
                'Gucci': { frequency: 85, recency: 95, spend: 90, repeat: 80, advocacy: 75, preference: 95 },
                'Zara': { frequency: 45, recency: 60, spend: 40, repeat: 35, advocacy: 30, preference: 25 },
                'Apple': { frequency: 70, recency: 80, spend: 85, repeat: 75, advocacy: 60, preference: 70 },
                'Nike': { frequency: 55, recency: 65, spend: 60, repeat: 50, advocacy: 45, preference: 40 },
                'Forest Essentials': { frequency: 65, recency: 70, spend: 55, repeat: 60, advocacy: 50, preference: 65 },
                'Adidas': { frequency: 60, recency: 68, spend: 60, repeat: 55, advocacy: 40, preference: 45 },
                'Puma': { frequency: 50, recency: 55, spend: 50, repeat: 45, advocacy: 35, preference: 40 },
                'Uniqlo': { frequency: 40, recency: 50, spend: 35, repeat: 30, advocacy: 30, preference: 35 }
            }
        },
        {
            id: 2,
            name: 'Marcus Rodriguez',
            description: 'Budget-conscious shopper focused on value',
            lastPurchaseDate: '2025-07-27',
            purchasePower3Months: 4200,
            location: 'Austin, USA',
            interactions: {
                'Walmart': { frequency: 90, recency: 85, spend: 70, repeat: 95, advocacy: 60, preference: 80 },
                'Target': { frequency: 75, recency: 80, spend: 65, repeat: 80, advocacy: 55, preference: 70 },
                'H&M': { frequency: 60, recency: 70, spend: 45, repeat: 65, advocacy: 40, preference: 55 },
                'Reliance Fresh': { frequency: 85, recency: 90, spend: 60, repeat: 90, advocacy: 50, preference: 75 },
                'Uniqlo': { frequency: 50, recency: 55, spend: 40, repeat: 45, advocacy: 35, preference: 50 },
                'Samsung': { frequency: 35, recency: 40, spend: 35, repeat: 30, advocacy: 20, preference: 25 },
                'Adidas': { frequency: 30, recency: 30, spend: 25, repeat: 20, advocacy: 20, preference: 30 },
                'Puma': { frequency: 25, recency: 25, spend: 20, repeat: 15, advocacy: 15, preference: 25 }
            }
        },
        {
            id: 3,
            name: 'Ayesha Khan',
            description: 'Tech-savvy millennial with an eye for niche and beauty brands',
            lastPurchaseDate: '2025-07-29',
            purchasePower3Months: 8200,
            location: 'Bangalore, India',
            interactions: {
                'Apple': { frequency: 65, recency: 70, spend: 75, repeat: 60, advocacy: 50, preference: 65 },
                'Samsung': { frequency: 50, recency: 60, spend: 60, repeat: 50, advocacy: 40, preference: 55 },
                'Forest Essentials': { frequency: 75, recency: 80, spend: 65, repeat: 70, advocacy: 60, preference: 75 },
                'Lenskart': { frequency: 55, recency: 65, spend: 50, repeat: 60, advocacy: 55, preference: 65 },
                'Zara': { frequency: 45, recency: 50, spend: 45, repeat: 40, advocacy: 35, preference: 40 },
                'Uniqlo': { frequency: 60, recency: 70, spend: 55, repeat: 60, advocacy: 45, preference: 55 },
                'Nike': { frequency: 50, recency: 55, spend: 50, repeat: 45, advocacy: 35, preference: 40 },
                'H&M': { frequency: 40, recency: 45, spend: 35, repeat: 30, advocacy: 30, preference: 35 }
            }
        },
        {
            id: 4,
            name: 'Daniel Müller',
            description: 'Fitness-focused engineer with a passion for sneakers',
            lastPurchaseDate: '2025-07-30',
            purchasePower3Months: 9800,
            location: 'Berlin, Germany',
            interactions: {
                'Nike': { frequency: 85, recency: 90, spend: 80, repeat: 85, advocacy: 70, preference: 90 },
                'Adidas': { frequency: 80, recency: 85, spend: 75, repeat: 80, advocacy: 60, preference: 85 },
                'Puma': { frequency: 70, recency: 75, spend: 65, repeat: 70, advocacy: 50, preference: 75 },
                'Uniqlo': { frequency: 45, recency: 50, spend: 40, repeat: 35, advocacy: 30, preference: 45 },
                'Target': { frequency: 40, recency: 45, spend: 35, repeat: 30, advocacy: 25, preference: 40 },
                'Apple': { frequency: 60, recency: 65, spend: 70, repeat: 60, advocacy: 50, preference: 60 },
                'Samsung': { frequency: 55, recency: 60, spend: 55, repeat: 50, advocacy: 45, preference: 50 },
                'H&M': { frequency: 35, recency: 40, spend: 30, repeat: 25, advocacy: 20, preference: 30 }
            }
        },
        {
            id: 5,
            name: 'Lina Andersson',
            description: 'Minimalist shopper with preference for sustainable brands',
            lastPurchaseDate: '2025-07-28',
            purchasePower3Months: 5600,
            location: 'Stockholm, Sweden',
            interactions: {
                'Uniqlo': { frequency: 65, recency: 70, spend: 60, repeat: 65, advocacy: 55, preference: 70 },
                'Zara': { frequency: 55, recency: 60, spend: 50, repeat: 55, advocacy: 45, preference: 60 },
                'Lenskart': { frequency: 40, recency: 50, spend: 35, repeat: 40, advocacy: 30, preference: 45 },
                'Forest Essentials': { frequency: 60, recency: 65, spend: 50, repeat: 55, advocacy: 40, preference: 60 },
                'Nike': { frequency: 45, recency: 50, spend: 40, repeat: 45, advocacy: 35, preference: 50 },
                'Target': { frequency: 35, recency: 40, spend: 30, repeat: 25, advocacy: 25, preference: 35 },
                'Gucci': { frequency: 20, recency: 25, spend: 30, repeat: 20, advocacy: 15, preference: 25 },
                'Reliance Fresh': { frequency: 30, recency: 35, spend: 25, repeat: 30, advocacy: 20, preference: 30 }
            }
        }
    ];

    return { brands, users };
};
