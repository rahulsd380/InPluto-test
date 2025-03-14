
import './App.css'
import FeaturesTab from './components/FeaturesTab'
import WhyInpluto from './components/WhyInpluto'

function App() {

  return (
    <div className='mb-10'>
      {/* <Hero/> */}
      <div className='shadow-custom'>
      <FeaturesTab/>
      <WhyInpluto/>
      </div>
    </div>
  )
}

export default App
