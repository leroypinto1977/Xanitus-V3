"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Technology {
  _id: string;
  name: string;
}

interface ProjectFilterProps {
  technologies: Technology[];
  onFilterChange: (selectedTechs: string[]) => void;
}

export function ProjectFilter({
  technologies,
  onFilterChange,
}: ProjectFilterProps) {
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

  const toggleTechnology = (techId: string) => {
    const newSelection = selectedTechs.includes(techId)
      ? selectedTechs.filter((id) => id !== techId)
      : [...selectedTechs, techId];

    setSelectedTechs(newSelection);
    onFilterChange(newSelection);
  };

  const clearFilters = () => {
    setSelectedTechs([]);
    onFilterChange([]);
  };

  if (technologies.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-gray-300 font-medium">Filter by Technology:</span>

        {technologies.map((tech) => (
          <Badge
            key={tech._id}
            variant={selectedTechs.includes(tech._id) ? "default" : "secondary"}
            className={`cursor-pointer transition-all ${
              selectedTechs.includes(tech._id)
                ? "bg-[#a0ff4a] text-black hover:bg-[#8ee639]"
                : "bg-slate-700 text-gray-300 hover:bg-slate-600"
            }`}
            onClick={() => toggleTechnology(tech._id)}
          >
            {tech.name}
          </Badge>
        ))}

        {selectedTechs.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-gray-400 hover:text-white"
          >
            Clear Filters
          </Button>
        )}
      </div>

      {selectedTechs.length > 0 && (
        <p className="text-sm text-gray-400 mt-2">
          Showing projects with {selectedTechs.length} selected technology
          {selectedTechs.length > 1 ? "ies" : ""}
        </p>
      )}
    </div>
  );
}
