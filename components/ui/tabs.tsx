"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as React from "react";

import { cn } from "@/lib/utils";

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  const [indicatorStyle, setIndicatorStyle] = React.useState({
    width: 0,
    left: 0,
  });
  const listRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const updateIndicator = () => {
      if (listRef.current) {
        const activeTab = listRef.current.querySelector(
          '[data-state="active"]'
        ) as HTMLElement;
        if (activeTab) {
          const listRect = listRef.current.getBoundingClientRect();
          const tabRect = activeTab.getBoundingClientRect();
          setIndicatorStyle({
            width: tabRect.width,
            left: tabRect.left - listRect.left,
          });
        }
      }
    };

    updateIndicator();

    if (listRef.current) {
      const observer = new MutationObserver(updateIndicator);
      observer.observe(listRef.current, {
        attributes: true,
        subtree: true,
        attributeFilter: ["data-state"],
      });

      return () => observer.disconnect();
    }
  }, []);

  return (
    <TabsPrimitive.List
      ref={listRef}
      data-slot="tabs-list"
      className={cn(
        "text-muted-foreground inline-flex h-9 w-fit items-center justify-center gap-4 border-b relative",
        className
      )}
      {...props}
    >
      {props.children}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-blue-500 z-10"
        style={{
          width: `${indicatorStyle.width}px`,
          transform: `translateX(${indicatorStyle.left}px)`,
          transition:
            "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />
    </TabsPrimitive.List>
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "inline-flex items-center justify-center gap-1.5 whitespace-nowrap px-3 py-2 text-sm font-medium",
        "text-muted-foreground",
        "transition-colors duration-300",
        "data-[state=active]:text-blue-600",
        "hover:text-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsContent, TabsList, TabsTrigger };
