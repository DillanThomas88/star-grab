
import './output.css'
import react, { useState, useEffect } from 'react';
import Header from './components/header';
import Footer from './components/footer'
import Main from './components/main'
import PlayerCards from './components/playercards';
import Icon from './components/icons';
import StarterModal from './components/modals/starter-modal';
import Toggle from './components/tools/toggle/toggle';
import SettingsModal from './components/modals/settings-modal';



function App() {

  let userObj = { highScore: 0, darkMode: true }
  const [playerData, setPlayerData] =  useState(
    localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : localStorage.setItem('user', JSON.stringify(userObj))
  )
  const [isDark, setIsDark] = useState(() => {
    if(!playerData) return false
    else return playerData.darkMode
  })
  const [isSettingsActive, setSettingsActive] = useState(false)
  const [animation, setStyle] = useState('animate-slideUp')
  // console.log(playerData.highScore);
  const [highScore, setHighScore] = useState(() => {
    if(!playerData) return 0
    else return playerData.highScore
  })
  const [isModalActive, setModalActive] = useState(() => {
    if (highScore !== 0) {
      return false
    } else return true
  })

  // console.log(playerData);


  const getColor = () => {
    let x = highScore
    if (x < 50) return 'text-white'
    else if (x >= 50 && x < 75) return 'text-green-500'
    else if (x >= 75 && x < 100) return 'text-yellow-300'
    else if (x >= 100 && x < 150) return 'text-indigo-400'
    else if (x >= 150 && x < 200) return 'text-red-400'
    else if (x >= 200 && x < 250) return 'text-rose-500'
    else return 'text-pink-400'
  }
  const [starColor, setStarColor] = useState(getColor())
  useEffect(() => {
    if (highScore > playerData.highScore) {
      playerData.highScore = highScore
      localStorage.setItem('user', JSON.stringify(playerData))
      setStarColor(getColor())
    }
  }, [highScore, starColor])


  const modalFunction = (e) => {

    const el = e.target

    if (el.classList.contains('modal')) {
      if (el.classList.contains('question')) {
        return setModalActive(!isModalActive)
      } else if (el.classList.contains('settings')) {
        // console.log('settings');
        return setSettingsActive(!isSettingsActive)
      } else {
        console.log('error');
      }
      return
    }

    let array = [
      {
        state: isModalActive,
        function: setModalActive
      },
      {
        state: isSettingsActive,
        function: setSettingsActive
      }
    ]

    array.forEach(element => {
      if (element.state === true) {
        element.function(false)
        return
      }
    });
  }

  useEffect(() => {
    document.title = 'Star Grab | downtogame.com'
  }, [])

  return (
    <div style={{ height: window.innerHeight }} className=" font-default bg-neutral-900 select-none  text-neutral-100 overflow-y-scroll lg:overflow-y-hidden">
      {isModalActive && <StarterModal modalFunction={modalFunction} animation={animation} />}
      {isSettingsActive && <SettingsModal modalFunction={modalFunction} animation={animation} isDark={isDark} />}
      <header className="App-header w-full z-50  py-4 flex justify-between px-6">
        {/* <Header /> */}
        <button onClick={(e) => modalFunction(e)}
          className='modal question cursor-pointer'>
          <Icon data={{ desc: 'question' }} type={'text-neutral-600 pointer-events-none'} />
        </button>
        <div className=' text-center text-3xl uppercase flex justify-center items-center'>
          Star
          <div className='relative w-14 h-14 '>
            <div className='absolute grid content-center w-full h-full justify-center text-sm pt-1 font-medium text-neutral-900'>{highScore > 0 && highScore}</div>
            <Icon data={{ desc: 'small' }} type={starColor} />
          </div>
          Grab
        </div>
        <button onClick={(e) => modalFunction(e)}
          className='modal settings pointer-cursor'>
          <Icon data={{ desc: 'menu' }} type={'text-neutral-600 pointer-events-none'} />
        </button>
      </header>
      <main className="relative grid content-start lg:content-center lg:h-full lg:pb-10">


        {/* <div className='font-thin text-sm text-center mb-4'>Collect stars before the timer reaches zero!</div> */}
        <Main setHighScore={setHighScore} highScore={highScore} />

        {/* <PlayerCards /> */}


      </main>

      <footer>
        {/* <Footer /> */}
      </footer>

    </div>
  );


}

export default App;