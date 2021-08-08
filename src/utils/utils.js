
const cleanEventData = (event) => {
  let cleanEvent = {
    id: event.id,
    title: event.title,
    description: event.description,
    dates: event.dates,
    times: event.times,
    isFree: event.isfree,
    isRecurring: event.isrecurring,
    isRegResRequired: event.isregresrequired,
    parkName: event.parkfullname,
    images: event.images
  };
  //for events with no images use park image
  return cleanEvent;
}

const cleanParkData = (park) => {
  let cleanPark = {};
  return cleanPark;
}

export { cleanEventData, cleanParkData };
