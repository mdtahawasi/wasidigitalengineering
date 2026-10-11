import { Globe, ChevronDown, Check } from "lucide-react";
import { useLanguage, languages } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const current = languages.find((l) => l.code === language) ?? languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="min-h-11 gap-1.5 px-2 text-xs text-muted-foreground" aria-label="Change language">
          <Globe className="text-primary" />
          <span className="hidden sm:inline">{current?.flag}</span>
          <span className="hidden lg:inline text-[11px]">{current?.label}</span>
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="z-[100] w-48 max-h-80 overflow-y-auto">
        {languages.map((lang) => (
          <DropdownMenuItem key={lang.code} onSelect={() => setLanguage(lang.code)} className="gap-3 py-2.5">
            <span aria-hidden="true">{lang.flag}</span>
            <span lang={lang.code} className="flex-1">{lang.label}</span>
            {lang.code === language && <Check className="h-4 w-4 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
