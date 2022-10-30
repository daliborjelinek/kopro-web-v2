export interface Project {
    type: string
    category: string // for filtering
    date: string
    title: string
    client: string
    author: string
    description: string
    coverImage: string
    coverVideo?: string // if cover video is omitted, cover image is used also in detail preview
    videoAspectRatio?: number // e.g. 16/9, 1:2 etc. if coverVideo is not filled, this property could be omitted
    images: string[]

}

export const portfolio: Project[] = [
  {
    type: 'Video',
    category: 'Dokument',
    date: '2022-12-10',
    title: 'Maroko',
    client: 'Livingstone',
    author: 'Ondřej Kocar',
    description: 'Lorem ipsum dolor sit amet, quam. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    coverImage: 'https://picsum.photos/300/200?random=1',
    coverVideo: 'o0RxKA1Tnbg',
    videoAspectRatio: 16 / 9,
    images: ['https://picsum.photos/300/200?random=2',
      'https://picsum.photos/300/200?random=3', 'https://picsum.photos/300/200?random=4']
  },
  {
    type: 'Video',
    category: 'Test',
    date: '2022-12-10',
    title: 'Testovací titulek',
    client: 'Livingstone',
    author: 'Ondřej Kocar',
    description: 'Lorem ipsum dolor sit amet, quam. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    coverImage: 'https://picsum.photos/300/200?random=10',
    images: ['https://picsum.photos/300/200?random=2',
      'https://picsum.photos/300/200?random=3', 'https://picsum.photos/300/200?random=4']
  },
  {
    type: 'Video',
    category: 'Svatební video',
    date: '2022-12-10',
    title: 'Cecil a Gertruda',
    client: 'Cecil',
    author: 'Ondřej Kocar',
    description: 'Lorem ipsum dolor sit amet, quam. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    coverImage: 'https://picsum.photos/300/200?random=11',
    images: ['https://picsum.photos/300/200?random=2',
      'https://picsum.photos/300/200?random=3', 'https://picsum.photos/300/200?random=4']
  },
  {
    type: 'Video',
    category: 'Svatební video',
    date: '2022-12-10',
    title: 'Peťa a Roman',
    client: 'Cecil',
    author: 'Ondřej Kocar',
    description: 'Lorem ipsum dolor sit amet, quam. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    coverImage: 'https://picsum.photos/300/200?random=12',
    images: ['https://picsum.photos/300/200?random=2',
      'https://picsum.photos/300/200?random=3', 'https://picsum.photos/300/200?random=4']
  },
  {
    type: 'Fotografie',
    category: 'event',
    date: '2022-12-10',
    title: 'Koncert - Něco si přej',
    client: 'Něco si přej',
    author: 'Ondřej Kocar',
    description: 'Lorem ipsum dolor sit amet, quam. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    coverImage: '/images/neco-si-prej.jpg',
    images: ['/images/neco-si-prej.jpg',
      'https://picsum.photos/300/200?random=10', 'https://picsum.photos/300/200?random=11']
  },
  {
    type: 'Fotografie',
    category: 'svatba',
    date: '2022-12-10',
    title: 'Helmut & Hildegarda',
    client: 'Livingstone',
    author: 'Ondřej Kocar',
    description: 'Lorem ipsum dolor sit amet, quam. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    coverImage: 'https://picsum.photos/300/200?random=18',
    images: ['https://picsum.photos/300/200?random=12',
      'https://picsum.photos/300/200?random=13', 'https://picsum.photos/300/200?random=14']
  },
  {
    type: 'Cokoliv jiného',
    category: 'Dokument',
    date: '2022-12-10',
    title: 'Maroko',
    client: 'Livingstone',
    author: 'Ondřej Kocar',
    description: 'Lorem ipsum dolor sit amet, quam. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    coverImage: 'https://picsum.photos/300/200?random=51',
    images: ['https://picsum.photos/300/200?random=52',
      'https://picsum.photos/300/200?random=53', 'https://picsum.photos/300/200?random=54']
  }
]
