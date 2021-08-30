import React, { useEffect } from 'react'
import SkeletonCardSmall from '../../skeleton/skeletoncardsmall'
import JokeBox from '../../components/JokeBox/jokeBox.component'

const SecondJokes = ({ fetchJoke, jokes, btnLoading }) => {
  useEffect(() => {
    fetchJoke()
  }, [])

  return (
    <>
      {!btnLoading ? (
        <JokeBox data={jokes} marginBool />
      ) : (
        <SkeletonCardSmall />
      )}
    </>
  )
}

export default SecondJokes
