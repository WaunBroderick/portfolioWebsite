import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import childhoodImage from '@/images/childhoodImage.jpeg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
        target="_blank"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description: 'A union of career, and passion, in a life-long journey.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={childhoodImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            A union of career, and passion, a life-long journey.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I still remember the day my mother brought home our very first
              computer. The physical click of heavy buttons that summoned the
              loud throttling of machine fans, and the slight static transfer
              when I ran my hand over the dust collecting on the cathode ray
              tube monitor. In front of a hot glow in a dark room I was
              introduced to a world where vast networks of people were able to
              connect with one another over things they were interested in. Even
              more intriguing to me however, the open ecosystem that invited
              creators to contribute to the evolving worlds within them. Talking
              to people on forums, making hideous GeoCities websites, learning
              to script on RPG MakerXP, lit-role-playing, digital art, and
              almost every enjoyment of the early web let me knew that it was a
              place where I belonged.
            </p>
            <p>
              When asked what it is that I wanted to do when I grew up, it was
              an easy answer `I want to actively contribute to building the
              future of the internet.` Luckily, by the time I graduated
              high-school this road was well paved by many that came before me.
              I went on to complete my HBSc in Computer Science, and later in
              life a part-time Master&apos;s of Science.
            </p>
            <p>
              Along that journey I also learned that my love for digital
              communities found its match with my deep intrigue for intricate
              interconnected systems, and the people that help build and uphold
              them.
            </p>
            <p>
              To help pay for school I served in the Canadian Armed Forces as an
              Infantry Soldier, then commissioned to become an officer. I was a
              University Orientation leader, The President of The Computer
              Science Society, a UN volunteer, Red Cross DMT member, and
              participated in almost everything that sparked my interest in
              passing. What I learned from computers at a young age I found
              transitioned well to life. People are often interested in
              contributing and being a part of engaged communities, however,
              sometimes finding open forums and means to do so isn&apos;t easy.
              Thus a self-realized life-long study I was on as to how I can
              actively help to uphold these communities IRL and digitally.
            </p>
            <p>
              After university I went on to work for Canada&apos;s largest tech
              incubator, the head quarters for one of Canada&apos;s main banking
              institution, and a Top Secret Intelligence agency, bringing
              technological solutions of all manner to stakeholders across a
              breadth of diverse business requirements. Brash and bold enough I
              then founded a start up with a couple peers and raised 3M,
              building amazing products with a truly humbling team of 13+.
            </p>
            <p>
              I currently am a Technical Lead & Senior Full-Stack Developer at
              Forum Ventures where I get to fulfil the dreams of a younger me by
              building applications on the edge of the market&apos;s need
              alongside passionate founders. My journey is far from over, and
              though Ido not know where life will take me next I know that
              following my passion to build and excel at what I do will lead me
              to places A younger me would be proud of.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://github.com/WaunBroderick"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/waunbroderick/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:waun.broderick@dropoutventures.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              waun.broderick@dropoutventures.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
