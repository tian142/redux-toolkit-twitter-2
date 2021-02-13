import React, { useState } from 'react'

import { addPost } from './postsSlice'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

export const AddPostComponent = () => {
  const [inputTitle, setInputTitle] = useState('')
  const [inputContent, setInputContent] = useState('')

  const dispatch = useDispatch()
  const onTitleChange = (e) => setInputTitle(e.target.value)
  const onContentChange = (e) => setInputContent(e.target.value)

  const onPostSubmit = () =>
    dispatch(
      addPost({
        id: nanoid,
        title: inputTitle,
        content: inputContent,
      })
    )

  return (
    <section>
      <h1>Add A Post!</h1>
      <form>
        <label>Title:</label>
        <input value={inputTitle} onChange={onTitleChange} />
        <label>Content:</label>
        <input value={inputContent} onChange={onContentChange} />

        <button type="button">Add</button>
      </form>
    </section>
  )
}
