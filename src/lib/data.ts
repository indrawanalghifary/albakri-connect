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
   {
    id: 'post-7',
    authorId: 'user-1',
    timestamp: '6 days ago',
    content: 'The importance of seeking knowledge in Islam is paramount. The Prophet Muhammad (PBUH) said: "Seeking knowledge is an obligation upon every Muslim." Let\'s be lifelong learners of our deen.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'islamic books',
    likes: 410,
    comments: [
      { id: 'c-8', authorId: 'user-3', text: 'InshaAllah, a great motivation to keep learning.' },
    ],
  },
  {
    id: 'post-8',
    authorId: 'user-1',
    timestamp: '1 week ago',
    content: 'Family ties (Silat al-rahim) are very important in Islam. Maintaining good relationships with relatives is a source of blessing and a sign of strong faith. Let us reach out to our family members today.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'happy family',
    likes: 520,
    comments: [
      { id: 'c-9', authorId: 'user-2', text: 'Thank you for the reminder Ustaz. I will call my parents.' },
      { id: 'c-10', authorId: 'user-4', text: 'A beautiful reminder indeed.' },
    ],
  },
  {
    id: 'post-9',
    authorId: 'user-1',
    timestamp: '1 week ago',
    content: 'Kindness is a mark of faith. The Prophet Muhammad (PBUH) was the kindest of people. Let us emulate his example in our interactions with everyone, Muslims and non-Muslims alike.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'helping hand',
    likes: 350,
    comments: [],
  },
  {
    id: 'post-10',
    authorId: 'user-1',
    timestamp: '2 weeks ago',
    content: 'Dua (supplication) is the weapon of the believer. It is a conversation with Allah, a way to express our needs, fears, and hopes. Never underestimate the power of your dua.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'person praying',
    likes: 600,
    comments: [
      { id: 'c-11', authorId: 'user-3', text: 'Ameen. May Allah accept all our duas.' },
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
      { from: 'user-2', text: 'If I accidentally swallow water while making wudu, does it break my fast?', timestamp: '10:33 AM' },
      { from: 'user-1', text: 'A good question. The majority of scholars say that if it\'s unintentional and a small amount, your fast is still valid. However, you should be careful.', timestamp: '10:35 AM' },
    ],
    unread: 1,
  },
  {
    id: 'chat-2',
    withUserId: 'user-3',
    messages: [
      { from: 'user-3', text: 'Ustaz, can you recommend some books on Islamic history?', timestamp: 'Yesterday' },
      { from: 'user-1', text: 'Waalaikumsalam, Fatimah. A great place to start is "The Sealed Nectar" (Ar-Raheeq Al-Makhtum). It\'s a renowned biography of the Prophet (PBUH).', timestamp: 'Yesterday' },
      { from: 'user-3', text: 'Jazakallah khair, Ustaz! I will look for it.', timestamp: 'Yesterday' },
    ],
    unread: 0,
  },
  {
    id: 'chat-3',
    withUserId: 'user-4',
    messages: [
      { from: 'user-4', text: 'Assalamualaikum, I missed the last pengajian. Is there a recording available?', timestamp: '2 days ago' },
      { from: 'user-1', text: 'Waalaikumsalam Yusuf. Yes, all sessions are recorded. I will send you the link shortly.', timestamp: '2 days ago' },
      { from: 'user-4', text: 'Thank you so much!', timestamp: '2 days ago' },
    ],
    unread: 0,
  },
  {
    id: 'chat-4',
    withUserId: 'user-2',
    messages: [
      { from: 'user-1', text: 'How are your preparations for Ramadan?', timestamp: '3 days ago' },
      { from: 'user-2', text: 'Alhamdulillah, going well Ustaz. Trying to finish reading the Quran.', timestamp: '3 days ago' },
    ],
    unread: 0,
  },
  {
    id: 'chat-5',
    withUserId: 'user-3',
    messages: [
      { from: 'user-3', text: 'Can we donate zakat through the mosque committee?', timestamp: '4 days ago' },
      { from: 'user-1', text: 'Yes, of course. We have a committee that handles Zakat collection and distribution.', timestamp: '4 days ago' },
    ],
    unread: 1,
  },
  {
    id: 'chat-6',
    withUserId: 'user-4',
    messages: [
      { from: 'user-4', text: 'Is it permissible to combine intentions for sunnah fasts?', timestamp: '5 days ago' },
      { from: 'user-1', text: 'A very interesting fiqh question. Let me get back to you with a detailed answer.', timestamp: '5 days ago' },
    ],
    unread: 0,
  },
  {
    id: 'chat-7',
    withUserId: 'user-2',
    messages: [
      { from: 'user-2', text: 'The new schedule for pengajian is very helpful.', timestamp: '6 days ago' },
      { from: 'user-1', text: 'Alhamdulillah, glad to hear that.', timestamp: '6 days ago' },
    ],
    unread: 0,
  },
  {
    id: 'chat-8',
    withUserId: 'user-3',
    messages: [
      { from: 'user-3', text: 'Thank you for the summary feature, it is very useful!', timestamp: '1 week ago' },
      { from: 'user-1', text: 'You are welcome. We are trying to leverage technology to help us learn.', timestamp: '1 week ago' },
    ],
    unread: 0,
  },
  {
    id: 'chat-9',
    withUserId: 'user-4',
    messages: [
      { from: 'user-4', text: 'Can you share the location for tomorrow\'s event?', timestamp: '1 week ago' },
      { from: 'user-1', text: 'It\'s at Masjid Al-Hidayah. You can find the details on the schedule page.', timestamp: '1 week ago' },
    ],
    unread: 0,
  },
  {
    id: 'chat-10',
    withUserId: 'user-2',
    messages: [
      { from: 'user-2', text: 'I really enjoyed the last ceramah about patience.', timestamp: '1 week ago' },
    ],
    unread: 0,
  },
  {
    id: 'chat-11',
    withUserId: 'user-3',
    messages: [
      { from: 'user-3', text: 'Is there a ladies-only session this week?', timestamp: '1 week ago' },
      { from: 'user-1', text: 'Yes, on Friday morning. My wife will be leading it.', timestamp: '1 week ago' },
    ],
    unread: 1,
  },
  {
    id: 'chat-12',
    withUserId: 'user-4',
    messages: [
      { from: 'user-4', text: 'Just a quick question about inheritance.', timestamp: '2 weeks ago' },
      { from: 'user-1', text: 'Please go ahead.', timestamp: '2 weeks ago' },
    ],
    unread: 0,
  },
  {
    id: 'chat-13',
    withUserId: 'user-2',
    messages: [
      { from: 'user-1', text: 'Remember to make lots of dua in these last 10 nights.', timestamp: '2 weeks ago' },
    ],
    unread: 0,
  },
  {
    id: 'chat-14',
    withUserId: 'user-3',
    messages: [
      { from: 'user-3', text: 'I would like to volunteer for the upcoming event.', timestamp: '2 weeks ago' },
      { from: 'user-1', text: 'MashaAllah, please contact brother Yusuf, he is coordinating.', timestamp: '2 weeks ago' },
    ],
    unread: 0,
  },
  {
    id: 'chat-15',
    withUserId: 'user-4',
    messages: [
      { from: 'user-4', text: 'What is the best way to teach Quran to young children?', timestamp: '3 weeks ago' },
      { from: 'user-1', text: 'Start with the stories of the prophets, it captures their imagination.', timestamp: '3 weeks ago' },
    ],
    unread: 0,
  },
  {
    id: 'chat-16',
    withUserId: 'user-2',
    messages: [
      { from: 'user-2', text: 'The community here is amazing.', timestamp: '3 weeks ago' },
      { from: 'user-1', text: 'Alhamdulillah, it is the blessing of ukhuwah.', timestamp: '3 weeks ago' },
    ],
    unread: 0,
  },
  {
    id: 'chat-17',
    withUserId: 'user-3',
    messages: [
      { from: 'user-3', text: 'I have a suggestion for the app.', timestamp: '3 weeks ago' },
      { from: 'user-1', text: 'Please, share with us.', timestamp: '3 weeks ago' },
    ],
    unread: 1,
  },
  {
    id: 'chat-18',
    withUserId: 'user-4',
    messages: [
      { from: 'user-1', text: 'Did you manage to resolve the issue?', timestamp: '4 weeks ago' },
      { from: 'user-4', text: 'Yes, thank you for your help Ustaz.', timestamp: '4 weeks ago' },
    ],
    unread: 0,
  },
  {
    id: 'chat-19',
    withUserId: 'user-2',
    messages: [
      { from: 'user-2', text: 'See you at Fajr prayer.', timestamp: '1 month ago' },
      { from: 'user-1', text: 'InshaAllah.', timestamp: '1 month ago' },
    ],
    unread: 0,
  },
  {
    id: 'chat-20',
    withUserId: 'user-3',
    messages: [
      { from: 'user-3', text: 'Final reminder for the potluck this weekend!', timestamp: '1 month ago' },
    ],
    unread: 0,
  },
];
