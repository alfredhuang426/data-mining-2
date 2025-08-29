declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string,
      config?: {
        page_title?: string;
        page_location?: string;
        custom_map?: { [key: string]: string };
        [key: string]: unknown;
      }
    ) => void;
    dataLayer: unknown[];
  }
}

export {};
