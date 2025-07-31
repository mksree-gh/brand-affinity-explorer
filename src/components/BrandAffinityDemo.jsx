// src/components/BrandAffinityDemo.jsx
import React, { useState, useMemo, useEffect } from 'react';
import { Sliders, X } from 'lucide-react';
import { generateMockData } from '../data/mockData';
import AnimatedBubble from './AnimatedBubble.jsx';


const BrandAffinityDemo = () => {
    const [selectedUser, setSelectedUser] = useState(1);
    const [showWeights, setShowWeights] = useState(false);
    const [weights, setWeights] = useState({
        frequency: 30,
        recency: 10,
        spend: 15,
        repeat: 20,
        advocacy: 10,
        preference: 15
    });

    const { brands, users } = useMemo(() => generateMockData(), []);
    const currentUser = users.find(u => u.id === selectedUser);

    const affinityData = useMemo(() => {
        if (!currentUser) return [];
        return Object.entries(currentUser.interactions).map(([brandName, metrics]) => {
            const brand = brands.find(b => b.name === brandName);
            if (!brand) return null;

            const score = (
                (metrics.frequency * weights.frequency) +
                (metrics.recency * weights.recency) +
                (metrics.spend * weights.spend) +
                (metrics.repeat * weights.repeat) +
                (metrics.advocacy * weights.advocacy) +
                (metrics.preference * weights.preference)
            ) / 100;

            return {
                brand: brandName,
                category: brand.category,
                color: brand.color,
                score: Math.round(score),
                size: Math.max(20, score * 2)
            };
        }).filter(Boolean).sort((a, b) => b.score - a.score);
    }, [currentUser, weights, brands]);

    const positionBubbles = (bubbles) => {
        const containerWidth = 1000;
        const containerHeight = 600;
        const centerX = containerWidth / 2;
        const centerY = containerHeight / 2;
        const positions = [];

        const sortedBubbles = [...bubbles].sort((a, b) => b.size - a.size);

        sortedBubbles.forEach((bubble, index) => {
            let x, y, attempts = 0, validPosition = false;
            if (index === 0) {
                x = centerX;
                y = centerY;
                validPosition = true;
            } else {
                while (!validPosition && attempts < 200) {
                    const existing = positions[Math.floor(Math.random() * positions.length)];
                    const angle = Math.random() * 2 * Math.PI;
                    const dist = (existing.size + bubble.size) / 2 + Math.random() * 20 + 5;
                    x = existing.x + Math.cos(angle) * dist;
                    y = existing.y + Math.sin(angle) * dist;

                    x = Math.max(bubble.size / 2, Math.min(containerWidth - bubble.size / 2, x));
                    y = Math.max(bubble.size / 2, Math.min(containerHeight - bubble.size / 2, y));

                    validPosition = positions.every(pos => {
                        const d = Math.sqrt((x - pos.x) ** 2 + (y - pos.y) ** 2);
                        return d >= (bubble.size + pos.size) / 2 + 2;
                    });
                    attempts++;
                }
            }
            positions.push({ ...bubble, x, y });
        });
        return positions;
    };

    const [positionedBubbles, setPositionedBubbles] = useState([]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const newPositions = positionBubbles(affinityData);
            setPositionedBubbles(newPositions);
        }, 200);
        return () => clearTimeout(timeout);
    }, [affinityData]);

    const handleWeightChange = (factor, value) => setWeights(prev => ({ ...prev, [factor]: parseInt(value) }));
    const resetWeights = () => setWeights({ frequency: 30, recency: 10, spend: 15, repeat: 20, advocacy: 10, preference: 15 });

    return (
        <div className="h-screen flex flex-col overflow-hidden bg-gray-50 text-gray-900">
            <div className="border-b border-gray-200 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <div>
                            <h1 className="text-2xl font-semibold">Brand Affinity Explorer</h1>
                            <p className="text-sm text-gray-600">Explore user-brand relationships interactively</p>
                        </div>
                        <button onClick={() => setShowWeights(!showWeights)} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800">
                            <Sliders className="w-4 h-4" />
                            {showWeights ? 'Hide' : 'Edit'} Weights
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-6 flex lg:flex-row gap-6 overflow-hidden">
                <aside className="w-full lg:w-72 overflow-y-auto h-full">
                    <div className="bg-white rounded-xl border border-gray-200 p-4">
                        <h3 className="font-semibold mb-4">Users</h3>
                        <div className="block lg:hidden mb-4">
                            <select value={selectedUser} onChange={(e) => setSelectedUser(parseInt(e.target.value))} className="w-full p-2 border border-gray-300 rounded-md">
                                {users.map(user => (
                                    <option key={user.id} value={user.id}>{user.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="hidden lg:block space-y-2">
                            {users.map(user => (
                                <button key={user.id} onClick={() => setSelectedUser(user.id)}
                                    className={`w-full text-left p-3 rounded-lg ${selectedUser === user.id ? 'bg-gray-900 text-white' : 'bg-gray-50 hover:bg-gray-100 text-gray-700'}`}>
                                    <div className="text-sm font-medium">{user.name}</div>
                                    <div className="text-xs opacity-75 mt-1">{user.description}</div>
                                </button>
                            ))}
                        </div>
                    </div>
                </aside>

                <main className="flex-1 space-y-6 overflow-y-auto h-full pr-1">
                    <div className="bg-white rounded-xl border border-gray-200 p-6">

                        <h2 className="text-xl font-semibold text-gray-900">{currentUser?.name}</h2>
                        <p className="text-sm text-gray-600 mb-1">{currentUser?.description}</p>
                        <p className="text-xs text-gray-500">Last Purchase: {currentUser?.lastPurchaseDate}</p>
                        <p className="text-xs text-gray-500">Purchase Power (3mo): ${currentUser?.purchasePower3Months?.toLocaleString()}</p>
                        <p className="text-xs text-gray-500">Location: {currentUser?.location}</p>

                        <div className="overflow-x-auto">
                            <svg viewBox="0 0 1000 600" className="w-full h-[60vh] bg-gray-25 rounded-lg transition-all duration-500 ease-out">
                                {positionedBubbles.map(bubble => (
                                    <g key={bubble.brand}>
                                        <AnimatedBubble bubble={bubble} />
                                    </g>
                                ))}
                            </svg>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-4">
                            {Object.entries(
                                affinityData.reduce((acc, curr) => {
                                    if (!acc[curr.category]) acc[curr.category] = curr.color;
                                    return acc;
                                }, {})
                            ).map(([category, color]) => (
                                <div key={category} className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                                    <span className="text-xs text-gray-600">{category}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {showWeights && (
                        <div className="bg-white rounded-xl border border-gray-200 p-6 max-h-[calc(100vh-160px)] overflow-y-auto">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-lg font-semibold">Affinity Weights</h3>
                                <button onClick={() => setShowWeights(false)} className="text-gray-400 hover:text-gray-600">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                                {Object.entries(weights).map(([factor, value]) => (
                                    <div key={factor} className="flex flex-col space-y-1">
                                        <label htmlFor={factor} className="text-sm font-medium text-gray-700 capitalize">{factor}</label>
                                        <input
                                            id={factor}
                                            type="range"
                                            min={0}
                                            max={100}
                                            step={1}
                                            value={value}
                                            onChange={(e) => handleWeightChange(factor, e.target.value)}
                                            className="w-full h-2 rounded-full appearance-none bg-gray-200 accent-gray-800 focus:outline-none"
                                        />
                                        <div className="text-xs text-gray-500">{value}%</div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-between items-center mt-6 pt-4 border-t">
                                <div className="text-sm text-gray-600">
                                    Total: <span className="font-semibold text-gray-900">{Object.values(weights).reduce((a, b) => a + b, 0)}%</span>
                                </div>
                                <button onClick={resetWeights} className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                                    Reset to Defaults
                                </button>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default BrandAffinityDemo;
