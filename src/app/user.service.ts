import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
  public CurrentSession;

  public currentTrip;

  public Policies = [
    {
      name: "Free Cancellation Guarantee",
      description:
        "Cancel your flight for any reason, up to 24 hours before the flight",
      compensation_ceiling: "80% of the total flight cost",
      component_type: "flight",
      base_price: "87"
    },
    {
      name: "Luggage Loss Compensation",
      description: "Get compensated instantly if your luggage gets lost",
      compensation_ceiling: "1000",
      component_type: "flight",
      base_price: "10"
    },
    {
      name: "Flight Delay Compensation",
      description:
        "If your flight is delayed for more than 2 hours, we'll compensate you",
      compensation_ceiling: "100 per delay hour; up to 600 total",
      component_type: "flight",
      base_price: "17"
    },
    {
      name: "Missed Connection Assurance",
      description:
        "Get compensated for food, hotel and rebooking expenses should you miss your connecting flight",
      compensation_ceiling: "400",
      component_type: "flight",
      base_price: "38"
    },
    {
      name: "Deductible Waiver",
      description:
        "Pay nothing if you damage your car - we'll refund the deductible instantly",
      compensation_ceiling: "1500",
      component_type: "car rental",
      base_price: "35"
    },
    {
      name: "Premium Road Assistance",
      description:
        "Never worry about getting a flat tire. With Premium Road Assist you'll get professional assistance within 1.5 hours",
      component_type: "car rental",
      base_price: "10"
    },
    {
      name: "Free Hotel Cancellation",
      description:
        "Cancel your acommodation for any reason, up to 24 hours before check-in",
      component_type: "hotel",
      compensation_ceiling: "80% of the total accommodation cost",
      base_price: "27"
    },
    {
      name: "Hotel Quality Insurance",
      description:
        "If your accommodation does not fit the description or has bad conditions, we'll pay for an alternative accommodation",
      component_type: "hotel",
      compensation_ceiling: "500",
      base_price: "23"
    }
  ];

  constructor() {}

  addPoliciesToTrip() {
    this.currentTrip.components.forEach(element => {
      var relevantPolicies = this.Policies.filter(
        p => p["component_type"].toLowerCase() == element.type.toLowerCase()
      );
      element.policies = relevantPolicies;
      element.localSum = 0;
    });
    console.log(JSON.stringify(this.currentTrip));
    return this.currentTrip;
  }

  getData() {
    let demo = {
      components: [
        {
          end_date: "5:58 AM",
          location: { arrival: "Addis Ababa", departure: "Tel Aviv" },
          provider: "Ethiopian",
          start_date: "Feb 28, 2018, 12:34 AM",
          type: "flight",
          localSum : 0,
          policies: [
            {
              name: "Free Cancellation Guarantee",
              description:
                "Cancel your flight for any reason, up to 24 hours before the flight",
              compensation_ceiling: "80% of the total flight cost",
              component_type: "flight",
              base_price: "87"
            },
            {
              name: "Luggage Loss Compensation",
              description:
                "Get compensated instantly if your luggage gets lost",
              compensation_ceiling: "1000",
              component_type: "flight",
              base_price: "10"
            },
            {
              name: "Flight Delay Compensation",
              description:
                "If your flight is delayed for more than 2 hours, we'll compensate you",
              compensation_ceiling: "100 per delay hour; up to 600 total",
              component_type: "flight",
              base_price: "17"
            },
            {
              name: "Missed Connection Assurance",
              description:
                "Get compensated for food, hotel and rebooking expenses should you miss your connecting flight",
              compensation_ceiling: "400",
              component_type: "flight",
              base_price: "38"
            }
          ]
        },
        {
          end_date: "Mar 4, 2018",
          location: { coordinates: "-33.93035,18.41077", name: "Kaapstad" },
          provider: "Once in Cape Town",
          start_date: "Feb 28",
          type: "hotel",
          localSum : 0,
          policies: [
            {
              name: "Free Hotel Cancellation",
              description:
                "Cancel your acommodation for any reason, up to 24 hours before check-in",
              component_type: "hotel",
              compensation_ceiling: "80% of the total accommodation cost",
              base_price: "27"
            },
            {
              name: "Hotel Quality Insurance",
              description:
                "If your accommodation does not fit the description or has bad conditions, we'll pay for an alternative accommodation",
              component_type: "hotel",
              compensation_ceiling: "500",
              base_price: "23"
            }
          ]
        },
        {
          end_date: "Mar 4, 2018, 9:30 AM",
          location: {
            coordinates: "40",
            name: "Hertz Rent a Car - Loop Street"
          },
          provider: "Hertz",
          start_date: "Mar 3, 2018, 9:30 AM",
          type: "car rental",
          localSum : 0,
          policies: [
            {
              name: "Deductible Waiver",
              description:
                "Pay nothing if you damage your car - we'll refund the deductible instantly",
              compensation_ceiling: "1500",
              component_type: "car rental",
              base_price: "35"
            },
            {
              name: "Premium Road Assistance",
              description:
                "Never worry about getting a flat tire. With Premium Road Assist you'll get professional assistance within 1.5 hours",
              component_type: "car rental",
              base_price: "10"
            }
          ]
        },
        {
          end_date: "Mar 14, 2018, 10:00 AM",
          location: {
            coordinates: "34",
            name: "34 Prestwich St, De Waterkant, Cape Town 8001, South Africa"
          },
          provider: "Europcar",
          start_date: "Mar 4, 2018, 10:00 AM",
          type: "car rental",
          localSum : 0,
          policies: [
            {
              name: "Deductible Waiver",
              description:
                "Pay nothing if you damage your car - we'll refund the deductible instantly",
              compensation_ceiling: "1500",
              component_type: "car rental",
              base_price: "35"
            },
            {
              name: "Premium Road Assistance",
              description:
                "Never worry about getting a flat tire. With Premium Road Assist you'll get professional assistance within 1.5 hours",
              component_type: "car rental",
              base_price: "10"
            }
          ]
        },
        {
          end_date: "5, 2018",
          location: { coordinates: "-34.824855,20.014214", name: "L'Agulhas" },
          provider: "House of Two Oceans",
          start_date: "Mar 4",
          type: "hotel",
          localSum : 0,
          policies: [
            {
              name: "Free Hotel Cancellation",
              description:
                "Cancel your acommodation for any reason, up to 24 hours before check-in",
              component_type: "hotel",
              compensation_ceiling: "80% of the total accommodation cost",
              base_price: "27"
            },
            {
              name: "Hotel Quality Insurance",
              description:
                "If your accommodation does not fit the description or has bad conditions, we'll pay for an alternative accommodation",
              component_type: "hotel",
              compensation_ceiling: "500",
              base_price: "23"
            }
          ]
        },
        {
          end_date: "8, 2018",
          location: { coordinates: "-34.033589,22.802059", name: "Sedgefield" },
          provider: "Afrovibe Adventure Lodge",
          start_date: "Mar 5",
          type: "hotel",
          localSum : 0,
          policies: [
            {
              name: "Free Hotel Cancellation",
              description:
                "Cancel your acommodation for any reason, up to 24 hours before check-in",
              component_type: "hotel",
              compensation_ceiling: "80% of the total accommodation cost",
              base_price: "27"
            },
            {
              name: "Hotel Quality Insurance",
              description:
                "If your accommodation does not fit the description or has bad conditions, we'll pay for an alternative accommodation",
              component_type: "hotel",
              compensation_ceiling: "500",
              base_price: "23"
            }
          ]
        },
        {
          end_date: "10, 2018",
          location: { coordinates: "-33.473603,25.601667", name: "Addo" },
          provider: "Riversong Cottages",
          start_date: "Mar 8",
          type: "hotel",
          localSum : 0,
          policies: [
            {
              name: "Free Hotel Cancellation",
              description:
                "Cancel your acommodation for any reason, up to 24 hours before check-in",
              component_type: "hotel",
              compensation_ceiling: "80% of the total accommodation cost",
              base_price: "27"
            },
            {
              name: "Hotel Quality Insurance",
              description:
                "If your accommodation does not fit the description or has bad conditions, we'll pay for an alternative accommodation",
              component_type: "hotel",
              compensation_ceiling: "500",
              base_price: "23"
            }
          ]
        },
        {
          end_date: "13, 2018",
          location: {
            coordinates: "-32.836759,28.110236",
            name: "Eastern Cape"
          },
          provider: "Buccaneers Lodge & Backpackers, Chintsa",
          start_date: "Mar 11",
          type: "hotel",
          localSum : 0,
          policies: [
            {
              name: "Free Hotel Cancellation",
              description:
                "Cancel your acommodation for any reason, up to 24 hours before check-in",
              component_type: "hotel",
              compensation_ceiling: "80% of the total accommodation cost",
              base_price: "27"
            },
            {
              name: "Hotel Quality Insurance",
              description:
                "If your accommodation does not fit the description or has bad conditions, we'll pay for an alternative accommodation",
              component_type: "hotel",
              compensation_ceiling: "500",
              base_price: "23"
            }
          ]
        },
        {
          end_date: "10:40 AM",
          location: { arrival: "Johannesburg", departure: "East London" },
          provider: "Safair",
          start_date: "Mar 13, 2018, 9:10 AM",
          type: "flight",
          localSum : 0,
          policies: [
            {
              name: "Free Cancellation Guarantee",
              description:
                "Cancel your flight for any reason, up to 24 hours before the flight",
              compensation_ceiling: "80% of the total flight cost",
              component_type: "flight",
              base_price: "87"
            },
            {
              name: "Luggage Loss Compensation",
              description:
                "Get compensated instantly if your luggage gets lost",
              compensation_ceiling: "1000",
              component_type: "flight",
              base_price: "10"
            },
            {
              name: "Flight Delay Compensation",
              description:
                "If your flight is delayed for more than 2 hours, we'll compensate you",
              compensation_ceiling: "100 per delay hour; up to 600 total",
              component_type: "flight",
              base_price: "17"
            },
            {
              name: "Missed Connection Assurance",
              description:
                "Get compensated for food, hotel and rebooking expenses should you miss your connecting flight",
              compensation_ceiling: "400",
              component_type: "flight",
              base_price: "38"
            }
          ]
        },
        {
          end_date: "Mar 15, 2018, 10:00 AM",
          location: {
            coordinates: "-26.136673,28.241146",
            name: "Johannesburg Airport"
          },
          provider: "Rentalcars.com",
          start_date: "Mar 13, 2018, 10:00 AM",
          type: "car rental",
          localSum : 0,
          policies: []
        },
        {
          end_date: "15, 2018",
          location: { coordinates: "-26.0838,28.06668", name: "Sandton" },
          provider: "Modern Sandton Stunner",
          start_date: "Mar 13",
          type: "hotel",
          localSum : 0,
          policies: [
            {
              name: "Free Hotel Cancellation",
              description:
                "Cancel your acommodation for any reason, up to 24 hours before check-in",
              component_type: "hotel",
              compensation_ceiling: "80% of the total accommodation cost",
              base_price: "27"
            },
            {
              name: "Hotel Quality Insurance",
              description:
                "If your accommodation does not fit the description or has bad conditions, we'll pay for an alternative accommodation",
              component_type: "hotel",
              compensation_ceiling: "500",
              base_price: "23"
            }
          ]
        },
        {
          end_date: "8:25 PM",
          location: { arrival: "Addis Ababa", departure: "Johannesburg" },
          provider: "ASKY",
          start_date: "Mar 15, 2018, 2:10 PM",
          type: "flight",
          localSum : 0,
          policies: [
            {
              name: "Free Cancellation Guarantee",
              description:
                "Cancel your flight for any reason, up to 24 hours before the flight",
              compensation_ceiling: "80% of the total flight cost",
              component_type: "flight",
              base_price: "87"
            },
            {
              name: "Luggage Loss Compensation",
              description:
                "Get compensated instantly if your luggage gets lost",
              compensation_ceiling: "1000",
              component_type: "flight",
              base_price: "10"
            },
            {
              name: "Flight Delay Compensation",
              description:
                "If your flight is delayed for more than 2 hours, we'll compensate you",
              compensation_ceiling: "100 per delay hour; up to 600 total",
              component_type: "flight",
              base_price: "17"
            },
            {
              name: "Missed Connection Assurance",
              description:
                "Get compensated for food, hotel and rebooking expenses should you miss your connecting flight",
              compensation_ceiling: "400",
              component_type: "flight",
              base_price: "38"
            }
          ]
        },
        {
          end_date: "Mar 16, 2018, 3:24 AM",
          location: { arrival: "Tel Aviv", departure: "Addis Ababa" },
          provider: "Ethiopian",
          start_date: "Mar 15, 2018, 11:50 PM",
          type: "flight",
          localSum : 0,
          policies: [
            {
              name: "Free Cancellation Guarantee",
              description:
                "Cancel your flight for any reason, up to 24 hours before the flight",
              compensation_ceiling: "80% of the total flight cost",
              component_type: "flight",
              base_price: "87"
            },
            {
              name: "Luggage Loss Compensation",
              description:
                "Get compensated instantly if your luggage gets lost",
              compensation_ceiling: "1000",
              component_type: "flight",
              base_price: "10"
            },
            {
              name: "Flight Delay Compensation",
              description:
                "If your flight is delayed for more than 2 hours, we'll compensate you",
              compensation_ceiling: "100 per delay hour; up to 600 total",
              component_type: "flight",
              base_price: "17"
            },
            {
              name: "Missed Connection Assurance",
              description:
                "Get compensated for food, hotel and rebooking expenses should you miss your connecting flight",
              compensation_ceiling: "400",
              component_type: "flight",
              base_price: "38"
            }
          ]
        },
        {
          end_date: "Mar 16, 2018, 3:24 AM",
          location: { arrival: "Tel Aviv", departure: "Addis Ababa" },
          provider: "Ethiopian",
          start_date: "Mar 15, 2018, 11:50 PM",
          type: "flight",
          localSum : 0,
          policies: [
            {
              name: "Free Cancellation Guarantee",
              description:
                "Cancel your flight for any reason, up to 24 hours before the flight",
              compensation_ceiling: "80% of the total flight cost",
              component_type: "flight",
              base_price: "87"
            },
            {
              name: "Luggage Loss Compensation",
              description:
                "Get compensated instantly if your luggage gets lost",
              compensation_ceiling: "1000",
              component_type: "flight",
              base_price: "10"
            },
            {
              name: "Flight Delay Compensation",
              description:
                "If your flight is delayed for more than 2 hours, we'll compensate you",
              compensation_ceiling: "100 per delay hour; up to 600 total",
              component_type: "flight",
              base_price: "17"
            },
            {
              name: "Missed Connection Assurance",
              description:
                "Get compensated for food, hotel and rebooking expenses should you miss your connecting flight",
              compensation_ceiling: "400",
              component_type: "flight",
              base_price: "38"
            }
          ]
        }
      ],
      email: "bronfer@gmail.com",
      end_date: "Mar 16",
      start_date: "Feb 28",
      status: "complete",
      title: "Addis Ababa & South Africa"
    };

    //return this.currentTrip;

     return demo;
  }
}
