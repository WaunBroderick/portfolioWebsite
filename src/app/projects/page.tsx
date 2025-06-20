import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoLabnetik from '@/images/logos/labnetikLogo.jpeg'
import logoSiftr from '@/images/logos/siftrLogo.png'
import logoCreditPulse from '@/images/logos/CreditPulseLogo.png'
import logoAmoeba from '@/images/logos/amoebaAvatar.svg'
import logoCordelia from '@/images/logos/logoCordelia.svg'
import logoHemingway from '@/images/logos/HemingwayLogo.png'

const projects = [
  {
    name: 'Credit Pulse',
    description:
      'Credit Pulse is transforming credit risk management by eliminating manual effort and continuously monitoring for portfolio-wide risks.',
    link: { href: 'https://creditpulse.com', label: 'creditpulse.com' },
    logo: logoCreditPulse,
  },
  {
    name: 'Amoeba AI',
    description:
      'The AI-Powered Data Scientist for Revenue Growth. Transform sales and marketing data and generate dynamic, insight-driven, go-to-market decisions with confidence',
    link: {
      href: 'https://www.amoeb.ai',
      label: 'Amoeb.ai',
    },
    logo: logoAmoeba,
  },
  {
    name: 'Cordelia',
    description:
      'A full end to end legal platform that manages your estate, automates document generation, and articulates high level intricacies of the laws that govern your assets.',
    link: {
      href: 'https://www.getcordelia.com',
      label: 'GetCordelia.com',
    },
    logo: logoCordelia,
  },
  {
    name: 'Hemingway AI ',
    description:
      'The future of code documentation generation. Automatically vectorize, understand, generate, and alter your code documentation through Github Interactions.',
    link: {
      href: 'https://www.google.com',
      label: 'WIP - Finishing Branding',
    },
    logo: logoHemingway,
  },
  {
    name: 'Labnetik',
    description:
      'A mobile and web application Laboratory Information Management system for the Materials Testing Industry.',
    link: {
      href: 'https://www.waunbroderick.com/articles/digitizing-the-materials-testing-industry',
      label: 'Sunsetted - Read more about it here.',
    },
    logo: logoLabnetik,
  },
  {
    name: 'Siftr',
    description:
      'A circular economics engine for the exchange of raw resources, facilitating all its chemical, legal, and operation needs..',
    link: {
      href: 'https://www.siftr.net',
      label: 'Sunsetted - Read more about it here.',
    },
    logo: logoSiftr,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made throughout my career.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I’ve made throughout my career."
      intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Due to the nature of the work I have taken on in the last few years, the IP does not solely belong to me. With that many of these will be recollections of my work through; screenshots, videos, code-snippers, development techniques, or other artifacts. If there are any questions about any of them, please feel free to reach out to discuss them in more depth."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
