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

  addPoliciesToTrip() {
    this.currentTrip.components.forEach(element => {
      var relevantPolicies = this.Policies.filter((p) => p["component_type"].toLowerCase() == element.type.toLowerCase());
      element.policies = relevantPolicies;
    });
    return this.currentTrip;
  }

  getData() {
    return this.currentTrip;
  }
}
