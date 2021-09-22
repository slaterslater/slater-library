// pages/index.tsx

import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';

// Import the generated Lists API from Keystone
import { lists } from '.keystone/api';

// Home receives a `posts` prop from `getStaticProps` below
export default function Home({
  ebooks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <main style={{ margin: "3rem" }}>
        <h1>Hello World! 👋🏻 </h1>
        <ul>
          {ebooks.map(ebook => (
            <li key={ebook.id}>
              <Link href={`/post/${ebook.slug}`}>
                <a>{ebook.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

// Here we use the Lists API to load all the posts we want to display
// The return of this function is provided to the `Home` component
export async function getStaticProps() {
  // casting list as any to avoid error...
  // Property 'Ebook' does not exist on type 'KeystoneListsAPI<KeystoneListsTypeInfo>'.ts(2339)
  const ebooks = await (lists as any).Ebook.findMany({ query: 'id title slug' });
  return { props: { ebooks } };
}