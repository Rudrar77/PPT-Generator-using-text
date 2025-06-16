# 📊 PPT Generator Using Text

*Transform structured text into professional PowerPoint presentations with automatic formatting, charts, and multilingual support.*
![{6E1DE1D5-7B29-4172-8CE0-C6188737E7DD}](https://github.com/user-attachments/assets/f9791058-8bab-41e8-ab63-95b0807e81c0)
![{9E9CC482-2191-4093-8E16-514275C55D86}](https://github.com/user-attachments/assets/2f414675-04b4-488e-81d0-3addb452a7b3)
![{549E792A-CD0F-425B-85D1-1ED29B8146B3}](https://github.com/user-attachments/assets/6569f031-8038-411a-8280-ee82b3036315)
![{FB255BF8-1195-4737-96E7-7FCCF5E3317F}](https://github.com/user-attachments/assets/4981003f-d834-469b-ba37-e01b8d4e0787)

## 🧠 Overview

**PPT Generator using Text** is an intelligent application that transforms structured text content into polished PowerPoint presentations. Designed with multilingual support (featuring Gujarati language), this tool is perfect for educational content creation, particularly for subjects like Economics.

✨ **Perfect for:** Students, teachers, and presenters who want to save time and increase productivity by automating slide creation.

## 🚀 Key Features

- ✅ **Text-to-PPT Conversion** - Transform plain text into formatted slides
- ✅ **Multilingual Support** - Full Gujarati language support with proper font rendering
- ✅ **Automatic Chart Generation** - Create bar charts, pie charts, and graphs from data
- ✅ **Image Integration** - Auto-fetch relevant images using Pixel API
- ✅ **Multiple Themes** - Professional templates and color schemes
- ✅ **Smart Content Recognition** - Automatically detect headers, bullet points, and content structure
- ✅ **Export Ready** - Generate downloadable .pptx files
- ✅ **Responsive Design** - Clean, modern user interface

## 📸 Screenshots

### Input Interface
*Clean text input with Gujarati language support*

### Generated Slides
Based on the economics content shown in your images:
- **Slide 1:** અર્થશાસ્ત્રનો અર્થ (Meaning of Economics)
- **Slide 2:** અર્થશાસ્ત્ર વિષયનું મહત્વ (Importance of Economics Subject)

## 📚 Sample Input Format

```markdown
# અર્થશાસ્ત્રનો અર્થ

• શીર્ષક: અર્થશાસ્ત્રનો અર્થ
• સંસ્કૃત શબ્દ "અર્થ" પરથી ઉત્તરી આવ્યો છે, જેનો અર્થ થાય છે "ઉદ્દેશ્ય" - "કંઈક મેળવવું".
• અંગ્રેજી શબ્દ Economics ગ્રીક શબ્દ Oikonomikos પરથી આવ્યો છે.
• મુખ્ય મુદ્દો: અર્થશાસ્ત્ર એટલે આર્થિક બાબતોનું શાસ્ત્ર.

image: economics money currency

# અર્થશાસ્ત્ર વિષયનું મહત્વ

• વ્યાવહારિક મહત્વ
• આંતરરાષ્ટ્રીય ઘટનાઓ
• નૈતિકતા અથવા અસર
• રોજબરોજના નિર્ણયો માટે ઉપયોગી
• નીતિઓની સમજ માટે
• વ્યવસાય માટે જરૂરી

chart: bar;સ્તંભ,પાસપાસેની,વૃત્તાંશ;1,1,1
```

## 🛠️ Tech Stack

| Component | Technology |
|-----------|------------|
| **Frontend** | React + Vite + Tailwind CSS |
| **Backend** | Node.js + Express |
| **PPT Generation** | PptxGenJS |
| **Image API** | Pixel API |
| **Charts** | Chart.js / Custom generation |
| **Language** | JavaScript/TypeScript |
| **Styling** | Tailwind CSS |

## 🎨 Available Themes

Choose from professionally designed themes:

- 🔵 **Academic Blue** - Perfect for educational content
- ⚫ **Dark Professional** - Modern dark theme
- ⚪ **Clean Light** - Minimalist white background
- 🟢 **Business Green** - Corporate style
- 🔴 **Presentation Red** - Bold and attention-grabbing

## 📦 Installation & Setup

1. **Clone the repository:**
```bash
git clone https://github.com/Rudrar77/PPT-Generator-using-text.git
cd PPT-Generator-using-text
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
```bash
# Create .env file
PIXEL_API_KEY=your_pixel_api_key_here
PORT=3000
```

4. **Start development server:**
```bash
npm run dev
```

5. **Open in browser:**
```
http://localhost:3000
```

## 🔧 Usage

1. **Input your content** in the structured format (supports Gujarati and English)
2. **Select theme** and layout preferences
3. **Add images** using keywords or upload directly
4. **Generate charts** by specifying data in the text
5. **Preview** your presentation
6. **Download** as .pptx file

## 📈 Chart Generation

Create charts directly from text using simple syntax:

```
chart: [type];[labels];[data]

Examples:
chart: bar;વર્ષ 2021,વર્ષ 2022,વર્ષ 2023;100,150,200
chart: pie;આવક,ખર્ચ,બચત;60,30,10
chart: line;જાન્યુ,ફેબ્રુ,માર્ચ;10,20,15
```

## 🌐 Deployment

Deploy to your preferred platform:

- **Vercel:** `npm run build` then deploy
- **Netlify:** Connect GitHub repo for auto-deployment
- **Heroku:** Use provided Procfile
- **GitHub Pages:** Enable GitHub Pages in repository settings

## 🔜 Roadmap

- [ ] **OCR Integration** - Convert scanned Gujarati texts
- [ ] **Drag-and-Drop Editor** - Visual slide editing
- [ ] **Real-time Preview** - See changes instantly
- [ ] **Google Slides Export** - Export to Google Slides format
- [ ] **Animation Support** - Add slide transitions and animations
- [ ] **Collaboration Features** - Multi-user editing
- [ ] **Template Library** - More pre-built templates

## 🧑‍💻 Author

**Rudra Rathod**
- GitHub: [@Rudrar77](https://github.com/Rudrar77)
- Project Link: [PPT Generator using Text](https://github.com/Rudrar77/PPT-Generator-using-text)
