import PatscherkofelResort from "@/assets/resort-maps/patscherkofel-resort.jpg";
import PatscherkofelDirections from "@/assets/bus-route-directions/patscherkofel-bus-route-directions.png";
import PatscherkofelRouteMap from "@/assets/bus-route-maps/patscherkofel-bus-route-map.png"

import AlpbachtalResort from "@/assets/resort-maps/alpbachtal-resort.jpg";
import AlpbachtalDirections from "@/assets/bus-route-directions/alpbachtal-bus-route-directions.png";
import AlpbachtalRouteMap from "@/assets/bus-route-maps/alpbachtal-bus-route-map.png"

export default {
	Patscherkofel: {
		name: "Patscherkofel",
		description:
			"Patscherkofel is one of two closest resorts to Innsbruck. It is located to the south of the town. You can take bus directly from the Tivoli Stadion to within a minute walk of the Gondola.",
		directions: PatscherkofelDirections,
		explaination: "Getting to Patscherkofel is very easy. If you get on the J bus route, it will take you directly to the Snow Resort. The bus will drop you off below the main building. This building will have tickets, rentals, and ski school information. To the left of the building is the Gondola which will take you to the top of the mountain.",
		routemap: PatscherkofelRouteMap,
		resortmap: PatscherkofelResort,
		price: "49 Euro",
		openinghours: "Patscherkofelbahn Daily from 8:30 a.m. to 4:00 p.m.",
		nightski:
			"Evening skiing every Tuesday and Thursday until 6:30 p.m. on the Heiligwasser piste.",
		website: "https://www.patscherkofelbahn.at"
	},
	Alpbachtal: {
		name: "Alpbachtal",
		description: "Alpbachtal offers picturesque views and challenging slopes.",
		directions: AlpbachtalDirections,
		explaination: "Starting at Innsbruck Tivoli Stadion bus stop, you will be waiting for the 560 bus. Get on this and take it to the Innsbruck Hauptbahnhof which is the main bus/train station. From here you will board the REX 2 Train. Use the OBB Tickets app to purchase the train ticket ahead of hand. At the time of my ride it was 13 Euro. The REX 2 train will take you to Brixlegg Bahnhof. At the Brixlegg Bahnhof, you will ride the 620 bus to Alpbach Wiedersbergerhornbahn. From you will walk to the gondola.",
		routemap: AlpbachtalRouteMap,
		resortmap: AlpbachtalResort,
		price: "66 Euro",
		openinghours: "Ski Juwel is open daily from 8:30 a.m. to 4:00 p.m. A few lifts will run to 4:00 p.m.",
		nightski: "The Reither Kogel lift offers night skiing from 18:30 to 21:15 on Thursday and Fridays. This is from Dec 26th, 2024 to Feb 28th, 2025.",
		website: "https://www.skijuwel.com/en"
	},
	NameNeeded: {
		name: "Need Resort Name",
		description: "Need Description of Resort",
		directions: "Need Directions Photo",
		explaination: "Need Directions Explaination",
		routemap: "Need Route Map",
		resortmap: "Need Resort Map",
		price: "Need Price Info",
		openinghours: "Need Opening Hours",
		nightski: "Need Night Ski",
		website: "Need to Add Website"
	}
};
