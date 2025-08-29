// Google Analytics 事件追蹤函數
export const GA_TRACKING_ID = 'G-6ZDY30PQ37';

// 自定義事件追蹤
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
