import { routing } from "@/i18n/routing";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

export default function LocaleSwitcher() {
  const locale = useLocale();

  return (
    <div className='flex w-[120px] right-0 items-center gap-2 pl-4 border border-[#000] rounded-2xl'>
      <Globe className='h-4 w-4 text-muted-foreground' />
      <LocaleSwitcherSelect defaultValue={locale} label='Select a locale'>
        {routing.locales.map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </LocaleSwitcherSelect>
    </div>
  );
}
