import { albums } from '../data/gallery'
// const albumPath = '/images/gallery/maria-katherine-first-birthday-dedication'

// const mariaKatherinePhotos = Array.from({ length: 23 }, (_, index) => {
//   const number = String(index + 1).padStart(3, '0')
//   return `${albumPath}/maria-katherine-${number}.jpg`
// })


type GalleryAlbumLandingProps = {
  slug: string
}


function GalleryAlbumLanding({ slug }: GalleryAlbumLandingProps) {
  const album = albums.find((album) => album.slug === slug)

  if (!album) {
    return null
  }

return (
    <main className="flex-1 py-[clamp(48px,7vw,88px)]" aria-labelledby="gallery-title">
      <div className="max-w-[680px]">
        <p className="mb-4 text-[11px] font-bold uppercase tracking-[.12em] text-accent">
          {album.subtitle}
        </p>
        <h1
          id="gallery-title"
          className="font-[Georgia,serif] text-[clamp(42px,5vw,68px)] leading-[.98] tracking-[-.055em]"
        >
          {album.title}
        </h1>

        <p className="mt-6 max-w-[520px] text-base leading-[1.6] text-muted">
          {album.description}
        </p>
      </div>
      <section
          className="mt-[clamp(12px,2vw,24px)]"
          aria-labelledby="album-photos-title"
        >
          <div className="mb-5 flex items-end justify-between gap-4 border-b border-line pb-4">
            <p
              id="album-photos-title"
              className="text-[11px] font-bold uppercase tracking-[.13em] text-accent"
            >
              Photographs
            </p>

            <p className="shrink-0 text-xs tracking-[.04em] text-muted">
              {album.photos.length} photos
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 min-[620px]:grid-cols-3 min-[960px]:grid-cols-4">
            {album.photos.map((src, index) => (
              <button
                type="button"
                className="group relative block aspect-square overflow-hidden bg-[#f2dce0]"
                key={src}
              >
                <img
                  className="size-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  src={src}
                  alt={`${album.title}, photo ${index + 1}`}
                  loading={index < 4 ? 'eager' : 'lazy'}
                />
              </button>
            ))}
          </div>
        </section>
    </main>
  )
}



export default GalleryAlbumLanding;