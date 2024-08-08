import { Button } from "../ui/button";

const FilterButtons = [
  { name: "Fiyat", value: "fiyat" },
  { name: "Ölçü", value: "olcu" },
  { name: "Filtreler", value: "filtreler" },
];

const SelectOptions = [
  { name: "Senin İçin", value: "senin_icin" },
  { name: "En Yeniler", value: "en_yeniler" },
  { name: "En Eskiler", value: "en_eskiler" },
  { name: "Fiyat Azalan", value: "fiyat_azalan" },
  { name: "Fiyat Artan", value: "Fiyat_Artan" },
];

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PropertiesFilter() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {FilterButtons.map((item) => (
          <Button
            key={item.value}
            variant={"outline"}
            className="h-8 text-primary"
          >
            {item.name}
          </Button>
        ))}
        <Button className="h-8">Aramayı Kaydet</Button>
      </div>

      <div>
        <Select>
          <SelectTrigger className="h-8 w-auto border-none text-primary hover:text-primary/90 md:text-base">
            <SelectValue placeholder="Senin İçin" />
          </SelectTrigger>
          <SelectContent className="border-none bg-primary text-primary-foreground">
            {SelectOptions.map((item) => (
              <SelectItem
                value={item.value}
                key={item.value}
              >
                {item.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
