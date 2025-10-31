import Image from "next/image"

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-6 md:py-8 lg:py-10">
        <div className="flex items-center justify-center md:justify-start">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <Image
              src="/FEASTWALK_LIGHT.svg"
              alt="FeastWalk"
              width={600}
              height={120}
              className="h-20 md:h-24 lg:h-28 w-auto"
              priority
            />
          </a>
        </div>
      </div>
    </header>
  )
}

