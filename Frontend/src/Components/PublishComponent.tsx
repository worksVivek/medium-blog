'use client'

import { useState, ChangeEvent } from 'react'
import { AppBar } from './AppBar'
import axios from 'axios'
import { BACKEND_URL } from '../config'
import { useNavigate } from 'react-router-dom'

export default function MinimalEditor() {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const navigate = useNavigate();
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  const handlePublish =async () => {
    // Placeholder for publish functionality
    try {
        const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, { title, content },{
            headers:{
                Authorization: localStorage.getItem('token')
            }
        });
        console.log('Published successfully:', response.data)
        navigate(`/blog/${response.data.id}`)
        // You might want to redirect the user or show a success message here
      } catch (err) {
        console.error('Error publishing:', err)
      } 
      
  }

  return (
    <div>
        <AppBar />
    <div className="mx-auto max-w-2xl px-4 py-20">
      <div className="mb-6">
        <div className="border-l pl-2 border-gray-200">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
            className="w-full border-none bg-transparent text-3xl font-serif outline-none placeholder:text-gray-300"
          />
        </div>
      </div>
      
      <div className="border-l pl-2 border-gray-200 mb-8">
        <textarea
          placeholder="Tell your story..."
          value={content}
          onChange={handleContentChange}
          className="w-full resize-none border-none bg-transparent text-xl outline-none placeholder:text-gray-300"
          rows={3}
        />
      </div>

      <div className="text-right">
        <button
          onClick={handlePublish}
          className="px-4 py-2 text-sm font-medium text-white bg-black rounded hover:bg-gray-800 transition-colors duration-200 ease-in-out"
        >
          Publish
        </button>
        
      </div>
    </div>
    </div>
)}

