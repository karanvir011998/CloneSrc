import { Route } from 'react-router-dom'
import Index from 'views/homepage/explore'
import LandingPage from 'views/homepage/landingPage'

const Routes = () => {
  return (
    <>
      {<Route path="/index" element={<Index />} />}
      <Route path="/" element={<LandingPage />} />
    </>
    //<Routes>
    //{/*<Route path="contact" element={<Contact />} />*/}
    //{/*<Route path="*" element={<NoPage />} />*/}
    //</Routes>
  )
}

export default Routes
