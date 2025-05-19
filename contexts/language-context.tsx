"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "zh" | "ja"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  translations: Record<string, Record<string, string>>
  t: (key: string) => string
}

const defaultTranslations = {
  "nav.home": {
    en: "Home",
    zh: "首页",
    ja: "ホーム",
  },
  "nav.projects": {
    en: "Projects",
    zh: "项目",
    ja: "プロジェクト",
  },
  "nav.about": {
    en: "About",
    zh: "关于",
    ja: "について",
  },
  "nav.contact": {
    en: "Contact",
    zh: "联系",
    ja: "お問い合わせ",
  },
  "hero.greeting": {
    en: "Hi, I'm",
    zh: "你好，我是",
    ja: "こんにちは、私は",
  },
  "hero.title": {
    en: "Computer Science Student & Developer",
    zh: "计算机科学学生 & 开发者",
    ja: "コンピュータサイエンスの学生 & 開発者",
  },
  "hero.description": {
    en: "I build modern web applications with React, Next.js, and Tailwind CSS. Passionate about creating clean, user-friendly interfaces.",
    zh: "我使用 React、Next.js 和 Tailwind CSS 构建现代网络应用程序。热衷于创建简洁、用户友好的界面。",
    ja: "React、Next.js、Tailwind CSSを使用してモダンなウェブアプリケーションを構築しています。クリーンでユーザーフレンドリーなインターフェースの作成に情熱を注いでいます。",
  },
  "hero.viewProjects": {
    en: "View My Projects",
    zh: "查看我的项目",
    ja: "プロジェクトを見る",
  },
  "hero.contactMe": {
    en: "Contact Me",
    zh: "联系我",
    ja: "お問い合わせ",
  },
  "projects.title": {
    en: "Projects",
    zh: "项目",
    ja: "プロジェクト",
  },
  "projects.description": {
    en: "Here are some of my recent projects. Each one was built to solve a specific problem or learn new technologies.",
    zh: "这里是我最近的一些项目。每个项目都是为了解决特定问题或学习新技术而构建的。",
    ja: "最近のプロジェクトをいくつか紹介します。それぞれが特定の問題を解決したり、新しい技術を学ぶために構築されました。",
  },
  "about.title": {
    en: "About Me",
    zh: "关于我",
    ja: "私について",
  },
  "about.description": {
    en: "Learn more about my background, skills, and interests.",
    zh: "了解更多关于我的背景、技能和兴趣。",
    ja: "私の経歴、スキル、興味についてもっと知る。",
  },
  "about.journey": {
    en: "My Journey",
    zh: "我的旅程",
    ja: "私の旅",
  },
  "about.journeyText": {
    en: "I'm a Computer Science student passionate about web development and software engineering. My journey began when I built my first website at 16, and I've been hooked ever since. I enjoy solving complex problems and creating intuitive user experiences.",
    zh: "我是一名对网络开发和软件工程充满热情的计算机科学学生。我的旅程始于16岁时构建的第一个网站，从那时起我就一直着迷于此。我喜欢解决复杂问题并创建直观的用户体验。",
    ja: "私はウェブ開発とソフトウェアエンジニアリングに情熱を持つコンピュータサイエンスの学生です。16歳で初めてのウェブサイトを作ったときから私の旅が始まり、それ以来夢中になっています。複雑な問題を解決し、直感的なユーザー体験を作ることを楽しんでいます。",
  },
  "about.education": {
    en: "Education",
    zh: "教育",
    ja: "教育",
  },
  "about.experience": {
    en: "Experience",
    zh: "经验",
    ja: "経験",
  },
  "about.skills": {
    en: "Skills",
    zh: "技能",
    ja: "スキル",
  },
  "contact.title": {
    en: "Contact Me",
    zh: "联系我",
    ja: "お問い合わせ",
  },
  "contact.description": {
    en: "Have a question or want to work together? Feel free to reach out!",
    zh: "有问题或想一起工作？随时联系我！",
    ja: "質問がありますか、または一緒に仕事をしたいですか？お気軽にご連絡ください！",
  },
  "contact.getInTouch": {
    en: "Get In Touch",
    zh: "保持联系",
    ja: "お問い合わせ",
  },
  "contact.opportunities": {
    en: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    zh: "我目前正在寻找新的机会。无论您有问题还是只想打个招呼，我都会尽力回复您！",
    ja: "現在、新しい機会を探しています。質問があるか、単に挨拶したいだけでも、できるだけ早く返信するよう努めます！",
  },
  "contact.email": {
    en: "Email",
    zh: "电子邮件",
    ja: "メール",
  },
  "contact.phone": {
    en: "Phone",
    zh: "电话",
    ja: "電話",
  },
  "contact.location": {
    en: "Location",
    zh: "位置",
    ja: "場所",
  },
  "contact.yourName": {
    en: "Your Name",
    zh: "您的姓名",
    ja: "お名前",
  },
  "contact.yourEmail": {
    en: "Your Email",
    zh: "您的电子邮件",
    ja: "あなたのメール",
  },
  "contact.yourMessage": {
    en: "Your Message",
    zh: "您的留言",
    ja: "あなたのメッセージ",
  },
  "contact.sendMessage": {
    en: "Send Message",
    zh: "发送消息",
    ja: "メッセージを送信",
  },
  "contact.sending": {
    en: "Sending...",
    zh: "发送中...",
    ja: "送信中...",
  },
  "contact.thankYou": {
    en: "Thank you!",
    zh: "谢谢您！",
    ja: "ありがとうございます！",
  },
  "contact.messageSent": {
    en: "Your message has been sent successfully.",
    zh: "您的消息已成功发送。",
    ja: "メッセージが正常に送信されました。",
  },
  "footer.rights": {
    en: "All rights reserved.",
    zh: "版权所有。",
    ja: "全著作権所有。",
  },
  language: {
    en: "English",
    zh: "中文",
    ja: "日本語",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [translations, setTranslations] = useState(defaultTranslations)

  useEffect(() => {
    // Check if there's a saved language preference in localStorage
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["en", "zh", "ja"].includes(savedLanguage)) {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`)
      return key
    }
    return translations[key][language] || translations[key]["en"] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations, t }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
