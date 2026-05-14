import { LogOut, Moon, Settings, User } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from './ui/avatar';

const Navbar = () => {
  return (
    <nav className="p-4 flex items-center justify-between">
      {/* collapse button */}

      {/* link */}

      <div className="flex items-center gap-4">
        <Link href={'/'}>Dashboard</Link>
        <Moon />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="h-[1.2rem] w-[1.2rem] mr-2" /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="h-[1.2rem] w-[1.2rem] mr-2" /> Settings
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
