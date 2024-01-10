import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'I’ve spoken at events all around the world and been interviewed for many podcasts.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="I’ve spoken at events all around the world and been interviewed for many podcasts."
      intro="One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions."
    >
      <div className="space-y-20">
        <SpeakingSection title="Podcasts">
          <Appearance
            href="https://youtu.be/LP-uxNcCXqU?si=p6MbveAOn0jOCQ_g"
            title="Leadership, Communication, and New Ventures."
            description="A deep-dive into my first experience as a CTO. The need to sit between technical and management teams to communicate high-level concepts, whilst leading and encouraging competent and talented engineers. "
            event="The Datastory Tellers"
            cta="Watch video"
          />
        </SpeakingSection>
        <SpeakingSection title="Panels">
          <Appearance
            href="https://youtu.be/tJbo8BWG5Po?si=HyoEnXcb2IlkINJB"
            title="Diversity in Business and Tech
"
            description="Join us as we celebrate incredible entrepreneurs and engage in a thoughtful panel discussion led by Innovation Cluster Vice Chair, Nicole Stephenson, to shed light on the challenges, potential solutions and what individuals, businesses and organizations can to do support Black, Indigenous and People of Colour (BIPOC) in business and tech!"
            event="Innovation Cluster Panel"
            cta="Watch video"
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
