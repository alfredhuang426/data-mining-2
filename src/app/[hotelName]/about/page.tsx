'use client';
import Link from 'next/link';
import { event } from '@/lib/gtag';

export default function About() {
  const handleButtonClick = (buttonName: string, room: string) => {
    event({
      action: 'button_click',
      category: 'engagement',
      label: `about_${buttonName}`,
      room: room,
    });
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'HooeyDemo' }}>
            關於我們
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我們是一個充滿創意的團隊，致力於為您提供最好的數位體驗
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'HooeyDemo' }}>
              我們的使命
            </h2>
            <p className="text-gray-600 leading-relaxed">
              透過創新的技術和設計，為用戶創造獨特且有意義的數位體驗。
              我們相信每個專案都應該反映客戶的獨特願景和價值觀。
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'HooeyDemo' }}>
              我們的價值
            </h2>
            <p className="text-gray-600 leading-relaxed">
              專注於品質、創新和用戶體驗。我們致力於提供卓越的服務，
              並與客戶建立長期的合作關係。
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'HooeyDemo' }}>
              團隊特色
            </h2>
            <p className="text-gray-600 leading-relaxed">
              我們的團隊由經驗豐富的設計師、開發者和創意專家組成。
              每個成員都對自己的工作充滿熱情，並致力於創造卓越的成果。
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'HooeyDemo' }}>
              未來展望
            </h2>
            <p className="text-gray-600 leading-relaxed">
              我們持續關注最新的技術趨勢和設計理念，
              致力於為客戶提供最前沿的解決方案和創新的數位體驗。
            </p>
          </div>
        </div>

        <div className='flex justify-center space-x-6 my-16'>
          <button
            onClick={() => handleButtonClick('Alfred_01', '101')}
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            發送訊息to Alfred_01 101
          </button>
          <button
            onClick={() => handleButtonClick('Alfred_01', '102')}
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            發送訊息to Alfred_01 102
          </button>
          <button
            onClick={() => handleButtonClick('Emily_02', '201')}
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            發送訊息to Emily_02 201
          </button>
          <button
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            onClick={() => handleButtonClick('Emily_02', '201')}
          >
            發送訊息to Emily_02 201
          </button>
        </div>

        <div className="text-center mt-16">
          <Link
            href="/"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            返回首頁
          </Link>
        </div>
      </div>
    </div>
  );
}
