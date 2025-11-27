"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Clock, Filter, Search, TrendingUp } from "lucide-react";
import React, { useState } from "react";

const ArticleSearch = () => {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const popularSearches = [
    "digital marketing",
    "productivity tips",
    "content creation",
    "social media strategies",
    "work from home",
  ];

  const filters = [
    { id: "all", label: "All Content", icon: null },
    { id: "trending", label: "Trending", icon: TrendingUp },
    { id: "newest", label: "Newest First", icon: Clock },
  ];

  const categories = [
    "Marketing",
    "Technology",
    "Business",
    "Design",
    "Personal Development",
    "Writing",
  ];

  const handleSearch = () => {
    setQuery(query);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleFilterSelect = (filterId: string) => {
    setActiveFilter(filterId);
  };

  return (
    <div className={cn("relative md:max-w-md w-full")}>
      <div className="flex w-full items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowSuggestions(e.target.value.length > 0);
            }}
            onKeyDown={handleKeyDown}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            placeholder="What are you curious about today?"
            className="pl-9"
          />
          {showSuggestions && (
            <div className="absolute top-full left-0 right-0 mt-1 p-2 bg-background border rounded-md shadow-md z-10">
              {query.length > 0 ? (
                <div
                  className="p-1 hover:bg-muted rounded cursor-pointer"
                  onClick={handleSearch}
                >
                  Search for &quot;{query}&quot;
                </div>
              ) : null}
              <div className="pt-2">
                <p className="text-xs text-muted-foreground mb-1">
                  Popular searches
                </p>
                <div className="space-y-1">
                  {popularSearches.map((term) => (
                    <div
                      key={term}
                      className="p-1 hover:bg-muted rounded cursor-pointer text-sm flex items-center gap-2"
                      onClick={() => {
                        setQuery(term);
                        setShowSuggestions(false);
                      }}
                    >
                      <Search className="h-3 w-3 text-muted-foreground" />
                      {term}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <Button onClick={handleSearch}>Search</Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Filter Articles</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {filters.map((filter) => (
                <DropdownMenuItem
                  key={filter.id}
                  className={cn(
                    "cursor-pointer",
                    activeFilter === filter.id && "bg-muted"
                  )}
                  onClick={() => handleFilterSelect(filter.id)}
                >
                  {filter.icon && <filter.icon className="h-4 w-4 mr-2" />}
                  {filter.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Categories</DropdownMenuLabel>
            <div className="p-2 max-h-40 overflow-y-auto">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={activeFilter === category ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => handleFilterSelect(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default ArticleSearch;
