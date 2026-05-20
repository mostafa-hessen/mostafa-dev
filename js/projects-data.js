/**
 * Portfolio projects — shared by index.html & project.html
 */
window.PROJECTS = [
  {
    id: 'sebha',
    featured: true,
    order: 1,
    cover: 'assets/projects/sebha/cropped/thumbil_isghpar.jpeg',
    images: [
      'assets/projects/sebha/cropped/thumbil_isghpar.jpeg',
      'assets/projects/sebha/cropped/Screenshot 2026-05-20 222824.png',
      'assets/projects/sebha/cropped/Screenshot 2026-05-20 222834.png',
      'assets/projects/sebha/cropped/Screenshot 2026-05-20 222848.png',
      'assets/projects/sebha/cropped/Screenshot 2026-05-20 222906.png',
      'assets/projects/sebha/cropped/WhatsApp Image 2026-05-20 at 22.59.35.jpg',
      'assets/projects/sebha/cropped/WhatsApp Image 2026-05-20 at 22.59.37.jpg',
      'assets/projects/sebha/cropped/WhatsApp Image 2026-05-20 at 22.59.37 (1).jpg'
    ],
    tag: { en: 'Adhkar & Challenges App', ar: 'برنامج للأذكار والتحديات' },
    title: { en: 'Million Istighfar — Smart Tasbih', ar: 'مليون استغفار — السبحة الذكية' },
    subtitle: { en: 'V19 Max · Web App & PWA', ar: 'V19 Max · تطبيق ويب و PWA' },
    summary: {
      en: 'An interactive digital platform for daily dhikr (tasbih & istighfar) combining a smart electronic counter, collective million challenges, leaderboards, badges, and full gender-segregated competition — built as a installable PWA with offline sync via Supabase.',
      ar: 'منصة رقمية تفاعلية للأذكار اليومية تجمع بين السبحة الذكية، تحديات المليون الجماعية، مجلس الشرف، الأوسمة والألماس، مع فصل تام بين الجنسين — تطبيق ويب متجاوب يعمل كـ PWA مع مزامنة دون اتصال عبر Supabase.'
    },
    challenge: {
      en: 'Muslims needed a modern, motivating way to track dhikr daily while joining respectful community challenges — without compromising privacy between men and women.',
      ar: 'احتياج لمتابعة الأذكار بطريقة عصرية ومحفّزة مع تحديات جماعية تحافظ على خصوصية الفصل بين الرجال والنساء.'
    },
    result: {
      en: 'Full smart tasbih, admin dashboard, challenges, badges, offline mode, and roadmap features including morning/evening adhkar and Quran browsing.',
      ar: 'سبحة ذكية كاملة، لوحة تحكم، تحديات، أوسمة، عمل دون اتصال، وخارطة طريق تشمل أذكار الصباح والمساء وتصفح القرآن.'
    },
    tech: ['HTML5', 'CSS3', 'Vanilla JS', 'Supabase', 'PWA', 'PostgreSQL', 'RLS', 'Tajawal'],
    features: [
      { en: 'Smart tasbih: tap counter, circular progress, preset goals (33/100/1000/custom)', ar: 'سبحة ذكية: عداد بالنقر، شريط تقدم دائري، أهداف جاهزة ومخصصة' },
      { en: 'Collective challenges with live countdown & admin-created targets', ar: 'تحديات جماعية بعدّ تنازلي حي وإنشاء من لوحة التحكم' },
      { en: 'Honor board (leaderboard) & archived winners', ar: 'مجلس الشرف وأرشيف الفائزين' },
      { en: 'Badges, diamonds & personal stats profile', ar: 'أوسمة، ألماس، وملف إحصائيات شخصي' },
      { en: 'Full gender segregation in challenges & leaderboards', ar: 'فصل تام بين الجنسين في التحديات ولوحة الصدارة' },
      { en: 'Offline dhikr with background sync', ar: 'تسبيح دون اتصال مع مزامنة عند عودة الإنترنت' },
      { en: 'Admin panel: challenges, users, badges, daily message', ar: 'لوحة إدارة: تحديات، مستخدمين، أوسمة، رسالة اليوم' },
      { en: 'Roadmap: morning/evening adhkar & Quran reader', ar: 'قريباً: أذكار الصباح والمساء وتصفح القرآن الكريم' }
    ],
    link: null
  },
  {
    id: 'courses',
    featured: true,
    order: 2,
    cover: 'assets/projects/my_agency_courses/Screenshot 2026-05-20 223902.png',
    images: [
      'assets/projects/my_agency_courses/Screenshot 2026-05-20 223902.png',
      'assets/projects/my_agency_courses/Screenshot 2026-05-20 223945.png',
      'assets/projects/my_agency_courses/Screenshot 2026-05-20 224008.png',
      'assets/projects/my_agency_courses/Screenshot 2026-05-20 224022.png',
      'assets/projects/my_agency_courses/Screenshot 2026-05-20 224051.png',
      'assets/projects/my_agency_courses/mycourses/flutter/Screenshot 2026-05-20 224740.png',
      'assets/projects/my_agency_courses/mycourses/flutter/Screenshot 2026-05-20 224750.png',
      'assets/projects/my_agency_courses/mycourses/flutter/Screenshot 2026-05-20 224800.png',
      'assets/projects/my_agency_courses/mycourses/unit_testsing/Screenshot 2026-05-20 225056.png',
      'assets/projects/my_agency_courses/mycourses/unit_testsing/Screenshot 2026-05-20 225102.png'
    ],
    tag: { en: 'E-learning · Live Courses', ar: 'تعليم إلكتروني · دورات مباشرة' },
    title: { en: 'Professional Software Engineering Courses', ar: 'منصة كورسات هندسة البرمجيات' },
    subtitle: { en: 'Cloudflare Workers · Video Platform', ar: 'استضافة سحابية · منصة فيديو' },
    summary: {
      en: 'Premium online courses platform for programming bootcamps and specialized technical training for Arabic-speaking developers — ultra-fast delivery and structured learning paths.',
      ar: 'منصة دورات برمجية متميزة لمعسكرات التدريب والدورات التقنية للمطورين العرب — بث سريع ومسارات تعليمية منظمة.'
    },
    challenge: { en: 'Deliver high-quality video courses with clean UX for the Middle East market.', ar: 'تقديم دورات فيديو عالية الجودة بواجهة مريحة للسوق العربي.' },
    result: { en: 'Live platform with 10+ technology tracks including Flutter, React, Firebase, Supabase, and Unit Testing.', ar: 'منصة جارية بأكثر من 10 مسارات تقنية تشمل Flutter وReact وFirebase وSupabase والاختبارات.' },
    tech: ['Cloudflare Workers', 'React', 'Flutter', 'Firebase', 'Supabase', 'TypeScript', 'MUI'],
    features: [
      { en: 'Structured bootcamps: Flutter, React, Firebase, Supabase', ar: 'معسكرات منظمة: Flutter، React، Firebase، Supabase' },
      { en: 'Unit testing & modern JavaScript modules', ar: 'اختبارات الوحدة وجافاسكربت الحديثة' },
      { en: 'Fast CDN content delivery', ar: 'توصيل محتوى سريع عبر CDN' }
    ],
    link: 'https://mostafa-courses.mb4952144.workers.dev/'
  },
  {
    id: 'quran',
    featured: false,
    order: 3,
    cover: 'assets/projects/quran/Screenshot 2026-05-20 223048.png',
    images: [
      'assets/projects/quran/Screenshot 2026-05-20 223048.png',
      'assets/projects/quran/Screenshot 2026-05-20 223106.png',
      'assets/projects/quran/Screenshot 2026-05-20 223127.png',
      'assets/projects/quran/Screenshot 2026-05-20 223148.png',
      'assets/projects/quran/Screenshot 2026-05-20 223205.png',
      'assets/projects/quran/Screenshot 2026-05-20 223219.png',
      'assets/projects/quran/Screenshot 2026-05-20 223246.png',
      'assets/projects/quran/Screenshot 2026-05-20 223307.png',
      'assets/projects/quran/Screenshot 2026-05-20 223317.png',
      'assets/projects/quran/Screenshot 2026-05-20 223329.png',
      'assets/projects/quran/Screenshot 2026-05-20 223342.png',
      'assets/projects/quran/Screenshot 2026-05-20 223357.png',
      'assets/projects/quran/Screenshot 2026-05-20 223415.png',
      'assets/projects/quran/Screenshot 2026-05-20 223453.png',
      'assets/projects/quran/Screenshot 2026-05-20 223519.png'
    ],
    tag: { en: 'Education · Dar Elm El-Bia', ar: 'تعليم · دار علم البيا' },
    title: { en: 'Quran Memorization Center System', ar: 'نظام إدارة مكتب تحفيظ القرآن' },
    subtitle: { en: 'Dar Elm El-Bia · Egypt', ar: 'دار علم البيا · مصر' },
    summary: {
      en: 'Fully digital management for Quran memorization centers — teachers, students, circles, subscriptions, attendance, meals, and payment tracking.',
      ar: 'منصة إدارة رقمية متكاملة لمكاتب التحفيظ — معلمون، طلاب، حلقات، اشتراكات، حضور، وجبات، ومتابعة مالية.'
    },
    challenge: {
      en: 'Paper-based tracking, missed payments, no visibility on student progress.',
      ar: 'متابعة ورقية، مدفوعات فائتة، ولا رؤية واضحة لتقدم الطلاب.'
    },
    result: {
      en: 'Paperless operations, instant reports, automated reminders — praised by the center founder.',
      ar: 'عمل بدون ورق، تقارير فورية، تذكيرات آلية — بإشادة مؤسس المركز.'
    },
    tech: ['Web App', 'Dashboard', 'CRM', 'Reports'],
    features: [
      { en: 'Student levels & circle management', ar: 'مستويات الطلاب وإدارة الحلقات' },
      { en: 'Attendance & subscription billing', ar: 'الحضور واشتراكات الدفع' },
      { en: 'Meal tracking & late payment alerts', ar: 'متابعة الوجبات والمتأخرات' }
    ],
    link: null,
    clientId: 'mohamed-ali'
  },
  {
    id: 'erp',
    featured: false,
    order: 4,
    cover: null,
    images: [],
    tag: { en: 'ERP · POS · Inventory', ar: 'ERP · نقطة بيع · مخازن' },
    title: { en: 'Advanced Sales & Warehouse Management', ar: 'نظام المبيعات والمخازن المتقدم' },
    subtitle: { en: 'Hardware & Wood Merchant', ar: 'تاجر حديد وأخشاب' },
    summary: {
      en: 'Complete POS, inventory, supplier debt tracking, multi-barcode printing, shift reports, and treasury for a hardware merchant.',
      ar: 'نظام متكامل بنقطة بيع، مخزون، ديون موردين، باركود متعدد، تقارير شيفت، وخزينة لتاجر حديد وأخشاب.'
    },
    challenge: {
      en: 'Manual bookkeeping, lost invoices, no inventory visibility.',
      ar: 'محاسبة يدوية، فواتير ضائعة، لا رؤية على المخزون.'
    },
    result: {
      en: 'Full automation, real-time reports, zero manual errors.',
      ar: 'أتمتة كاملة، تقارير فورية، صفر أخطاء يدوية.'
    },
    tech: ['POS', 'Barcode', 'Inventory', 'Reports', 'Treasury'],
    features: [
      { en: 'Point of sale with barcode scanning', ar: 'نقطة بيع مع مسح باركود' },
      { en: 'Supplier debts & shift closing reports', ar: 'ديون الموردين وتقارير إغلاق الشيفت' }
    ],
    link: null
  },
  {
    id: 'students',
    featured: false,
    order: 5,
    cover: 'assets/projects/student_managment_system/Screenshot 2026-05-20 223550.png',
    images: [
      'assets/projects/student_managment_system/Screenshot 2026-05-20 223550.png',
      'assets/projects/student_managment_system/Screenshot 2026-05-20 223610.png',
      'assets/projects/student_managment_system/Screenshot 2026-05-20 223622.png',
      'assets/projects/student_managment_system/Screenshot 2026-05-20 223637.png',
      'assets/projects/student_managment_system/Screenshot 2026-05-20 223652.png',
      'assets/projects/student_managment_system/Screenshot 2026-05-20 223706.png',
      'assets/projects/student_managment_system/Screenshot 2026-05-20 223723.png',
      'assets/projects/student_managment_system/Screenshot 2026-05-20 223748.png',
      'assets/projects/student_managment_system/Screenshot 2026-05-20 223808.png',
      'assets/projects/student_managment_system/Screenshot 2026-05-20 223821.png'
    ],
    tag: { en: 'CRM · Education · Marketing', ar: 'CRM · تعليم · تسويق' },
    title: { en: 'Student & Campaign Management', ar: 'إدارة الطلاب والحملات الإعلانية' },
    subtitle: { en: 'Unified Dashboard', ar: 'لوحة تحكم موحدة' },
    summary: {
      en: 'Dual-purpose platform for student enrollment data and advertising campaign performance in one dashboard.',
      ar: 'منصة مزدوجة لإدارة تسجيل الطلاب وأداء الحملات الإعلانية في لوحة واحدة.'
    },
    challenge: { en: 'Disconnected spreadsheets for leads and ad spend.', ar: 'جداول منفصلة للعملاء المحتملين ومصروفات الإعلان.' },
    result: { en: 'Single source of truth for leads, campaigns, and student CRM.', ar: 'مصدر واحد للحقيقة لتتبع العملاء والحملات وCRM الطلاب.' },
    tech: ['CRM', 'Analytics', 'Dashboard'],
    features: [
      { en: 'Lead tracking & campaign analytics', ar: 'تتبع العملاء وتحليل الحملات' },
      { en: 'Student CRM integrated with marketing', ar: 'CRM طلاب مدمج مع التسويق' }
    ],
    link: null
  },
  {
    id: 'food',
    featured: true,
    order: 6,
    cover: null,
    images: [],
    tag: { en: 'E-commerce · Food · Graduation', ar: 'تجارة إلكترونية · أكل صحي · تخرج' },
    title: {
      en: 'Healthy Food E-commerce & Delivery Platform',
      ar: 'منصة تجارة إلكترونية وتوصيل الأكل الصحي'
    },
    subtitle: { en: 'Graduation Project · Team Lead', ar: 'مشروع التخرج · قائد الفريق' },
    summary: {
      en: 'As team leader, I built a full e-commerce platform for healthy meals — product catalog, cart, checkout, payments, order management, delivery flow, and an owner dashboard with zero technical knowledge required.',
      ar: 'بصفتي قائد الفريق، بنيت منصة تجارة إلكترونية متكاملة للأكل الصحي: كتالوج منتجات، سلة شراء، دفع، إدارة طلبات، توصيل، ولوحة تحكم للمالك بدون خبرة تقنية — من القائمة حتى وصول الطلب للعميل.'
    },
    challenge: {
      en: 'Need one system that sells healthy meals online 24/7 while managing orders and delivery — as a graduation capstone with a full dev team.',
      ar: 'الحاجة لنظام واحد يبيع الوجبات الصحية أونلاين على مدار الساعة مع إدارة الطلبات والتوصيل — كمشروع تخرج مع فريق تطوير كامل.'
    },
    result: {
      en: 'Unified store open 24/7, automated orders, and complete healthy-food ordering experience — delivered with team leadership.',
      ar: 'متجر موحّد مفتوح 24/7، طلبات آلية، وتجربة طلب أكل صحي كاملة — مع قيادة فريق التطوير.'
    },
    tech: ['E-commerce', 'Payment Gateway', 'Orders', 'Delivery', 'Admin Panel', 'Team Leadership'],
    features: [
      { en: 'Healthy meal catalog & product management', ar: 'كتالوج وجبات صحية وإدارة منتجات' },
      { en: 'Cart, checkout & payment integration', ar: 'سلة شراء، دفع، وبوابة دفع' },
      { en: 'Order tracking & customer portal', ar: 'متابعة الطلبات وبوابة العميل' },
      { en: 'Delivery flow & owner dashboard', ar: 'مسار التوصيل ولوحة تحكم المالك' },
      { en: 'Team leadership — graduation capstone', ar: 'قيادة الفريق — مشروع التخرج' }
    ],
    link: null
  }
];

