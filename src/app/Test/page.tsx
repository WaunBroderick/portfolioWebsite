import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'


export const metadata: Metadata = {
    title: 'Speaking',
    description:
      'When I’m not developing I speak at events, panels, and podcasts.',
  }
  
  export default function Test() {
    return (
        <SimpleLayout
        title="When I’m not developing I speak at events, panels, and podcasts..."
        intro="One of my favorite ways to share my ideas is live with other people, where there’s so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions."
      >

        </SimpleLayout>
    )
  }