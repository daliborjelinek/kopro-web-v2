export interface Project {
    type: string
    category: string // for filtering
    date: string
    title: string
    subtitle: string
    client: string
    author: string
    description: string
    coverImage: string
    images: string[]

}

export const portfolio: Project[] = [
  {
    type: 'Video',
    category: 'Dokument',
    date: '2022-12-10',
    title: 'Maroko',
    subtitle: 'Dokument',
    client: 'Livingstone',
    author: 'Ondřej Kocar',
    description: 'Lorem ipsum dolor sit amet, quam. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    coverImage: 'https://picsum.photos/300/200?random=1',
    images: ['https://picsum.photos/300/200?random=2',
      'https://picsum.photos/300/200?random=3', 'https://picsum.photos/300/200?random=4']
  },
  {
    type: 'Video',
    category: 'Test',
    date: '2022-12-10',
    title: 'Testovací titulek',
    subtitle: 'Dokument',
    client: 'Livingstone',
    author: 'Ondřej Kocar',
    description: 'Lorem ipsum dolor sit amet, quam. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    coverImage: 'https://picsum.photos/300/200?random=1',
    images: ['https://picsum.photos/300/200?random=2',
      'https://picsum.photos/300/200?random=3', 'https://picsum.photos/300/200?random=4']
  },
  {
    type: 'Video',
    category: 'Svatební video',
    date: '2022-12-10',
    title: 'Cecil a Gertruda',
    subtitle: 'Svatební video',
    client: 'Cecil',
    author: 'Ondřej Kocar',
    description: 'Lorem ipsum dolor sit amet, quam. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    coverImage: 'https://picsum.photos/300/200?random=1',
    images: ['https://picsum.photos/300/200?random=2',
      'https://picsum.photos/300/200?random=3', 'https://picsum.photos/300/200?random=4']
  },
  {
    type: 'Fotografie',
    category: 'event',
    date: '2022-12-10',
    title: 'Koncert - Něco si přej',
    subtitle: 'Focení kapely',
    client: 'Něco si přej',
    author: 'Ondřej Kocar',
    description: 'Lorem ipsum dolor sit amet, quam. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    coverImage: '/images/neco-si-prej.jpg',
    images: ['https://picsum.photos/300/200?random=2',
      'https://picsum.photos/300/200?random=3', 'https://picsum.photos/300/200?random=4']
  },
  {
    category: 'svatba',
    type: 'Fotografie',
    date: '2022-12-10',
    title: 'Helmut & Hildegarda',
    subtitle: 'Dokument',
    client: 'Livingstone',
    author: 'Ondřej Kocar',
    description: 'Lorem ipsum dolor sit amet, quam. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    coverImage: 'https://picsum.photos/300/200?random=8',
    images: ['https://picsum.photos/300/200?random=2',
      'https://picsum.photos/300/200?random=3', 'https://picsum.photos/300/200?random=4']
  },
  {
    type: 'Cokoliv jiného',
    category: 'Dokument',
    date: '2022-12-10',
    title: 'Maroko',
    subtitle: 'Dokument',
    client: 'Livingstone',
    author: 'Ondřej Kocar',
    description: 'Lorem ipsum dolor sit amet, quam. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    coverImage: 'https://picsum.photos/300/200?random=1',
    images: ['https://picsum.photos/300/200?random=2',
      'https://picsum.photos/300/200?random=3', 'https://picsum.photos/300/200?random=4']
  }
]
