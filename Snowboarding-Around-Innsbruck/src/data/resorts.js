import PatscherkofelMap from "@/assets/resort-maps/patscherkofel-resort.jpg";
import AlpbachtalMap from "@/assets/resort-maps/alpbachtal-resort.jpg";

export default {
	Patscherkofel: {
		name: "Patscherkofel",
		description:
			"Patscherkofel is one of two closest resorts to Innsbruck. It is located to the south of the town. You can take bus directly from the Tivoli Stadion to within a minute walk of the Gondola.",
		map: PatscherkofelMap,
		price: "49 Euro",
		openinghours: "Patscherkofelbahn Daily from 8:30 a.m. to 4:00 p.m.",
		nightski:
			"Evening skiing every Tuesday and Thursday until 6:30 p.m. on the Heiligwasser piste.",
	},
	Alpbachtal: {
		name: "Alpbachtal",
		description: "Alpbachtal offers picturesque views and challenging slopes.",
		map: AlpbachtalMap,
	},
};
