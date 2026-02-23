import { GOOGLE_CALENDAR_URL } from "@/constants/calendar";

export const openCalendarBooking = () => {
  window.open(GOOGLE_CALENDAR_URL, "_blank");
};