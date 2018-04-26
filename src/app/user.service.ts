import { Injectable } from "@angular/core";

@Injectable()
export class UserService {

  public CurrentSession;

  public currentTrip;

  public Policies = [
    {
        name: "Free Cancellation Guarantee",
        description: "Cancel your flight for any reason, up to 24 hours before the flight",
        compensation_ceiling: "80% of the total flight cost",
        component_type: "flight",
        base_price: "$87"
  },
    {
        name: "Luggage Loss Compensation",
        description: "Get compensated instantly if your luggage gets lost",
        compensation_ceiling: "$1000",
        component_type: "flight",
        base_price: "$10"
    },
    {
        name: "Flight Delay Compensation",
        description: "If your flight is delayed for more than 2 hours, we'll compensate you",
        compensation_ceiling: "$100 per delay hour; up to $600 total",
        component_type: "flight",
        base_price: "$17"
    },
    {
        name: "Missed Connection Assurance",
        description: "Get compensated for food, hotel and rebooking expenses should you miss your connecting flight",
        compensation_ceiling: "$400",
        component_type: "flight",
        base_price: "$38"
    },
    {
        name: "Deductible Waiver",
        description: "Pay nothing if you damage your car - we'll refund the deductible instantly",
        compensation_ceiling: "$1500",
        component_type: "car",
        base_price: "$35"
    },
    {
        name: "Premium Road Assistance",
        description: "Never worry about getting a flat tire. With Premium Road Assist you'll get professional assistance within 1.5 hours",
        component_type: "car",
        base_price: "$10"
    },
    {
        name: "Free Hotel Cancellation",
        description: "Cancel your acommodation for any reason, up to 24 hours before check-in",
        component_types: "hotel",
        compensation_ceiling: "80% of the total accommodation cost",
        base_price: "$27"
    },
    {
        name: "Hotel Quality Insurance",
        description: "If your accommodation does not fit the description or has bad conditions, we'll pay for an alternative accommodation",
        component_types: "hotel",
        compensation_ceiling: "$500",
        base_price: "$23"
    }

]

  constructor() {}

  addPoliciesToTrip(trip) {
    trip.components.forEach(element => {
      var relevantPolicies = this.Policies.filter((p) => p["component_type"].toLowerCase() == element.type.toLowerCase());
      element.policies = relevantPolicies;
    });
    return trip;
  }

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
