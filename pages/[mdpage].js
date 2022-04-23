import fs from 'fs';
import path from 'path';
import * as matter from 'gray-matter';
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'

import BasicLayout from '../layouts/site-simple-page'

const pagesDir = path.join(process.cwd(), 'pages');

export default function MdPage( { html, title } ) {
  return (
    <BasicLayout title={title}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </BasicLayout>
  );
}

export async function getStaticPaths() {
  const paths = fs.readdirSync( pagesDir )
    .filter( f => f.match(/\.md$/) )
    .map( f => f.replace(/\.md$/, '') )
    .map( mdpage => { return { params: { mdpage } } } );

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const fileContents = fs.readFileSync(path.join(pagesDir, `${params.mdpage}.md`), 'utf8')

  const html = ( await unified()
    .use( remarkParse )
    .use( remarkRehype, {allowDangerousHtml: true} ) // Pass raw HTML strings through.
    .use( rehypeStringify, {allowDangerousHtml: true} ) // Serialize the raw HTML strings
    .process( matter(fileContents).content ) ).toString();

  return {
    props: {
      html,
      ...(matter(fileContents).data)
    }
  }
}