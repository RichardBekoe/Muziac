import React, { useEffect, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'

const Album = (props) => {
  const [albumsData, updateAlbumsData] = useState({
    title: '',
    tracks: { data: [] }

  })

  useEffect(() => {
    const id = props.match.params.id


    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`)
      .then(resp => resp.json())
      .then((data) => {
        updateAlbumsData(data)
        console.log(data)
      })
  }, [])

  return <div>
    <div className="album-header">
      <h1>{albumsData.title}</h1>
      <img src={albumsData.cover_medium} />
    </div>


    {albumsData.tracks.data.map((track, index) => {
      return <div key={index} className="tracklist">
        <p>{track.title}</p>
        <ReactAudioPlayer
          src={track.preview}
          controls
        />

      </div>
    })}


  </div>



}

export default Album