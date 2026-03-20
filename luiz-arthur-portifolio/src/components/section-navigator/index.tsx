'use client'

interface SectionNavigatorProps {
  sections: { icon: React.ReactNode }[]
  currentSection: number
  onNavigate: (index: number) => void
}

export default function SectionNavigator({ sections, currentSection, onNavigate }: SectionNavigatorProps) {
  return (
    <nav style={{
      position: 'fixed',
      left: '20px',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px',
      padding: '10px 8px',
      background: 'rgba(20, 22, 28, 0.92)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderRadius: '24px',
    }}>
      {sections.map((section, i) => {
        const isActive = i === currentSection
        return (
          <button
            key={i}
            onClick={() => onNavigate(i)}
            title={`Section ${i + 1}`}
            style={{
              width: '100%',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              borderRadius: '30%',
              cursor: 'pointer',
              background: isActive ? 'rgba(255,255,255,0.12)' : 'transparent',
              color: isActive ? '#fff' : 'rgba(255,255,255,0.4)',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={e => {
              if (!isActive) {
                (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.07)'
                ;(e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.75)'
              }
            }}
            onMouseLeave={e => {
              if (!isActive) {
                (e.currentTarget as HTMLButtonElement).style.background = 'transparent'
                ;(e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.4)'
              }
            }}
          >
            {section.icon}
          </button>
        )
      })}
    </nav>
  )
}