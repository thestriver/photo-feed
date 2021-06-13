import { useState, useEffect } from 'react'
import { DataStore } from '@aws-amplify/datastore'
import { PhotoCard } from './PhotoCard'


import { TimeLineFeed } from '../models'

export function PhotoFeed () {
  const [photofeed, setPhotoFeed] = useState([])

  useEffect(() => {
    const getPhotoFeed = async () => {
      const photoFeedData = await DataStore.query(TimeLineFeed)
      setPhotoFeed(photoFeedData )
    }

    getPhotoFeed()
  }, [])

  return(
    <div className="my-5">
        { photofeed.map( (feed) => 
            <PhotoCard  key={feed.id} feed={feed} />
        ) }
    </div>
     
  )
}