import Image from 'next/image'
import loadingGif from '../../public/Images/loading.gif'

const Loading = () => {
  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100px',
        height: '100px',
        position: 'relative',
        alignContent: 'center'
      }}
    >
      <Image layout="fill" objectFit="contain" src={loadingGif} />
    </div>
  )
}

export default Loading
