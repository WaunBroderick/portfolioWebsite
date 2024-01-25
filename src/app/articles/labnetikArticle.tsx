import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Labnetik Article',
  description: 'Things I’ve made throughout my career.',
}

export default function LabnetikArticle() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <h1>HELLLLO</h1>
      </Container>
    </>
  )
}
