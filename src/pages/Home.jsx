import { useState } from 'react'
import Header from '../components/Header'
import GameSection from '../components/GameSection'
import Carousel from '../components/Carousel'
import SectionNav from '../components/SectionNav'
import ReleaseShowcase from '../components/ReleaseShowcase'
import GameJamShowcase from '../components/GameJamShowcase'
import Footer from '../components/Footer'

import steamIcon from '../assets/icons/icons8-steam-500.png'
import itchIcon from '../assets/icons/icons8-itch-io-120.png'

import betweenCircuitsLogo from '../assets/images/between_circuits-logo.png'
import betweenCircuitsBg from '../assets/images/between_circuits-bg.png'

import blindspotBg from '../assets/images/blindspot.png'
import blindspotGameplay from '../assets/images/blindspot-gameplay.png'
import blindspotLogo from '../assets/images/blindspot-logo.png'

import stillhereBg from '../assets/images/stillhere.png'
import stillhereLogo from '../assets/images/stillhere-logo.png'
import stillhereGameplay from '../assets/images/stillhere-gameplay.png'

import liwanagBg from '../assets/images/liwanag.png'
import liwanagGameplay from '../assets/images/liwanag-gameplay.png'

import centrixBg from '../assets/images/centrix.png'
import centrixGameplay from '../assets/images/centrix-gameplay.png'

import starlitBg from '../assets/images/starlit-veil.png'
import starlitGameplay from '../assets/images/starlit-veil-gameplay.png'

import balikbayanLogo from '../assets/images/balikbayan-logo.png'
import balikbayanGameplay from '../assets/images/balikbayan-gameplay.png'

// Main Releases Data - Your indie game titles
const releases = [
  {
    title: 'Between Circuits',
    logo: betweenCircuitsLogo,
    image: betweenCircuitsBg,
    description: 'A city is dying. The streets are empty. The machines still run. You are the last maintenance worker, assigned to keep the lights on in a place that has no reason left to stay lit. Something is wrong with this city. Something is wrong with you. Efficiency is mandatory. Curiosity is a malfunction.',
    steamUrl: 'https://store.steampowered.com/app/4183820/Between_Circuits/',
    itchUrl: 'https://eseyem.itch.io/between-circuits-se',
    itchText: "Supporter's Edition"
  },
]

// Game Jam Games Data
const gameJamGames = [
  {
    title: 'Still Here',
    thumbnail: stillhereGameplay,
    jamName: 'SIKAPTala 2026 - Game Jam Competition',
    description: 'A guide dog who just passed away. A blind old man not knowing it. One last Tuesday.',
    itchUrl: 'https://eseyem.itch.io/still-here'
  },
    {
    title: 'Blindspot',
    thumbnail: blindspotGameplay,
    jamName: 'Game On! Game Jam Manila 2025',
    description: 'Blindspot is a 2d side-scrolling platformer set in a dystopian society. You are a nameless citizen, trapped in a system where every breath is monitored. In this world, obedience isn\'t a choice-it\'s survival. Every day repeats. Every step is under watch. Your fate remains unwritten. For now.',
    itchUrl: 'https://eseyem.itch.io/blindspot'
  },
  {
    title: 'Liwanag',
    thumbnail: liwanagGameplay,
    jamName: 'Game Jam Los Baños 2025',
    description: 'A single drone with a single blazing light within. A single chance to change what being seen means.',
    itchUrl: 'https://eseyem.itch.io/liwanag'
  },
  {
    title: 'Centrix',
    thumbnail: centrixGameplay,
    jamName: 'Cardinal Tech Fest 2024 - Game Development Competition',
    description: 'You are stuck in a desolate planet with a toxic atmosphere. Preserve your life by doing the right actions.',
    itchUrl: 'https://eseyem.itch.io/centrix'
  },
  {
    title: 'Starlit Veil',
    thumbnail: starlitGameplay,
    jamName: 'Aral Arcade Game Jam 2025',
    description: 'In the vastness of the mind, even a single memory can become its own small world.',
    itchUrl: 'https://eseyem.itch.io/starlit-veil'
  },
  {
    title: 'Balikbayan Box',
    thumbnail: balikbayanGameplay,
    jamName: 'DevelUP Game Jam 2026',
    description: 'Balikbayan boxes connect people abroad back home. With hard orders present, will you let it through?',
    itchUrl: 'https://jazz-z.itch.io/balikbayan-box'
  }
]

function Home() {
  const [activeSection, setActiveSection] = useState('releases')

  return (
    <div className="home">
      <Header />
      
      <main>
        <Carousel>
          {/* Game 1 */}
          <GameSection
            title="Between Circuits"
            logo={betweenCircuitsLogo}
            description="A city is dying. The streets are empty. The machines still run. You are the last maintenance worker, assigned to keep the lights on in a place that has no reason left to stay lit. Something is wrong with this city. Something is wrong with you. Efficiency is mandatory. Curiosity is a malfunction."
            backgroundImage={betweenCircuitsBg}
            platforms={[
              {
                name: 'Steam',
                url: 'https://store.steampowered.com/app/4183820/Between_Circuits/',
                variant: 'steam',
                icon: steamIcon,
                buttonText: 'Wishlist on Steam'
              },
              {
                name: 'itch.io',
                url: 'https://eseyem.itch.io/between-circuits-se',
                variant: 'itch',
                icon: itchIcon,
                buttonText: "Supporter's Edition"
              }
            ]}
          />
          <GameSection
            title="Still Here"
            logo={stillhereLogo}
            description="After dying peacefully, the loyal golden retriever Jasper returns as a spirit to guide his elderly, blind owner, Sam, who has wandered into the streets during a severe dementia episode. As Sam’s fracturing memories distort the world around them, Jasper accompanies his lifelong friend on one final, reality-bending walk to the park."
            backgroundImage={stillhereBg}
            platforms={[
              {
                name: 'itch.io',
                url: 'https://eseyem.itch.io/still-here',
                variant: 'itch',
                icon: itchIcon,
                buttonText: "Play on itch.io"
              }
            ]}
          />
          <GameSection
            title="Blindspot"
            logo={blindspotLogo}
            description="Blindspot is a 2d side-scrolling platformer set in a dystopian society. You are a nameless citizen, trapped in a system where every breath is monitored. In this world, obedience isn't a choice-it's survival. Every day repeats. Every step is under watch. Your fate remains unwritten. For now."
            backgroundImage={blindspotGameplay}
            platforms={[
              {
                name: 'itch.io',
                url: 'https://eseyem.itch.io/blindspot',
                variant: 'itch',
                icon: itchIcon,
                buttonText: "Play on itch.io"
              }
            ]}
          />
            <GameSection
              title="Balikbayan Box"
              logo={balikbayanLogo}
              description="Balikbayan boxes connect people abroad back home. With hard orders present, will you let it through?"
              backgroundImage={balikbayanGameplay}
              platforms={[
                {
                  name: 'itch.io',
                  url: 'https://jazz-z.itch.io/balikbayan-box',
                  variant: 'itch',
                  icon: itchIcon,
                  buttonText: "Play on itch.io"
                }
              ]}
            />
        </Carousel>

        <div className="showcase-section">
          <SectionNav 
            activeSection={activeSection} 
            onSectionChange={setActiveSection} 
          />
          {activeSection === 'releases' ? (
            <ReleaseShowcase releases={releases} />
          ) : (
            <GameJamShowcase games={gameJamGames} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home