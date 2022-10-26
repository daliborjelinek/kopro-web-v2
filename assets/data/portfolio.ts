export interface Project {
    type: 'foto' | 'video',
    category: string
    date: string
    slug: string
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
    type: 'video',
    category: 'Dokument',
    slug: 'maroko',
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
    type: 'video',
    category: 'Test',
    slug: 'testing',
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
    slug: 'cecil-a-gertruda',
    type: 'video',
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
    type: 'foto',
    slug: 'neco-si-prej',
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
    slug: 'halmut-a-hidegarda',
    type: 'foto',
    date: '2022-12-10',
    title: 'Helmut & Hildegarda',
    subtitle: 'Dokument',
    client: 'Livingstone',
    author: 'Ondřej Kocar',
    description: 'Lorem ipsum dolor sit amet, quam. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    coverImage: 'https://picsum.photos/300/200?random=8',
    images: ['https://picsum.photos/300/200?random=2',
      'https://picsum.photos/300/200?random=3', 'https://picsum.photos/300/200?random=4']
  }
]
