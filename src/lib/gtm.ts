declare global {
  interface Window { dataLayer?: any[] }
}
export function gtmPush(payload: Record<string, any>) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}
