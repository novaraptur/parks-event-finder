
const cleanEventData = (rawEvent) => {
  let cleanEvent = {
    id: rawEvent.id,
    title: rawEvent.title,
    parkName: rawEvent.parkfullname,
    siteCode: rawEvent.sitecode,
    dates: rawEvent.dates,
    times: rawEvent.times,
    description: rawEvent.description,
    category: rawEvent.category,
    feeInfo: rawEvent.feeInfo,
    isAllDay: rawEvent.isallday,
    isFree: rawEvent.isfree,
    isRecurring: rawEvent.isrecurring,
    isRegResRequired: rawEvent.isregresrequired,
    timeInfo: rawEvent.timeInfo
  };
  if (!rawEvent.images[0]) {
    cleanEvent.images = [
      {
        url: '/common/uploads/event_calendar/EEA109D5-E4EC-EAE4-9C30D274329D6A89.jpg?maxwidth=1200&maxheight=1200&autorotate=false&quality=90'
      }
    ];
  } else {
    cleanEvent.images = rawEvent.images;
  }
  return cleanEvent;
}

export { cleanEventData };
