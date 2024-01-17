import React from 'react'

const CommentPage = ({
    items
}) => {
  return (
    <div className='border border-l-0 border-r-0 border-b-0 py-2 mt-3 flex'>
        <img className='w-9 h-9 rounded-full'
        src="https://plus.unsplash.com/premium_photo-1661943864527-d714736dfd16?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className='px-3'>
            <div className='flex'>
            <span className='text-gray-300'>
            <p className='font-semibold'>{items.fullname}</p>
            <p>@{items.username}</p>
            </span>
                <p className='ml-3 text-gray-300'>· {items.ago} minutes ago</p>
            </div>
            <p className='mt-2 '>{items.content}</p>
        </div>
    </div>
  )
}

export default CommentPage