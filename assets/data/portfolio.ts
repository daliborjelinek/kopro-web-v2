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
    client: 'Kocarstone',
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
    type: 'Fotografie',
    category: 'Focení koní',
    date: '2022-25-11',
    title: 'Focení koní na Vysočině',
    client: 'Resort Svatá Kateřina',
    author: 'Ondřej Kocar',
    description: 'Resort Svatá Kateřina na Vysočině je nejen krásnou oázou klidu, ale také domovem pro několik nádherných koní. Tvory jako jsou tito nejde nefotit.',
    coverImage: '/images/PortfolioKone/Kone1.jpg',
    images: ['/images/PortfolioKone/Kone2.jpg',
    '/images/PortfolioKone/Kone3.jpg', '/images/PortfolioKone/Kone4.jpg', '/images/PortfolioKone/Kone5.jpg']
  },
  {
    type: 'Fotografie',
    category: 'svatba',
    date: '2022-14-08',
    title: 'Svatební focení',
    client: 'Terka a Jan Stanovští',
    author: 'Ondřej Kocar',
    description: 'Už na předsvatební schůzce bylo jasné, že tahle svatba bude zážitek, ale kombinaci tak příjemné, láskyplné, současně však vtipné atmosféry jsem opravdu nečekal. Terka a Jan byli od začátku velmi milí a příjemní, takže v kombinaci s jejich fotogeničností se prostě fotilo samo. Velmi si vážím toho, že Denča v roli svědkyně oslovila na focení svatby právě mě, protože oba víme, jak je náročné vybírat fotografa, když je člověk sám fotografem. Svatebčanům děkuji za příjemný den a přeji manželství minimálně tak hezké, jako byla svatba. A ta sakra byla.',
    coverImage: '/images/Svatba1/TerkaJan (27).jpg',
    images: ['/images/Svatba1/TerkaJan (1).jpg', '/images/Svatba1/TerkaJan (2).jpg', '/images/Svatba1/TerkaJan (3).jpg', '/images/Svatba1/TerkaJan (4).jpg', '/images/Svatba1/TerkaJan (5).jpg',
    '/images/Svatba1/TerkaJan (6).jpg', '/images/Svatba1/TerkaJan (7).jpg', '/images/Svatba1/TerkaJan (8).jpg', '/images/Svatba1/TerkaJan (9).jpg', '/images/Svatba1/TerkaJan (10).jpg',
    '/images/Svatba1/TerkaJan (11).jpg','/images/Svatba1/TerkaJan (12).jpg', '/images/Svatba1/TerkaJan (13).jpg', '/images/Svatba1/TerkaJan (14).jpg', '/images/Svatba1/TerkaJan (15).jpg',
    '/images/Svatba1/TerkaJan (16).jpg', '/images/Svatba1/TerkaJan (17).jpg', '/images/Svatba1/TerkaJan (18).jpg', '/images/Svatba1/TerkaJan (19).jpg', '/images/Svatba1/TerkaJan (20).jpg',
    '/images/Svatba1/TerkaJan (21).jpg', '/images/Svatba1/TerkaJan (22).jpg', '/images/Svatba1/TerkaJan (23).jpg', '/images/Svatba1/TerkaJan (24).jpg', '/images/Svatba1/TerkaJan (25).jpg',
    '/images/Svatba1/TerkaJan (26).jpg', '/images/Svatba1/TerkaJan (28).jpg', '/images/Svatba1/TerkaJan (29).jpg', '/images/Svatba1/TerkaJan (30).jpg',]
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
