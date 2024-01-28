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
    'When I’m not developing I speak at events, panels, and podcasts.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="When I’m not developing I speak at events, panels, and podcasts..."
      intro="One of my favorite ways to share my ideas is live with other people, where there’s so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions."
    >
      <div className="space-y-20">
        <SpeakingSection title="Recordings">
          <Appearance
            href="https://youtu.be/LP-uxNcCXqU?si=Km_43f4nGiDUxnIS&t=1"
            title="Leadership, Communication, and New Ventures."
            description="A deep-dive into my first experience as a CTO. The need to sit between technical and management teams to communicate high-level concepts, whilst leading and encouraging competent and talented engineers. "
            event="The Datastory Tellers"
            cta="Watch video"
          />
          <Appearance
            href="https://youtu.be/tJbo8BWG5Po?si=KUwFwjQHPf0bk9mu&t=1"
            title="Diversity in Business and Tech
"
            description="Join us as we celebrate incredible entrepreneurs and engage in a thoughtful panel discussion led by Innovation Cluster Vice Chair, Nicole Stephenson, to shed light on the challenges, potential solutions and what individuals, businesses and organizations can to do support Black, Indigenous and People of Colour (BIPOC) in business and tech!"
            event="Innovation Cluster Panel"
            cta="Watch video"
          />
        </SpeakingSection>
        <SpeakingSection title="Events">
          <Appearance
            href="https://www.thepeterboroughexaminer.com/business/fleming-college-grad-wins-3k-for-business-idea-in-innovation-cluster-s-slingshot-pitch-competition/article_0f99ac5d-9015-5003-b5f4-d68595271046.html"
            title="Slingshot Business Program Mentor & Judge"
            description="The Innovation Cluster’s Slingshot program is a 12-week program that helps entrepreneurs and startups launch their business ideas. The program is designed to help entrepreneurs and startups validate their business idea, build a business model, and launch their business. I assist the candidates with technology informational meetings, and general bu
            siness mentorship. At the end of the program I also helped judge the final pitch competition for a 3000$ prize."
            event="Professional Engagement"
            cta="Watch video"
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
