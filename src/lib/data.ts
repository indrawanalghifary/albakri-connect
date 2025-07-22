export const users = {
  'user-1': { name: 'Ustaz Abdullah', avatar: 'https://placehold.co/100x100.png', isUstaz: true },
  'user-2': { name: 'Ahmad', avatar: 'https://placehold.co/100x100.png', isUstaz: false },
  'user-3': { name: 'Fatimah', avatar: 'https://placehold.co/100x100.png', isUstaz: false },
  'user-4': { name: 'Yusuf', avatar: 'https://placehold.co/100x100.png', isUstaz: false },
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
