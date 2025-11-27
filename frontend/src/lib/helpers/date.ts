import { format } from "date-fns";
import { id } from "date-fns/locale";

export function formatDateIdn(
  date: Date | string,
  formatString: string = "EEEE, d MMMM yyyy HH:mm:ss"
) {
  return format(new Date(date), formatString, { locale: id });
}

