import Logo from'./download.jpg';
import Avatar from './png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png';
import {BellIcon, ChatIcon, ChevronDownIcon, PlusIcon, SearchIcon} from '@heroicons/react/outline';

function Headermint(){
    return(
        <header className='w-full bg-black p-2'>
        <div className='mx-4 flex relative'>

        <img src={Logo} className='w-8 h-8 mr-4 '></img>
        <form action='' className='bg-reddit_dark-brighter px-3 flex rounded-md border border-reddit_border mx-4 flex-grow'>
          <SearchIcon className='text-gray-300 h-6 w-6 mt-1' />
          <input type='text' className='bg-gray-950 text-sm p-1 pl-2 w-full pr-0 block focus:outline-none text-white' placeholder='Search'>
          </input>
        </form>
        <button className='px-2 py-1'>
          <ChatIcon className='text-gray-400 h-6 w-6 m-1 mx-2'/>
        </button>
        <button className='px-2 py-1'>
          <BellIcon className='text-gray-400 h-6 w-6 m-1 mx-2'/>
          </button>
        <button className='px-2 py-1'>
          <PlusIcon className='text-gray-400 h-6 w-6 m-1 mx-2'/>
        </button>
        <button className=' rounded-md flex ml-4'>
          <div className='w-8 h-8 bg-gray-600 rounded-md border border-gray-700'>
          <img src={Avatar} style={{filter:'invert(100%)'}} className='block'>
          </img>
          </div>
          <ChevronDownIcon className='text-gray-500 w-5 h-5 mt-2 m-1'/>
        </button>
        </div>
      </header>
    );
}

export default Headermint;