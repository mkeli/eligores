const mariaKatherinePhotos = Array.from(
  { length: 24 },
  (_, index) => {
    const number = String(index + 1).padStart(3, '0')
    return `/images/gallery/maria-katherine-first-birthday-dedication/maria-katherine-${number}.jpg`
  }
)

export const albums = [
  {
    slug: 'maria-katherine-first-birthday-dedication',
    title: 'Maria Katherine’s First Birthday & Dedication',
    subtitle: 'A beautiful beginning',
    description:
      'One very special day, shared with family, love, and joyful celebration.',
    label: 'Album 01',
    icon: '🎂',
    color: 'from-[#f2dce0] via-[#f8ece2] to-[#e3d9f2]',
    photos: mariaKatherinePhotos,
  },
  {
    slug: 'boracay-trip',
    title: 'Boracay Trip',
    subtitle: 'Sun, sea & family time',
    description:
      'A collection of bright days, sandy feet, and memories by the shore.',
    label: 'Album 02',
    icon: '☀️',
    color: 'from-[#d8edf2] via-[#f8e8ba] to-[#eabf93]',
    photos: [],
  },
]