import { notFound } from 'next/navigation';

import { serverFeatureFlags } from '@/config/server/featureFlags';
import { metadataModule } from '@/server/metadata';
import { translation } from '@/server/translation';

import Page from './index';

export const generateMetadata = async () => {
  const { t } = await translation('setting');
  return metadataModule.generate({
    description: t('tab.llm'),
    title: t('header.desc'),
    url: '/settings/llm',
  });
};

export default () => {
  const showLLM = serverFeatureFlags().showLLM;
  if (!showLLM) return notFound();

  return <Page />;
};