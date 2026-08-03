# 🌤️ Weather Application

A clean, responsive, and interactive Weather Web Application built with HTML, CSS, JavaScript, and Bootstrap. The application uses a two-step API integration to fetch precise geographic coordinates for any city and display real-time weather details, complete with dynamic day/night visual backgrounds.

---

## 🌟 Key Features

* **Real-time Weather Data**: Instant updates on temperature and weather conditions
* **Two-Step API Workflow**: 
  1. Resolves city names to geographic coordinates (Latitude & Longitude).
  2. Fetches accurate, real-time weather condition for those coordinates.
* **Dynamic Backgrounds**: Automatically shifts visual themes/backgrounds based on the target location's day or night status.
* **Search & Autocomplete**: Quickly search for any major city worldwide.

---

## 🛠️ Tech Stack

* **Frontend**: HTML5, CSS3, JavaScript (ES6+)
* **UI Framework**: Bootstrap 5
* **API Integration**: RESTful Weather & Geocoding APIs

---

## 🚀 Getting Started

### Prerequisites

You only need a modern web browser (e.g., Google Chrome, Mozilla Firefox, Edge, Safari).

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. **Open the application**
   Simply double-click `index.html` or open it with your browser:
   ```bash
   open index.html   # On macOS
   start index.html  # On Windows
   ```

---
## 🔑 API Configuration

If using an API key (e.g., OpenWeatherMap):

1. Create a `config.js` or update the API key variable in `app.js`:
   ```javascript
   const key = 'YOUR_API_KEY_HERE';
   ```
2. Save the file and refresh your browser.

---

## 📂 Project Structure

```
weather-app/
├──img                # Contains images
├── index.html        # Main HTML layout
├── style.css         # Custom styles & background themes
├── scripts/
│   ├── app.js        # API fetching & DOM manipulation
│   └── forecast.js   # API credentials (optional)
└── README.md         # Documentation
```

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more details.
