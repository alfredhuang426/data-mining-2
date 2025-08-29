import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'HooeyDemo' }}>
          歡迎來到我的網站
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          這是一個使用 Next.js 14 建立的簡單首頁。
          您可以開始在這裡添加您的內容和功能。
        </p>
        <div className="space-x-4 mb-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
            開始探索
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
            了解更多
          </button>
        </div>
        
        {/* 導航連結 */}
        <div className="flex justify-center space-x-6">
          <Link 
            href="/about"
            className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
          >
            關於我們
          </Link>
          <Link 
            href="/contact"
            className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
          >
            聯絡我們
          </Link>
        </div>
      </div>
    </div>
  );
}
