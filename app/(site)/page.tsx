import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          src={"/logo.png"}
          alt='messenger'
          width={50}
          height={50}
          quality={100}
          sizes='lg'
          className=''
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-grey-900">
          Sign in to your account
        </h2>
      </div>
    </div>
  )
}
