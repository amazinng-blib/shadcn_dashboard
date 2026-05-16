'use client';

import React, { useState } from 'react';
import { ScrollArea } from './ui/scroll-area';
import { Card } from './ui/card';
import { Checkbox } from './ui/checkbox';

import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Button } from './ui/button';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* Calendar */}
      <h1 className="text-lg font-medium mb-6">Todo List</h1>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon />
            {date ? format(date, 'PPP') : 'Pick a date'}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
            captionLayout="dropdown"
          />
        </PopoverContent>
      </Popover>
      {/* List */}
      <ScrollArea className="max-h-100 mt-4 overflow-y-auto scrollbar-none">
        <div className="space-y-4 py-4">
          {/* list Item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Item 1
              </label>
            </div>
          </Card>
          {/* list Item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item2" />
              <label htmlFor="item2" className="text-sm text-muted-foreground">
                Item 2
              </label>
            </div>
          </Card>
          {/* list Item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item3" />
              <label htmlFor="item3" className="text-sm text-muted-foreground">
                Item 3
              </label>
            </div>
          </Card>
          {/* list Item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item4" />
              <label htmlFor="item4" className="text-sm text-muted-foreground">
                Item 4
              </label>
            </div>
          </Card>
          {/* list Item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item5" />
              <label htmlFor="item5" className="text-sm text-muted-foreground">
                Item 5
              </label>
            </div>
          </Card>
          {/* list Item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item6" />
              <label htmlFor="item6" className="text-sm text-muted-foreground">
                Item 6
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
