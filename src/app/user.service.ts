import { Injectable } from "@angular/core";

@Injectable()
export class UserService {

  public CurrentSession;

  constructor() {}

  getData() {
    return {
      id: 0,
      start_date: "Feb 28",
      end_date: "Mar 16",
      title: "Trip to Addis Ababa & South Africa",
      user: "bronfer@gmail.com",
      components: [
        {
          type: "Flight",
          provider: "Ethiopian",
          location: {
            departure: "Tel Aviv",
            arrival: "Addis Ababa",
            name: "",
            coordinates: ""
          },
          start_date: "Feb 28, 2018, 12:34 AM",
          end_date: "Feb 28, 2018, 5:58 AM"
        },
        {
          type: "Hotel",
          provider: "Once in Cape Town",
          location: {
            departure: "",
            arrival: "",
            name: "Kaapstad",
            coordinates: "-33.93035,18.41077"
          },
          start_date: "Feb 28, 2018",
          end_date: "Mar 4, 2018"
        },
        {
          type: "Car Rental",
          provider: "Hertz",
          location: {
            pickup: {
              departure: "",
              arrival: "",
              name: "Hertz Rent a Car - Loop Street",
              coordinates: "33.9198484,18.4208264"
            }
          },
          start_date: "Mar 3, 2018, 9:30 AM",
          end_date: "Mar 4, 2018, 9:30 AM"
        },
        {
          type: "Car Rental",
          provider: "Europcar",
          location: {
            pickup: {
              departure: "",
              arrival: "",
              name:
                "34 Prestwich St, De Waterkant, Cape Town 8001, South Africa",
              coordinates: "-33.916809,18.4204184"
            }
          },
          start_date: "Mar 4, 2018, 10:00 AM",
          end_date: "Mar 14, 2018, 10:00 AM"
        },
        {
          type: "Hotel",
          provider: "House of Two Oceans",
          location: {
            departure: "",
            arrival: "",
            name: "L’Agulhas",
            coordinates: "-34.824855,20.014214"
          },
          start_date: "March 4, 2018",
          end_date: "March 5, 2018"
        },
        {
          type: "Hotel",
          provider: "Afrovibe Adventure Lodge",
          location: {
            departure: "",
            arrival: "",
            name: "Sedgefield",
            coordinates: ""
          },
          start_date: "March 5, 2018",
          end_date: "March 8, 2018"
        },
        {
          type: "Hotel",
          provider: "Riversong Cottages",
          location: {
            departure: "",
            arrival: "",
            name: "Addo",
            coordinates: "-33.473603,25.601667"
          },
          start_date: "March 8, 2018",
          end_date: "March 10, 2018"
        },
        {
          type: "Hotel",
          provider: "Buccaneers Lodge & Backpackers",
          location: {
            departure: "",
            arrival: "",
            name: "Chintsa, Eastern Cape",
            coordinates: "-32.836759,28.110236"
          },
          start_date: "March 11, 2018",
          end_date: "March 13, 2018"
        },
        {
          type: "Flight",
          provider: "Safair",
          location: {
            departure: "East London",
            arrival: "Johannesburg",
            name: "",
            coordinates: ""
          },
          start_date: "Mar 13, 2018, 9:10 AM",
          end_date: "Mar 13, 2018, 10:40 AM"
        },
        {
          type: "Car Rental",
          provider: "Rentalcars.com",
          location: {
            pickup: {
              departure: "",
              arrival: "",
              name: "Johannesburg Airport",
              coordinates: "-26.136673,28.241146"
            }
          },
          start_date: "Mar 13, 2018, 10:00 AM",
          end_date: "Mar 15, 2018, 10:00 AM"
        },
        {
          type: "Hotel",
          provider: "Modern Sandton Stunner",
          location: {
            departure: "",
            arrival: "",
            name: "Sandton",
            coordinates: "-26.0838,28.06668"
          },
          start_date: "March 13, 2018",
          end_date: "March 15, 2018"
        },
        {
          type: "Flight",
          provider: "Safair",
          location: {
            departure: "Johannesburg",
            arrival: "Addis Ababa",
            name: "",
            coordinates: ""
          },
          start_date: "Mar 15, 2018, 2:10 PM",
          end_date: "Mar 15, 2018, 8:25 PM"
        },
        {
          type: "Flight",
          provider: "Ethiopian",
          location: {
            departure: "Addis Ababa",
            arrival: "Tel Aviv",
            name: "",
            coordinates: ""
          },
          start_date: "Mar 15, 2018, 11:50 PM",
          end_date: "Mar 16, 2018, 3:24 AM"
        }
      ]
    };
  }
}
