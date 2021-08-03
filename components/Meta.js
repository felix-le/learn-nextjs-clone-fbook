import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta chartset='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta name='robots' content='index, follow' />
      <meta name='author' content='Felix' />
      <meta name='copyright' content='Felix' />
      <title>{title}</title>
      <link rel='icon' type='image/png' href='/favicon.png' />
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Clone Facebook - Felix',
  keywords: 'NextJs, Facebook',
  description: 'description for clone Facebook',
};

export default Meta;
