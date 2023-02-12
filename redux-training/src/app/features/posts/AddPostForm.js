import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addNewPost } from './postsSlice'
import { selectAllUsers } from '../users/usersSlice'

const AddPostForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
    
    const users = useSelector(selectAllUsers);
    const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

    const onSavePostClicked = () => {
        if (canSave) {
            try {
                setAddRequestStatus('pending')
                dispatch(addNewPost({ title, body: content, userId })).unwrap()

                setTitle('')
                setContent('')
                setUserId('')
            } catch (err) {
                console.error('Failed to save the post', err)
            } finally {
                setAddRequestStatus('idle')
            }
        }

    }


    const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name }
        </option>
    ))


  return (
    <section>
        <h2>Add a New Post</h2>
        <form style={{margin: 'auto', width: '220px'}}>
            <label htmlFor='postTitle'>Post Title:</label>
            <input 
                type='text'
                id='postTitle'
                name='postTitle'
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <label htmlFor='postAuthor'>Author:</label>
            <select id="postAutor" value={userId} onChange={e => setUserId(e.target.value)}>
                <option value=''></option>
                {userOptions}
            </select>
            <label htmlFor='postContent'>Content:</label>
            <textarea
                id='postContent'
                name='postContent'
                value={content}
                onChange={e => setContent(e.target.value)}
            />
            <button disabled={!canSave} onClick={onSavePostClicked} type="button">Save Post</button>
        </form>
    </section>
  )
}

export default AddPostForm;