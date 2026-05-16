'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import CardList from '@/components/CardList';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import { BadgeCheck, Candy, Citrus, Shield } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import EditUser from '@/components/EditUser';

const SingleUserPage = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="#">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="#">Users</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* container */}

      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* Left */}

        <div className="w-full xl:w-1/3 space-y-6">
          {/* User badges  container*/}

          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Badges</h1>

            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="rounded-full bg-blue-500/30 border border-blue-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>

                  <p className="text-sm text-muted-foreground">
                    This user has been verified by admin
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="rounded-full bg-green-500/30 border border-green-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Award</h1>

                  <p className="text-sm text-muted-foreground">
                    Admin users have access to all features and can manage
                    users.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className="rounded-full bg-orange-500/30 border border-orange-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Popular</h1>

                  <p className="text-sm text-muted-foreground">
                    This user has been popular in the community for a long time.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className="rounded-full bg-yellow-500/30 border border-yellow-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Award</h1>

                  <p className="text-sm text-muted-foreground">
                    This user has been awarded for their contribution.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          {/* Information  container*/}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className=" flex items-center justify-between">
              <h1 className="text-xl font-semibold">User Information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit User</Button>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            </div>

            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">
                  Profile completion
                </p>
                <Progress value={70} />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Username: </span>
                <span>John Doe</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Email: </span>
                <span>John@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Phone: </span>
                <span>+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Location: </span>
                <span>New York</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">User role </span>
                <Badge>Admin</Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Joined on 2025.01.10
              </p>
            </div>
          </div>
          {/* card List  container*/}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transactions" />
          </div>
        </div>

        {/* Right */}
        <div className="w-full xl:w-2/3 space-y-6">
          {/* user card  container*/}
          <div className="bg-primary-foreground p-4 rounded-lg">user Card</div>
          {/* Chart  container*/}
          <div className="bg-primary-foreground p-4 rounded-lg">Chart</div>
        </div>
      </div>
    </div>
  );
};

export default SingleUserPage;
