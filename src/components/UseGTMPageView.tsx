import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { gtmPush } from '../lib/gtm';

export default function UseGTMPageView() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (import.meta.env.VITE_GTM_ID === 'true') {
      gtmPush({ event: 'page_view', page_path: pathname });
    }
  }, [pathname]);
  return null;
}
