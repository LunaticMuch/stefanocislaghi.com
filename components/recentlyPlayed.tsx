import useSWR from 'swr';

import Image from 'next/image'


const fetcher = (url) => fetch(url).then((res) => res.json());

export default function RecentlyPlayed() {
  const imageSize=128
  const { data } = useSWR('api/recently-played', fetcher)
  const imageUrl = data?.albumImageUrl.replace(/{w}|{h}/g, imageSize).toString()
  return (
    <div className="flex flex-col items-center p-4 md:items-start">
      <div className='font-bold uppercase'>recently played</div>
      {data?.albumImageUrl ? (
        <Image
          src={imageUrl}
          alt="Picture of the author"
          width={imageSize}
          height={imageSize}
          className="pt-2 pb-1 w-64px h-64px"
        />
      ) : <div> </div>
      }
      <div className='pt-2'>{data?.title}</div>
      <div>{data?.artist}</div>
    </div>
  )
}