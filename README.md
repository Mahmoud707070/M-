# Mahmoud Magdy Portfolio

A professional React portfolio website showcasing skills, projects, and contact information.

## Features

- Modern React-based portfolio
- Responsive design for all devices
- Animated sections using Framer Motion
- Interactive UI components
- Portfolio project filtering
- Contact form
- Social media integration

## Technologies Used

- React.js
- Styled Components
- Framer Motion (animations)
- React Icons
- React Intersection Observer
- React Typed (for typing animation)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone this repository or download the files
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Running the Development Server

```bash
npm start
```

This will start the development server at [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
```

This will create an optimized production build in the `build` folder.

## الواجهة الخلفية (Backend)

تم إنشاء واجهة خلفية باستخدام Express.js لهذا المشروع، توفر نقاط نهاية API التالية:

- `GET /api/test` - اختبار الاتصال بالخادم
- `POST /api/contact` - إرسال بيانات نموذج الاتصال
- `GET /api/projects` - جلب بيانات المشاريع

### تشغيل الخادم الخلفي

```bash
cd server
npm install
npm run dev
```

سيبدأ الخادم على المنفذ 5000: [http://localhost:5000](http://localhost:5000)

## النشر على منصات خارجية

تم تكوين المشروع للنشر على المنصات الخارجية:

### الواجهة الأمامية (Frontend)

يمكن نشر الواجهة الأمامية على Netlify:

1. قم بإنشاء حساب على [Netlify](https://www.netlify.com/)
2. اضغط على زر "New site from Git"
3. اختر مستودع Git الخاص بك
4. استخدم إعدادات البناء التالية:
   - Build command: `npm run build`
   - Publish directory: `build`
5. اضغط على "Deploy site"

### الواجهة الخلفية (Backend)

يمكن نشر الواجهة الخلفية على Render.com:

1. قم بإنشاء حساب على [Render.com](https://render.com/)
2. اضغط على "New Web Service"
3. اختر مستودع Git الخاص بك
4. حدد مجلد `server` كمسار للمشروع
5. استخدم إعدادات البناء التالية:
   - Build Command: `npm install`
   - Start Command: `node server.js`
6. اضغط على "Create Web Service"

بعد النشر، قم بتحديث متغير البيئة `REACT_APP_API_URL` في إعدادات Netlify ليشير إلى عنوان URL الخاص بخدمة Render.com.

## Customization

- Update personal information in the components
- Add your own projects to the Portfolio component
- Replace placeholder images with your own
- Customize colors in App.css (CSS variables)
- Add additional sections as needed

## Deployment

This React app can be deployed to various platforms:

- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

## License

This project is open source and available under the MIT License.
