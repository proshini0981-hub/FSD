import { Ticket } from './TicketLogic.js';
import { Passenger } from './passenger.js';

const traveler: Passenger = {
    name: "Suresh Kumar",
    age: 45,
    berthPreference: "Lower"
};

const myTicket = new Ticket(traveler, 1200, 12626);

myTicket.printTicket();