import { useTranslation } from 'react-i18next';
export default function Home() {
  const { t } = useTranslation('common');

  return (
    <div style={{ direction: t('app_name') === 'אפליקציית i18n שלי' ? 'rtl' : 'ltr' }}>
      <h1>{t('app_name')}</h1>
      <p>{t('welcome', { name: 'Dana' })}</p>
    </div>
  );
}
