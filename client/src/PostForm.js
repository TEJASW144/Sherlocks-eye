import Avatar from './png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png';
function PostForm(){
    return(
        <div className='bg-gray-900 px-6 py-4'>
        <div className='border border-gray-700 p-2 rounded-md flex'>
          <div className='rounded-full bg-gray-600 overflow-hidden w-10 h-10'>
              <img src={Avatar} style={{filter:'invert(100%)'}} />
          </div>
          <form className='flex-grow bg-gray-900 border block w-full border-gray-800 ml-4 mr-2 rounded-md'>
            <input type="text" className='text-white bg-gray-900 block w-full p-2 px-3 text-sm rounded-md ' placeholder='New Post'/>
          </form>
        </div>
      </div>
    )
}
export default PostForm;