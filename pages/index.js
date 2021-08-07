import Meta from '../components/Meta';
import { getSession } from 'next-auth/client';
import Login from './Login';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import { Widgets } from '../components/Widgets';
import { db } from '../firebase';
export default function Home({ session, posts }) {
  if (!session) return <Login />;
  return (
    <>
      <Meta title='updated' />

      <Header />

      <div className='flex'>
        <Sidebar />
        <Feed posts={posts} />
        {/* Widgets */}
        <Widgets />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const posts = await db.collection('posts').orderBy('timestamp', 'desc').get();

  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));
  return {
    props: {
      session,
      posts: docs,
    },
  };
}
