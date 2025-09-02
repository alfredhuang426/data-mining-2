'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [testId, setTestId] = useState<string | null>(null);

  useEffect(() => {
    // 檢查 sessionStorage 中是否已有 test_id
    const existingTestId = sessionStorage.getItem('test_id');
    
    if (!existingTestId) {
      // 如果沒有，隨機生成一個 101-105 的字串
      const randomId = Math.floor(Math.random() * 5) + 101; // 101-105
      const testIdString = randomId.toString();
      
      // 存儲到 sessionStorage
      sessionStorage.setItem('test_id', testIdString);
      setTestId(testIdString);
      console.log('已生成新的 test_id:', testIdString);
    } else {
      // 如果已經存在，直接使用
      setTestId(existingTestId);
      console.log('使用現有的 test_id:', existingTestId);
    }
  }, []);

  useEffect(() => {
    if (testId) {
      console.log('設置 test_id:', testId);
      window.gtag('set', 'user_properties', {
        testId: testId
      });
    }
  }, [testId]);

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
        
        {/* 顯示 test_id */}
        {testId && (
          <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
            <p className="text-sm text-gray-600">您的測試 ID：</p>
            <p className="text-lg font-semibold text-blue-600">{testId}</p>
          </div>
        )}
        
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
            href="/Alfred_01/about"
            className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
          >
            關於我們
          </Link>
          <Link 
            href="/Emily_02/contact"
            className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
          >
            聯絡我們
          </Link>
        </div>
      </div>
    </div>
  );
}
