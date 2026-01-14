import { Palette } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";

const colorThemes = [
  { id: "glacier", name: "Glacier", color: "hsl(199, 89%, 48%)", class: "" },
  { id: "harvest", name: "Harvest", color: "hsl(25, 95%, 53%)", class: "theme-harvest" },
  { id: "emerald", name: "Emerald", color: "hsl(160, 84%, 39%)", class: "theme-emerald" },
  { id: "amethyst", name: "Amethyst", color: "hsl(270, 70%, 55%)", class: "theme-amethyst" },
  { id: "rose", name: "Rose", color: "hsl(350, 89%, 60%)", class: "theme-rose" },
  { id: "sunset", name: "Sunset", color: "hsl(15, 95%, 55%)", class: "theme-sunset" },
  { id: "ocean", name: "Ocean", color: "hsl(200, 98%, 39%)", class: "theme-ocean" },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [colorTheme, setColorTheme] = useState("glacier");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedColorTheme = localStorage.getItem("color-theme") || "glacier";
    setColorTheme(savedColorTheme);
    applyColorTheme(savedColorTheme);
  }, []);

  const applyColorTheme = (themeId: string) => {
    const themeConfig = colorThemes.find((t) => t.id === themeId);
    if (themeConfig) {
      // Remove all theme classes
      colorThemes.forEach((t) => {
        if (t.class) {
          document.documentElement.classList.remove(t.class);
        }
      });
      // Add new theme class
      if (themeConfig.class) {
        document.documentElement.classList.add(themeConfig.class);
      }
    }
  };

  const handleColorThemeChange = (themeId: string) => {
    setColorTheme(themeId);
    localStorage.setItem("color-theme", themeId);
    applyColorTheme(themeId);
  };

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  const currentColorTheme = colorThemes.find((t) => t.id === colorTheme);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 rounded-xl border border-border/50 hover:bg-muted"
        >
          <Palette className="h-4 w-4" />
          <span className="sr-only">Choose theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 rounded-xl">
        <DropdownMenuLabel className="text-xs text-muted-foreground">
          Color Theme
        </DropdownMenuLabel>
        {colorThemes.map((t) => (
          <DropdownMenuItem
            key={t.id}
            onClick={() => handleColorThemeChange(t.id)}
            className={`rounded-lg cursor-pointer ${
              colorTheme === t.id ? "bg-primary/10" : ""
            }`}
          >
            <div className="flex items-center gap-3 w-full">
              <div
                className="h-4 w-4 rounded-full border border-border/50"
                style={{ backgroundColor: t.color }}
              />
              <span className={colorTheme === t.id ? "font-medium text-primary" : ""}>
                {t.name}
              </span>
              {colorTheme === t.id && (
                <div className="ml-auto h-2 w-2 rounded-full bg-primary" />
              )}
            </div>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={toggleDarkMode}
          className="rounded-lg cursor-pointer"
        >
          <div className="flex items-center gap-3 w-full">
            <div className="h-4 w-4 rounded-full border border-border/50 bg-gradient-to-br from-foreground/20 to-foreground/80" />
            <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
