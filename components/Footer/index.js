import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="flex flex-1 px-0 py-8 justify-center items-center bg-primary-900">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className='text-xs flex flex-row justify-center items-center flex-grow'
        >
          Powered by{' '}
          <span className="h-4 ml-1">
            <Image src="/vercel.svg" alt="Vercel Logo" width={60} height={12} />
          </span>
        </a>
      </footer>
    )
}

export default Footer