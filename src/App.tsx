import { getLesson, getModule } from './content'
import { useProgress } from './state/progress'
import { useRoute } from './router'
import Layout from './components/Layout'
import Home from './components/Home'
import ModuleView from './components/ModuleView'
import LessonView from './components/LessonView'
import ScamSpotter from './components/ScamSpotter'
import PersonalityQuiz from './components/PersonalityQuiz'
import Concierge from './components/Concierge'
import BadgesPage from './components/BadgesPage'
import Completion from './components/Completion'
import Onboarding from './components/Onboarding'

export default function App() {
  const progress = useProgress()
  const route = useRoute()

  if (!progress.onboarded) return <Onboarding />

  if (route.name === 'module') {
    const mod = getModule(route.moduleId)
    return <Layout>{mod ? <ModuleView mod={mod} /> : <Home />}</Layout>
  }

  if (route.name === 'lesson') {
    const found = getLesson(route.moduleId, route.lessonId)
    return <Layout>
      {found ? (
        <LessonView
          key={found.lesson.id}
          mod={found.mod}
          lesson={found.lesson}
          index={found.index}
        />
      ) : (
        <Home />
      )}
    </Layout>
  }

  return (
    <Layout>
      {route.name === 'game' ? (
        <ScamSpotter />
      ) : route.name === 'personality' ? (
        <PersonalityQuiz />
      ) : route.name === 'concierge' ? (
        <Concierge />
      ) : route.name === 'badges' ? (
        <BadgesPage />
      ) : route.name === 'graduate' ? (
        <Completion />
      ) : (
        <Home />
      )}
    </Layout>
  )
}
