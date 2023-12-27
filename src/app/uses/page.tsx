import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3">
        <a target="_blank" href={href}>
          {title}
        </a>
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description:
    'Frameworks I use, software I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Frameworks I use, software I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, or stay productive. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Languages & Frameworks">
          <Tool title="Typescript" href="https://www.typescriptlang.org/">
            Often my front-to-bank language of choice, when creating fullstack
            web applications.
          </Tool>
          <Tool title="Python" href="https://www.python.org/">
            My datascience, and machine learning language of choice, that I use
            when projects require it. The language I used through my MSc as
            well.
          </Tool>
          <Tool title="Rust" href="https://www.rust-lang.org/">
            When I want to make fast preformant applications or microservices,
            rust is my go-to language.
          </Tool>
          <Tool title="NextJS" href="https://nextjs.org/">
            I’m honestly not even sure what features I get with this that aren’t
            just part of the macOS Terminal but it’s what I use.
          </Tool>
          <Tool title="NestJS" href="https://nestjs.com/">
            --
          </Tool>
          <Tool title="Django" href="https://www.djangoproject.com/">
            --
          </Tool>
          <Tool title="GraphQL" href="https://graphql.org/">
            --
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool
            title="Visual Studio Code"
            href="https://code.visualstudio.com/"
          >
            I don’t care if it’s missing all of the fancy IDE features everyone
            else relies on, Sublime Text is still the best text editor ever
            made.
          </Tool>
          <Tool title="iTerm2" href="https://iterm2.com/">
            I’m honestly not even sure what features I get with this that aren’t
            just part of the macOS Terminal but it’s what I use.
          </Tool>
          <Tool title="OrbStack" href="">
            I’m honestly not even sure what features I get with this that aren’t
            just part of the macOS Terminal but it’s what I use.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma" href="https://www.figma.com/">
            We started using Figma as just a design tool but now it’s become our
            virtual whiteboard for the entire company. Never would have expected
            the collaboration features to be the real hook.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Obsidian" href="https://obsidian.md/">
            Obsidian is one of my favorite open source applications that acts as
            my `Second Brain`. It allows me to capture notes, thoughts, and
            ideas in a way that is very intuitive to the way i think and work.
            It also integrates with my workflow tools at every step of data
            ingestion making it a daily staple for myself.
          </Tool>
          <Tool title="Omnivore" href="https://omnivore.app/">
            Omnivore is another opensource application I use for my
            read-it-later workflow that seamlessly integrates with my
            productivity stack and allows me to capture important and insight
            articles for later consumption, or notes within the articles to
            capture for more long-term storage.
          </Tool>
          <Tool title="Todoist" href="https://todoist.com/">
            To free up mental bandwidth I ensure I record eveything I need to do
            when the thought occurs to me, todoist helps me archive, priotize
            then schedule all my tasks.
          </Tool>
          <Tool title="Cron" href="https://cron.com/">
            A robust and simple calendar application that connects all my
            calendars and productivity apps to serve as a daily source of
            integrated truth.
          </Tool>
          <Tool title="Reclaim.ai" href="https://reclaim.ai/">
            Reclaim is a great tool for managing my multiple calendars from
            work, clients, and side projects. It automatically blocks time for
            conflicts across calendars, provides meeting invite links, and on
            ocassion can help me reorganize my work to optimize focus and
            minimize context switching.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
