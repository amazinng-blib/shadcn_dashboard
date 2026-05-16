import React from 'react';
import { Card, CardContent, CardFooter, CardTitle } from './ui/card';
import Image from 'next/image';
import { Badge } from './ui/badge';

const latestTransactions = [
  {
    id: 1,
    title: 'Subscription Payment Received',
    badge: 'John Carter',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    count: 128,
  },
  {
    id: 2,
    title: 'Course Purchase Completed',
    badge: 'Sophia Williams',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
    count: 94,
  },
  {
    id: 3,
    title: 'Invoice Payment Processed',
    badge: 'Michael Johnson',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    count: 215,
  },
  {
    id: 4,
    title: 'Premium Plan Upgrade',
    badge: 'Emily Brown',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    count: 7600,
  },
  {
    id: 5,
    title: 'Premium Plan Upgrade',
    badge: 'Emily Brown',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    count: 7600,
  },
  {
    id: 6,
    title: 'Premium Plan Upgrade',
    badge: 'Emily Brown',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    count: 7600,
  },
];

const popularContents = [
  {
    id: 1,
    title: 'Top Performing Sales Dashboard',
    badge: 'David Anderson',
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg',
    count: 1420,
  },
  {
    id: 2,
    title: 'UI/UX Design Collaboration',
    badge: 'Olivia Martinez',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg',
    count: 1880,
  },
  {
    id: 3,
    title: 'Technology Conference Highlights',
    badge: 'Daniel Wilson',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
    count: 5900,
  },
  {
    id: 4,
    title: 'Creative Team Brainstorm Session',
    badge: 'Isabella Thomas',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
    count: 3010,
  },
];
const CardList = ({ title }: { title: string }) => {
  const lists =
    title === 'Popular Contents' ? popularContents : latestTransactions;
  return (
    <div>
      <h1 className="text-lg font-medium mb-6 ">{title}</h1>

      <div className="flex flex-col gap-2 relative h-80 overflow-y-auto scrollbar-none px-2 ">
        {lists?.map((list, idx) => (
          <Card
            key={idx}
            className="shrink-0 flex-row items-center justify-between gap-4 p-2 "
          >
            <div className="shrink-0 w-12 h-12 rounded-sm relative overflow-hidden">
              <Image
                src={list.image}
                alt={list.title}
                fill
                className="object-cover"
              />
            </div>

            <CardContent className="flex-1 p-0">
              <CardTitle className="text-sm font-medium">
                {list.title}
              </CardTitle>
              <Badge variant={'secondary'} className="lg:my-2">
                {list.badge}
              </Badge>
            </CardContent>

            <CardFooter className="p-0">
              {list.count >= 1000
                ? `${(list.count / 1000).toFixed(1)}k`
                : list.count}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;
