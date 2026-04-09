/**
 * Constants and Configuration
 */

export const TALLY_FORM_ID = 'vGPERD';
export const TALLY_FORM_URL = 'https://tally.so/r/vGPERD';

export const TAILWIND_COLORS = {
  PRIMARY: "#2563eb",
  GOLD: "#f59e0b",
  BACKGROUND: "#f8fafc",
  FOREGROUND: "#0f172a",
} as const;

export const API_CONFIG = {
  SCROLL_THRESHOLD: 800,
  ANIMATION_DELAYS: {
    SHORT: "0.1s",
    MEDIUM: "0.2s",
    LONG: "0.3s",
  },
} as const;

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDaYeDtL6RupgJ2NgkgKefnmdKUmae2iK4",
  authDomain: "munimchacha-1.firebaseapp.com",
  projectId: "munimchacha-1",
  storageBucket: "munimchacha-1.firebasestorage.app",
  messagingSenderId: "505692823880",
  appId: "1:505692823880:web:8ff3428fbf9eccf508d37d",
  measurementId: "G-YZDBKM5ZG1",
} as const;

export const CONTENT = {
  COMPANY_NAME: "Elitale Softwares Private Limited",
  YEAR: "2026",
  ACTIVE_USERS: 12847,
  REFUNDS_RECOVERED: "₹58 Crores+",
  TEAM_SIZE: 3,
} as const;
