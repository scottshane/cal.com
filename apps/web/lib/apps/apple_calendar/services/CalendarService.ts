import { Credential } from "@prisma/client";

import { APPS_TYPES } from "@calcom/lib/calendar/constants/general";
import CalendarService from "@calcom/lib/calendar/services/CalendarService";

import { APPLE_CALENDAR_URL } from "../constants/general";

export default class AppleCalendarService extends CalendarService {
  constructor(credential: Credential) {
    super(credential, APPS_TYPES.apple, APPLE_CALENDAR_URL);
  }
}