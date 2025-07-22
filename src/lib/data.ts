export const users = {
  'user-1': { name: 'Ustaz Abdullah', avatar: 'https://placehold.co/100x100.png', isUstaz: true, email: 'ustaz.abdullah@mail.com', password: 'password123' },
  'user-2': { name: 'Ahmad', avatar: 'https://placehold.co/100x100.png', isUstaz: false, email: 'ahmad@mail.com', password: 'password123' },
  'user-3': { name: 'Fatimah', avatar: 'https://placehold.co/100x100.png', isUstaz: false, email: 'fatimah@mail.com', password: 'password123' },
  'user-4': { name: 'Yusuf', avatar: 'https://placehold.co/100x100.png', isUstaz: false, email: 'yusuf@mail.com', password: 'password123' },
};

export const ceramahPosts = [
  {
    id: 'post-1',
    authorId: 'user-1',
    timestamp: '2 hours ago',
    content: 'Assalamualaikum wr. wb. Today we will discuss the importance of patience in Islam. Sabr is not just about waiting, but about maintaining good character while waiting. It is a virtue that brings us closer to Allah.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'mosque interior',
    likes: 120,
    comments: [
      { id: 'c-1', authorId: 'user-2', text: 'Jazakallah khair, Ustaz. A much needed reminder.' },
      { id: 'c-2', authorId: 'user-3', text: 'MashaAllah, very insightful.' },
    ],
  },
  {
    id: 'post-2',
    authorId: 'user-1',
    timestamp: '1 day ago',
    content: 'The concept of Tawakkul, or trusting in Allah\'s plan, is fundamental to our faith. It means we put in our best effort and leave the results to Him. This brings peace and tranquility to our hearts.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'sunset prayer',
    likes: 250,
    comments: [
       { id: 'c-3', authorId: 'user-4', text: 'Thank you for this beautiful reminder, Ustaz.' },
    ],
  },
  {
    id: 'post-3',
    authorId: 'user-1',
    timestamp: '2 days ago',
    content: 'Let\'s reflect on the importance of gratitude (Shukr). Being thankful for Allah\'s blessings, big or small, increases them. "If you are grateful, I will surely increase you [in favor]."',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'hands praying',
    likes: 180,
    comments: [
      { id: 'c-4', authorId: 'user-2', text: 'Alhamdulillah for everything.' },
    ],
  },
  {
    id: 'post-4',
    authorId: 'user-1',
    timestamp: '3 days ago',
    content: 'Charity (Sadaqah) does not decrease wealth. It is an investment for the hereafter and a means of purifying our wealth and our souls. Give, even if it is a small amount.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'charity giving',
    likes: 310,
    comments: [
       { id: 'c-5', authorId: 'user-3', text: 'A powerful reminder to be generous.' },
       { id: 'c-6', authorId: 'user-4', text: 'May Allah accept our charity.' },
    ],
  },
  {
    id: 'post-5',
    authorId: 'user-1',
    timestamp: '4 days ago',
    content: 'The five daily prayers (Salah) are the pillars of our faith. They are our direct connection with Allah, a source of comfort, and a shield from evil. Let us strive to perform them with sincerity and devotion.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'prayer rug',
    likes: 450,
    comments: [],
  },
  {
    id: 'post-6',
    authorId: 'user-1',
    timestamp: '5 days ago',
    content: 'The beauty of the Quran is that it is a guidance for all of humanity. Its verses are a source of healing, wisdom, and mercy. Let us make a habit of reciting and pondering upon its meaning daily.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'open quran',
    likes: 380,
    comments: [
      { id: 'c-7', authorId: 'user-2', text: 'Ameen. The Quran is truly a miracle.' },
    ],
  },
];

export const pengajianSchedules = [
  {
    id: 'sched-1',
    title: 'Tafsir Surah Al-Fatihah',
    ustaz: 'Ustaz Abdullah',
    date: 'Saturday, 8:00 PM',
    location: 'Masjid Al-Hidayah & Online',
  },
  {
    id: 'sched-2',
    title: 'The Life of Prophet Muhammad (PBUH)',
    ustaz: 'Ustaz Abdullah',
    date: 'Sunday, 10:00 AM',
    location: 'Online via Zoom',
  },
   {
    id: 'sched-3',
    title: 'Fiqh of Salah',
    ustaz: 'Ustaz Abdullah',
    date: 'Wednesday, after Isha',
    location: 'Masjid Al-Hidayah',
  },
];

export const notifications = [
    { id: 'notif-1', text: 'Ahmad liked your post.', timestamp: '5 minutes ago', unread: true },
    { id: 'notif-2', text: 'Fatimah commented on your post.', timestamp: '15 minutes ago', unread: true },
    { id: 'notif-3', text: 'Upcoming Pengajian: Tafsir Surah Al-Fatihah in 1 hour.', timestamp: '1 hour ago', unread: false },
];

export const chatConversations = [
  {
    id: 'chat-1',
    withUserId: 'user-2',
    messages: [
      { from: 'user-2', text: 'Assalamualaikum Ustaz, I have a question about fasting.', timestamp: '10:30 AM' },
      { from: 'user-1', text: 'Waalaikumsalam, Ahmad. Of course, what would you like to know?', timestamp: '10:32 AM' },
    ],
    unread: 1,
  },
  {
    id: 'chat-2',
    withUserId: 'user-3',
    messages: [
      { from: 'user-3', text: 'Ustaz, can you recommend some books on Islamic history?', timestamp: 'Yesterday' },
    ],
    unread: 0,
  }
];
