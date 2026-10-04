/**
 * BUDGET BUDDY — Privacy-First Financial Intelligence
 * Core JavaScript Engine (100% Offline & Client-Side)
 * 
 * Tech Stack Implementation:
 * 1. Gemma 2 (Local Ollama / In-Memory Reasoning Engine)
 * 2. TabPFN (Prior Labs In-Context Tabular Prediction Engine)
 * 3. Mastra Framework Tool Orchestration
 * 4. Tiger Data (pgvector) 384-dim Hybrid Keyword/Vector Memory
 * 5. Sentry Agent Tracing & Telemetry Monitor
 */
// =============================================================================
// 1. SAMPLE FINANCIAL STATEMENT DATA (Student & Freelancer - 6 Months)
// =============================================================================
const SAMPLE_CSV = `Date,Description,Amount,Category
2026-09-28,Starbucks Reserve Cafe,6.75,Dining Out
2026-09-27,Whole Foods Market Organic Groceries,74.20,Groceries
2026-09-26,GitHub Copilot Individual Subscription,10.00,Software & Work Tools
2026-09-25,Spotify Premium Family Plan,16.99,Entertainment & Subscriptions
2026-09-24,Uber Ride Late Night,24.50,Transportation
2026-09-22,Figma Professional Freelance Seat,15.00,Software & Work Tools
2026-09-20,Boutique Gym Annual Maintenance Fee (Unexpected Spike!),185.00,Health & Wellness
2026-09-18,Trader Joe's Neighborhood Groceries,48.60,Groceries
2026-09-15,Netflix Standard HD Plan,15.49,Entertainment & Subscriptions
2026-09-14,Forgotten Cloud Storage Trial (Recurring Trap!),9.99,Software & Work Tools
2026-09-12,Chipotle Mexican Grill Bowl,14.85,Dining Out
2026-09-10,Amazon Prime Student Membership,7.49,Shopping
2026-09-08,Blue Bottle Coffee Roastery,7.20,Dining Out
2026-09-05,City Metro Pass Monthly,75.00,Transportation
2026-09-02,Apartment High Speed Fiber Internet,65.00,Housing & Utilities
2026-09-01,Downtown Apartment Student Rent Share,850.00,Housing & Utilities
2026-08-28,Apple Music Subscription (Duplicate Audio Trap!),10.99,Entertainment & Subscriptions
2026-08-27,Whole Foods Market Groceries,82.40,Groceries
2026-08-26,GitHub Copilot Individual Subscription,10.00,Software & Work Tools
2026-08-25,Spotify Premium Family Plan,16.99,Entertainment & Subscriptions
2026-08-23,Emergency Urgent Dental Repair (Massive Anomaly Spike!),430.00,Health & Wellness
2026-08-22,Figma Professional Freelance Seat,15.00,Software & Work Tools
2026-08-19,Surge Price Saturday Night Club & Dinner,195.00,Dining Out
2026-08-16,Trader Joe's Snacks & Meals,52.10,Groceries
2026-08-15,Netflix Standard HD Plan,15.49,Entertainment & Subscriptions
2026-08-14,Forgotten Cloud Storage Trial (Recurring Trap!),9.99,Software & Work Tools
2026-08-10,Amazon Prime Student Membership,7.49,Shopping
2026-08-08,Blue Bottle Coffee,6.50,Dining Out
2026-08-05,City Metro Pass Monthly,75.00,Transportation
2026-08-02,Apartment High Speed Fiber Internet,65.00,Housing & Utilities
2026-08-01,Downtown Apartment Student Rent Share,850.00,Housing & Utilities
