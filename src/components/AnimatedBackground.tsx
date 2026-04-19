import { useEffect, useRef } from 'react'

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const orbs = container.querySelectorAll('.orb')
    const baseDelay = 0.5

    orbs.forEach((orb, index) => {
      const delay = baseDelay + index * 0.2
      ;(orb as HTMLElement).style.setProperty('--delay', `${delay}s`)
    })
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.5;
          }
          25% {
            transform: translate(80px, -120px) scale(1.1);
            opacity: 0.7;
          }
          50% {
            transform: translate(-60px, 80px) scale(0.9);
            opacity: 0.6;
          }
          75% {
            transform: translate(120px, 100px) scale(1.05);
            opacity: 0.7;
          }
        }

        @keyframes glow {
          0%, 100% {
            filter: blur(60px) brightness(0.8);
          }
          50% {
            filter: blur(80px) brightness(1.2);
          }
        }

        @keyframes shift {
          0%, 100% {
            transform: translate(-300px, -300px);
          }
          25% {
            transform: translate(200px, -250px);
          }
          50% {
            transform: translate(100px, 150px);
          }
          75% {
            transform: translate(-150px, 200px);
          }
        }

        .orb {
          position: absolute;
          filter: blur(60px);
          mix-blend-mode: screen;
          animation: float 20s ease-in-out infinite, glow 4s ease-in-out infinite;
          animation-delay: var(--delay, 0s);
        }

        .orb-1 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(59, 130, 246, 0) 70%);
          top: -100px;
          left: 10%;
          animation-duration: 25s, 5s;
        }

        .orb-2 {
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, rgba(6, 182, 212, 0) 70%);
          top: 200px;
          right: 15%;
          animation-duration: 28s, 6s;
          animation-delay: 2s, 1s;
        }

        .orb-3 {
          width: 380px;
          height: 380px;
          background: radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, rgba(14, 165, 233, 0) 70%);
          bottom: -50px;
          left: 20%;
          animation-duration: 30s, 7s;
          animation-delay: 4s, 2s;
        }

        .orb-4 {
          width: 420px;
          height: 420px;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, rgba(56, 189, 248, 0) 70%);
          bottom: 100px;
          right: 10%;
          animation-duration: 27s, 5.5s;
          animation-delay: 1s, 3s;
        }

        .orb-5 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(125, 211, 252, 0.2) 0%, rgba(125, 211, 252, 0) 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-duration: 35s, 8s;
          animation-delay: 5s, 4s;
        }
      `}</style>

      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="orb orb-4" />
      <div className="orb orb-5" />
    </div>
  )
}
