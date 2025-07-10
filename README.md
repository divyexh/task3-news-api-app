# Task 3 – Public API Fetch (News Feed App)

## 📄 Description:
A React + Vite app that fetches and displays top news headlines using the NewsAPI.org public API. Developed as part of the MERN Stack Developer Internship Task 3.

---

## 📰 Features:
- Fetches real-time news from a public API
- Uses Axios for HTTP requests
- Displays title, image, short description, and link to full article
- Responsive card-based layout
- Handles loading errors and missing data gracefully
- Professional UI styling
- Secure API key usage via environment variable

---

## 🌐 Public API Used:
**NewsAPI.org**  
Official docs: [https://newsapi.org/docs](https://newsapi.org/docs)

---

## 🔑 Environment Variable

This app uses a News API key. To keep it secure and avoid exposing it on GitHub:

1. Create a `.env` file in your **project root directory**  
2. Add the following line to it:

```env
VITE_NEWS_API_KEY=your_newsapi_key_here
Replace your_newsapi_key_here with your actual API key from https://newsapi.org

```

## How to Run

npm install
npm run dev
