'use client'
import { useRef, useState, useEffect } from 'react'
import SectionNavigator from '../section-navigator'

import FirstSection from '../1st-section/index'
import SecondSection from '../2st-section'
import ThirdSection from '../3rd-section'
import FourthSection from '../4th-section'
import FifthSection from '../5th-section'
import SixthSection from '../6th-section'
import SeventhSection from '../7th-section'

// Ícones SVG — troque pelo que já usa no seu projeto
const icons = [
  // grid
  <svg key={0} width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="1" y="1" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="10" y="1" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="1" y="10" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="10" y="10" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
  </svg>,
  // user
  <svg key={1} width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="6" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M2 17c0-3.866 3.134-6 7-6s7 2.134 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
  // code
  <svg key={2} width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M5.5 5L1 9l4.5 4M12.5 5L17 9l-4.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  // monitor
  <svg key={3} width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="1" y="2" width="16" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M6 16h6M9 13v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
  // edit
  <svg key={4} width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M12.5 2.5l3 3-9 9H3.5V11l9-9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M10.5 4.5l3 3" stroke="currentColor" strokeWidth="1.5"/>
  </svg>,
  // briefcase / portfolio
  <svg key={5} width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="1" y="6" width="16" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M6 6V4a2 2 0 012-2h2a2 2 0 012 2v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
  // mail
  <svg key={6} width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="1" y="4" width="16" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M1 6l8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
]

const SECTIONS = [
  { component: FirstSection,   icon: icons[0] },
  { component: SecondSection,  icon: icons[1] },
  { component: ThirdSection,   icon: icons[2] },
  { component: FourthSection,  icon: icons[3] },
  { component: FifthSection,   icon: icons[4] },
  { component: SixthSection,   icon: icons[5] },
  { component: SeventhSection, icon: icons[6] },
]

export default function Body() {
  const [currentSection, setCurrentSection] = useState(0)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2
      let active = 0
      sectionRefs.current.forEach((el, i) => {
        if (el && el.offsetTop <= scrollY) active = i
      })
      setCurrentSection(active)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigateTo = (index: number) => {
    setCurrentSection(index)
    const el = sectionRefs.current[index]
    if (!el) return
    window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
  }

  return (
    <div>
      <SectionNavigator
        sections={SECTIONS}
        currentSection={currentSection}
        onNavigate={navigateTo}
      />

      {SECTIONS.map(({ component: Section }, i) => (
        <div key={i} ref={el => { sectionRefs.current[i] = el }}>
          <Section />
        </div>
      ))}
    </div>
  )
}