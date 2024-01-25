import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

const mediumArticle01 = {
  slug: 'Applied AI',
  title: 'Create Your Own Computer Vision Sandbox',
  date: '2020-02-01', // Date in YYYY-MM-DD format or similar
  description: 'From automated data collection to CNN model building',
  href: 'https://medium.com/swlh/create-your-own-computer-vision-sandbox-b7c6b8662151',
}

const mediumArticle02 = {
  slug: 'Leadership',
  title: 'Three Things I’ve Learned in The Military That Improve My Startup',
  date: '2020-05-29', // Date in YYYY-MM-DD format or similar
  description: 'From automated data collection to CNN model building',
  href: 'https://medium.com/@broderickwaun/three-things-ive-learned-in-the-military-that-improve-my-startup-8a21f95139d0',
}

export function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export function ArticleLink({ article }: { article: any }) {
  return (
    <a href={article.href} target="_blank">
      <article className="md:grid md:grid-cols-4 md:items-baseline">
        <Card className="md:col-span-3">
          <Card.Title>{article.title}</Card.Title>
          <Card.Eyebrow
            as="time"
            dateTime={article.date}
            className="md:hidden"
            decorate
          >
            {formatDate(article.date)}
          </Card.Eyebrow>
          <Card.Description>{article.description}</Card.Description>
          <Card.Cta>Read article</Card.Cta>
        </Card>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="mt-1 hidden md:block"
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
      </article>
    </a>
  )
}

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
}

export default async function ArticlesIndex() {
  let articles = await getAllArticles()

  return (
    <SimpleLayout
      title="Writing on software engineering, company building, and the everything between."
      intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
          <ArticleLink article={mediumArticle01} />
          <a>
            <ArticleLink article={mediumArticle02} />
          </a>
        </div>
      </div>
    </SimpleLayout>
  )
}
