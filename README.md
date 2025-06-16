*Transform structured text into professional PowerPoint presentations with automatic formatting, charts, and multilingual support.*

![Screenshot 1](https://github.com/user-attachments/assets/f9791058-8bab-41e8-ab63-95b0807e81c0)
![Screenshot 2](https://github.com/user-attachments/assets/2f414675-04b4-488e-81d0-3addb452a7b3)
![Screenshot 3](https://github.com/user-attachments/assets/6569f031-8038-411a-8280-ee82b3036315)
![Screenshot 4](https://github.com/user-attachments/assets/4981003f-d834-469b-ba37-e01b8d4e0787)

## 🧠 Overview

**PPT Generator using Text** is an intelligent web application that converts structured text into polished PowerPoint presentations. Featuring multilingual support (including full Gujarati language support), it’s ideal for creating educational content — especially in subjects like Economics.

> ✨ **Perfect for:** Students, teachers, and professionals looking to streamline their slide creation process.

## 🚀 Key Features

- ✅ **Text-to-PPT Conversion** – Transform plain text into visually appealing slides  
- ✅ **Multilingual Support** – Full Gujarati support with proper font rendering  
- ✅ **Automatic Chart Generation** – Easily create bar, pie, and line charts from text  
- ✅ **Image Integration** – Fetch relevant images via the Pixel API or use custom images  
- ✅ **Multiple Themes** – Choose from a library of professional presentation templates  
- ✅ **Smart Content Recognition** – Detects headers, bullet points, and structured data  
- ✅ **Export Ready** – Download clean `.pptx` files ready for presentation  
- ✅ **Responsive Design** – Clean and modern user interface across devices

## 📸 Screenshots

### ➤ Input Interface  
*Supports structured text input and Gujarati content.*

### ➤ Generated Slides  
Based on economics content examples:

- **Slide 1:** અર્થશાસ્ત્રનો અર્થ *(Meaning of Economics)*  
- **Slide 2:** અર્થશાસ્ત્ર વિષયનું મહત્વ *(Importance of Economics)*

## 📚 Sample Input Format

\`\`\`markdown
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
\`\`\`

## 🛠️ Tech Stack

| Component        | Technology               |
|------------------|--------------------------|
| **Frontend**     | React + Vite + Tailwind CSS |
| **Backend**      | Node.js + Express        |
| **PPT Generation** | PptxGenJS              |
| **Image API**    | Pixel API                |
| **Charts**       | Chart.js / Custom Gen    |
| **Language**     | JavaScript / TypeScript  |
| **Styling**      | Tailwind CSS             |

## 🎨 Available Themes

- 🔵 **Academic Blue** – Clean and educational  
- ⚫ **Dark Professional** – Sleek modern look  
- ⚪ **Clean Light** – Minimalist and clean  
- 🟢 **Business Green** – Great for corporate use  
- 🔴 **Presentation Red** – Bold and attention-grabbing  

## 📦 Installation & Setup

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/Rudrar77/PPT-Generator-using-text.git
cd PPT-Generator-using-text
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 3. Configure Environment Variables

Create a `.env` file:

\`\`\`env
PIXEL_API_KEY=your_pixel_api_key_here
PORT=3000
\`\`\`

### 4. Start the Development Server

\`\`\`bash
npm run dev
\`\`\`

### 5. Open in Browser

\`\`\`
http://localhost:3000
\`\`\`

## 🔧 Usage Instructions

1. **Input structured content** (Gujarati or English supported)  
2. **Select a theme** from the theme options  
3. **Add images** via keywords or uploads  
4. **Generate charts** using simple text syntax  
5. **Preview slides** in real-time  
6. **Download** your `.pptx` presentation

## 📈 Chart Generation Syntax

You can define charts directly in your input text:

\`\`\`markdown
chart: [type];[labels];[data]
\`\`\`

### Examples

\`\`\`markdown
chart: bar;વર્ષ 2021,વર્ષ 2022,વર્ષ 2023;100,150,200
chart: pie;આવક,ખર્ચ,બચત;60,30,10
chart: line;જાન્યુ,ફેબ્રુ,માર્ચ;10,20,15
\`\`\`

## 🌐 Deployment Options

Deploy on platforms of your choice:

- **Vercel** – `npm run build`, then deploy  
- **Netlify** – Connect GitHub for CI/CD  
- **Heroku** – Use included `Procfile`  
- **GitHub Pages** – Static build can be served directly

## 🔜 Roadmap

- [ ] OCR for scanned Gujarati text  
- [ ] Drag-and-drop visual editor  
- [ ] Live preview during editing  
- [ ] Export to Google Slides  
- [ ] Animation & transitions  
- [ ] Collaborative editing  
- [ ] Expanded template library  

## 🧑‍💻 Author

**Rudra Rathod**  
- 🔗 GitHub: [@Rudrar77](https://github.com/Rudrar77)  
- 📁 Project Repo: [PPT Generator using Text](https://github.com/Rudrar77/PPT-Generator-using-text)
"""