window.TESTIMONIALS = [
  {
    id: 'mohamed-ali',
    featured: true,
    projectId: 'quran',
    photo: 'assets/clintes/mohamed_ali_quran.jpeg',
    name: { en: 'Mohamed Ali', ar: 'محمد علي' },
    role: { en: 'Founder, Dar Elm El-Bia Quran Center', ar: 'مؤسس دار علم البيا لتحفيظ القرآن' },
    text: {
      en: 'Honestly, I cannot find words for how beautiful the program turned out — even better than I expected. It is very easy to use and includes every service I asked for and more. Most importantly, after-sales support: you never delayed answering any question. May Allah reward you with goodness.',
      ar: 'السلام عليكم ورحمة الله وبركاته — بصراحة مش عارف أقول إيه على جمال البرنامج، الحقيقة طلع أحسن مما كنت متوقع، سهل جداً في التعامل ومتوفر فيه جميع الخدمات اللي طلبتها وأكتر كمان. والأهم من ده كله طبعاً خدمة ما بعد البيع، عمرك ما اتأخرت علينا في أي معلومة. جزاك الله عنا كل خير.'
    }
  },
  {
    id: 'ahmed',
    featured: false,
    projectId: 'erp',
    photo: null,
    initials: { en: 'AA', ar: 'أع' },
    name: { en: 'Ahmed Ashour', ar: 'أحمد عاشور' },
    role: { en: 'Hardware & Wood Merchant, Egypt', ar: 'تاجر حديد وأخشاب، مصر' },
    text: {
      en: 'Mustafa built us a complete sales and warehouse system that transformed how we run our business. We went from chaos to clarity in 3 weeks.',
      ar: 'مصطفى بنى لنا نظام مبيعات ومخازن متكامل غيّر طريقة إدارتنا. انتقلنا من الفوضى إلى الوضوح في 3 أسابيع.'
    }
  },
  {
    id: 'ahmed-el-rayan',
    featured: false,
    projectId: 'erp',
    photo: null,
    initials: { en: 'AR', ar: 'أر' },
    name: { en: 'Ahmed El Rayan', ar: 'أحمد الريان' },
    role: { en: 'Client — Sales System', ar: 'عميل — برنامج المبيعات' },
    text: {
      en: 'I have worked with many programs, but nothing impressed me like the sales program Engineer Mustafa built for us.',
      ar: 'أنا اشتغلت على برامج كتير، مفيش حاجة عجبتني قد ما عجبني برنامج المبيعات اللي عمله مهندس مصطفى.'
    }
  }
];

window.YOUTUBE_CHANNEL = 'https://www.youtube.com/@js_hacks';

/** مسار صورة — مسافات → %20 مرة واحدة فقط (بدون encodeURIComponent لتفادي %2520) */
function encodeAssetPath(path) {
  if (!path) return '';
  return path
    .split('/')
    .map((seg, i) => {
      if (i === 0) return seg;
      let decoded = seg;
      let prev;
      do {
        prev = decoded;
        try {
          decoded = decodeURIComponent(decoded.replace(/\+/g, ' '));
        } catch {
          break;
        }
      } while (decoded !== prev);
      return decoded.replace(/ /g, '%20');
    })
    .join('/');
}

window.getProjectById = function (id) {
  return window.PROJECTS.find((p) => p.id === id);
};
