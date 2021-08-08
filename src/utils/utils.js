
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
  //clean and add images
  return cleanEvent;
}

export { cleanEventData };
