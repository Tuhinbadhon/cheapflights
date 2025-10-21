"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  ArrowLeftRight,
  Calendar as CalendarIcon,
  MapPin,
  User,
} from "lucide-react";
import { useState } from "react";

export default function Homepage() {
  const [dateRoundTrip, setDateRoundTrip] = useState<Date>();

  return (
    <div className="flex mx-auto max-w-5xl h-screen items-center">
      <div className="flex w-full max-w-2xl flex-col gap-6">
        <Tabs defaultValue="round-trip">
          <TabsList className="bg-white shadow-none ">
            <TabsTrigger
              value="round-trip"
              className="focus-visible:shadow-none"
            >
              Roundtrip
            </TabsTrigger>
            <TabsTrigger value="one-way" className="focus-visible:shadow-none">
              One-way
            </TabsTrigger>
            <TabsTrigger
              value="multi-city"
              className="focus-visible:shadow-none"
            >
              Multi-city
            </TabsTrigger>
          </TabsList>
          <TabsContent value="round-trip">
            <Card className="border-none shadow-none items-start ml-0 justify-between">
              <CardContent className="flex justify-between pl-0  items-center gap-5">
                <div className="flex gap-4 items-center relative">
                  <div className="relative w-[200px]">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 z-10" />
                    <Input
                      id="leaving-from"
                      placeholder="Leaving from"
                      className="h-12 pl-10 pr-8"
                    />
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 z-20 bg-white border rounded-full p-1.5 shadow-sm">
                    <ArrowLeftRight className="h-4 w-4 text-gray-500" />
                  </div>
                  <div className="relative  w-[200px]">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 z-10" />
                    <Input
                      id="going-to"
                      placeholder="Going to"
                      className="h-12 pl-10"
                    />
                  </div>
                </div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-[200px] justify-start text-left font-normal h-12 relative",
                        !dateRoundTrip && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
                      {dateRoundTrip ? (
                        format(dateRoundTrip, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={dateRoundTrip}
                      onSelect={setDateRoundTrip}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <div className="w-max relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input
                    id="travellers"
                    placeholder="Travellers & class"
                    className="h-12 pl-10"
                  />
                </div>
                <Button className="bg-[#1668e3] hover:bg-blue-800 font-bold h-12 rounded-full">
                  Search
                </Button>
                <div></div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="one-way">
            <Card className="border-none shadow-none items-start ml-0 justify-between">
              <CardContent className="flex justify-between pl-0  items-center gap-5">
                <div className="flex gap-4 items-center relative">
                  <div className="relative w-[200px]">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 z-10" />
                    <Input
                      id="leaving-from"
                      placeholder="Leaving from"
                      className="h-12 pl-10 pr-8"
                    />
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 z-20 bg-white border rounded-full p-1.5 shadow-sm">
                    <ArrowLeftRight className="h-4 w-4 text-gray-500" />
                  </div>
                  <div className="relative  w-[200px]">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 z-10" />
                    <Input
                      id="going-to"
                      placeholder="Going to"
                      className="h-12 pl-10"
                    />
                  </div>
                </div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-[200px] justify-start text-left font-normal h-12 relative",
                        !dateRoundTrip && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
                      {dateRoundTrip ? (
                        format(dateRoundTrip, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={dateRoundTrip}
                      onSelect={setDateRoundTrip}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <div className="w-max relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input
                    id="travellers"
                    placeholder="Travellers & class"
                    className="h-12 pl-10"
                  />
                </div>
                <Button className="bg-[#1668e3] hover:bg-blue-800 font-bold h-12 rounded-full">
                  Search
                </Button>
                <div></div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="multi-city">
            <Card className="border-none shadow-none items-start ml-0 justify-between">
              <CardContent className="flex justify-between pl-0  items-center gap-5">
                <div className="flex gap-4 items-center relative">
                  <div className="relative w-[200px]">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 z-10" />
                    <Input
                      id="leaving-from"
                      placeholder="Leaving from"
                      className="h-12 pl-10 pr-8"
                    />
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 z-20 bg-white border rounded-full p-1.5 shadow-sm">
                    <ArrowLeftRight className="h-4 w-4 text-gray-500" />
                  </div>
                  <div className="relative  w-[200px]">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 z-10" />
                    <Input
                      id="going-to"
                      placeholder="Going to"
                      className="h-12 pl-10"
                    />
                  </div>
                </div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-[200px] justify-start text-left font-normal h-12 relative",
                        !dateRoundTrip && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
                      {dateRoundTrip ? (
                        format(dateRoundTrip, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={dateRoundTrip}
                      onSelect={setDateRoundTrip}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <div className="w-max relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input
                    id="travellers"
                    placeholder="Travellers & class"
                    className="h-12 pl-10"
                  />
                </div>
                <Button className="bg-[#1668e3] hover:bg-blue-800 font-bold h-12 rounded-full">
                  Search
                </Button>
                <div></div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
