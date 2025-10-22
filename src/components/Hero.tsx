import { heroData } from "../data/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          {heroData.name}
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8">
          {heroData.title}
        </p>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {heroData.description}
        </p>
        <div className="mt-12 flex gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-colors font-medium"
          >
            お問い合わせ
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 rounded-lg transition-colors font-medium"
          >
            プロジェクトを見る
          </a>
        </div>
      </div>
    </section>
  );
}
