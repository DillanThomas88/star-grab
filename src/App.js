
import './output.css'
import react, { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer'
import Main from './components/main'
import PlayerCards from './components/playercards';
import Icon from './components/icons';
import DemoTiles from './components/tile/demo-tiles';



function App() {

  const [isModalActive, setModalActive] = useState(true)

  const tileArray = [
    {
      type: 2,
      number: 3,
      star: "false",
    },
    {
      type: 3,
      number: 6,
      star: "false",

    },
    {
      type: 4,
      number: 2,
      star: "false",

    },
    {
      type: 2,
      number: 12,
      star: "true",

    },
    {
      type: 1,
      number: 7,
      star: "false",

    },
    {
      type: 1,
      number: 11,
      star: "false",

    },
    {
      type: 4,
      number: 13,
      star: "false",

    },
    {
      type: 1,
      number: 4,
      star: "true",

    },
    {
      type: 2,
      number: 11,
      star: "false",

    },
  ]

  const modalFunction = (e) => {
    setModalActive(!isModalActive)
  }

  return (
    <div style={{ height: window.innerHeight }} className=" font-default bg-neutral-900 select-none  text-neutral-100 overflow-y-scroll lg:overflow-y-hidden">
      <header className="App-header w-full z-50 mb-4">
        <Header />
      </header>
      <main className="relative grid content-start lg:content-center lg:h-full lg:pb-10">
        {isModalActive && <>
          <div className='fixed animate-fadeIn w-full h-full z-50 flex justify-center'>
            <div className={`flex flex-col question-modal animate-slideUp relative justify-start items-start w-5/6 rounded-md border border-neutral-600 h-fit pb-5 bg-neutral-900 shadow-md shadow-black text-xs px-4`}>
              <button onClick={modalFunction} className='w-6 h-6 absolute right-2 top-2 cursor-pointer'>
                <Icon data={{ desc: 'close' }} />
              </button>

              <header className='mt-6 w-full flex justify-center items-center uppercase text-2xl text-neutral-100 rounded-t-sm '>
                Star Grab
              </header>

              <p className='mt-2 font-normal flex flex-col items-center'>
                Add up tiles to the displayed number.
              </p>
              <div className='mt-2 font-thin'>When the sum of your selected tiles are equal to the displayed number, tap it to collect your tiles.</div>

              <p className='mt-2'>All selected tiles must contain the same color.</p>

              <div className='mt-2'>
                <div className='flex flex-wrap font-thin'>
                  Tiles that contain a
                  <div className='h-4 w-4 mx-1'><Icon data={{ desc: 'small' }} /></div>;
                  <div className='flex flex-wrap font-thin'>That tile value will be added to your score.</div>
                </div>

              </div>

              <div className='mt-2 '>The game ends when the timer runs out.</div>


              <div className='border-b w-full mt-4 opacity-50'></div>


              <p className='font-normal mt-4'>Example:</p>
              <p className=' mt-1'><span className='font-thin'>Two yellow tiles can be selected (<span className='font-normal text-yellow-300'> 3 <span className='font-thin text-white'>and</span> 12 </span>) to complete the sum of <span className='px-1 font-semibold h-4 w-4 bg-white rounded-sm text-neutral-900'>15</span> below the grid. </span> </p>
              <p className='mt-2 font-thin'>After selecting both tiles, then tap the <span className='px-1 font-semibold h-4 w-4 bg-white rounded-sm text-neutral-900'>15</span> and you will gain 12 points, becasue one of your selected tiles had a star value of <span className='text-yellow-300 font-semibold'>12</span></p>
              <div className='w-full flex flex-col justify-center items-center'>

                <div className='grid grid-rows-3 grid-cols-3 gap-1 mt-4'>
                  {tileArray.map((data, index) => {
                    return <DemoTiles index={data} key={index} />
                  })}
                </div>

                <div className='flex my-2'>
                  <div className='flex justify-center items-center text-3xl pb-1 px-2 font-thin'>-</div>
                  <div className='w-7 my-2 h-7 flex justify-center items-center text-lg font-semibold bg-white rounded-sm text-neutral-900'>
                    15
                  </div>
                  <div className='flex justify-center items-center text-3xl pb-1 px-2 font-thin'>-</div>
                </div>
              </div>

            </div>
            <div className='fixed w-full h-full bg-black opacity-50 -z-10 -mt-20'></div>

          </div>
        </>}
        <button onClick={(e) => modalFunction(e)}
          className='absolute w-8 h-8 ml-7 mt-2 cursor-pointer'>
          <Icon data={{ desc: 'question' }} type={'text-neutral-600 pointer-events-none'} />
        </button>
        <div className='text-center text-3xl uppercase flex justify-center items-center h-12'>
          Star
          <div className='w-7 '>
            <Icon data={{ desc: 'small' }} />
          </div>
          Grab
        </div>
        <div className='font-thin text-sm text-center mb-4'>Collect stars before the timer reaches zero!</div>
        <Main />

        {/* <PlayerCards /> */}


      </main>

      <footer>
        {/* <Footer /> */}
      </footer>

    </div>
  );


}

export default App;