export interface IEvents {
  id: number;
  name: string;
  location: string;
  thumbnail_url?: string;
  status: string;
  category: string;
  bookmark: boolean;
}

export const dummyEventsData: IEvents[] = [
  {
    id: 1,
    name: '팝업 스토어 A',
    location: '서울 강남구 서초동',
    thumbnail_url: 'https://storage.googleapis.com/1',
    status: '진행중',
    category: '레저/스포츠',
    bookmark: true,
  },
  {
    id: 2,
    name: '팝업 스토어 B',
    location: '서울 강남구 대치동',
    thumbnail_url: 'https://storage.googleapis.com/2',
    category: '레저/스포츠',
    status: '진행중',
    bookmark: true,
  },
  {
    id: 3,
    name: '팝업 스토어 C',
    location: '서울 강남구 신사동',
    thumbnail_url: 'https://storage.googleapis.com/3',
    category: '레저/스포츠',
    status: '진행중',
    bookmark: false,
  },
  {
    id: 4,
    name: '팝업 스토어 D',
    location: '서울 강남구 역삼동',
    thumbnail_url: 'https://storage.googleapis.com/3',
    category: '레저/스포츠',
    status: '진행중',
    bookmark: false,
  },
  {
    id: 5,
    name: '팝업 스토어 E',
    location: '서울 강남구 도곡동',
    thumbnail_url: 'https://storage.googleapis.com/3',
    category: '레저/스포츠',
    status: '진행중',
    bookmark: false,
  },
  {
    id: 6,
    name: '팝업 스토어 F',
    location: '서울 강남구 압구정동',
    thumbnail_url: 'https://storage.googleapis.com/3',
    category: '레저/스포츠',
    status: '진행중',
    bookmark: false,
  },
  {
    id: 7,
    name: '팝업 스토어 G',
    location: '서울 강남구 청담동',
    thumbnail_url: 'https://storage.googleapis.com/3',
    category: '레저/스포츠',
    status: '진행중',
    bookmark: false,
  },
  {
    id: 8,
    name: '팝업 스토어 H',
    location: '서울 강남구 삼성동',
    thumbnail_url: 'https://storage.googleapis.com/3',
    category: '레저/스포츠',
    status: '진행중',
    bookmark: false,
  },
  {
    id: 9,
    name: '팝업 스토어 I',
    location: '서울 강남구 개포동',
    thumbnail_url: 'https://storage.googleapis.com/3',
    category: '레저/스포츠',
    status: '진행중',
    bookmark: false,
  },
  {
    id: 10,
    name: '팝업 스토어 J',
    location: '서울 강남구 세곡동',
    thumbnail_url: 'https://storage.googleapis.com/3',
    category: '레저/스포츠',
    status: '진행중',
    bookmark: false,
  },
  {
    id: 11,
    name: '팝업 스토어 K',
    location: '서울 강남구 수서동',
    thumbnail_url: 'https://storage.googleapis.com/3',
    category: '레저/스포츠',
    status: '진행중',
    bookmark: false,
  },
];
